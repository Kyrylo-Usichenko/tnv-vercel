import React, { FC } from 'react';
import styled from 'styled-components';

import { FeaturesCon } from '../../common/Container/Container';
import { useTranslation } from 'react-i18next';

const Gallery: FC = () => {
	const { t } = useTranslation();

	return (
		<StyledGallery>
			<FeaturesCon>
				<GalleryCon>
					<GalleryGrid>
						<GalleryColumn>
							<Img1
								src='/images/features/gallery/1.jpg'
								srcSet='/images/features/gallery/1@2x.jpg 2x'
								alt='man with pancil'
								loading='lazy'
							/>
							<Img3
								src='/images/features/gallery/3.jpg'
								srcSet='/images/features/gallery/3@2x.jpg 2x'
								alt='happy man on kitchen'
								loading='lazy'
							/>
						</GalleryColumn>
						<GalleryColumn>
							<Img2
								src='/images/features/gallery/2.jpg'
								srcSet='/images/features/gallery/2@2x.jpg 2x'
								alt='happy old man with phone'
								loading='lazy'
							/>
							<Img4
								src='/images/features/gallery/4.jpg'
								srcSet='/images/features/gallery/4@2x.jpg 2x'
								alt='happy women with laptop'
								loading='lazy'
							/>
						</GalleryColumn>
					</GalleryGrid>
					<GalleryTitle>{t('features:rockstar')}</GalleryTitle>
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
		gap: 64px;

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
		&::before {
			right: -360px;
		}

		&::after {
			right: -360px;
		}
	}

	@media (min-width: 1920px) {
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

	@media (min-width: 1440px) {
		gap: 30px;
	}

	@media (min-width: 1920px) {
		gap: 32px;
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

const GalleryImg = styled.img`
	border-radius: 32px;
	width: 100%;
	object-fit: cover;
`;

const Img1 = styled(GalleryImg)`
	height: 230px;

	@media (min-width: 768px) {
		height: 316px;
	}

	@media (min-width: 1280px) {
		height: 346px;
	}
`;

const Img2 = styled(GalleryImg)`
	height: 260px;

	@media (min-width: 768px) {
		height: 343px;
	}

	@media (min-width: 1280px) {
		height: 376px;
	}
`;

const Img3 = styled(GalleryImg)`
	height: 260px;

	@media (min-width: 768px) {
		height: 322px;
	}

	@media (min-width: 1024px) {
		height: 302px;
	}

	@media (min-width: 1280px) {
		height: 330px;
	}
`;

const Img4 = styled(GalleryImg)`
	height: 230px;

	@media (min-width: 768px) {
		height: 294px;
	}

	@media (min-width: 1024px) {
		height: 274px;
	}

	@media (min-width: 1280px) {
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

	&::before {
		content: url('/images/features/gallery/dec-t.svg');
		position: absolute;
		top: -53px;
		left: -16px;
	}

	&::after {
		content: url('/images/features/gallery/dec-b.svg');
		position: absolute;
		right: -30px;
		bottom: -52px;
	}

	@media (min-width: 768px) {
		font-size: 44px;
		line-height: 54px;
		max-width: 420px;
	}

	@media (min-width: 1024px) {
		order: 1;
		text-align: left;
		max-width: 230px;

		&::before {
			top: -50px;
			left: -47px;
		}
	}

	@media (min-width: 1280px) {
		font-size: 48px;
		line-height: 59px;
	}

	@media (min-width: 1920px) {
		font-size: 56px;
		line-height: 69px;
		max-width: 280px;
	}
`;

export default Gallery;
