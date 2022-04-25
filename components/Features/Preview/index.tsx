import React, { FC, RefObject, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FeaturesCon } from '../../common/Container/Container';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';

type PreviewProps = {
	openModal: () => void;
};

const Preview: FC<PreviewProps> = ({ openModal }) => {
	const heading = useRef() as RefObject<HTMLHeadingElement>;
	const entry = useIntersectionObserver(heading, {});

	const pic1 = useRef() as RefObject<HTMLPictureElement>;
	const pic2 = useRef() as RefObject<HTMLPictureElement>;

	useEffect(() => {
		const isVisible = !!entry?.isIntersecting;

		const dec1 = pic1?.current;
		const dec2 = pic2?.current;

		const scrollHeight = Math.max(
			document.body.scrollHeight,
			document.documentElement.scrollHeight,
			document.body.offsetHeight,
			document.documentElement.offsetHeight,
			document.body.clientHeight,
			document.documentElement.clientHeight,
		);

		const updateScale = () => {
			const scrolled = (window.scrollY / (scrollHeight - window.innerHeight)) * 30;
			const scale = 1 + scrolled;
			const opacity = 1 - scrolled;

			dec1!.style.transform = `scale(${scale})`;
			dec2!.style.transform = `scale(${scale})`;

			dec1!.style.opacity = `${opacity}`;
			dec2!.style.opacity = `${opacity}`;
		};

		const onScroll = () => {
			window.requestAnimationFrame(updateScale);
		};

		if (isVisible) {
			window.addEventListener('scroll', onScroll);
		} else {
			window.removeEventListener('scroll', onScroll);
		}

		return () => window.removeEventListener('scroll', onScroll);
	}, [entry]);

	return (
		<StyledPreview>
			<FeaturesCon>
				<PreviewInfo>
					<PreviewTitle ref={heading}>
						<PreviewDec1 ref={pic1}>
							<source srcSet='/images/features/preview/dec1-1920.svg' media='(min-width: 1024px)' />
							<img src='/images/features/preview/dec1-768.svg' alt='decoration' />
						</PreviewDec1>
						One dashboard, all your supply chain transactions
						<PreviewDec2 ref={pic2}>
							<source srcSet='/images/features/preview/dec2-1920.svg' media='(min-width: 1024px)' />
							<img src='/images/features/preview/dec2-768.svg' alt='decoration' />
						</PreviewDec2>
					</PreviewTitle>
					<PreviewText>
						From orders to real-time cash in your bank. Run your business like a rockstar.
					</PreviewText>
					<PreviewButton type='button' onClick={openModal}>
						Try it for free
					</PreviewButton>
					<PreviewImg>
						<picture>
							<source
								srcSet='/images/features/preview/man-1920.jpg 1x, /images/features/preview/man-1920@2x.jpg 2x'
								media='(min-width: 1920px)'
							/>
							<source
								srcSet='/images/features/preview/man-1440.jpg 1x, /images/features/preview/man-1440@2x.jpg 2x'
								media='(min-width: 1440px)'
							/>
							<source
								srcSet='/images/features/preview/man-1280.jpg 1x, /images/features/preview/man-1280@2x.jpg 2x'
								media='(min-width: 1280px)'
							/>
							<source
								srcSet='/images/features/preview/man-1024.jpg 1x, /images/features/preview/man-1024@2x.jpg 2x'
								media='(min-width: 1024px)'
							/>
							<source
								srcSet='/images/features/preview/man-768.jpg 1x, /images/features/preview/man-768@2x.jpg 2x'
								media='(min-width: 768px)'
							/>
							<img
								src='/images/features/preview/man-375.jpg'
								srcSet='/images/features/preview/man-375@2x.jpg 2x'
								alt='Man holding smartphone'
								width={1190}
								height={600}
							/>
						</picture>
						<AppImg
							src='/images/features/preview/app.png'
							srcSet='/images/features/preview/app@2x.png 2x'
							alt='message'
						/>
						<Request>
							<PaymentIco>
								<img src='/images/features/preview/file.svg' alt='file' />
							</PaymentIco>
							<Payment>
								<PaymentCon>
									<PaymentTitle>Payment Requested</PaymentTitle>
									<PaymentArrow src='/images/features/preview/arrow.svg' alt='arrow' />
								</PaymentCon>
								<PaymentText>INV-HDNSD5H</PaymentText>
								<PaymentCon>
									<PaymentPrice>$ 450.00</PaymentPrice>
									<PaymentTime>5:26 PM</PaymentTime>
								</PaymentCon>
							</Payment>
						</Request>
						<PreviewImgDeco1 />
						<PreviewImgDeco2 />
						<PreviewImgDeco3 />
					</PreviewImg>
				</PreviewInfo>
			</FeaturesCon>
		</StyledPreview>
	);
};

const StyledPreview = styled.section`
	overflow: hidden;

	& > div {
		max-width: 375px;
		padding: 0 16px;
		margin: 0 auto;
		position: relative;

		@media (min-width: 768px) {
			max-width: 768px;
		}

		@media (min-width: 1024px) {
			max-width: 1024px;
			padding: 0 40px;
		}

		@media (min-width: 1280px) {
			max-width: 1032px;
			padding: 0;
		}

		@media (min-width: 1440px) {
			max-width: 1192px;
		}

		@media (min-width: 1920px) {
			max-width: 1312px;
		}
	}
`;

const PreviewInfo = styled.div`
	padding: 144px 0 180px 0;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (max-width: 768px) {
		padding: 142px 0 180px 0;
	}
`;

const PreviewTitle = styled.h2`
	text-align: center;
	font-family: 'Gilroy';
	font-weight: 600;
	font-size: 28px;
	line-height: 34px;
	max-width: 345px;
	color: var(--text-main);
	margin: 0 0 16px 0;
	position: relative;

	@media (min-width: 768px) {
		font-size: 36px;
		line-height: 44px;
		max-width: 430px;
	}

	@media (min-width: 1024px) {
		font-size: 44px;
		line-height: 52px;
		max-width: 535px;
	}

	@media (min-width: 1280px) {
		font-size: 48px;
		line-height: 59px;
		margin: 0 0 16px 0;
		max-width: 600px;
	}

	@media (min-width: 1920px) {
		font-size: 56px;
		line-height: 69px;
		max-width: 685px;
	}
`;

const PreviewDec1 = styled.picture`
	position: absolute;
	top: -22px;
	left: -8px;

	@media (min-width: 1024px) {
		top: -30px;
		left: -7px;
	}
`;

const PreviewDec2 = styled.picture`
	position: absolute;
	right: -43px;
	bottom: -15px;
	z-index: -1;

	@media (min-width: 1024px) {
		right: -60px;
		bottom: -25px;
	}

	@media (min-width: 1280px) {
		&::after {
			right: -60px;
			bottom: -25px;
		}
	}
`;

const PreviewText = styled.p`
	font-family: 'Inter';
	font-weight: 400;
	font-size: 14px;
	line-height: 22px;
	text-align: center;
	color: var(--text-second);
	max-width: 345px;
	margin: 0 0 31px 0;

	@media (min-width: 768px) {
		font-size: 16px;
		line-height: 23px;
		max-width: 350px;
	}

	@media (min-width: 1280px) {
		font-size: 18px;
		line-height: 24px;
		max-width: 400px;
		margin: 0 0 32px 0;
	}

	@media (min-width: 1920px) {
		font-size: 20px;
		line-height: 25px;
		max-width: 420px;
	}
`;

const PreviewButton = styled.button`
	font-family: 'Gilroy', sans-serif;
	font-weight: 700;
	font-size: 16px;
	line-height: 20px;
	margin-bottom: 48px;
	width: 188px;
	height: 48px;
	color: var(--text-white);
	text-align: center;
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
		background-color: var(--text-primary);
		box-shadow: 8px 4px 20px 0 var(--shadow-color);
	}

	@media (min-width: 768px) {
		margin-bottom: 66px;
	}

	@media (min-width: 1920px) {
		font-size: 20px;
		line-height: 25px;
		width: 219px;
		height: 56px;
	}
`;

const PreviewImg = styled.div`
	position: relative;
	width: 100%;

	& > picture:nth-child(1) > img {
		border-radius: 44px;
		width: 100%;
		height: auto;
	}

	&::before {
		content: '';
		position: absolute;
		width: 569px;
		height: 569px;
		top: -97px;
		left: -360px;
		z-index: -1;
		background: var(--bg-radial-15);
		border-radius: 53px;
		transform: rotate(-45deg);
	}

	@media (min-width: 1024px) {
		&::before {
			left: -400px;
		}
	}

	@media (min-width: 1280px) {
		& > picture:nth-child(1) > img {
			border-radius: 48px;
		}
	}
`;

const AppImg = styled.img`
	position: absolute;
	right: -10px;
	bottom: -84px;
	z-index: 1;
	border-radius: 0;
	width: 201px;
	height: auto;

	@media (min-width: 768px) {
		width: 288px;
		height: auto;
		right: -9px;
		bottom: -30px;
	}

	@media (min-width: 1024px) {
		right: -24px;
	}

	@media (min-width: 1280px) {
		right: -21px;
		bottom: 16px;
	}
`;

const Request = styled.div`
	display: flex;
	gap: 4.5px;
	position: absolute;
	top: 119px;
	right: -8px;

	@media (min-width: 768px) {
		top: 157px;
		right: 110px;
	}

	@media (min-width: 1024px) {
		top: 159px;
		right: 185px;
	}

	@media (min-width: 1280px) {
		top: 181px;
		right: 216px;
	}

	@media (min-width: 1440px) {
		top: 212px;
		right: 288px;
	}

	@media (min-width: 1920px) {
		top: 233px;
		right: 352px;
	}
`;

const PaymentIco = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 21px;
	height: 21px;
	background-color: #d0d2ff;
	border-radius: 50%;
	align-self: flex-end;

	& > img {
		height: 11px;
		width: 11px;
	}

	@media (min-width: 768px) {
		width: 27px;
		height: 27px;

		& > img {
			width: 14px;
			height: 14px;
		}
	}

	@media (min-width: 1280px) {
		width: 30px;
		height: 30px;

		& > img {
			width: 16px;
			height: 16px;
		}
	}
`;

const Payment = styled.div`
	width: 155px;
	height: 50px;
	background-color: #f9fafa;
	border-radius: 10px;
	border-bottom-left-radius: 0px;
	padding: 7.5px;

	@media (min-width: 768px) {
		width: 200px;
		height: 64px;
		padding: 9px;
	}

	@media (min-width: 1280px) {
		width: 219px;
		height: 70px;
		padding: 10px;
	}
`;

const PaymentTitle = styled.p`
	font-family: 'Gilroy';
	font-weight: 700;
	font-size: 9px;
	line-height: 12px;
	color: #212121;
	margin: 0 0 1.5px 0;

	@media (min-width: 768px) {
		font-size: 12px;
		line-height: 15px;
		margin: 0 0 2.4px 0;
	}

	@media (min-width: 1280px) {
		font-size: 13px;
		line-height: 16px;
		margin: 0 0 3px 0;
	}
`;

const PaymentText = styled.p`
	font-family: 'Inter';
	font-weight: 400;
	font-size: 8px;
	line-height: 10px;
	color: #5c5c5c;
	margin: 0 0 1.5px 0;

	@media (min-width: 768px) {
		font-size: 10px;
		line-height: 13px;
		margin: 0 0 2px 0;
	}

	@media (min-width: 1280px) {
		font-size: 11px;
		line-height: 14px;
		margin: 0 0 2.5px 0;
	}
`;

const PaymentPrice = styled.p`
	font-family: 'Inter';
	font-weight: 400;
	font-size: 8px;
	line-height: 9px;
	color: #5c5c5c;
	margin: 0;

	@media (min-width: 768px) {
		font-size: 10px;
		line-height: 13px;
	}

	@media (min-width: 1280px) {
		font-size: 11px;
		line-height: 14px;
	}
`;

const PaymentTime = styled.p`
	font-family: 'Inter';
	font-weight: 400;
	font-size: 5px;
	line-height: 6px;
	color: #5c5c5c;
	margin: 0;

	@media (min-width: 768px) {
		font-size: 6px;
		line-height: 8px;
	}

	@media (min-width: 1280px) {
		font-size: 7px;
		line-height: 9px;
	}
`;

const PaymentArrow = styled.img`
	width: 4px;
	height: auto;

	@media (min-width: 768px) {
		width: 5px;
		height: auto;
	}

	@media (min-width: 1280px) {
		width: 6px;
		height: auto;
	}
`;

const PaymentCon = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const PreviewImgDeco1 = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	height: 100%;
	width: 100%;

	&::before {
		content: '';
		position: absolute;
		width: 177px;
		height: 191px;
		background: rgba(0, 0, 0, 0.1);
		filter: blur(16px);
		border-radius: 6px;
		top: initial;
		right: -15px;
		bottom: -91px;
	}

	@media (min-width: 768px) {
		&::before {
			width: 253px;
			height: 273px;
			right: -15px;
			bottom: -40px;
		}
	}

	@media (min-width: 1024px) {
		&::before {
			right: -33px;
		}
	}

	@media (min-width: 1280px) {
		&::before {
			right: -28px;
			bottom: 4px;
		}
	}
`;

const PreviewImgDeco2 = styled.div`
	height: inherit;
	width: inherit;

	&::before {
		content: url('/images/features/preview/line-375.svg');
		position: absolute;
		top: 168px;
		left: 170px;
	}

	@media (min-width: 768px) {
		&::before {
			content: url('/images/features/preview/line-l-768.svg');
			top: 210px;
			left: 340px;
		}

		&::after {
			content: url('/images/features/preview/line-r-768.svg');
			position: absolute;
			top: 222px;
			right: 175px;
		}
	}

	@media (min-width: 1024px) {
		&::before {
			content: url('/images/features/preview/line-l-1024.svg');
			top: 212px;
			left: 473px;
		}

		&::after {
			content: url('/images/features/preview/line-r-1024.svg');
			top: 226px;
			right: 265px;
		}
	}

	@media (min-width: 1280px) {
		&::before {
			top: 238px;
			left: 513px;
		}

		&::after {
			top: 253px;
			right: 268px;
		}
	}

	@media (min-width: 1440px) {
		&::before {
			top: 272px;
			left: 600px;
		}

		&::after {
			top: 285px;
			right: 269px;
		}
	}

	@media (min-width: 1920px) {
		&::before {
			top: 292px;
			left: 657px;
		}

		&::after {
			content: url('/images/features/preview/line-r-1920.svg');
			top: 306px;
		}
	}
`;

const PreviewImgDeco3 = styled.div`
	height: inherit;
	width: inherit;

	&::before {
		content: url('/images/features/preview/dots-b.webp');
		position: absolute;
		left: -130px;
		bottom: -140px;
		z-index: -1;
	}

	@media (min-width: 768px) {
		&::before {
			left: -90px;
		}
	}

	@media (min-width: 1024px) {
		&::before {
			left: -100px;
		}

		&::after {
			content: url('/images/features/preview/dots-t.webp');
			position: absolute;
			top: -75px;
			right: -270px;
			z-index: -1;
		}
	}

	@media (min-width: 1280px) {
		&::before {
			bottom: -60px;
		}

		&::after {
			right: -180px;
		}
	}

	@media (min-width: 1440px) {
		&::before {
			left: 0;
		}

		&::after {
			right: -120px;
		}
	}

	@media (min-width: 1920px) {
		&::after {
			right: -40px;
		}
	}
`;

export default Preview;
