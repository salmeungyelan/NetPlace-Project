import { css, styled } from 'styled-components';

const sizeCSS = {
	default: css`
		width: 4px;
		height: 100%;
	`,
	width: css`
		height: 1px;
		width: 100%;
	`,
	height: css`
		width: 1px;
		height: 100%;
	`,
	login: css`
		width: 1px;
		height: 16px;
	`,
};

const variantCSS = {
	lightGray: css`
		background-color: ${({ theme }) => theme.PALETTE.gray[0]};
	`,
	gray: css`
		background-color: ${({ theme }) => theme.PALETTE.gray[100]};
	`,
	orange: css`
		background-color: ${({ theme }) => theme.PALETTE.orange[100]};
	`,
};

export const Lines = styled.div`
	${({ size }) => sizeCSS[size]}
	${({ $variant }) => variantCSS[$variant]}
`;
