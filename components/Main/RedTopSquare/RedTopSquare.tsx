import React, { FC } from 'react';
import styled from 'styled-components';

const RedTopSquare: FC = () => {
	return (
		<BigRed>
			<SmallRed>
				<AppImage src='/images/main/preview/app.svg' />
				<Phone src='/images/main/preview/phone.svg' />
				<DotsLeft src='/images/main/preview/dots-little.png' />
				<DotsBottom src='/images/main/preview/dots-big.png' />
			</SmallRed>
		</BigRed>
	);
};

const BigRed = styled.div`
	width: 1031.82px;
	height: 1049.93px;
	background: rgba(255, 71, 77, 0.6);
	border-radius: 136.463px;
	transform: rotate(-45deg);
	position: absolute;
	top: -20px;
	left: 1012px;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 1;
`;
const SmallRed = styled.div`
	width: 964.17px;
	height: 964.17px;
	background: #ff474d;
	border-radius: 125.316px;
	z-index: 1;
	overflow: hidden;
`;

const AppImage = styled.img`
	position: absolute;
	z-index: 1;
	top: 99px;
	right: 86px;
	transform: rotate(45deg);
`;

const Phone = styled.img`
	position: absolute;
	z-index: 1;
	top: 2px;
	left: -32px;
	transform: rotate(45deg);
`;
const DotsLeft = styled.img`
	top: 42px;
	left: 198px;
	position: absolute;
	z-index: 1;
	transform: rotate(45deg);
`;
const DotsBottom = styled.img`
	bottom: 270px;
	left: 173px;
	position: absolute;
	z-index: 1;
	transform: rotate(45deg);
`;

export default RedTopSquare;
