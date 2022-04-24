import React, { FC, RefObject, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';
import FadeIn from '../../common/FadeIn/FadeIn';

const Map: FC = () => {
	const [isShow, setIsShow] = useState(false);
	const ref = useRef() as RefObject<HTMLDivElement>;
	const entry = useIntersectionObserver(ref, {});
	const isVisible = !!entry?.isIntersecting;
	console.log(isVisible);

	useEffect(() => {
		if (isVisible && !isShow) {
			setIsShow(true);
		}
	}, [isVisible]);

	return (
		<Wrapper>
			<img className='map' src='./images/main/map/map-grey.png' alt='map' />
			<SingaporeStartAnimation ref={ref} />
			{isShow && (
				<>
					<FadeIn duration={2000} delay={1000}>
						<HongKong>
							<img
								className='hong-kong'
								src='./images/main/map/countries/hong-kong.png'
								srcSet='./images/main/map/countries/hong-kong@2x.png 2x'
								alt='Hong-Kong'
							/>
							<Point name='Hong-Kong' top={-12} left={-2} />
						</HongKong>
					</FadeIn>
					<FadeIn duration={2000} delay={500}>
						<Indonesia>
							<img
								className='indonesia'
								src='./images/main/map/countries/indonesia.png'
								srcSet='./images/main/map/countries/indonesia@2x.png 2x'
								alt='Indonesia'
							/>
							<Point name='Indonesia' top={110} left={112} />
						</Indonesia>
					</FadeIn>
					<FadeIn duration={2000} delay={1500}>
						<Philippines>
							<img
								className='philippines'
								src='./images/main/map/countries/philippines.png'
								srcSet='./images/main/map/countries/philippines@2x.png 2x'
								alt='Philippines'
							/>
							<Point name='Philippines' top={-17} left={15} />
						</Philippines>
					</FadeIn>
					<FadeIn duration={2000} delay={0}>
						<Singapore>
							<img
								className='singapore'
								src='./images/main/map/countries/singapore.png'
								srcSet='./images/main/map/countries/singapore@2x.png 2x'
								alt='Singapore'
							/>
							<Point name='Singapore' top={-6} left={2} />
						</Singapore>
					</FadeIn>
					<FadeIn duration={2000} delay={2000}>
						<Thailand>
							<img
								className='thailand'
								src='./images/main/map/countries/thailand.png'
								srcSet='./images/main/map/countries/thailand@2x.png 2x'
								alt='Thailand'
							/>
							<Point name='Thailand' top={-12} left={11} />
						</Thailand>
					</FadeIn>
					<FadeIn duration={2000} delay={2500}>
						<Vietnam>
							<img
								className='vietnam'
								src='./images/main/map/countries/vietnam.png'
								srcSet='./images/main/map/countries/vietnam@2x.png 2x'
								alt='Vietnam'
							/>
							<Point name='Vietnam' top={-16} left={22} />
						</Vietnam>
					</FadeIn>
					<FadeIn duration={2000} delay={2500}>
						<Arrow>
							<img src='./images/main/map/arrow-line-text/arrow-icon.svg' alt='arrow' />
						</Arrow>
						<Line>
							<img src='./images/main/map/arrow-line-text/arch-line-icon.svg' alt='line' />
						</Line>
						<Text>
							<img src='./images/main/map/arrow-line-text/meet-icon.svg' alt='meet us in' />
						</Text>
					</FadeIn>
				</>
			)}
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 986px;
	height: 688px;
	position: relative;
`;

const SingaporeStartAnimation = styled.div`
	position: absolute;
	top: 551px;
	left: 471px;
	z-index: -1;
`;

const Point = styled.div<{ name: string; top: number; left: number }>`
	position: absolute;
	top: ${({ top }) => top}px;
	left: ${({ left }) => left}px;
	width: 12px;
	height: 16px;
	background: url('./images/main/map/point-icon.svg');
	z-index: 1;
	cursor: pointer;
	transition: all 0.3s ease;

	&:after,
	&:before {
		content: '${({ name }) => name}';
		position: absolute;
		bottom: 250%;
		left: 50%;
		transform: translate(-50%, 50%);
		opacity: 0;
		visibility: hidden;
		font-family: 'Gilroy';
		font-style: normal;
		font-weight: 600;
		font-size: 14px;
		line-height: 17px;
		white-space: nowrap;
		cursor: none;
		transition: all 0.3s ease;
		z-index: 2;
	}
	&:after {
		color: #ff474d;
		padding: 8px 16px;
		background-color: #ffffff;
		border-radius: 7px;
	}
	&:before {
		color: transparent;
		padding: 16px 24px;
		background-color: rgb(255, 255, 255, 60%);
		border-radius: 7px;
	}
	&:hover {
		z-index: 2;
		&:after,
		&:before {
			opacity: 1;
			visibility: visible;
		}
	}
`;

const HongKong = styled.div`
	position: absolute;
	top: 325px;
	left: 560px;
`;
const Indonesia = styled.div`
	position: absolute;
	top: 518px;
	left: 392px;
`;
const Philippines = styled.div`
	position: absolute;
	top: 382px;
	left: 624px;
`;
const Singapore = styled.div`
	position: absolute;
	top: 551px;
	left: 471px;
`;
const Thailand = styled.div`
	position: absolute;
	top: 359px;
	left: 404px;
`;
const Vietnam = styled.div`
	position: absolute;
	top: 330px;
	left: 443px;
`;

const Arrow = styled.div`
	position: absolute;
	top: 437px;
	left: 745px;
`;
const Line = styled.div`
	position: absolute;
	top: 360px;
	left: 753px;
`;
const Text = styled.div`
	position: absolute;
	top: 340px;
	left: 786px;
`;

export default Map;
