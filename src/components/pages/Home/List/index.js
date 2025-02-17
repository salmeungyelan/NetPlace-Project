import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import LINK from 'constants/link';

import * as S from './index.styles';

import Iphone from './Iphone';
import Card from 'components/@common/Card';
import NoPost from 'components/@common/NoPost';

function List({ reviewData }) {
	const {
		lastestReviewOne: iphoneReview,
		notCompletedReviewList: currentReview,
		completedReviewList: completedReview,
	} = reviewData;

	// 진행 중인 리뷰 현재 인덱스 상태 추가
	const [currentIndex, setCurrentIndex] = useState(0);

	// 완료된 리뷰 현재 인덱스 상태 추가
	const [completedIndex, setCompletedIndex] = useState(0);

	// 현재 데이터 있고 태블릿 사이즈일 때 itemsPerPage 2
	// 현재 데이터 있고 데스크탑 사이즈일 때 itemsPerPage 4
	const calcItemsPerPage = () => {
		if (iphoneReview && window.innerWidth >= 1200) return 4;
		else return 2;
	};

	// 한 번에 보여줄 아이템 수
	const [itemsPerPage, setItemsPerPage] = useState(calcItemsPerPage);

	// 화면 사이즈 변경에 따른 보여질 갯수 변경
	useEffect(() => {
		const handleResize = () => {
			setItemsPerPage(calcItemsPerPage);
		};

		handleResize();
		window.addEventListener('resize', handleResize);
	}, [iphoneReview, itemsPerPage]);

	// 슬라이더 버튼 클릭 시
	const handleSlider = (type, button) => {
		const left = button === 'left'; // 왼쪽 버튼이냐 오른쪽 버튼이냐
		const current = type === 'current'; // 현재 진행 중인 리뷰냐 완료된 리뷰냐

		const calculateNewIndex = (prevIndex, dataLength) => {
			const newIndex = prevIndex + (left ? -1 : 1);
			return newIndex >= Math.ceil(dataLength / itemsPerPage) ? 0 : newIndex;
		};

		if (current) {
			setCurrentIndex(prevIndex =>
				calculateNewIndex(prevIndex, currentReview.length),
			);
		} else {
			setCompletedIndex(prevIndex =>
				calculateNewIndex(prevIndex, completedReview.length),
			);
		}
	};

	// 슬라이더 버튼 클릭 시 보여질 아이템 갯수 계산
	const getCurrentItems = (data, index) => {
		const start = index * itemsPerPage;
		const end = start + itemsPerPage;

		// 데이터 개수가 2개 이하일 때 또는 데스크탑 사이즈에서 데이터가 4개 이하일 때
		if (data.length <= 2 || (itemsPerPage === 4 && data.length <= 4)) {
			return data;
		}

		// 데스크탑 사이즈에서 데이터가 5개 이상 8개 이하일 때
		if (itemsPerPage === 4 && data.length >= 5 && data.length <= 8) {
			const itemsToShow = data.slice(0, 4);
			const additionalItems = data.slice(data.length - 4, data.length);

			if (additionalItems.length) {
				if (index === 0) {
					return itemsToShow;
				} else if (index === 1) {
					return additionalItems.slice(0, 4);
				}
			}
		}

		// 데이터가 홀수일 때
		if (
			data.length % 2 !== 0 &&
			data.length <= 8 &&
			index === Math.ceil(data.length / itemsPerPage) - 1
		) {
			const itemsToAdd = itemsPerPage - (data.length - start);
			if (data.length > itemsPerPage) {
				// 시작 인덱스가 0보다 크면, start-1을 포함하여 추출
				if (start > 0) {
					return [...data.slice(start - 1, start), ...data.slice(start, end)];
				}
				// 시작 인덱스가 0일 때는 start-1을 포함하지 않고 추출
				return [...data.slice(start, end)];
			}
			return [...data.slice(0, itemsToAdd), ...data.slice(start)];
		}

		// 기본 반환
		return data.slice(start, end);
	};

	return (
		<S.Body $data={iphoneReview}>
			{iphoneReview ? <Iphone data={iphoneReview} /> : <></>}

			<S.ReviewIng>
				<S.Title>
					<Link
						to={
							LINK.REVIEW +
							'?status=REVIEW_STATUS_01,REVIEW_STATUS_02,REVIEW_STATUS_03'
						}
					>
						<span>현재 진행 중인 리뷰 보러 가기</span>
						<img src="/assets/icons/pagination-right.svg" />
					</Link>
				</S.Title>

				{currentReview?.length ? (
					<>
						<S.CardList $current={currentReview.length}>
							{getCurrentItems(currentReview, currentIndex).map((data, idx) => (
								<Card key={idx} data={data} />
							))}
						</S.CardList>

						{currentReview.length > 2 && currentIndex !== 0 && (
							<S.LeftArrowImg onClick={() => handleSlider('current', 'left')} />
						)}

						{((currentReview.length > 2 && itemsPerPage === 2) ||
							(currentReview.length > 3 && itemsPerPage === 4)) && (
							<S.RightArrowImg
								onClick={() => handleSlider('current', 'right')}
							/>
						)}
					</>
				) : (
					<S.NoPost>
						<NoPost review>등록된 게시글이 없습니다.</NoPost>
					</S.NoPost>
				)}
			</S.ReviewIng>

			<S.ReviewFin>
				<S.Title>
					<Link to={LINK.REVIEW + '?status=REVIEW_STATUS_04'}>
						<span>완료된 리뷰 보러 가기</span>
						<img src="/assets/icons/pagination-right.svg" />
					</Link>
				</S.Title>

				{completedReview?.length ? (
					<>
						<S.CardList $completed={completedReview.length}>
							{getCurrentItems(completedReview, completedIndex).map(
								(data, idx) => (
									<Card key={idx} data={data} />
								),
							)}
						</S.CardList>

						{completedReview.length > 2 && completedIndex !== 0 && (
							<S.LeftArrowImg
								$completedReview={completedReview.length}
								onClick={() => handleSlider('completed', 'left')}
							/>
						)}

						{((completedReview.length > 2 && itemsPerPage === 2) ||
							(completedReview.length > 3 && itemsPerPage === 4)) && (
							<S.RightArrowImg
								onClick={() => handleSlider('completed', 'right')}
							/>
						)}
					</>
				) : (
					<S.NoPost>
						<NoPost review>등록된 게시글이 없습니다.</NoPost>
					</S.NoPost>
				)}
			</S.ReviewFin>
		</S.Body>
	);
}

export default List;
