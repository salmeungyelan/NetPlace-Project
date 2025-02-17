import { css } from 'styled-components';

export const ModalBackground = css`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background-color: rgba(51, 51, 51, 0.6);
`;

export const bodyContainer = css`
	width: 294px;
	min-height: 800px;
	margin: 0 auto;
	padding: 40px 0;

	@media screen and (min-width: 768px) {
		width: 568px;
		padding: 180px 0 50px 0;
	}

	@media screen and (min-width: 1200px) {
		width: 1200px;
		padding: 180px 0 60px 0;
	}
`;

export const flexCenter = css`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const flexColumnCenter = css`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const flexAlignCenter = css`
	display: flex;
	align-items: center;
`;

export const flexLeftCenter = css`
	display: flex;
	align-items: center;
	justify-content: left;
`;

export const flexColumn = css`
	display: flex;
	flex-direction: column;
`;

export const flexSpaceBetweenCenter = css`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const textOverflowEllipsis = css`
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;
