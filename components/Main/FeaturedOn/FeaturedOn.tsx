import React, { FC } from 'react';
import styled from 'styled-components';
import { Container } from '../../common/Container/Container';

const MoreMoney: FC = () => {
	return (
		<Styled>
			<Stars src='images/main/featuredOn/stars.svg' alt='' />

			<Wrapper>
				<GreySquare top='-90' left='234' />
				<GreySquareRight top='-279' right='88' />
				<Dots src='images/main/featuredOn/dots.svg' alt='' />

				<Container>
					<Inner>
						<Title>Featured On</Title>
						<Companies>
							<img src='images/main/featuredOn/techCrunch.svg' alt='' />
							<img src='images/main/featuredOn/techInAsia.svg' alt='' />
							<img src='images/main/featuredOn/pymnts.svg' alt='' />
							<img src='images/main/featuredOn/ventureBeat.svg' alt='' />
						</Companies>
					</Inner>
				</Container>
			</Wrapper>
		</Styled>
	);
};

const Wrapper = styled.div`
	background: radial-gradient(129.72% 141.01% at 50% 50%, #f7f7f7 0%, #fafafa 100%);
	border-radius: 40px;
	height: 244px;
	margin-right: 54px;
	position: relative;
	overflow: hidden;
`;

const Styled = styled.div`
	position: relative;
`;

const Inner = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Title = styled.h4`
	font-family: 'Gilroy';
	font-style: normal;
	font-weight: 600;
	font-size: 44px;
	line-height: 54px;
	color: #212121;
	margin: 0 0 32px 0;
	padding: 48px 0 16px 0;
	width: 666px;
	border-bottom: 1px solid #d2d2d2;
	text-align: center;
`;

const Companies = styled.div`
	display: flex;
	justify-content: space-between;
	width: 1132px;
`;

export const GreySquare = styled.div<{ top: string; left: string }>`
	width: 505.8px;
	height: 505.8px;
	background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(250, 250, 250, 0.2) 100%);
	border-radius: 94.9017px;
	transform: rotate(-45deg);
	position: absolute;
	top: ${({ top }) => `${top}px`};
	left: ${({ left }) => `${left}px`};
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 0;
	overflow: hidden;
`;

export const GreySquareRight = styled.div<{ top: string; right: string }>`
	width: 505.8px;
	height: 505.8px;
	background: radial-gradient(95.51% 95.51% at 50% 50%, #ffffff 0%, #fafafa 100%);
	opacity: 0.5;
	border-radius: 94.9017px;
	transform: rotate(-45deg);
	position: absolute;
	top: ${({ top }) => `${top}px`};
	right: ${({ right }) => `${right}px`};
	z-index: 0;
	overflow: hidden;
`;
export const Dots = styled.img`
	position: absolute;
	top: -3px;
	right: 382px;
	z-index: 0;
`;
export const Stars = styled.img`
	position: absolute;
	top: 60px;
	right: 1px;
	z-index: -1;
`;

export default MoreMoney;
