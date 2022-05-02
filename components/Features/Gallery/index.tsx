import React, { FC, RefObject, useRef } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { useTranslation } from 'next-i18next';
import useAnimate from '../../../hooks/useAnimate';

import { FeaturesCon } from '../../common/Container/Container';
import FadeIn from '../../common/FadeIn/FadeIn';

const Gallery: FC = () => {
	const { t } = useTranslation();
	const ref = useRef() as RefObject<HTMLDivElement>;
	const isShow = useAnimate(ref);

	return (
		<StyledGallery>
			<FeaturesCon>
				<GalleryCon>
					<GalleryGrid ref={ref}>
						<GalleryColumn>
							<FadeIn duration={500} delay={200} isShow={isShow}>
								<Img1>
									<GalleryImg
										src='/images/features/gallery/1@2x.jpg'
										layout='fill'
										objectFit='cover'
										alt='man with pancil'
									/>
								</Img1>
							</FadeIn>
							<FadeIn duration={500} delay={800} isShow={isShow}>
								<Img3>
									<GalleryImg
										src='/images/features/gallery/3@2x.jpg'
										layout='fill'
										objectFit='cover'
										alt='happy man on kitchen'
									/>
								</Img3>
							</FadeIn>
						</GalleryColumn>
						<GalleryColumn>
							<FadeIn duration={500} delay={500} isShow={isShow}>
								<Img2>
									<GalleryImg
										src='/images/features/gallery/2@2x.jpg'
										layout='fill'
										objectFit='cover'
										alt='happy old man with phone'
									/>
								</Img2>
							</FadeIn>
							<FadeIn duration={500} delay={1100} isShow={isShow}>
								<Img4>
									<GalleryImg
										src='/images/features/gallery/4@2x.jpg'
										layout='fill'
										objectFit='cover'
										alt='happy women with laptop'
									/>
								</Img4>
							</FadeIn>
						</GalleryColumn>
					</GalleryGrid>
					<GalleryTitle>
						<DecT>
							<Image src={'/images/features/gallery/dec-t.svg'} alt='Stars' width={81} height={89} />
						</DecT>
						{t('features:rockstar')}
						<DecB>
							<Image src={'/images/features/gallery/dec-b.svg'} alt='Stars' width={85} height={103} />
						</DecB>
					</GalleryTitle>
				</GalleryCon>
			</FeaturesCon>
		</StyledGallery>
	);
};

const StyledGallery = styled.section`
	margin-bottom: 120px;

	@media (min-width: 768px) {
		margin-bottom: 140px;
	}
`;

const GalleryCon = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 42px;
	position: relative;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		right: 150px;
		width: 470.47px;
		height: 470.47px;
		background: radial-gradient(95.51% 95.51% at 50% 50%, #dadada 0%, #fafafa 100%);
		opacity: 0.15;
		border-radius: 43.7931px;
		transform: rotate(-45deg);
		z-index: -1;
	}

	&::after {
		content: '';
		position: absolute;
		top: 60px;
		right: 0;
		width: 470.47px;
		height: 470.47px;
		background: radial-gradient(95.51% 95.51% at 50% 50%, #dadada 0%, #fafafa 100%);
		opacity: 0.15;
		border-radius: 43.7931px;
		transform: rotate(-45deg);
		z-index: -1;
	}

	@media (min-width: 768px) {
		&::before {
			right: 520px;
		}

		&::after {
			right: 350px;
		}
	}

	@media (min-width: 1024px) {
		flex-direction: row;
		gap: 78px;

		&::before {
			right: -440px;
			top: -130px;
		}

		&::after {
			top: 80px;
			right: -440px;
		}
	}

	@media (min-width: 1280px) {
		gap: 80px;
	}

	@media (min-width: 1440px) {
		gap: 100px;

		&::before {
			right: -360px;
		}

		&::after {
			right: -360px;
		}
	}

	@media (min-width: 1920px) {
		gap: 60px;

		&::before {
			right: -270px;
		}

		&::after {
			right: -270px;
		}
	}
`;

const GalleryGrid = styled.div`
	display: flex;
	gap: 16px;
	width: 100%;

	@media (min-width: 1280px) {
		gap: 24px;
	}
`;

const GalleryColumn = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	flex: 1;

	@media (min-width: 1280px) {
		gap: 24px;
	}
`;

const GalleryImg = styled(Image)`
	border-radius: 30px;

	@media (min-width: 1280px) {
		border-radius: 32px;
	}
`;

const ImgDiv = styled.div`
	position: relative;
	width: 100%;
`;

const Img1 = styled(ImgDiv)`
	height: 230px;

	@media (min-width: 768px) {
		height: 300px;
	}
`;

const Img2 = styled(ImgDiv)`
	height: 260px;

	@media (min-width: 768px) {
		height: 376px;
	}
`;

const Img3 = styled(ImgDiv)`
	height: 260px;

	@media (min-width: 768px) {
		height: 376px;
	}
`;

const Img4 = styled(ImgDiv)`
	height: 230px;

	@media (min-width: 768px) {
		height: 300px;
	}
`;

const GalleryTitle = styled.h2`
	font-family: 'Gilroy';
	font-weight: 600;
	font-size: 32px;
	line-height: 39px;
	color: #212121;
	text-align: center;
	margin: 0;
	position: relative;
	order: -1;
	max-width: 315px;

	@media (min-width: 768px) {
		font-size: 44px;
		line-height: 54px;
		max-width: 420px;
	}

	@media (min-width: 1024px) {
		order: 1;
		text-align: left;
		max-width: 230px;
	}

	@media (min-width: 1280px) {
		max-width: 250px;
		font-size: 48px;
		line-height: 59px;
	}

	@media (min-width: 1440px) {
		font-size: 56px;
		line-height: 69px;
		max-width: 290px;
		margin-right: 30px;
	}

	@media (min-width: 1920px) {
		max-width: 450px;
		margin-right: 0;
	}
`;

const DecT = styled.span`
	display: inline-block;
	position: absolute;
	top: -59px;
	left: -16px;

	@media (min-width: 1024px) {
		top: -57px;
		left: -47px;
	}
`;

const DecB = styled.span`
	display: inline-block;
	position: absolute;
	right: -30px;
	bottom: -70px;

	@media (min-width: 1920px) {
		right: 200px;
	}
`;

export default Gallery;
