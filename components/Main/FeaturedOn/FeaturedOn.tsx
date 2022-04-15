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
			<Stars src='images/main/featuredOn/stars.svg' alt='' />

			<Wrapper>
				<GreySquare />
				<GreySquareRight top='-279' right='88' />
				<Dots src='images/main/featuredOn/dots.svg' alt='' />

				<Container>
					<Inner ref={typeRef}>
						<Title offset={offset - TOP_OFFSET}>Featured On</Title>
						<Companies offset={offset - TOP_OFFSET}>
							<Company src='images/main/featuredOn/techCrunch.svg' alt='' />
							<Company src='images/main/featuredOn/techInAsia.svg' alt='' />
							<Company src='images/main/featuredOn/pymnts.svg' alt='' />
							<Company src='images/main/featuredOn/ventureBeat.svg' alt='' />
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
	@media (max-width: 950px) {
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
	// width: 666px;
	border-bottom: 1px solid #d2d2d2;
	text-align: center;
	position: relative;
	right: ${({ offset }) => offset}vw;
	scroll-behavior: smooth;

	@media (max-width: 768px) {
		max-width: 336px;
	}
	@media (max-width: 425px) {
		max-width: 253px;
		font-size: 28px;
		line-height: 33px;
	}
`;

const Companies = styled.div<{ offset: number }>`
	display: flex;
	justify-content: space-between;
	max-width: 1132px;
	width: 100%;
	flex-wrap: wrap;
	position: relative;
	left: ${({ offset }) => offset}vw;
	@media (max-width: 950px) {
		max-width: 600px;
	}
	@media (max-width: 490px) {
		max-width: 190px;
		justify-content: center;
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
`;
export const Stars = styled.img`
	position: absolute;
	top: 60px;
	right: 1px;
	z-index: -1;
	@media (max-width: 950px) {
		display: none;
	}
`;

export default MoreMoney;
