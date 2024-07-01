import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import LINK from 'constants/link';

import * as S from './index.styles';

import Logo from 'components/@common/Logo';
import Button from 'components/@common/Button';

function MobileHeader(props) {
	const { logout, applyBtn, onClick } = props;

	// 모바일 NAV
	const [navClicked, setNavClicked] = useState(
		'/' + (window.location.pathname.split('/')[1] ?? ''),
	);

	// 모바일 NAV 더보기
	const [moreBtn, setMoreBtn] = useState(false);

	// 모바일 Side Bar Open
	const [sideBar, setSideBar] = useState(false);

	// 모바일 Side Bar 고객센터
	const [help, setHelp] = useState(false);

	// 모바일 NAV
	const handleClickNav = link => {
		setNavClicked(link);
		setMoreBtn(false);
	};

	// 모바일 NAV 더보기 버튼
	const handleClickMore = () => {
		setMoreBtn(prev => !prev);
	};

	// 사이드 바 오픈
	const handleOpenSideBar = () => {
		setSideBar(prev => !prev);

		if (![LINK.NOTICE, LINK.GUIDE].includes(navClicked)) {
			setHelp(false);
		}
	};

	// 사이드 바 고객센터 오픈
	const handleOpenHelpMenu = () => {
		setHelp(prev => !prev);
	};

	useEffect(() => {
		setSideBar(false);
		setMoreBtn(false);
	}, [navClicked]);

	const userHelp = [LINK.NOTICE, LINK.GUIDE].includes(navClicked) || help;
	const navMore =
		[LINK.TEAM, LINK.VIEW, LINK.DEVELOP, LINK.MY].includes(navClicked) ||
		moreBtn;

	return (
		<S.Header>
			<S.TopBox>
				<S.ImgBox>
					<Link to={LINK.HOME}>
						<Logo size={'header'} white />
					</Link>
				</S.ImgBox>

				<S.WelcomeText>
					<p>
						<strong>황올컴퍼니</strong> 님 환영합니다!
					</p>
				</S.WelcomeText>

				<S.Side onClick={handleOpenSideBar}>
					<img src={`/assets/icons/${sideBar ? 'white-x' : 'hamburger'}.svg`} />
				</S.Side>
			</S.TopBox>

			<S.BottomNav>
				<S.BottomNavList>
					<S.BottomNavContent>
						<S.NavLabel>
							<input type="radio" checked={LINK.REVIEW === navClicked} />
							<Link
								to={LINK.REVIEW}
								onClick={() => handleClickNav(LINK.REVIEW)}
							>
								<S.Svg
									id="Layer-1"
									data-name="Layer 1"
									xmlns="http://www.w3.org/2000/svg"
									version="1.1"
									viewBox="0 0 25.12 25.12"
								>
									<g id="-그룹-1070" data-name="그룹 1070">
										<g id="-패스-72" data-name="패스 72">
											<path
												className="cls-1"
												d="M12.56,25.12C5.64,25.12,0,19.49,0,12.56S5.64,0,12.56,0c6.93,0,12.56,5.64,12.56,12.56s-5.64,12.56-12.56,12.56ZM12.56,1C6.19,1,1,6.19,1,12.56s5.19,11.56,11.56,11.56,11.56-5.19,11.56-11.56S18.94,1,12.56,1Z"
											/>
										</g>
										<g id="-패스-73" data-name="패스 73">
											<path
												className="cls-1"
												d="M15.39,17.25l-4.17-4.47h1.43c1.58,0,2.87-1.28,2.87-2.87s-1.28-2.87-2.87-2.87h-2.55c-.27,0-.48.22-.49.49v10.05c0,.27.22.49.49.49.27,0,.49-.21.49-.48,0,0,0,0,0-.01v-4.05l4.09,4.38c.09.1.22.16.36.16.27,0,.49-.21.49-.48,0-.13-.05-.25-.14-.35M10.58,8.02h2.06c1.04,0,1.89.85,1.89,1.89s-.85,1.89-1.89,1.89h-2.06v-3.78Z"
											/>
										</g>
									</g>
								</S.Svg>
								리뷰
							</Link>
						</S.NavLabel>
					</S.BottomNavContent>

					<S.BottomNavContent>
						<S.NavLabel>
							<input type="radio" checked={LINK.NOTICE === navClicked} />
							<Link
								to={LINK.NOTICE}
								onClick={() => handleClickNav(LINK.NOTICE)}
							>
								<S.Svg
									id="Layer-1"
									data-name="Layer 1"
									xmlns="http://www.w3.org/2000/svg"
									version="1.1"
									viewBox="0 0 25.12 25.12"
								>
									<path
										className="cls-1"
										d="M23.16,20.16l-1.66-2.77v-5.89c-.01-3.7-2.3-7-5.72-8.33-.02-.83-.35-1.6-.94-2.19C14.23.36,13.42.02,12.56.02h0c-1.74,0-3.17,1.4-3.21,3.13-3.43,1.33-5.71,4.64-5.73,8.34v5.89l-1.67,2.77c-.11.17-.16.37-.16.58,0,.61.5,1.11,1.11,1.11h5.99c.22,1.83,1.77,3.26,3.66,3.26s3.44-1.43,3.66-3.26h5.93s.04,0,.05,0c.2,0,.4-.05.57-.16.53-.32.7-1,.38-1.52ZM12.56,24.1c-1.33,0-2.43-.96-2.66-2.26h5.33c-.21,1.28-1.33,2.26-2.67,2.26ZM22.22,20.84H2.91c-.06,0-.11-.05-.1-.17l1.74-2.89c.05-.08.07-.17.07-.26v-6.03c.01-3.4,2.18-6.42,5.39-7.52.2-.07.34-.26.34-.47v-.26c0-1.22.99-2.22,2.22-2.22h0c.59,0,1.15.23,1.57.65s.65.98.65,1.57v.27c0,.21.14.4.34.47,3.21,1.1,5.37,4.13,5.38,7.51v6.03c0,.09.02.18.07.26l1.74,2.89s0,.12-.09.17Z"
									/>
								</S.Svg>
								공지사항
							</Link>
						</S.NavLabel>
					</S.BottomNavContent>

					<S.BottomNavContent>
						<S.NavLabel>
							<input type="radio" checked={LINK.HOME === navClicked} />
							<Link to={LINK.HOME} onClick={() => handleClickNav(LINK.HOME)}>
								<S.Svg
									id="Layer-1"
									data-name="Layer 1"
									xmlns="http://www.w3.org/2000/svg"
									version="1.1"
									viewBox="0 0 25.12 25.12"
								>
									<g id="-그룹-1074" data-name="그룹 1074">
										<g id="-패스-76" data-name="패스 76">
											<path
												className="cls-1"
												d="M21.66,25.12h-4.25c-.76,0-1.38-.62-1.38-1.38v-7.3c0-.2-.16-.36-.36-.36h-6.17c-.2,0-.36.16-.36.36v7.29c0,.76-.62,1.38-1.38,1.38H3.52c-.76,0-1.39-.62-1.39-1.39v-10.06h-.37c-.27-.02-.5-.1-.69-.28-.19-.18-.3-.43-.31-.7s.09-.52.28-.71L11.82.33c.48-.44,1.13-.42,1.52,0l10.74,11.61c.18.19.28.44.28.7,0,.27-.11.53-.3.73s-.46.3-.73.3h-.29v10.08c0,.76-.62,1.38-1.38,1.38ZM9.5,15.08h6.17c.75,0,1.36.61,1.36,1.36v7.3c0,.21.17.38.38.38h4.25c.21,0,.38-.17.38-.38v-11.08h1.29,0s.02-.06.02-.06L12.61,1.01,1.76,12.66h1.37v11.07c0,.21.17.39.39.39h4.24c.21,0,.38-.17.38-.38v-7.29c0-.75.61-1.36,1.36-1.36Z"
											/>
										</g>
									</g>
								</S.Svg>
								HOME
							</Link>
						</S.NavLabel>
					</S.BottomNavContent>

					<S.BottomNavContent>
						<S.NavLabel>
							<input type="radio" checked={LINK.GUIDE === navClicked} />
							<Link to={LINK.GUIDE} onClick={() => handleClickNav(LINK.GUIDE)}>
								<S.Svg
									id="Layer-1"
									data-name="Layer 1"
									xmlns="http://www.w3.org/2000/svg"
									version="1.1"
									viewBox="0 0 25.12 25.12"
								>
									<g id="-그룹-1075" data-name="그룹 1075">
										<g id="-패스-77" data-name="패스 77">
											<path
												className="cls-1"
												d="M12.56,25.12C5.64,25.12,0,19.49,0,12.56S5.64,0,12.56,0c6.93,0,12.56,5.64,12.56,12.56s-5.64,12.56-12.56,12.56ZM12.56,1C6.19,1,1,6.19,1,12.56s5.19,11.56,11.56,11.56,11.56-5.19,11.56-11.56S18.94,1,12.56,1Z"
											/>
										</g>
										<g id="-패스-78" data-name="패스 78">
											<path
												className="cls-1"
												d="M12.56,17.92c-.26,0-.47-.21-.47-.47h0v-7.49c0-.26.21-.47.47-.47s.47.21.47.47v7.49c0,.26-.21.47-.47.47h0"
											/>
										</g>
										<g id="-패스-79" data-name="패스 79">
											<path
												className="cls-1"
												d="M12.56,8.17c.27-.04.47-.29.43-.56-.03-.22-.21-.4-.43-.43-.27.04-.47.29-.43.56.03.22.21.4.43.43"
											/>
										</g>
									</g>
								</S.Svg>
								이용안내
							</Link>
						</S.NavLabel>
					</S.BottomNavContent>

					<S.BottomNavContent>
						<S.NavLabel>
							<input type="radio" checked={navMore} onClick={handleClickMore} />
							<S.Svg
								id="Layer-1"
								data-name="Layer 1"
								xmlns="http://www.w3.org/2000/svg"
								version="1.1"
								viewBox="0 0 25.12 25.12"
							>
								<g id="-그룹-1076" data-name="그룹 1076">
									<g id="-타원-91" data-name="타원 91">
										<path
											className="cls-1"
											d="M3.93,15.85c-1.81,0-3.29-1.48-3.29-3.29s1.48-3.29,3.29-3.29,3.29,1.48,3.29,3.29-1.48,3.29-3.29,3.29ZM3.93,10.27c-1.26,0-2.29,1.03-2.29,2.29s1.03,2.29,2.29,2.29,2.29-1.03,2.29-2.29-1.03-2.29-2.29-2.29Z"
										/>
									</g>
									<g id="-타원-92" data-name="타원 92">
										<path
											className="cls-1"
											d="M12.56,15.85c-1.81,0-3.29-1.48-3.29-3.29s1.48-3.29,3.29-3.29,3.29,1.48,3.29,3.29-1.48,3.29-3.29,3.29ZM12.56,10.27c-1.26,0-2.29,1.03-2.29,2.29s1.03,2.29,2.29,2.29,2.29-1.03,2.29-2.29-1.03-2.29-2.29-2.29Z"
										/>
									</g>
									<g id="-타원-93" data-name="타원 93">
										<path
											className="cls-1"
											d="M21.2,15.85c-1.81,0-3.29-1.48-3.29-3.29s1.48-3.29,3.29-3.29,3.29,1.48,3.29,3.29-1.48,3.29-3.29,3.29ZM21.2,10.27c-1.26,0-2.29,1.03-2.29,2.29s1.03,2.29,2.29,2.29,2.29-1.03,2.29-2.29-1.03-2.29-2.29-2.29Z"
										/>
									</g>
								</g>
							</S.Svg>
							더보기
						</S.NavLabel>
					</S.BottomNavContent>
				</S.BottomNavList>
			</S.BottomNav>

			<S.MoreNav $moreBtn={moreBtn}>
				<S.MoreNavList>
					<S.BottomNavContent>
						<S.NavLabel>
							<input type="radio" checked={LINK.TEAM === navClicked} />
							<Link to={LINK.TEAM} onClick={() => setNavClicked(LINK.TEAM)}>
								<S.Svg
									id="Layer_1"
									data-name="Layer 1"
									xmlns="http://www.w3.org/2000/svg"
									version="1.1"
									viewBox="0 0 200 140"
								>
									<path
										id="_패스_80"
										data-name="패스 80"
										className="cls-1"
										d="M82.3487,83.9759c7.9303-6.8756,12.4693-16.8429,12.438-27.3132.0025-20.158-16.4068-36.5013-36.6512-36.5037-20.2444-.0025-36.6577,16.3368-36.6602,36.4948v.009c-.0261,10.4646,4.5027,20.4272,12.4163,27.3132C13.2382,93.3088-.0186,113.8136,0,136.3976c0,1.9895,1.6198,3.6024,3.6178,3.6024h109.0409c1.9981,0,3.6178-1.6128,3.6178-3.6024.0048-22.5903-13.2652-43.0938-33.9279-52.4218M28.7182,56.6626c-.0045-16.1789,13.1636-29.2982,29.4119-29.3027,16.2482-.0045,29.4237,13.1075,29.4282,29.2864.0029,10.2958-5.4225,19.8373-14.2904,25.132-8.147,4.7489-18.0613,5.4105-26.7718,1.7868-1.2219-.5105-2.4066-1.1051-3.5455-1.7796-8.8718-5.2793-14.2835-14.8319-14.2325-25.123M7.3659,132.7952c1.3966-19.9436,14.4923-37.183,33.3852-43.949.5137.2666,1.0636.4683,1.5846.7205.6729.317,1.3386.6412,2.026.915s1.2807.4539,1.9247.67c.9334.317,1.8523.6268,2.8074.8646.1664.0432.3401.0648.5065.1081,5.5841,1.412,11.4341,1.412,17.0182,0,.1737-.036.3545-.0648.5282-.1081.9406-.2378,1.8523-.5476,2.7712-.8574.6657-.2161,1.3241-.4251,1.9753-.6845s1.3096-.5836,1.9681-.8862c.5354-.2594,1.0926-.4611,1.6208-.7205,18.9099,6.7522,32.0248,23.9946,33.4286,43.949l-101.5448-.0216Z"
									/>
									<path
										id="_패스_81"
										data-name="패스 81"
										className="cls-1"
										d="M166.0794,63.817c7.9275-6.8784,12.4679-16.8432,12.4453-27.3132C178.5271,16.3458,162.1178.0025,141.8734,0c-20.2444-.0025-36.6577,16.3368-36.6602,36.4948v.009c-.026,10.4625,4.5031,20.4228,12.4163,27.306-9.1683,4.2024-17.075,10.7168-22.9369,18.8981,1.9787,1.3048,3.8822,2.7192,5.7017,4.2364,5.9471-8.4087,14.3457-14.7946,24.0585-18.2929.5354.281,1.0998.4899,1.6497.7205s1.2879.6124,1.9464.879,1.2879.4539,1.9319.67c.9406.317,1.874.634,2.8364.8718.1302.036.2605.0504.3907.0792,5.6117,1.4267,11.4934,1.4267,17.105,0l.5427-.1081c.9189-.2305,1.8234-.5404,2.7278-.843.6801-.2233,1.3531-.4395,2.0187-.7205s1.3024-.5764,1.9464-.879,1.0998-.4539,1.6353-.7205c18.9213,6.7575,32.0387,24.0172,33.4286,43.985h-73.6804c.9282,2.3539,1.7182,4.7595,2.366,7.2048h75.0841c1.9981,0,3.6178-1.6128,3.6178-3.6024.0116-22.5902-13.2571-43.096-33.9206-52.4218M157.0131,61.6195c-6.9511,4.025-15.2271,5.1245-22.9948,3.0548-2.5705-.6774-5.0347-1.7054-7.3224-3.0548-13.9394-8.3362-18.4528-26.3459-10.0809-40.2258,8.3719-13.8799,26.4588-18.374,40.3981-10.0379,13.9394,8.3362,18.4528,26.3459,10.0809,40.2258-2.4837,4.1178-5.9455,7.5648-10.0809,10.0379"
									/>
								</S.Svg>
								체험단
							</Link>
						</S.NavLabel>
					</S.BottomNavContent>

					<S.BottomNavContent>
						<S.NavLabel>
							<input type="radio" checked={LINK.VIEW === navClicked} />
							<Link to={LINK.VIEW} onClick={() => setNavClicked(LINK.VIEW)}>
								<S.Svg
									id="Layer_1"
									data-name="Layer 1"
									xmlns="http://www.w3.org/2000/svg"
									version="1.1"
									viewBox="0 0 160 160"
								>
									<path
										id="_패스_83"
										data-name="패스 83"
										className="cls-1"
										d="M146.9084,13.0993c-3.8594-3.9472-8.5397-6.9972-13.7092-8.934-6.1528-2.298-12.6506-3.5364-19.2172-3.6626-8.6894-.4094-11.5907-.5027-33.9749-.5027s-25.1131.0862-33.9749.5027c-6.5667.1262-13.0645,1.3646-19.2172,3.6626-5.1698,1.9402-9.8517,4.9897-13.7163,8.934-3.9447,3.8657-6.9962,8.5474-8.9408,13.717-2.2877,6.1556-3.5234,12.6524-3.6553,19.2181-.4093,8.8334-.5027,11.7635-.5027,33.9692s.0934,25.1358.5027,33.9836c.1325,6.5633,1.3682,13.0576,3.6553,19.2109,1.9461,5.1709,4.9974,9.8546,8.9408,13.7241,3.8678,3.9369,8.5491,6.9811,13.7163,8.9196,6.1544,2.2913,12.6514,3.5271,19.2172,3.6555,8.8402.4093,11.7702.5027,33.9749.5027s25.1346-.0934,33.9749-.5027c6.5658-.1283,13.0628-1.3642,19.2172-3.6555,10.3911-4.0326,18.6064-12.2509,22.6355-22.6437,2.2973-6.1508,3.5356-12.6463,3.6625-19.2109.4165-8.8693.5027-11.4906.5027-33.9836s-.0934-25.2866-.5027-33.962c-.1255-6.5694-1.3639-13.0699-3.6625-19.2253-1.9338-5.1732-4.984-9.8566-8.9336-13.717M150.0036,113.5491c-.0733,5.5368-1.0984,11.0197-3.0305,16.209-3.0476,7.9253-9.3102,14.1883-17.2352,17.236-5.1879,1.9272-10.6674,2.9522-16.2011,3.0307-8.8043.395-11.4327.4812-33.544.4812s-24.7469-.0862-33.5368-.4812c-5.536-.0787-11.0178-1.1037-16.2083-3.0307-3.9364-1.4685-7.5013-3.7855-10.4417-6.7867-3.0134-2.9303-5.3323-6.4983-6.7864-10.4421-1.9327-5.1916-2.9578-10.677-3.0305-16.2162-.4022-8.7544-.4811-11.3829-.4811-33.5383s.079-24.7767.4811-33.5383c.0733-5.5368,1.0984-11.0198,3.0305-16.209,1.461-3.9459,3.7844-7.5158,6.8007-10.4493,2.9403-3.0011,6.5052-5.3182,10.4416-6.7867,5.1881-1.9263,10.6675-2.9513,16.2011-3.0307,8.7612-.4022,11.3896-.4812,33.544-.4812s24.7756.079,33.544.4812c5.5337.0785,11.0132,1.1035,16.2011,3.0307,3.9411,1.455,7.5064,3.774,10.4345,6.7867,3.0149,2.9305,5.3361,6.4983,6.7935,10.4421,1.9327,5.1916,2.9578,10.677,3.0305,16.2162.4022,8.7544.4811,11.3829.4811,33.5311s-.079,24.7839-.4811,33.5455"
									/>
									<path
										id="_패스_84"
										data-name="패스 84"
										className="cls-1"
										d="M80.0072,40.2172c-21.9684-.004-39.7806,17.8026-39.7846,39.772-.004,21.9694,17.8018,39.7824,39.7702,39.7863,21.9684.004,39.7806-17.8026,39.7846-39.772v-.0143c-.0238-21.9556-17.8156-39.7482-39.7702-39.772M80.0072,110.2527c-16.7133.004-30.2653-13.5422-30.2693-30.2563-.004-16.7141,13.5416-30.2667,30.2549-30.2707,16.7133-.004,30.2653,13.5422,30.2693,30.2563v.0072c-.0237,16.7014-13.5543,30.2358-30.2549,30.2635"
									/>
									<path
										id="_패스_85"
										data-name="패스 85"
										className="cls-1"
										d="M124.1436,28.6261c-3.9939,0-7.2316,3.2378-7.2316,7.2319s3.2377,7.2319,7.2316,7.2319,7.2316-3.2378,7.2316-7.2319c-.004-3.9924-3.2393-7.228-7.2316-7.2319"
									/>
								</S.Svg>
								뷰탭&인스타
							</Link>
						</S.NavLabel>
					</S.BottomNavContent>

					<S.BottomNavContent>
						<S.NavLabel>
							<input type="radio" checked={LINK.DEVELOP === navClicked} />
							<Link
								to={LINK.DEVELOP}
								onClick={() => setNavClicked(LINK.DEVELOP)}
							>
								<S.Svg
									id="Layer_1"
									data-name="Layer 1"
									xmlns="http://www.w3.org/2000/svg"
									version="1.1"
									viewBox="0 0 160 133"
								>
									<g id="_패스_82" data-name="패스 82">
										<path
											className="cls-1"
											d="M157.016,36.2418H2.984c-1.6494,0-2.984-1.3319-2.984-2.978v-17.0565C.0291,7.2937,7.3085.0291,16.2255,0h127.5547c8.9171.0291,16.1906,7.2937,16.2197,16.1986v17.0652c0,1.646-1.3346,2.978-2.984,2.978ZM5.968,30.2858h148.064v-14.0785c-.0175-5.6302-4.6275-10.2339-10.275-10.2514H16.2372c-5.6416.0174-10.2517,4.6211-10.2692,10.2601v14.0698ZM62.1805,26.5459c-2.2497,0-4.3711-.8754-5.9622-2.4632-1.5969-1.5908-2.477-3.7079-2.477-5.9589-.0117-4.6386,3.7708-8.425,8.4275-8.4337h.0058c2.2613,0,4.3769.8754,5.9738,2.4632,1.5969,1.5908,2.477,3.705,2.477,5.9589,0,4.6502-3.7825,8.4337-8.4392,8.4337h-.0058ZM62.1805,15.646h-.0058c-1.358.0029-2.4653,1.1109-2.4653,2.472,0,.666.2564,1.2854.7227,1.7507.4721.4653,1.0899.7212,1.7484.7212h.0058c1.3638,0,2.4711-1.1051,2.4711-2.4661,0-.666-.2564-1.2883-.7285-1.7565-.4663-.4653-1.084-.7212-1.7484-.7212ZM42.9476,26.5459c-4.6509,0-8.4333-3.7748-8.445-8.4163,0-4.6473,3.7825-8.4308,8.4333-8.4396h.0058c2.2613,0,4.3769.8754,5.9738,2.4632,1.5969,1.5908,2.477,3.705,2.477,5.9589,0,4.6356-3.7766,8.4192-8.4158,8.4337h-.0291ZM42.9476,15.646h-.0058c-1.358.0029-2.4711,1.1138-2.4711,2.4778,0,1.3581,1.1132,2.4661,2.477,2.4661h.0233c1.3463-.0029,2.4536-1.1109,2.4536-2.4661,0-.666-.2564-1.2883-.7285-1.7565-.4663-.4653-1.084-.7212-1.7484-.7212ZM23.7147,26.5459c-2.2555,0-4.3711-.8754-5.968-2.4632-1.5969-1.5908-2.477-3.7079-2.477-5.9589-.0058-2.2451.8684-4.3652,2.4653-5.9589,1.5911-1.5908,3.7125-2.472,5.968-2.4749h.0058c4.6567,0,8.4392,3.7748,8.4508,8.4163,0,4.656-3.7825,8.4396-8.4392,8.4396h-.0058ZM23.7147,15.646h-.0058c-.6586,0-1.2822.2588-1.7484.727-.4663.4653-.7227,1.0848-.7227,1.7449,0,.666.2564,1.2854.7227,1.7507.4721.4653,1.0899.7212,1.7543.7212h.0058c1.3638,0,2.4711-1.1051,2.4711-2.4661,0-1.3639-1.1132-2.4778-2.477-2.4778Z"
										/>
									</g>
									<g id="_사각형_489" data-name="사각형 489">
										<path
											className="cls-1"
											d="M157.016,133H2.984c-1.6494,0-2.984-1.3319-2.984-2.978V44.9314c0-1.646,1.3346-2.978,2.984-2.978h154.032c1.6494,0,2.984,1.3319,2.984,2.978v85.0906c0,1.646-1.3346,2.978-2.984,2.978ZM5.968,127.044h148.064V47.9094H5.968v79.1346Z"
										/>
									</g>
								</S.Svg>
								홈페이지 제작
							</Link>
						</S.NavLabel>
					</S.BottomNavContent>

					<S.BottomNavContent>
						<S.NavLabel>
							<input type="radio" checked={LINK.MY === navClicked} />
							<Link to={LINK.MY} onClick={() => setNavClicked(LINK.MY)}>
								<S.Svg
									id="Layer_1"
									data-name="Layer 1"
									xmlns="http://www.w3.org/2000/svg"
									version="1.1"
									viewBox="0 0 120 120"
								>
									<g id="_패스_86" data-name="패스 86">
										<path
											className="cls-1"
											d="M60.0023,120C26.9167,120,0,93.0843,0,60.0047c-.0047-16.025,6.2388-31.0949,17.5702-42.4282S43.9651,0,59.993,0c33.0856,0,60.0023,26.9157,60.007,59.9953h0c0,16.0273-6.2388,31.0902-17.5702,42.4258-11.3314,11.3356-26.3995,17.5742-42.4275,17.5788ZM60.0023,4.7709c-14.756,0-28.6267,5.747-39.0588,16.1788C10.5114,31.3814,4.7711,45.2516,4.7711,60.0047c0,30.4519,24.7781,55.2244,55.2312,55.2244,14.7513,0,28.622-5.7493,39.0542-16.1811,10.4321-10.4317,16.1724-24.3019,16.1724-39.0526h0c0-30.4519-24.7734-55.2244-55.2266-55.2244Z"
										/>
									</g>
									<path
										id="_패스_87"
										data-name="패스 87"
										className="cls-1"
										d="M59.2554,39.9417c-.9708-.2131-1.956.2935-2.3474,1.207l-13.7981,31.6265-13.7981-31.6217c-.3881-.9142-1.3729-1.4216-2.3426-1.207-.97.2013-1.6654,1.056-1.6651,2.0467v36.0205c0,1.1554.9367,2.092,2.0921,2.092s2.0921-.9366,2.0921-2.092v-25.9968l11.7083,26.8317c0,.0334.0525.0525.0716.0859.1435.2812.351.5247.6059.7109.0811.0572.1479.1145.229.1622s.105.0906.1718.1193c.2634.115.5475.1751.8349.1765h0c.2858-.002.5683-.062.8302-.1765.0614-.0375.1204-.079.1765-.124.0772-.0447.1507-.0958.2195-.1527.2592-.1882.4701-.435.6155-.7204,0-.0334.0525-.0477.0716-.0811l11.7035-26.8317v25.992c0,1.1554.9367,2.092,2.0921,2.092s2.0921-.9366,2.0921-2.092v-36.0205c.0003-.9907-.6951-1.8454-1.6651-2.0467"
									/>
									<path
										id="_패스_88"
										data-name="패스 88"
										className="cls-1"
										d="M93.784,40.2567c-.9559-.6436-2.2521-.3941-2.9008.5582l-10.4631,15.453-10.463-15.4483c-.6469-.9565-1.9467-1.2075-2.9032-.5606-.9565.6469-1.2075,1.9466-.5606,2.9031h0l11.8324,17.4807v17.3662c0,1.1554.9367,2.0921,2.0921,2.0921s2.0921-.9366,2.0921-2.0921v-17.3662l11.8324-17.4807c.6464-.9553.3965-2.2536-.5582-2.9007"
									/>
								</S.Svg>
								마이페이지
							</Link>
						</S.NavLabel>
					</S.BottomNavContent>
				</S.MoreNavList>
			</S.MoreNav>

			{applyBtn && (
				<S.ApplyBtnBox $moreBtn={moreBtn}>
					<Button size="height" variant="default" onClick={onClick}>
						{applyBtn.title} 신청하기
					</Button>
				</S.ApplyBtnBox>
			)}

			<S.SideBarBackground $sideBar={sideBar}>
				<S.SideBar>
					<div>
						<Link to={LINK.REVIEW} onClick={() => handleClickNav(LINK.REVIEW)}>
							<S.SideMenu $navClicked={navClicked === LINK.REVIEW}>
								리뷰
							</S.SideMenu>
						</Link>

						<Link to={LINK.TEAM} onClick={() => handleClickNav(LINK.TEAM)}>
							<S.SideMenu $navClicked={navClicked === LINK.TEAM}>
								체험단
							</S.SideMenu>
						</Link>

						<Link to={LINK.VIEW} onClick={() => handleClickNav(LINK.VIEW)}>
							<S.SideMenu $navClicked={navClicked === LINK.VIEW}>
								뷰탭&인스타
							</S.SideMenu>
						</Link>

						<Link
							to={LINK.DEVELOP}
							onClick={() => handleClickNav(LINK.DEVELOP)}
						>
							<S.SideMenu $navClicked={navClicked === LINK.DEVELOP}>
								홈페이지 제작
							</S.SideMenu>
						</Link>

						<S.Help onClick={handleOpenHelpMenu} $help={userHelp}>
							고객센터
							<button />
						</S.Help>

						<Link to={LINK.MY} onClick={() => handleClickNav(LINK.MY)}>
							<S.MyPage>마이페이지</S.MyPage>
						</Link>

						<S.Logout onClick={logout}>로그아웃</S.Logout>
					</div>

					<S.HelpMenu $help={help}>
						<Link to={LINK.NOTICE} onClick={() => handleClickNav(LINK.NOTICE)}>
							<S.SideMenu $navClicked={navClicked === LINK.NOTICE}>
								공지사항
							</S.SideMenu>
						</Link>

						<Link to={LINK.GUIDE} onClick={() => handleClickNav(LINK.GUIDE)}>
							<S.SideMenu $navClicked={navClicked === LINK.GUIDE}>
								이용안내
							</S.SideMenu>
						</Link>
					</S.HelpMenu>
				</S.SideBar>
			</S.SideBarBackground>
		</S.Header>
	);
}

export default MobileHeader;
