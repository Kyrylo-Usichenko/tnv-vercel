import React, { FC, RefObject, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';
import { Container } from '../../common/Container/Container';

const TOP_OFFSET = 30;

const MoreMoney: FC = () => {
	const [offset, setOffset] = useState(TOP_OFFSET);
	const typeRef = useRef() as RefObject<HTMLDivElement>;
	const entry = useIntersectionObserver(typeRef, {});
	const isVisible = !!entry?.isIntersecting;

	useEffect(() => {
		const updateOffset = () => {
			const screenHeight = window.innerHeight;

			if (isVisible) {
				const pos = typeRef.current!.getBoundingClientRect().top;
				const offsetPos = (pos / screenHeight) * 100;
				setOffset(offsetPos - TOP_OFFSET >= 0 ? offsetPos : TOP_OFFSET);
			}
		};

		const onScroll = () => {
			window.requestAnimationFrame(updateOffset);
		};

		window.addEventListener('scroll', onScroll);

		return () => window.removeEventListener('scroll', onScroll);
	}, [isVisible]);

	return (
		<Styled>
			<Stars alt='' />

			<Wrapper>
				<GreySquare />
				<GreySquareRight top='-279' right='88' />
				<Dots src='images/main/featuredOn/dots.svg' alt='' />
				<DivideLine />

				<Container>
					<Inner ref={typeRef}>
						<Title offset={offset - TOP_OFFSET}>Featured On</Title>
						<Companies offset={offset - TOP_OFFSET}>
							<Company1 src='images/main/featuredOn/techCrunch.svg' alt='' />
							<Company2 src='images/main/featuredOn/techInAsia.svg' alt='' />
							<Company3 src='images/main/featuredOn/pymnts.svg' alt='' />
							<Company4 src='images/main/featuredOn/ventureBeat.svg' alt='' />
						</Companies>
					</Inner>
				</Container>
			</Wrapper>
		</Styled>
	);
};

const Wrapper = styled.div`
	background: radial-gradient(129.72% 141.01% at 50% 50%, #f7f7f7 0%, #fafafa 100%);
	border-radius: 0 40px 40px 0;
	margin-right: 54px;
	position: relative;
	overflow: hidden;
	padding-bottom: 48px;

	@media (max-width: 1280px) {
		margin-top: 560px;
	}
	@media (max-width: 1024px) {
		margin-right: 0;
	}
	@media (max-width: 975px) {
		padding-bottom: 0;
	}
	@media (max-width: 768px) {
		margin-top: 500px;
	}
`;

const Styled = styled.div`
	position: relative;
`;
const Company = styled.img`
	@media (max-width: 950px) {
		margin-bottom: 60px;
	}
`;

const Company1 = styled(Company)`
	@media (min-width: 320px) {
		width: 189px;
	}
	@media (min-width: 1920px) {
		width: 222.75px;
	}
`;
const Company2 = styled(Company)`
	@media (min-width: 320px) {
		width: 203px;
	}
	@media (min-width: 1920px) {
		width: 228px;
	}
`;
const Company3 = styled(Company)`
	@media (min-width: 320px) {
		width: 153px;
	}
	@media (min-width: 1920px) {
		width: 187px;
	}
`;
const Company4 = styled(Company)`
	@media (min-width: 320px) {
		width: 169px;
		@media (min-width: 1920px) {
			width: 211px;
		}
	}
`;

const Inner = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Title = styled.h4<{ offset: number }>`
	font-family: 'Gilroy';
	font-style: normal;
	font-weight: 600;
	font-size: 44px;
	line-height: 54px;
	color: #212121;
	margin: 0 0 32px 0;
	padding: 48px 0 16px 0;
	// width: 660px;
	// border-bottom: 1px solid #d2d2d2;
	text-align: center;
	position: relative;
	right: ${({ offset }) => offset}vw;
	scroll-behavior: smooth;

	@media (max-width: 1440px) {
		font-size: 36px;
		line-height: 42px;
	}
	@media (max-width: 1024px) {
		font-size: 32px;
		line-height: 38px;
	}
	@media (max-width: 768px) {
		max-width: 336px;
	}
	@media (max-width: 440px) {
		max-width: 253px;
		font-size: 28px;
		line-height: 33px;
		padding-bottom: 24px;
	}
`;

const Companies = styled.div<{ offset: number }>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 1132px;
	width: 100%;
	flex-wrap: wrap;
	position: relative;
	left: ${({ offset }) => offset}vw;

	@media (max-width: 1024px) {
		padding-left: 40px;
		padding-right: 40px;
		& img {
			height: 22px;
			max-height: 100%;
		}
		& img:nth-child(2) {
			min-height: 40px;
		}
	}
	@media (max-width: 975px) {
		flex-wrap: wrap;
		max-width: 570px;
		& img {
			flex: 0 0 50%;
			margin-bottom: 48px;
		}
	}

	@media (max-width: 575px) {
		justify-content: center;
		padding-left: 20px;
		padding-right: 20px;
		& img {
			flex: 0 0 100%;
		}
		& img:nth-child(1) {
			min-height: 28px;
		}
	}
`;

export const GreySquare = styled.div`
	width: 505.8px;
	height: 505.8px;
	background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(250, 250, 250, 0.2) 100%);
	border-radius: 94.9017px;
	transform: rotate(-45deg);
	position: absolute;
	top: -90px;
	left: 234px;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 0;
	overflow: hidden;
	@media (max-width: 425px) {
		top: 119px;
		left: 334px;
	}
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

	@media (max-width: 1024px) {
		right: -15%;
	}
`;
export const Stars = styled.div`
	position: absolute;
	top: 60px;
	right: 1px;
	z-index: -1;
	width: 946px;
	height: 393px;
	background: url('images/main/featuredOn/stars.svg') no-repeat;
	@media (max-width: 1440px) {
		top: 40px;
	}
	@media (max-width: 1024px) {
		top: 45px;
	}
	@media (max-width: 950px) {
		//display: none;
		right: 0;
		top: 108px;
	}
	@media (max-width: 425px) {
		//display: none;
		right: 0;
		top: 389px;
		background: url('images/main/featuredOn/stars375.svg') no-repeat;
		background-size: contain;
		width: 353px;
		height: 213px;
	}
`;
const DivideLine = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	width: 665px;
	height: 1px;
	transform: translateX(-50%);
	background-color: #d2d2d2;
	@media (max-width: 975px) {
		width: 336px;
		top: 108px;
	}
	@media (max-width: 440px) {
		width: 253px;
		top: 104px;
	}
`;

export default MoreMoney;
