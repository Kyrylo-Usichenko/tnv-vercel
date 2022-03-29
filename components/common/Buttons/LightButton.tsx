import React, { FC } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button<{ width: string; isHeaderScrolled?: boolean }>`
	font-size: 14px;
	line-height: 17px;
	font-family: 'Gilroy', sans-serif;
	font-weight: 700;
	width: ${({ width }) => width};
	height: 40px;
	text-align: center;
	padding: 10px 0;
	border: none;
	border-radius: 16px;
	color: ${({ isHeaderScrolled }) => (isHeaderScrolled ? 'var(--text-white)' : 'var(--text-main)')};
	background-color: ${({ isHeaderScrolled }) => (isHeaderScrolled ? 'var(--text-primary)' : 'var(--text-white)')};
	cursor: pointer;
	transition: all 0.3s ease;

	&:hover {
		background-color: ${({ isHeaderScrolled }) => (isHeaderScrolled ? 'var(--text-primary-hover)' : '#ffffffcc')};
		box-shadow: ${({ isHeaderScrolled }) =>
			isHeaderScrolled ? '8px 8px 20px 0 var(--shadow-color)' : '14px 4px 20px 0 var(--shadow-color)'};
	}

	&:focus {
		background-color: ${({ isHeaderScrolled }) => (isHeaderScrolled ? 'var(--text-primary)' : 'var(--text-white)')};
		box-shadow: ${({ isHeaderScrolled }) =>
			isHeaderScrolled ? '8px 4px 20px 0 var(--shadow-color)' : '12px 2px 20px 0 var(--shadow-color)'};
	}
`;

type LightButtonProps = {
	width: string;
	isHeaderScrolled?: boolean;
	[x: string]: any;
};

const LightButton: FC<LightButtonProps> = ({ children, width, isHeaderScrolled, ...props }) => {
	return (
		<StyledButton width={width} isHeaderScrolled={isHeaderScrolled} {...props}>
			{children}
		</StyledButton>
	);
};

export default LightButton;
