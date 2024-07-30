import { useEffect, useMemo, useState } from 'react';
import { useRecoilState } from 'recoil';

import LINK from 'constants/link';
import usePathname from 'hooks/usePathname';
import useFilter from 'hooks/useFilter';
import useModal from 'hooks/useModal';
import usePagination from 'hooks/usePagination';
import useApi from 'hooks/useApi';
import { otherTabsState } from 'recoil/atom/otherTabs.atom';
import decodeJWT from 'utils/token';

import * as S from './index.styles';

import Title from 'components/@common/Title';
import OtherList from 'components/pages/OtherTabs/OtherList';
import ApplicationModal from 'components/pages/OtherTabs/ApplicationModal';
import Button from 'components/@common/Button';
import Pagination from 'components/@common/Pagination';

const url = [
	{
		link: LINK.TEAM,
		koTitle: '체험단',
		enTitle: 'REVIEW TEAM',
		children: '체험단을 신청할 수 있습니다.',
	},
	{
		link: LINK.VIEW,
		koTitle: '뷰탭&인스타',
		enTitle: 'VIEWTAB & INSTA',
		children: '뷰탭&인스타를 신청할 수 있습니다.',
	},
	{
		link: LINK.DEVELOP,
		koTitle: '홈페이지 제작',
		enTitle: 'WEBSITE CREATION',
		children: '홈페이지 제작을 신청할 수 있습니다.',
	},
];

function OtherTabs() {
	const { path, pathname } = usePathname();
	const mainTitle = useMemo(() => {
		return url.filter(el => pathname === el.link)[0];
	}, [pathname]);

	const { sort, handelSelectFilter } = useFilter();
	const { modalState, openModal, closeModal } = useModal();

	const [otherList, setOtherList] = useState([]);
	const [checkHistory, setCheckHistory] = useState(false);

	const [selectedStatus, setSelectedStatus] = useState([
		{
			codeLabel: '전체',
			sortBy: '',
		},
	]);

	const itemsPerPage = 8;
	const { currentPage, setCurrentPage, total, setTotal } = usePagination();

	const paths = useMemo(() => {
		const basePath = `/client/${path}s?page=${currentPage}&size=${itemsPerPage}&sortBy=${sort}`;
		const status =
			selectedStatus[0].sortBy &&
			selectedStatus.map(stat => `&status=${stat.sortBy}`).join('');

		return { basePath, status };
	}, [path, currentPage, sort, selectedStatus]);

	const { basePath, status } = paths;

	const { result, trigger } = useApi({
		path: basePath,
		shouldFetch: true,
	});

	const decodedPayload = decodeJWT('accessToken');
	const { sub } = decodedPayload;

	const [applyData, setApplyData] = useRecoilState(otherTabsState);

	const { result: userResult } = useApi({
		path: `/users/${sub}`,
		shouldFetch: true,
	});

	// visitExperiences, viewtabInstagrams, websiteOutsourcings
	const camelCaseData = useMemo(() => {
		return (
			path
				.split('-')
				.map((word, index) =>
					index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1),
				)
				.join('') + 's'
		);
	}, [path]);

	useEffect(() => {
		if (userResult.data) {
			setApplyData(userResult.data);
		}

		if (result.data) {
			const resultData = result.data[camelCaseData];
			setOtherList(resultData);
			setTotal(result.data.total);
		}
	}, [result.data, userResult.data]);

	useEffect(() => {
		setCheckHistory(false);
		setSelectedStatus([
			{
				codeLabel: '전체',
				sortBy: '',
			},
		]);
		trigger({ applyResult: true });
	}, [path]);

	useEffect(() => {
		trigger({ path: basePath + status, applyResult: true });
	}, [selectedStatus, sort, currentPage]);

	useEffect(() => {
		setCurrentPage(1);
	}, [selectedStatus]);

	// 제안서 & 리스트
	const handleSuggestBtn = () => {
		setCheckHistory(prev => !prev);
	};

	// 신청 모달 띄우기
	const handleOpenModal = () => {
		openModal();
	};

	// 페이지 변경
	const handlePageChange = async pageNumber => {
		setCurrentPage(pageNumber);
		await trigger({ applyResult: true });
	};

	return (
		<>
			{modalState && (
				<ApplicationModal
					onClose={closeModal}
					title={mainTitle.koTitle}
					listTrigger={trigger}
				/>
			)}

			<S.Body>
				<Title title={mainTitle.enTitle}>{mainTitle.children}</Title>

				{/* 첫 렌더링 시 */}
				{!checkHistory && (
					<S.Content>
						<span>제안서</span>
					</S.Content>
				)}

				{checkHistory && (
					<OtherList
						title={mainTitle.koTitle}
						sort={sort}
						otherList={otherList}
						selectedStatus={selectedStatus}
						setSelectedStatus={setSelectedStatus}
						onSelect={handelSelectFilter}
						listTrigger={trigger}
					/>
				)}

				{/* 페이지네이션 */}
				{checkHistory &&
					(otherList?.length ? (
						<Pagination
							totalItems={total}
							itemsPerPage={itemsPerPage}
							currentPage={currentPage}
							onPageChange={handlePageChange}
						/>
					) : (
						<></>
					))}
			</S.Body>

			<S.ApplyBtnBox>
				<div>
					<Button size="height" variant="white" onClick={handleSuggestBtn}>
						{checkHistory ? '제안서 보기' : '이용 내역 확인'}
					</Button>
					<Button size="height" variant="default" onClick={handleOpenModal}>
						{mainTitle.koTitle} 신청하기
					</Button>
				</div>
			</S.ApplyBtnBox>
		</>
	);
}

export default OtherTabs;
