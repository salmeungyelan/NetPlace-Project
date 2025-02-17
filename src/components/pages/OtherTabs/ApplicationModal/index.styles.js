import { styled, css } from 'styled-components';
import {
	ModalBackground,
	flexCenter,
	flexColumn,
	flexColumnCenter,
	flexSpaceBetweenCenter,
} from 'styles/common';

export const Background = styled.div`
	${ModalBackground}
	z-index: 101;
`;

export const Container = styled.div`
	position: fixed;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	background-color: ${({ theme }) => theme.PALETTE.white[100]};
	width: 294px;
	padding: 32px 24px;
	${flexColumn}
	gap: 20px;
	border-radius: 6px;

	@media only screen and (min-width: 768px) {
		width: 568px;
		padding: 42px 34px;
	}

	@media only screen and (min-width: 1200px) {
		width: 800px;
		padding: 52px 44px;
	}
`;

export const Header = styled.div`
	${flexCenter}
	position: relative;
`;

export const Title = styled.p`
	color: ${({ theme }) => theme.PALETTE.gray[300]};
	font-size: ${({ theme }) => theme.FONT_SIZE.ml};
	font-weight: 600;
	background-color: ${({ theme }) => theme.PALETTE.white[150]};
	padding: 4px 8px;
	border-radius: 8px;

	@media only screen and (min-width: 768px) {
		padding: 6px 10px;
		font-size: ${({ theme }) => theme.FONT_SIZE.l};
	}
`;

const buttonBgReset = css`
	background: none;
	font-size: 0;
	width: 16px;
	height: 16px;
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
`;

export const CloseBtn = styled.button`
	${buttonBgReset}
	position: absolute;
	right: 0;
	background-image: url('/assets/icons/modal-x.svg');
`;

export const Step = styled.div`
	${flexColumnCenter}
	gap: 8px;
	color: ${({ theme }) => theme.PALETTE.gray[300]};
	font-size: ${({ theme }) => theme.FONT_SIZE.ms};

	> img {
		width: 90px;
	}

	> div {
		${flexSpaceBetweenCenter}
		gap: 27px;

		> span {
			color: ${({ theme }) => theme.PALETTE.orange[100]};
		}

		> p {
			color: ${({ theme }) => theme.PALETTE.gray[100]};
		}
	}

	@media screen and (min-width: 768px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.m};

		> img {
			width: 105px;
		}
	}

	@media screen and (min-width: 1200px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.ml};

		> img {
			width: 120px;
		}
	}
`;

export const Body = styled.div`
	${flexColumn};
`;

export const ButtonBox = styled.div`
	${flexCenter}
	flex-wrap: wrap;
	gap: 12px;
	width: 100%;

	@media screen and (min-width: 768px) {
		> button {
			width: 360px;
		}
	}
`;
