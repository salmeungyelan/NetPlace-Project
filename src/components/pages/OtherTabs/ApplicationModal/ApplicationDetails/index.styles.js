import { css, styled } from 'styled-components';
import {
	flexCenter,
	flexColumn,
	flexColumnCenter,
	flexLeftCenter,
	flexSpaceBetweenCenter,
} from 'styles/common';
import { DayPicker } from 'react-day-picker';

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
			color: ${({ theme }) => theme.PALETTE.gray[100]};
		}

		> p {
			color: ${({ theme }) => theme.PALETTE.orange[100]};
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
	${flexColumn}
	gap: 4px;
`;

export const InputBox = styled.div`
	> p {
		height: 12px;
		margin-top: 4px;
		font-weight: 400;
		font-size: ${({ theme }) => theme.FONT_SIZE.ms};
		color: ${({ theme }) => theme.PALETTE.red[100]};
	}
`;

export const ExDate = styled(InputBox)`
	width: 100%;

	> div {
		${flexCenter}
		gap: 10px;
		width: 100%;
	}
`;

export const DateBox = styled.div`
	position: relative;
	width: 100%;
`;

export const CalendarImg = styled.img`
	position: absolute;
	width: 15px;
	right: 5%;
	top: 20%;
	cursor: pointer;
	content: ${({ $isCalendar }) =>
		$isCalendar ? 'url("/assets/icons/calendar-hover.svg")' : 'none'};

	&:hover {
		content: url('/assets/icons/calendar-hover.svg');
	}

	@media screen and (min-width: 768px) {
		width: 20px;
		right: 5%;
		top: 15%;
	}
`;

export const Wrapper = styled.div`
	background: ${({ theme }) => theme.PALETTE.white[100]};
	${flexCenter}
	border-radius: 6px;
	position: absolute;
	top: 120%;
	left: -27%;
	box-shadow: 0 0 4px 0 #00000029;

	@media screen and (min-width: 768px) {
		left: 0;
	}

	@media screen and (min-width: 1200px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.l};
	}
`;

export const DayPickers = styled(DayPicker)`
	.rdp {
		--rdp-background-color: ${({ theme }) => theme.PALETTE.orange[50]};
		--rdp-accent-color: ${({ theme }) => theme.PALETTE.orange[100]};
		--rdp-accent-color-dark: ${({ theme }) => theme.PALETTE.orange[100]};
	}

	.rdp-day {
		border-radius: 0;
		text-align: center;
	}
`;

export const H1 = styled.h1`
	font-weight: 400;
	font-size: ${({ theme }) => theme.FONT_SIZE.m};
	color: ${({ theme }) => theme.PALETTE.orange[100]};
	margin-bottom: 10px;

	@media screen and (min-width: 768px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.ml};
	}

	@media screen and (min-width: 1200px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.l};
	}
`;

export const WordBox = styled.div`
	width: 100%;
	min-height: 28px;
	border: 1px solid ${({ theme }) => theme.PALETTE.gray[0]};
	background-color: ${({ theme }) => theme.PALETTE.white[0]};
	border-radius: 4px;
	padding: 4px;
	${flexLeftCenter}
	flex-wrap: wrap;
	gap: 4px;

	@media screen and (min-width: 768px) {
		height: 32px;
	}

	@media screen and (min-width: 1200px) {
		height: 40px;
	}
`;

export const HashTag = styled(WordBox)`
	height: 52px;
	align-items: flex-start;
	overflow-y: scroll;

	@media screen and (min-width: 768px) {
		height: 58px;
		padding: 6px;
	}

	@media screen and (min-width: 1200px) {
		height: 74px;
	}
`;

export const Word = styled.div`
	padding: 3px 4px;
	background-color: ${({ theme }) => theme.PALETTE.white[200]};
	color: ${({ theme }) => theme.PALETTE.gray[200]};
	font-size: ${({ theme }) => theme.FONT_SIZE.ms};
	border-radius: 4px;
	width: auto;

	> img {
		width: 8px;
		cursor: pointer;
	}

	@media screen and (min-width: 768px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.m};
	}

	@media screen and (min-width: 1200px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.ml};
	}
`;

export const ButtonBox = styled.div`
	${flexCenter}
	flex-wrap: wrap;
	gap: 12px;

	> div {
		${flexCenter};
		gap: 12px;
		width: 100%;
	}

	@media screen and (min-width: 768px) {
		flex-direction: column;

		> button {
			width: 376px;
		}

		> div > button {
			width: ${({ disabled }) => (disabled ? '376px' : '180px')};
		}
	}

	@media screen and (min-width: 1200px) {
		${flexSpaceBetweenCenter}
		flex-direction: row;

		& button {
			width: 180px;
		}

		> div {
			width: 180px;
		}
	}
`;
