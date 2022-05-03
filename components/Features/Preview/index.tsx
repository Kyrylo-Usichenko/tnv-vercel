import React, { FC, RefObject, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { useTranslation } from 'next-i18next';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';

import { FeaturesCon } from '../../common/Container/Container';
import LineL from './LineL';
import LineR from './LineR';
import RedButton from '../../common/Buttons/Button';

type PreviewProps = {
	openModal: () => void;
	locale: string;
};

const Preview: FC<PreviewProps> = ({ openModal, locale }) => {
	const { t } = useTranslation();

	const [animate, setAnimate] = useState(false);
	const [loaded, setLoaded] = useState(false);

	const heading = useRef() as RefObject<HTMLHeadingElement>;
	const entry = useIntersectionObserver(heading, {});

	const pic1 = useRef() as RefObject<HTMLPictureElement>;
	const pic2 = useRef() as RefObject<HTMLPictureElement>;

	const mainImg = useRef() as RefObject<HTMLImageElement>;
	const imgEntry = useIntersectionObserver(mainImg, {});

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

	useEffect(() => {
		const isVisible = !!imgEntry?.isIntersecting;

		if (isVisible && loaded) {
			setAnimate(true);
		}
	}, [imgEntry, loaded]);

	return (
		<StyledPreview>
			<FeaturesCon>
				<PreviewInfo>
					<PreviewTitle locale={locale} ref={heading}>
						<PreviewDec1 ref={pic1}>
							<source srcSet='/images/features/preview/dec1-1920.svg' media='(min-width: 1024px)' />
							<img src='/images/features/preview/dec1-768.svg' alt='decoration' />
						</PreviewDec1>
						{t('features:heroTitle')}
						<PreviewDec2 ref={pic2}>
							<source srcSet='/images/features/preview/dec2-1920.svg' media='(min-width: 1024px)' />
							<img src='/images/features/preview/dec2-768.svg' alt='decoration' />
						</PreviewDec2>
					</PreviewTitle>
					<PreviewText locale={locale}>{t('features:heroText')}</PreviewText>
					<PreviewButton type='button' onClick={openModal}>
						{t('features:heroButton')}
					</PreviewButton>
					<PreviewImg animate={animate}>
						<picture>
							<source srcSet='/images/features/preview/man-1920@2x.jpg' media='(min-width: 1920px)' />
							<source srcSet='/images/features/preview/man-1440@2x.jpg' media='(min-width: 1440px)' />
							<source srcSet='/images/features/preview/man-1280@2x.jpg' media='(min-width: 1280px)' />
							<source srcSet='/images/features/preview/man-1024@2x.jpg' media='(min-width: 1024px)' />
							<source srcSet='/images/features/preview/man-768@2x.jpg' media='(min-width: 768px)' />
							<img
								src='/images/features/preview/man-375@2x.jpg'
								alt='Man holding smartphone'
								width={1190}
								height={600}
								ref={mainImg}
								onLoad={() => setLoaded(true)}
							/>
						</picture>
						<AppImg src='/images/features/preview/app-shadow@2x.png' alt='message' animate={animate} />
						<RequestImg
							src='/images/features/preview/request@2x.png'
							alt='Payment request'
							animate={animate}
						/>
						<LineL animate={animate} />
						<LineR animate={animate} />
						<PreviewImgDeco3 />
					</PreviewImg>
				</PreviewInfo>
			</FeaturesCon>
		</StyledPreview>
	);
};

const StyledPreview = styled.section`
	overflow: hidden;
`;

const PreviewInfo = styled.div`
	padding: 144px 0 48% 0;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (min-width: 768px) {
		padding: 144px 0 180px 0;
	}
`;

const PreviewTitle = styled.h2<{ locale: string }>`
	text-align: center;
	font-family: 'Gilroy';
	font-weight: 600;
	font-size: 28px;
	line-height: 34px;
	color: var(--text-main);
	margin: 0 0 16px 0;
	position: relative;
	max-width: ${({ locale }) => (locale === 'id' ? '343px' : locale === 'vn' ? '343px' : '343px')};

	@media (min-width: 768px) {
		font-size: 36px;
		line-height: 44px;
		max-width: ${({ locale }) => (locale === 'id' ? '533px' : locale === 'vn' ? '590px' : '430px')};
	}

	@media (min-width: 1024px) {
		font-size: 44px;
		line-height: 52px;
		max-width: ${({ locale }) => (locale === 'id' ? '650px' : locale === 'vn' ? '730px' : '535px')};
	}

	@media (min-width: 1280px) {
		font-size: 48px;
		line-height: 59px;
		margin: 0 0 16px 0;
		max-width: ${({ locale }) => (locale === 'id' ? '695px' : locale === 'vn' ? '808px' : '600px')};
	}

	@media (min-width: 1920px) {
		font-size: 56px;
		line-height: 69px;
		max-width: ${({ locale }) => (locale === 'id' ? '823px' : locale === 'vn' ? '933px' : '710px')};
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

const PreviewText = styled.p<{ locale: string }>`
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
		max-width: ${({ locale }) => (locale === 'id' ? '475px' : locale === 'vn' ? '475px' : '350px')};
	}
	@media (min-width: 1024px) {
		max-width: ${({ locale }) => (locale === 'id' ? '475px' : locale === 'vn' ? '475px' : '350px')};
	}
	@media (min-width: 1280px) {
		font-size: 18px;
		line-height: 24px;
		margin: 0 0 32px 0;
		max-width: ${({ locale }) => (locale === 'id' ? '475px' : locale === 'vn' ? '475px' : '400px')};
	}

	@media (min-width: 1920px) {
		font-size: 20px;
		line-height: 25px;
		max-width: ${({ locale }) => (locale === 'id' ? '500px' : locale === 'vn' ? '500px' : '420px')};
	}
`;

const PreviewButton = styled(RedButton)`
	margin-bottom: 48px;

	@media (min-width: 768px) {
		margin-bottom: 66px;
	}
`;

const PreviewImg = styled.div<{ animate: boolean }>`
	position: relative;
	width: 100%;
	height: 0;
	padding-bottom: 116%;
	background-color: #e6e8e7;
	border-radius: 44px;

	& > picture:nth-child(1) > img {
		border-radius: 44px;
		width: 100%;
		height: auto;
		opacity: ${({ animate }) => (animate ? '1' : '0')};
		transition: opacity 0.3s ease-in;
		display: flex;
		align-items: center;
		justify-content: center;
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

	@media (min-width: 768px) {
		padding-bottom: 74%;
	}

	@media (min-width: 1024px) {
		height: auto;
		padding-bottom: 0;

		&::before {
			left: -400px;
		}
	}

	@media (min-width: 1280px) {
		border-radius: 48px;

		& > picture:nth-child(1) > img {
			border-radius: 48px;
		}
	}
`;

const AppImg = styled.img<{ animate: boolean }>`
	position: absolute;
	right: -13%;
	bottom: -33%;
	z-index: 1;
	border-radius: 0;
	width: 72.6%;
	height: auto;
	opacity: 0;
	transform: ${({ animate }) => (animate ? 'scale(1)' : 'scale(0.9)')};
	transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) 1.2s;
	animation: ${({ animate }) => (animate ? 'appImgAnim 0.3s ease-in' : 'none')};
	animation-fill-mode: forwards;
	animation-delay: 1.15s;

	@keyframes appImgAnim {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@media (min-width: 768px) {
		width: 50.2%;
		height: auto;
		left: 1%;
		top: 1%;
	}

	@media (min-width: 1024px) {
		width: 362px;
		left: 15px;
		top: 8px;
	}

	@media (min-width: 1440px) {
		left: 29px;
		top: 25px;
		width: 362px;
	}
`;

const RequestImg = styled.img<{ animate: boolean }>`
	position: absolute;
	top: 12.3%;
	right: -2%;
	width: 52.5%;
	height: auto;
	opacity: 0;
	animation: ${({ animate }) => (animate ? 'appImgAnim 0.3s ease-in' : 'none')};
	animation-fill-mode: forwards;
	animation-delay: 0.6s;

	@keyframes appImgAnim {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@media (min-width: 768px) {
		width: 31.4%;
		top: 12.6%;
		right: -3%;
	}

	@media (min-width: 1024px) {
		top: 67px;
		right: 19px;
		width: 264px;
		height: auto;
	}

	@media (min-width: 1280px) {
		top: 87px;
		right: 36px;
	}

	@media (min-width: 1440px) {
		top: 85px;
		right: 60px;
	}

	@media (min-width: 1920px) {
		top: 114px;
		right: 81px;
	}
`;

const PreviewImgDeco3 = styled.div`
	height: inherit;
	width: inherit;

	&::before {
		content: url('/images/features/preview/dots-b.png');
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
			content: url('/images/features/preview/dots-t.png');
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
