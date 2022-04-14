import React, { FC, RefObject, useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';

import useIntersectionObserver from '../../../hooks/useIntersectionObserver';

const Counts: FC = () => {
	const [isShown, setIsShown] = useState(false);
	const ref = useRef() as RefObject<HTMLParagraphElement>;
	const entry = useIntersectionObserver(ref, {});
	const isVisible = !!entry?.isIntersecting;

	useEffect(() => {
		if (isVisible && !isShown) setIsShown(true);
	}, [isVisible]);

	return (
		<Wrapper className='counts'>
			<Block1 className='block1'>
				<Block1Dots />
				<Block1SquareRight />
				<Block1SquareBottom />
				<Content>
					<Count ref={ref}>
						<CountNumber isAnimated={isVisible} isShown={isShown} num={250} />
						<span className='accent'>+</span>
					</Count>
					<Title>Team Members</Title>
				</Content>
			</Block1>
			<Block2 className='block2'>
				<Block2Dots />
				<Block2SquareLeft />
				<Block2SquareBottom />
				<Content>
					<Count>
						<CountNumber isAnimated={isVisible} isShown={isShown} num={10} />
						<span className='accent'>+</span>
					</Count>
					<Title>Nationalities</Title>
				</Content>
			</Block2>
			<Block3 className='block3'>
				<Block3Dots />
				<Block3Square />
				<Content>
					<Count>
						<CountNumber isAnimated={isVisible} isShown={isShown} num={5000} />
						<span className='accent'>+</span>
					</Count>
					<Title>Businesses</Title>
				</Content>
			</Block3>
			<Block4 className='block4'>
				<Block4Square />
				<Block4Dots />
				<Content>
					<Count>
						<CountNumber isAnimated={isVisible} isShown={isShown} num={500} />
						<span className='accent'>M</span>
					</Count>
					<Title>Transactions</Title>
				</Content>
			</Block4>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	margin-bottom: 180px;

	@media (min-width: 768px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		column-gap: 16px;
	}

	@media (min-width: 1024px) {
		grid-template-columns: 1fr 224px 224px 1fr;
		grid-template-rows: repeat(5, 45px);
	}

	@media (min-width: 1280px) {
		grid-template-columns: 1fr 246px 246px 1fr;
	}

	@media (min-width: 1440px) {
		grid-template-columns: 1fr 286px 286px 1fr;
	}

	@media (min-width: 1920px) {
		grid-template-columns: 1fr 316px 316px 1fr;
	}
`;

const Block = styled.div`
	display: flex;
	justify-content: center;
	background: #f7f7f7;
	padding: 48px 0;
	border-radius: 32px;
	margin: 0 16px 16px 16px;

	&:last-of-type {
		margin: 0 0 0 16px;
	}

	@media (min-width: 768px) {
		margin: 0;

		&:last-of-type {
			margin: 0;
		}
	}

	@media (min-width: 1024px) {
	}
`;

const Block1 = styled(Block)`
	border-radius: 0 32px 32px 0;
	position: relative;
	overflow: hidden;
	z-index: 0;
	margin-left: 0;

	@media (min-width: 768px) {
		grid-row: 2 / 6;
		margin-bottom: 16px;
	}

	@media (min-width: 1024px) {
		grid-row: 2 / 6;
		margin: 0;
		padding-right: 42px;
		justify-content: flex-end;
	}

	@media (min-width: 1280px) {
		padding-right: 53px;
	}

	@media (min-width: 1440px) {
		padding-right: 73px;
	}
`;

const Block2 = styled(Block)`
	position: relative;
	overflow: hidden;
	z-index: 0;

	@media (min-width: 768px) {
		margin-right: 16px;
		margin-bottom: 16px;
		grid-row: 1/5;
	}

	@media (min-width: 1024px) {
		grid-row: 1/5;
		margin: 0;
	}
`;

const Block3 = styled(Block)`
	position: relative;
	overflow: hidden;
	z-index: 0;

	@media (min-width: 768px) {
		margin-left: 16px;
		grid-row: 6 / 10;
	}

	@media (min-width: 1024px) {
		grid-row: 2 / 6;
		margin: 0;
	}
`;

const Block4 = styled(Block)`
	border-radius: 32px 0 0 32px;
	position: relative;
	overflow: hidden;
	z-index: 0;
	align-self: flex-end;
	margin-left: 16px;

	@media (min-width: 768px) {
		grid-row: 5 / 9;
	}

	@media (min-width: 1024px) {
		grid-row: 1/5;
		margin: 0;
		padding-left: 42px;
		justify-content: flex-start;
	}

	@media (min-width: 1280px) {
		padding-left: 53px;
	}

	@media (min-width: 1440px) {
		padding-left: 73px;
	}
`;

const Content = styled.div`
	display: inline-block;
`;

const Count = styled.p`
	font-family: 'Gilroy';
	font-weight: 600;
	font-size: 36px;
	line-height: 44px;
	color: #212121;
	text-align: center;
	margin: 0 0 4px 0;

	@media (min-width: 768px) {
		font-size: 44px;
		line-height: 54px;
	}

	@media (min-width: 1920px) {
		font-size: 48px;
		line-height: 59px;
	}
`;
const CountNumber = styled.span<{ isAnimated: boolean; num: number; isShown?: boolean }>`
	@property --num${({ num }) => num} {
		syntax: '<integer>';
		initial-value: ${({ isShown, num }) => (isShown ? num : 0)};
		inherits: false;
	}

	${({ isAnimated, num }) =>
		isAnimated &&
		css`
			transition: ${`--num${num}`} 2.5s;
			counter-set: num var(${`--num${num}`});

			&:after {
				content: counter(num);
			}
			${`--num${num}`}: ${num};
		`}
`;

const Title = styled.p`
	font-family: 'Gilroy';
	font-weight: 600;
	font-size: 18px;
	line-height: 22px;
	color: #212121;
	text-align: center;
	margin: 0;

	@media (min-width: 768px) {
		font-size: 20px;
		line-height: 25px;
	}

	@media (min-width: 1920px) {
		font-size: 24px;
		line-height: 29px;
	}
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
	@media (max-width: 1280px) {
		right: -115px;
		top: 0px;
	}
`;
const Block2SquareBottom = styled.div`
	position: absolute;
	left: 102px;
	bottom: 0px;
	width: 266px;
	height: 108px;
	background: url('images/company/Counts/block2SquareBottom.svg') no-repeat;
	z-index: -1;
	@media (max-width: 425px) {
		left: 37px;
		bottom: -35px;
	}
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
	bottom: 12px;
	width: 196.9px;
	height: 149px;
	background: url('images/company/Counts/block2Dots.svg') no-repeat;
	z-index: -1;
	@media (max-width: 1280px) {
		left: 176px;
		bottom: 31px;
	}
	@media (max-width: 768px) {
		left: 173px;
	}
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
