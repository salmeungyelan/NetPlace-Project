import styled from 'styled-components';
import {
	flexCenter,
	flexColumn,
	flexColumnCenter,
	flexSpaceBetweenCenter,
} from 'styles/common';

export const Iphone = styled.div`
	grid-area: iphone;
	width: 294px;
	height: 235px;
	border: 3px solid ${({ theme }) => theme.PALETTE.gray[300]};
	border-radius: 34px;
	${flexColumn}
	gap: 10px;
	overflow: hidden;

	@media screen and (min-width: 376px) {
		width: 203px;
		height: 418px;
		gap: 15px;
	}

	@media screen and (min-width: 769px) {
		width: 262px;
		height: 510px;
		gap: 20px;
	}
`;

export const ImgBox = styled.div`
	${flexColumnCenter}
	min-height: 160px;
	position: relative;

	> img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	@media screen and (min-width: 376px) {
		min-height: 320px;
	}

	@media screen and (min-width: 769px) {
		min-height: 400px;
	}
`;

export const Circle = styled.div`
	background-color: ${({ theme }) => theme.PALETTE.white[100]};
	border-radius: 11px;
	width: 56px;
	height: 16px;
	position: absolute;
	top: 8%;

	@media screen and (min-width: 376px) {
		top: 3%;
	}

	@media screen and (min-width: 769px) {
		width: 72px;
		height: 20px;
		top: 3%;
	}
`;

export const MainBox = styled.div`
	padding: 0 16px;
	${flexColumn}
	gap: 10px;
	height: 120px;
`;

export const Title = styled.div`
	${flexSpaceBetweenCenter}
	color: ${({ theme }) => theme.PALETTE.gray[300]};
	font-size: ${({ theme }) => theme.FONT_SIZE.sm};
	font-weight: 600;

	@media screen and (min-width: 376px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.re};
	}

	@media screen and (min-width: 769px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.mb};
	}
`;

export const Writer = styled(Title)`
	font-size: ${({ theme }) => theme.FONT_SIZE.xs};
	color: ${({ theme }) => theme.PALETTE.gray[100]};

	@media screen and (min-width: 376px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.xs};
	}

	@media screen and (min-width: 769px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.sm};
	}
`;

export const CheckProgress = styled.div`
	${flexCenter};

	background: ${({ theme }) => theme.PALETTE.orange[100]};
	color: ${({ theme }) => theme.PALETTE.white[100]};

	font-weight: 500;
	border-radius: 4px;

	width: 40px;
	height: 16px;
	font-size: ${({ theme }) => theme.FONT_SIZE.es};

	@media screen and (min-width: 376px) {
		width: 56px;
		height: 21px;
		font-size: ${({ theme }) => theme.FONT_SIZE.xs};
	}

	@media screen and (min-width: 769px) {
		width: 73px;
		height: 28px;
		font-size: ${({ theme }) => theme.FONT_SIZE.sm};
	}
`;