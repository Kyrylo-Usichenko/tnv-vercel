import React, { FC, RefObject, useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import styled, { keyframes, css } from 'styled-components';
import Image from 'next/image';

import useIntersectionObserver from '../../../hooks/useIntersectionObserver';
import { useTranslation } from 'next-i18next';

import { FeaturesCon } from '../../common/Container/Container';

const TYPE_WRITE_SPEED = 0.35;
const TYPE_WRITE_DELAY = 700;
const TYPE_WRITER_CHARACTERS = 10; // max words width

const payLeft = '/images/main/moreMoney/pay-left.png';
const payRight = '/images/main/moreMoney/pay-right.png';
const orderLeft = '/images/main/moreMoney/order-left.png';
const orderRight = '/images/main/moreMoney/order-right.png';
const chatLeft = '/images/main/moreMoney/chat-left.png';
const chatRight = '/images/main/moreMoney/chat-right.png';

interface IMoreMoneyItem {
	name: string;
	leftImg: string;
	rightImg: string;
	typedText: string[];
	isActive: boolean;
	textLines: Array<string>;
}
interface Props {
	locale: string;
}

const MoreMoney: FC<Props> = ({ locale }) => {
	const [isIncreased, setIsIncreased] = useState(false);
	const { t } = useTranslation();

	const tabsImages = [
		{
			name: 'Chats',
			leftImg: chatLeft,
			rightImg: chatRight,
			typedText: [t('main:moreMoneyTitle1')],
			isActive: true,
			textLines: [t('main:moreMoneyTab3Row1'), t('main:moreMoneyTab3Row2'), t('main:moreMoneyTab3Row3')],
		},
		{
			name: 'Orders',
			leftImg: orderLeft,
			rightImg: orderRight,
			typedText: [t('main:moreMoneyTitle2')],
			isActive: false,
			textLines: [t('main:moreMoneyTab2Row1'), t('main:moreMoneyTab2Row2'), t('main:moreMoneyTab2Row3')],
		},
		{
			name: 'Payments',
			leftImg: payLeft,
			rightImg: payRight,
			typedText: [t('main:moreMoneyTitle3')],
			isActive: false,
			textLines: [t('main:moreMoneyTab1Row1'), t('main:moreMoneyTab1Row2'), t('main:moreMoneyTab1Row3')],
		},
	];
	const [tabs, setTabs] = useState(tabsImages);
	const [tab, setTab] = useState(tabsImages[0]);
	const [text, setText] = useState(tabsImages[0].typedText[0]);
	const [isBackwards, setIsBackwards] = useState(false);
	const [isClicked, setIsClicked] = useState(false);

	const typeRef = useRef() as RefObject<HTMLSpanElement>;
	const entry = useIntersectionObserver(typeRef, {});
	const isVisible = !!entry?.isIntersecting;

	useEffect(() => {
		if (locale === 'th') return setIsIncreased(true);
		setIsIncreased(false);
	}, []);

	useMemo(() => {
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
			<FeaturesCon>
				<Inner>
					<Title>
						<span style={{ position: 'relative', zIndex: '1' }}>
							{t('main:moreMoneyTitle')}
							{'. '}
						</span>
						<TitleWrap>
							<TitleSpan
								ref={typeRef}
								isVisible={isVisible}
								isBackwards={isBackwards}
								isIncreased={isIncreased}
							>
								{text}
							</TitleSpan>
						</TitleWrap>
					</Title>
					<ButtonsWrapper>
						<Button width='107' onClick={() => onBtnClick(tabs[0])} isActive={tab === tabs[0]}>
							{t('main:moreMoneyTab1')}
						</Button>
						<Button width='114' onClick={() => onBtnClick(tabs[1])} isActive={tab === tabs[1]}>
							{t('main:moreMoneyTab2')}
						</Button>
						<Button width='134' onClick={() => onBtnClick(tabs[2])} isActive={tab === tabs[2]}>
							{t('main:moreMoneyTab3')}
						</Button>
					</ButtonsWrapper>
					<List>
						<Item>{tab.textLines[0]}</Item>
						<Item>{tab.textLines[1]}</Item>
						<Item>{tab.textLines[2]}</Item>
					</List>
					<BottomButton>
						<Link href='/features'>{t('main:moreMoneyButton')}</Link>
					</BottomButton>
				</Inner>
			</FeaturesCon>
			<GreySquare />
			<PurpleSquare>
				<RedSquare>
					<Null>
						<LeftMock isActive={tab.name === 'Chats'}>
							<ImageInner>
								<Image src={chatLeft} alt={tab.name} layout='fill' objectFit='contain' />
							</ImageInner>
						</LeftMock>
						<RightMock isActive={tab.name === 'Chats'}>
							<ImageInner>
								<Image src={chatRight} alt={tab.name} layout='fill' objectFit='contain' />
							</ImageInner>
						</RightMock>
						<LeftMock isActive={tab.name === 'Orders'}>
							<ImageInner>
								<Image src={orderLeft} alt={tab.name} layout='fill' objectFit='contain' />
							</ImageInner>
						</LeftMock>
						<RightMock isActive={tab.name === 'Orders'}>
							<ImageInner>
								<Image src={orderRight} alt={tab.name} layout='fill' objectFit='contain' />
							</ImageInner>
						</RightMock>
						<LeftMock isActive={tab.name === 'Payments'}>
							<ImageInner>
								<Image src={payLeft} alt={tab.name} layout='fill' objectFit='contain' />
							</ImageInner>
						</LeftMock>
						<RightMock isActive={tab.name === 'Payments'}>
							<ImageInner>
								<Image src={payRight} alt={tab.name} layout='fill' objectFit='contain' />
							</ImageInner>
						</RightMock>
						<Stars>
							<Image src='/images/main/moreMoney/stars.svg' alt='Stars' width={191} height={198} />
						</Stars>
						<Dots>
							<Image src='/images/main/moreMoney/dots.png' alt='Dots' width={313} height={237} />
						</Dots>
					</Null>
				</RedSquare>
			</PurpleSquare>
			<MobRightDots>
				<Image src='/images/main/moreMoney/mob-right-dots.png' alt='Dots' width={158} height={184} />
			</MobRightDots>
		</Wrapper>
	);
};

const ImageInner = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
`;

const LeftMock = styled.div<{ isActive: boolean }>`
	position: absolute;
	left: -139px;
	top: -102px;
	width: 300px;
	height: 488px;
	transition: opacity 0.4s ease-in;
	opacity: ${({ isActive }) => (isActive ? '1' : '0')};

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

const RightMock = styled.div<{ isActive: boolean }>`
	position: absolute;
	left: 116px;
	top: 42px;
	background-size: contain;
	width: 300px;
	height: 488px;
	transition: opacity 0.4s ease-in 0.2s;
	opacity: ${({ isActive }) => (isActive ? '1' : '0')};

	@media (max-width: 1023px) {
		top: 0;
		left: 47%;
		width: 330px;
		height: 536px;
	}
	@media (max-width: 425px) {
		width: 225px;
	}
`;

const Wrapper = styled.div`
	width: 100%;
	position: relative;
	height: 765px;
	margin-top: 0px;

	@media (min-width: 768px) {
		// margin-bottom: auto;
		height: 896px;
		margin-top: 0px;
	}
	@media (min-width: 1024px) {
		margin-bottom: auto;
		height: 701px;
		// margin-top: 0px;
	}
	@media (min-width: 1280px) {
		margin-bottom: auto;
		height: 295px;
		// margin-top: 0px;
	}
	@media (min-width: 1440px) {
		width: 100%;
		position: relative;
		height: 706px;
		margin-top: 299px;
		// margin-top: 0px;
	}
`;

const GreySquare = styled.div`
	width: 477.93px;
	height: 477.93px;
	background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(218, 218, 218, 0.15) 0%, rgba(250, 250, 250, 0.15) 100%);
	border-radius: 28.2072px;
	transform: rotate(-45deg);
	position: absolute;
	// left: 71px;

	right: auto;
	top: 221px;
	left: -277px;
	@media (min-width: 1280px) {
		width: 477.93px;
		height: 477.93px;
		background: radial-gradient(
			95.51% 95.51% at 50% 50%,
			rgba(218, 218, 218, 0.15) 0%,
			rgba(250, 250, 250, 0.15) 100%
		);
		border-radius: 28.2072px;
		transform: rotate(-45deg);
		position: absolute;
		top: 108px;
		// left: 71px;
		left: unset;
		right: calc(50% + 400px);
	}
`;

const PurpleSquare = styled.div`
	position: relative;
	background: rgba(251, 36, 43, 0.6);
	border-radius: 72px;
	transform: rotate(-45deg) translateX(-71%);
	display: flex;
	align-items: center;
	justify-content: center;
	top: -120px;
	left: 50%;
	width: 451px;
	height: 451px;
	margin-top: 57px;
	@media (min-width: 768px) {
		position: relative;
		top: -120px;
		left: 50%;
		transform: rotate(-45deg) translateX(-71%);
		width: 559.25px;
		height: 559.25px;
		margin-top: 40px;
	}
	@media (min-width: 1024px) {
		left: 57%;
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
		margin-top: 0px;
	}
	@media (min-width: 1280px) {
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
	}
`;

const RedSquare = styled.div`
	background: #fb242b;
	border-radius: 62px;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 395px;
	height: 395px;
	@media (min-width: 768px) {
		width: 489.69px;
		height: 489.69px;
		background: #fb242b;
		border-radius: 62px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

const Null = styled.div`
	transform: rotate(45deg);
	width: 400px;
	height: 400px;
	position: relative;
`;

const Dots = styled.div`
	position: absolute;
	left: 133px;
	top: -78px;
	@media (min-width: 768px) {
		position: absolute;
		left: 133px;
		top: -78px;
	}
`;

const Stars = styled.div`
	position: absolute;
	left: -202px;
	top: -107px;

	@media (min-width: 1024px) {
		position: absolute;
		left: -251px;
		top: -57px;
	}
`;

const Title = styled.h3`
	font-family: 'Gilroy';
	font-style: normal;
	font-weight: 600;
	color: #212121;
	margin: 0 0 24px 0;
	font-size: 28px;
	line-height: 34px;
	padding: 140px 0 0 0;
	text-align: center;
	@media (min-width: 768px) {
		text-align: center;
		margin: 0 0 24px 0;
		font-size: 32px;
		line-height: 39px;
		padding: 190px 0 0 0;
	}
	@media (min-width: 1024px) {
		font-size: 36px;
		line-height: 44px;
		text-align: left;
		margin: 290px 0 24px 0;
	}
	@media (min-width: 1280px) {
		font-size: 36px;
		line-height: 44px;
		text-align: left;
	}
	@media (min-width: 1920px) {
		font-family: 'Gilroy';
		font-style: normal;
		font-weight: 600;
		font-size: 44px;
		line-height: 54px;
		color: #212121;
		margin: 90px 0 24px 0;
		padding: 190px 0 0 0;
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
	min-width: 170px;
	text-align: center;

	@media (min-width: 768px) {
		display: inline-block;
		min-width: 192px;
		text-align: left;
	}
`;
const TitleSpan = styled.span<{ isVisible: boolean; isBackwards: boolean; isIncreased: boolean }>`
	color: #ff474d;
	margin: 0;
	padding: 0;
	position: relative;
	white-space: nowrap;
	width: max-content;

	&::before,
	&::after {
		content: '';
		position: absolute;
		top: ${({ isIncreased }) => (isIncreased ? '-7px' : '3px')};
		bottom: 0;
		right: -5px;
		left: 0;
		height: ${({ isIncreased }) => (isIncreased ? '44px' : '32px')};

		@media (min-width: 768px) {
			height: ${({ isIncreased }) => (isIncreased ? '50px' : '36px')};
			top: ${({ isIncreased }) => (isIncreased ? '-9px' : '3px')};
		}
		@media (min-width: 1024px) {
			height: ${({ isIncreased }) => (isIncreased ? '54px' : '40px')};
			top: ${({ isIncreased }) => (isIncreased ? '-9px' : '3px')};
		}
		@media (min-width: 1920px) {
			height: ${({ isIncreased }) => (isIncreased ? '65px' : '53px')};
			top: ${({ isIncreased }) => (isIncreased ? '-11px' : '3px')};
		}
	}

	&:after {
		width: 2px;
		background: #212121;

		// @media (min-width: 768px) {
		// 	height: 30px;
		// }
		// @media (min-width: 1024px) {
		// 	background: #212121;
		// 	height: ${({ isIncreased }) => (isIncreased ? '54px' : '40px')};
		// 	width: 2px;
		// 	content: '';
		// 	position: absolute;
		// 	top: ${({ isIncreased }) => (isIncreased ? '-8px' : '3px')};
		// }
	}

	${({ isVisible, isBackwards }) =>
		isVisible &&
		css`
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
	margin: 0 auto 24px;
	width: 100%;
	padding: 0;

	@media (min-width: 1024px) {
		display: flex;
		justify-content: space-between;
		max-width: 387px;
		margin: 0 0 24px 0;
		width: 100%;
		padding: 0;
	}
`;
const Inner = styled.div`
	position: relative;
	max-width: 335px;
	width: 100%;
	z-index: 1;
	margin: 0 auto;
	@media (min-width: 768px) {
		margin: 0 auto;
		// max-width: 408px;
		max-width: 500px;
	}
	@media (min-width: 1024px) {
		// margin: 0 auto;
		max-width: 500px;
		margin: 0;
	}
	@media (min-width: 1280px) {
		// margin: 0 auto;
		margin: 0;
	}

	@media (min-width: 1440px) {
		// margin: 0 auto;
		position: relative;
		max-width: 555px;
		width: 100%;
		z-index: 1;
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
	margin: 0 16px 0 0;
	-webkit-tap-highlight-color: transparent;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	&:focus {
		outline: none !important;
	}
	&:hover {
		background: #f3f4f599;
	}
	&:last-of-type {
		margin-right: 0;
	}
	@media (min-width: 1440px) {
		margin: 0;
	}
`;

const BottomButton = styled.div`
	& > a {
		display: block;
		font-size: 16px;
		line-height: 20px;
		font-family: 'Gilroy', sans-serif;
		font-weight: 700;
		width: 180px;
		height: 48px;
		color: var(--text-white);
		text-align: center;
		text-decoration: none;
		padding: 14px 0;
		margin: 32px auto 0;
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
			background-color: var(--text-primary-hover);
		}

		@media (min-width: 1024px) {
			margin: 32px 0 0 0;
		}

		@media (min-width: 1920px) {
			width: 210px;
			height: 56px;
			font-size: 20px;
			line-height: 25px;
			border-radius: 18px;
			padding: 16px 0;
		}
	}
`;

const List = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
	@media (min-width: 768px) {
		margin: 0 0 0 50px;
	}
	@media (min-width: 1024px) {
		margin: 0;
		padding-left: 20px;
	}
	@media (min-width: 1280px) {
		padding-left: 0px;
	}
`;

const Item = styled.li`
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;

	color: #212121;
	margin: 0 0 8px 0;
	padding: 0 0 0 27px;
	position: relative;
	font-size: 14px;
	line-height: 20px;
	&:last-child {
		margin: 0;
	}
	&:before {
		content: '';
		position: absolute;
		background: url('/images/main/moreMoney/square.svg');
		width: 14px;
		height: 14px;
		left: 0;
		top: 4px;
	}
	@media (min-width: 1px) {
		font-size: 14px;
		line-height: 20px;
	}
	@media (min-width: 768px) {
		margin: 0 0 12px -20px;
		font-size: 16px;
		line-height: 23px;
		&:last-child {
			margin: 0 0 0 -20px;
		}
	}
	@media (min-width: 1024px) {
		&:last-child {
			margin: 0 0 0 -20px;
		}
	}
	@media (min-width: 1280px) {
		font-family: 'Inter';
		font-style: normal;
		font-weight: 400;
		color: #212121;
		margin: 0 0 8px 0;
		padding: 0 0 0 27px;
		position: relative;
		&:last-child {
			margin: 0;
		}
	}

	@media (min-width: 1920px) {
		font-size: 18px;
		line-height: 23px;
	}
`;

const MobRightDots = styled.div`
	display: block;
	position: absolute;
	top: 58%;
	right: 0;
	transform: translateX(50%);

	@media (min-width: 1024px) {
		display: none;
	}
`;

export default MoreMoney;
