import React, { FC } from 'react';
import styled from 'styled-components';

const Commitments: FC = () => {
	return (
		<Wrapper>
			<SquareRight />
			<SquareLeft />
			<DotsRight />
			<DotsLeft />
			<Content>
				<Heading>Our Core Commitments</Heading>
				<List>
					<Item>
						<img src='images/company/Commitments/pen.svg' alt='' />
						<Title>Every pixel matters</Title>
						<SubTitle>lorem ipsum some sub text here</SubTitle>
					</Item>
					<Item>
						<img src='images/company/Commitments/message.svg' alt='' />
						<Title>Shut the fluff</Title>
						<SubTitle>lorem ipsum some sub text here</SubTitle>
					</Item>
					<Item>
						<img src='images/company/Commitments/rocket.svg' alt='' />
						<Title>Break things fast</Title>
						<SubTitle>lorem ipsum some sub text here</SubTitle>
					</Item>
				</List>
			</Content>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	margin-top: 180px;
	display: flex;
	justify-content: flex-end;
	height: 356px;
	margin-right: 234px;
	border-radius: 0 48px 48px 0;
	background: #363636;
	position: relative;
	z-index: 2;
	padding: 48px 181px 48px 0;
`;

const Content = styled.div``;
const List = styled.ul`
	list-style: none;
	margin: 32px 0 0 0;
	padding: 0;
	display: flex;
`;

const Item = styled.li`
	margin: 0 168px 0 0;
	padding: 0;
	display: flex;
	max-width: 260px;
	flex-direction: column;
	align-items: center;
	&:last-child {
		margin: 0;
	}
`;

const Title = styled.p`
	font-family: 'Gilroy';
	font-style: normal;
	font-weight: 600;
	font-size: 28px;
	line-height: 34px;
	text-align: center;
	color: #ffffff;
	margin: 24px 0 0;
	padding: 0;
	text-align: center;
`;
const SubTitle = styled.p`
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 24px;
	color: #d2d2d2;
	margin: 4px 0 0 0;
	padding: 0;
	max-width: 162px;
	text-align: center;
`;

const Heading = styled.p`
	font-family: 'Gilroy';
	font-style: normal;
	font-weight: 600;
	font-size: 44px;
	line-height: 54px;
	color: #ffffff;
	margin: 0;
	padding: 0;
	text-align: center;
`;

const SquareRight = styled.div`
	position: absolute;
	right: 20px;
	top: 0;
	width: 770px;
	height: 356px;
	background: url('images/company/Commitments/squareRight.svg') no-repeat;
	z-index: -1;
`;

const SquareLeft = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	width: 338px;
	height: 289px;
	background: url('images/company/Commitments/squareLeft.svg') no-repeat;
	z-index: -1;
`;

const DotsRight = styled.div`
	position: absolute;
	right: 340px;
	top: 0;
	width: 338px;
	height: 289px;
	background: url('images/company/Commitments/dotsRight.svg') no-repeat;
	z-index: -1;
`;

const DotsLeft = styled.div`
	position: absolute;
	left: 0px;
	bottom: 0;
	width: 215px;
	height: 162.7px;
	background: url('images/company/Commitments/dotsLeft.svg') no-repeat;
	z-index: -1;
`;
export default Commitments;
