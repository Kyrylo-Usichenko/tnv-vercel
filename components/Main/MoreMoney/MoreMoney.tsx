import React, { FC, RefObject, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled, { keyframes, css } from 'styled-components';

import useIntersectionObserver from '../../../hooks/useIntersectionObserver';

import { Container } from '../../common/Container/Container';

const TYPE_WRITE_SPEED = 0.35;
const TYPE_WRITE_DELAY = 700;
const TYPE_WRITER_CHARACTERS = 10; // max words width

const payLeft = '/images/main/moreMoney/pay-left.png';
const payRight = '/images/main/moreMoney/pay-right.png';
const orderLeft = '/images/main/moreMoney/order-left.png';
const orderRight = '/images/main/moreMoney/order-right.png';
const chatLeft = '/images/main/moreMoney/chat-left.png';
const chatRight = '/images/main/moreMoney/chat-right.png';

const tabsImages = [
	{
		name: 'Payments',
		leftImg: payLeft,
		rightImg: payRight,
		typedText: ['More money'],
		isActive: true,
		textLines: [
			'Send invoices and easily track them until they’re paid',
			'Manage inventory details and availability in real-time',
			'24/7 order insights and data reports',
		],
	},
	{
		name: 'Orders',
		leftImg: orderLeft,
		rightImg: orderRight,
		typedText: ['More speedy'],
		isActive: false,
		textLines: [
			'Create chats with any business (even if they’re not on Tinvio)',
			'Fully integrated with your favorite chat apps',
			'Real-time messages and alerts',
		],
	},
	{
		name: 'Chats',
		leftImg: chatLeft,
		rightImg: chatRight,
		typedText: ['More buddy'],
		isActive: false,
		textLines: [
			'Send invoices and easily track them until they’re paid',
			'Real-time payments settlement and reconciliation',
			'Safe, secure, and compliant',
		],
	},
];

interface IMoreMoneyItem {
	name: string;
	leftImg: string;
	rightImg: string;
	typedText: string[];
	isActive: boolean;
	textLines: Array<string>;
}

const MoreMoney: FC = () => {
	const [tabs, setTabs] = useState(tabsImages);
	const [tab, setTab] = useState(tabsImages[0]);
	const [text, setText] = useState(tabsImages[0].typedText[0]);
	const [isBackwards, setIsBackwards] = useState(false);
	const [isClicked, setIsClicked] = useState(false);

	const typeRef = useRef() as RefObject<HTMLSpanElement>;
	const entry = useIntersectionObserver(typeRef, {});
	const isVisible = !!entry?.isIntersecting;

	useEffect(() => {
		if (isVisible && isClicked) {
			setIsBackwards(true);

			const interval = setTimeout(() => {
				setIsBackwards(false);
				setIsClicked(false);
				setText(tab.typedText[0]);
			}, TYPE_WRITE_SPEED * 1000);

			if (tab.typedText.length > 1) {
				const intervalNext = setTimeout(() => {
					setIsBackwards(true);

					const intervalSecond = setTimeout(() => {
						setIsBackwards(false);
						setIsClicked(false);
						setText(tab.typedText[1]);
					}, TYPE_WRITE_SPEED * 1000);
					return () => clearTimeout(intervalSecond);
				}, TYPE_WRITE_SPEED * 1000 * 2 + TYPE_WRITE_DELAY);
				return () => clearTimeout(intervalNext);
			}
			return () => clearTimeout(interval);
		}

		if (!isVisible) setIsBackwards(false);
	}, [tab.name]);

	const onBtnClick = (tabItem: IMoreMoneyItem) => {
		if (tabItem.isActive) return;

		const updatedTabs = tabs.map((tabUpdated) => {
			if (tabUpdated.name === tabItem.name) {
				tabUpdated.isActive = true;
				return tabUpdated;
			}
			tabUpdated.isActive = false;
			return tabUpdated;
		});

		setTabs(updatedTabs);
		setIsBackwards(true);
		setIsClicked(true);
		setTab(tabItem);
	};

	return (
		<Wrapper>
			<Container>
				<Inner>
					<Title>
						Smarter supply chain transactions.{' '}
						<TitleWrap>
							<TitleSpan ref={typeRef} isVisible={isVisible} isBackwards={isBackwards}>
								{text}
							</TitleSpan>
						</TitleWrap>
					</Title>
					<ButtonsWrapper>
						<Button width='134' onClick={() => onBtnClick(tabs[0])} isActive={tab === tabs[0]}>
							Payments
						</Button>
						<Button width='114' onClick={() => onBtnClick(tabs[1])} isActive={tab === tabs[1]}>
							Orders
						</Button>
						<Button width='107' onClick={() => onBtnClick(tabs[2])} isActive={tab === tabs[2]}>
							Chats
						</Button>
					</ButtonsWrapper>
					<List>
						<Item>{tab.textLines[0]}</Item>
						<Item>{tab.textLines[1]}</Item>
						<Item>{tab.textLines[2]}</Item>
					</List>
					<Link href='/features'>
						<BottomButton>More Features</BottomButton>
					</Link>
				</Inner>
			</Container>
			<GreySquare />
			<PurpleSquare>
				<RedSquare>
					<Null>
						<LeftMock>
							<ImageInner>
								<Image src={tab.leftImg} alt={tab.name} layout='fill' objectFit='contain' priority />
							</ImageInner>
						</LeftMock>
						<RightMock>
							<ImageInner>
								<Image src={tab.rightImg} alt={tab.name} layout='fill' objectFit='contain' priority />
							</ImageInner>
						</RightMock>
						<Stars src='images/main/moreMoney/stars.svg' alt='stars' />
						<Dots src='images/main/moreMoney/dots.svg' alt='dots' />
					</Null>
				</RedSquare>
			</PurpleSquare>
			<MobRightDots />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 100%;
	position: relative;
	height: 826px;
	margin-top: 299px;
	@media (max-width: 1280px) {
		margin-bottom: auto;
		height: 295px;
		// margin-top: 0px;
	}
	@media (max-width: 1023px) {
		// margin-bottom: auto;
		height: 896px;
		margin-top: 0px;
	}
	@media (max-width: 425px) {
		height: 765px;
	}
`;

const GreySquare = styled.div`
	width: 477.93px;
	height: 477.93px;
	background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(218, 218, 218, 0.15) 0%, rgba(250, 250, 250, 0.15) 100%);
	border-radius: 28.2072px;
	transform: rotate(-45deg);
	position: absolute;
	top: 108px;
	// left: 71px;
	right: calc(50% + 400px);
	@media (max-width: 1280px) {
		right: auto;
		top: 221px;
		left: -277px;
	}
`;

const PurpleSquare = styled.div`
	position: absolute;
	width: 559.25px;
	height: 559.25px;
	background: rgba(251, 36, 43, 0.6);
	border-radius: 72px;
	transform: rotate(-45deg);
	display: flex;
	align-items: center;
	justify-content: center;
	left: 62%;
	top: 55px;

	@media (max-width: 1279px) {
		left: 57%;
	}
	@media (max-width: 1023px) {
		position: relative;
		top: -120px;
		left: 50%;
		transform: rotate(-45deg) translateX(-71%);
	}

	@media (max-width: 425px) {
		width: 451px;
		height: 451px;
	}
`;

const RedSquare = styled.div`
	width: 489.69px;
	height: 489.69px;
	background: #fb242b;
	border-radius: 62px;
	display: flex;
	justify-content: center;
	align-items: center;
	@media (max-width: 425px) {
		width: 395px;
		height: 395px;
	}
`;

const Null = styled.div`
	transform: rotate(45deg);
	width: 400px;
	height: 400px;
	position: relative;
`;
const ImageInner = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
`;

const LeftMock = styled.div`
	position: absolute;
	left: -139px;
	top: -102px;
	width: 300px;
	height: 488px;
	transition: all 0.3s ease;
	@media (max-width: 1023px) {
		right: 39%;
		left: auto;
		top: -95px;
		width: 330px;
		height: 536px;
	}
	@media (max-width: 425px) {
		width: 225px;
		height: 520px;
		right: 45%;
		top: -75px;
	}
`;

const Dots = styled.img`
	position: absolute;
	left: 133px;
	top: -78px;
	@media (max-width: 425px) {
		top: 10px;
		left: 120px;
	}
`;

const RightMock = styled.div`
	position: absolute;
	left: 116px;
	top: 42px;
	background: url('images/main/moreMoney/fruitPlanet.png') no-repeat;
	background-size: contain;
	width: 300px;
	height: 488px;

	@media (max-width: 1023px) {
		top: 0;
		left: 47%;
		width: 330px;
		height: 536px;
	}
	@media (max-width: 425px) {
		// left: 204px;
		// top: 0;
		width: 225px;
	}
`;

const Stars = styled.img`
	position: absolute;
	left: -251px;
	top: -57px;

	@media (max-width: 1023px) {
		left: -202px;
		top: -107px;
	}
`;

const Title = styled.h3`
	font-family: 'Gilroy';
	font-style: normal;
	font-weight: 600;
	font-size: 44px;
	line-height: 54px;
	color: #212121;
	margin: 90px 0 24px 0;
	padding: 190px 0 0 0;
	@media (max-width: 1280px) {
		font-size: 32px;
		line-height: 39px;
		// margin: 0 0 24px 0;
	}
	@media (max-width: 1023px) {
		text-align: center;
		margin: 0 0 24px 0;
	}
	@media (max-width: 767px) {
		font-size: 28px;
		line-height: 34px;
	}
`;
const typewriter = keyframes`
	from {
		left: 0;
	}
	to {
		left: 100%;
	}
`;
const typewriterBack = keyframes`
	from {
		left: 100%;
	}
	to {
		left: 0%;
	}
`;
const blink = keyframes`
	to {
		background: transparent;
	}
`;

const TitleWrap = styled.div`
	display: inline-block;
	min-width: 192px;
	text-align: left;
	@media (max-width: 425px) {
		min-width: 170px;
	}
`;
const TitleSpan = styled.span<{ isVisible: boolean; isBackwards: boolean }>`
	color: #ff474d;
	margin: 0;
	padding: 0;
	position: relative;
	white-space: nowrap;
	&:after {
		background: #212121;
		height: 40px;
		width: 2px;
		content: '';
		position: absolute;
		bottom: 0;
		right: -5px;
		@media (max-width: 1280px) {
			height: 30px;
		}
		@media (max-width: 425px) {
			height: 27px;
		}
	}

	position: relative;
	width: max-content;

	${({ isVisible, isBackwards }) =>
		isVisible &&
		css`
			&::before,
			&::after {
				content: '';
				position: absolute;
				top: 9px;
				right: 0;
				bottom: 0;
				left: 0;
				@media (max-width: 1280px) {
					top: 6px;
				}
			}

			&::before {
				background: #ffffff;
				animation: ${isBackwards ? typewriterBack : typewriter} ${TYPE_WRITE_SPEED}s
					steps(${TYPE_WRITER_CHARACTERS}) 0s ${isBackwards ? 'backwards' : 'forwards'};
			}

			&::after {
				width: 2px;
				background: #212121;
				animation: ${isBackwards ? typewriterBack : typewriter} ${TYPE_WRITE_SPEED}s
						steps(${TYPE_WRITER_CHARACTERS}) 0s ${isBackwards ? 'backwards' : 'forwards'},
					${blink} 750ms steps(${TYPE_WRITER_CHARACTERS}) infinite;
				margin: 0 0 0 2px;
			}
		`}
`;

const ButtonsWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	max-width: 387px;
	margin: 0 0 24px 0;
	width: 100%;
	padding: 0;
	@media (max-width: 1023px) {
		margin: 0 auto 24px;
	}
`;
const Inner = styled.div`
	position: relative;
	max-width: 555px;
	width: 100%;
	z-index: 1;
	@media (max-width: 1280px) {
		// margin: 0 auto;
		max-width: 440px;
	}
	@media (max-width: 1023px) {
		margin: 0 auto;
		// max-width: 408px;
	}
	@media (max-width: 425px) {
		max-width: 335px;
	}
`;

const Button = styled.a<{ width: string; isActive: boolean }>`
	max-width: 528px;
	height: 40px;
	width: ${({ width }) => `${width}px`};
	background: #f3f4f5;
	border-radius: 8px;
	cursor: pointer;
	border: ${({ isActive }) => (isActive ? '1px solid #212121' : 'none')};
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	&:hover {
		box-shadow: ${({ isActive }) => (isActive ? 'none' : '4px 4px 20px 0px rgba(33, 33, 33, 0.1)')};
	}
	@media (max-width: 1280px) {
		margin: 0 16px 0 0;
	}
`;

const BottomButton = styled.button`
	background: #ff474d;
	border-radius: 18px;
	cursor: pointer;
	font-family: 'Gilroy';
	font-style: normal;
	font-weight: 700;
	font-size: 20px;
	line-height: 25px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #ffffff;
	width: 210px;
	height: 56px;
	margin: 32px 0 0 0;
	padding: 0;
	outline: none;
	border: none;
	&:hover {
		opacity: 0.8;
	}
	@media (max-width: 1440px) {
		height: 48px;
		font-size: 16px;
		line-height: 20px;
		border-radius: 16px;
	}
	@media (max-width: 1023px) {
		margin: 32px auto 0;
	}
`;

const List = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;

	@media (max-width: 1440px) {
		height: 86px;
	}
	@media (max-width: 1280px) {
		height: 110px;
	}
	@media (max-width: 1024px) {
		height: 110px;
	}
	@media (max-width: 768px) {
		height: 119px;
	}
	@media (max-width: 425px) {
		height: 130px;
	}
	@media (max-width: 375px) {
		height: 125px;
	}
`;

const Item = styled.li`
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 23px;
	color: #212121;
	margin: 0 0 8px 0;
	padding: 0 0 0 27px;
	position: relative;
	&:last-child {
		margin: 0;
	}
	&:before {
		content: '';
		position: absolute;
		background: url('images/main/moreMoney/square.svg');
		width: 14px;
		height: 14px;
		left: 0;
		top: 4px;
	}
	@media (max-width: 1280px) {
		font-size: 16px;
		line-height: 23px;
	}
	@media (max-width: 1023px) {
		margin: 0 0 12px -20px;
		&:last-child {
			margin: 0 0 0 -20px;
		}
	}
	@media (max-width: 470px) {
		margin: 0 0 12px -5px;
		&:last-child {
			margin: 0 0 0 -5px;
		}
	}
	@media (max-width: 767px) {
		font-size: 14px;
		line-height: 20px;
	}
`;

const MobRightDots = styled.div`
	display: none;
	@media (max-width: 768px) {
		display: block;
		position: absolute;
		width: 243.1px;
		height: 183.97px;
		top: 60%;
		right: 0;
		transform: translateX(50%);
		background: url('images/main/moreMoney/mob-right-dots.svg') 0 0 / contain no-repeat;
	}
	@media (max-width: 600px) {
		top: 58%;
	}
`;

export default MoreMoney;
