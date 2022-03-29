import styled from 'styled-components';

export const GreySquare = styled.div<{ top: string; left: string; size: string }>`
	width: ${({ size }) => `${size}`};
	height: ${({ size }) => `${size}`};
	background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(218, 218, 218, 0.15) 0%, rgba(250, 250, 250, 0.15) 100%);
	border-radius: 45.0024px;
	transform: rotate(-45deg);
	position: absolute;
	top: ${({ top }) => `${top}`};
	left: ${({ left }) => `${left}`};
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 1;
	overflow: hidden;
`;

export const GreySquareDots = styled.img`
	transform: rotate(45deg);
	position: absolute;
	left: 5px;
	bottom: 120px;
`;
