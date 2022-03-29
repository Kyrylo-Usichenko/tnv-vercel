import React, { FC } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
	font-size: 16px;
	line-height: 20px;
	font-family: 'Gilroy', sans-serif;
	font-weight: 700;
	width: 180px;
	height: 48px;
	color: var(--text-white);
	text-align: center;
	padding: 14px 0;
	border: none;
	border-radius: 16px;
	background-color: var(--text-primary);
	cursor: pointer;
	transition: all 0.3s ease;

	&:hover {
		background-color: var(--text-primary-hover);
		box-shadow: 8px 8px 20px 0 var(--shadow-color);
	}

	&:focus {
		background-color: var(--text-primary);
		box-shadow: 8px 4px 20px 0 var(--shadow-color);
	}
`;

const Button: FC = ({ children, ...props }) => {
	return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
