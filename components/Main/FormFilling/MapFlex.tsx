import React, { FC, RefObject, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';
import FadeIn from '../../common/FadeIn/FadeIn';

const MapFlex: FC = () => {
	const [isShow, setIsShow] = useState(false);
	const ref = useRef() as RefObject<HTMLDivElement>;
	const entry = useIntersectionObserver(ref, {});
	const isVisible = !!entry?.isIntersecting;

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
					<FadeIn duration={1500} delay={1000}>
						<HongKong>
							<img
								className='hong-kong'
								src='./images/main/map/countries/hong-kong.png'
								srcSet='./images/main/map/countries/hong-kong@2x.png 2x'
								alt='Hong-Kong'
							/>
							<Point name='Hong-Kong' top={-175} left={0} />
						</HongKong>
					</FadeIn>
					<FadeIn duration={1500} delay={500}>
						<Indonesia>
							<img
								className='indonesia'
								src='./images/main/map/countries/indonesia.png'
								srcSet='./images/main/map/countries/indonesia@2x.png 2x'
								alt='Indonesia'
							/>
							<Point name='Indonesia' top={65} left={23.5} />
						</Indonesia>
					</FadeIn>
					<FadeIn duration={1500} delay={1500}>
						<Philippines>
							<img
								className='philippines'
								src='./images/main/map/countries/philippines.png'
								srcSet='./images/main/map/countries/philippines@2x.png 2x'
								alt='Philippines'
							/>
							<Point name='Philippines' top={2} left={16} />
						</Philippines>
					</FadeIn>
					<FadeIn duration={1500} delay={0}>
						<Singapore>
							<img
								className='singapore'
								src='./images/main/map/countries/singapore.png'
								srcSet='./images/main/map/countries/singapore@2x.png 2x'
								alt='Singapore'
							/>
							<Point name='Singapore' top={-190} left={15} />
						</Singapore>
					</FadeIn>
					<FadeIn duration={1500} delay={2000}>
						<Thailand>
							<img
								className='thailand'
								src='./images/main/map/countries/thailand.png'
								srcSet='./images/main/map/countries/thailand@2x.png 2x'
								alt='Thailand'
							/>
							<Point name='Thailand' top={-1} left={15} />
						</Thailand>
					</FadeIn>
					<FadeIn duration={1500} delay={2500}>
						<Vietnam>
							<img
								className='vietnam'
								src='./images/main/map/countries/vietnam.png'
								srcSet='./images/main/map/countries/vietnam@2x.png 2x'
								alt='Vietnam'
							/>
							<Point name='Vietnam' top={-6} left={24} />
						</Vietnam>
					</FadeIn>
					<FadeIn duration={1500} delay={2500}>
						<TextBox>
							<Arrow>
								<img src='./images/main/map/arrow-line-text/arrow-icon.svg' alt='arrow' />
							</Arrow>
							<Line>
								<img src='./images/main/map/arrow-line-text/arch-line-icon.svg' alt='line' />
							</Line>
							<Text>
								<img src='./images/main/map/arrow-line-text/meet-icon.svg' alt='meet us in' />
							</Text>
						</TextBox>
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

	& img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	@media (max-width: 1440px) {
		width: 934px;
		height: 654px;
	}
	@media (max-width: 1023px) {
		width: 1071px;
		height: 750px;
	}
	@media (max-width: 767px) {
		width: 710px;
		height: 496px;
	}
`;

const Point = styled.div<{ name: string; top: number; left: number }>`
	position: absolute;
	top: ${({ top }) => top}%;
	left: ${({ left }) => left}%;
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

	@media (max-width: 767px) {
		top: ${({ top }) => top - 4}%;
	}
`;

const HongKong = styled.div`
	position: absolute;
	top: 48.1%;
	left: 56.45%;
	width: 0.9%;
	height: 1.3%;
	& > div {
		@media (max-width: 767px) {
			top: -245%;
			left: -30%;
		}
	}
`;
const Indonesia = styled.div`
	position: absolute;
	top: 75%;
	left: 39.7%;
	width: 48%;
	height: 25%;
`;
const Philippines = styled.div`
	position: absolute;
	top: 52.55%;
	left: 63.2%;
	width: 9.3%;
	height: 25%;
`;
const Singapore = styled.div`
	position: absolute;
	top: 81.1%;
	left: 47.8%;
	width: 1.5%;
	height: 1%;

	& > div {
		@media (max-width: 767px) {
			top: -293%;
			left: -3%;
		}
	}
`;
const SingaporeStartAnimation = styled(Singapore)`
	z-index: -1;
`;
const Thailand = styled.div`
	position: absolute;
	top: 50.5%;
	left: 40.85%;
	width: 8%;
	height: 26%;
`;
const Vietnam = styled.div`
	position: absolute;
	top: 47.1%;
	left: 44.8%;
	width: 9.5%;
	height: 24%;
`;

const TextBox = styled.div`
	position: absolute;
	top: 49%;
	left: 70%;
	width: 20%;
	height: 20%;
`;
const Arrow = styled.div`
	position: absolute;
	bottom: 17.5%;
	left: 26%;
	width: 5%;
	height: 12.4%;
`;
const Line = styled.div`
	position: absolute;
	bottom: 3%;
	left: 31%;
	width: 57%;
	height: 84%;
`;
const Text = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	width: 54%;
	height: 11%;
`;

export default MapFlex;