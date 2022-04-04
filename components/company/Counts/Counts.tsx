import React, { FC } from 'react';
import styled from 'styled-components';

const Counts: FC = () => {
	return (
		<Wrapper>
			<Block1>
				<Block1Dots />
				<Block1SquareRight />
				<Block1SquareBottom />
				<Content>
					<Count>
						250<Span>+</Span>
					</Count>
					<Title>Team Members</Title>
				</Content>
			</Block1>
			<Block2>
				<Block2Dots />
				<Block2SquareLeft />
				<Block2SquareBottom />
				<Content>
					<Count>
						10<Span>+</Span>
					</Count>
					<Title>Nationalities</Title>
				</Content>
			</Block2>
			<Block3>
				<Block3Dots />
				<Block3Square />
				<Content>
					<Count>
						5000<Span>+</Span>
					</Count>
					<Title>Active Businesses</Title>
				</Content>
			</Block3>
			<Block4>
				<Block4Square />
				<Block4Dots />
				<Content>
					<Count>
						$500<Span>M</Span>
					</Count>
					<Title>Transactions</Title>
				</Content>
			</Block4>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	margin-top: 180px;
	display: flex;
	justify-content: space-between;
`;

const Block1 = styled.div`
	background: #f7f7f7;
	margin-top: 66px;
	border-radius: 0 32px 32px 0;
	display: flex;
	justify-content: flex-end;
	width: 100%;
	height: 188px;
	margin-right: 16px;
	padding: 48px 75px 48px 0;
	position: relative;
	overflow: hidden;
	z-index: 0;
`;

const Block2 = styled.div`
	background: #f7f7f7;
	border-radius: 32px;
	height: 188px;
	width: 100%;
	max-width: 316px;
	margin-right: 16px;
	text-align: center;
	padding: 48px 0 48px;
	position: relative;
	overflow: hidden;
	z-index: 0;
`;
const Block3 = styled.div`
	background: #f7f7f7;
	height: 188px;
	width: 100%;
	max-width: 316px;
	border-radius: 32px;
	margin-top: 66px;
	padding: 48px 0;
	position: relative;
	overflow: hidden;
	z-index: 0;
`;
const Block4 = styled.div`
	background: #f7f7f7;
	height: 188px;
	border-radius: 32px 0 0 32px;
	width: 100%;
	margin-left: 16px;
	display: flex;
	padding: 48px 0 48px 81px;
	position: relative;
	overflow: hidden;
	z-index: 0;
`;
const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const Count = styled.div`
	font-family: 'Gilroy';
	font-style: normal;
	font-weight: 600;
	font-size: 48px;
	line-height: 59px;
	color: #212121;
	text-align: center;
	padding: 0;
	margin: 0;
	display: flex;
`;
const Title = styled.p`
	font-family: 'Gilroy';
	font-style: normal;
	font-weight: 600;
	font-size: 24px;
	line-height: 29px;
	color: #212121;
	text-align: center;
	padding: 0;
	margin: 4px 0 0;
`;
const Span = styled.div`
	padding: 0;
	margin: 0;
	color: #ff474d;
`;

const Block4Square = styled.div`
	position: absolute;
	left: 0px;
	top: 0px;
	width: 166.67px;
	height: 166.67px;
	background: url('images/company/Counts/block4Square.svg') no-repeat;
	z-index: -1;
`;

const Block4Dots = styled.div`
	position: absolute;
	left: 204px;
	bottom: -9px;
	width: 196.9px;
	height: 149px;
	background: url('images/company/Counts/block4Dots.svg') no-repeat;
	z-index: -1;
`;

const Block3Square = styled.div`
	position: absolute;
	left: 0px;
	bottom: -34px;
	width: 136.99px;
	height: 136.99px;
	background: url('images/company/Counts/block3Square.svg') no-repeat;
	z-index: -1;
`;

const Block3Dots = styled.div`
	position: absolute;
	right: -50px;
	top: 0px;
	width: 196.9px;
	height: 149px;
	background: url('images/company/Counts/block3Dots.svg') no-repeat;
	z-index: -1;
`;
const Block2SquareBottom = styled.div`
	position: absolute;
	left: 102px;
	bottom: 0px;
	width: 266px;
	height: 108px;
	background: url('images/company/Counts/block2SquareBottom.svg') no-repeat;
	z-index: -1;
`;

const Block2SquareLeft = styled.div`
	position: absolute;
	left: 0;
	bottom: 0;

	width: 186.41px;
	height: 186.41px;
	background: url('images/company/Counts/block2SquareLeft.svg') no-repeat;
	z-index: -1;
`;

const Block2Dots = styled.div`
	position: absolute;
	left: 204px;
	bottom: -9px;
	width: 196.9px;
	height: 149px;
	background: url('images/company/Counts/block2Dots.svg') no-repeat;
	z-index: -1;
`;

const Block1Dots = styled.div`
	position: absolute;
	right: -226px;
	bottom: -67px;
	width: 325px;
	height: 245.94px;
	background: url('images/company/Counts/block1Dots.svg') no-repeat;
	z-index: -1;
`;

const Block1SquareRight = styled.div`
	position: absolute;
	right: -139px;
	top: 0px;
	width: 312.56px;
	height: 312.56px;
	background: url('images/company/Counts/block1SquareRight.svg') no-repeat;
	z-index: -1;
`;

const Block1SquareBottom = styled.div`
	position: absolute;
	right: 155px;
	bottom: 0px;
	width: 378px;
	height: 121px;
	background: url('images/company/Counts/block1SquareBottom.svg') no-repeat;
	z-index: -1;
`;

export default Counts;
