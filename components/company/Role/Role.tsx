import React, { FC, RefObject, useRef } from 'react';
import styled from 'styled-components';

import { useTranslation } from 'next-i18next';
import useAnimate from '../../../hooks/useAnimate';

import { FeaturesCon } from '../../common/Container/Container';
import FadeIn from '../../common/FadeIn/FadeIn';

const Role: FC = () => {
	const { t } = useTranslation();
	const ref = useRef() as RefObject<HTMLDivElement>;
	const isShow = useAnimate(ref);

	return (
		<Wrapper>
			<Square />
			<Dots />
			<FeaturesCon>
				<GalleryCon>
					<GalleryGrid ref={ref}>
						<GalleryColumn>
							<FadeIn duration={500} delay={200} isShow={isShow}>
								<Img1
									src='/images/company/Role/1.jpg'
									srcSet='/images/company/Role/1@2x.jpg 2x'
									alt='Big city'
									loading='lazy'
								/>
							</FadeIn>
							<FadeIn duration={500} delay={800} isShow={isShow}>
								<Img3
									src='/images/company/Role/3.jpg'
									srcSet='/images/company/Role/3@2x.jpg 2x'
									alt='Big city'
									loading='lazy'
								/>
							</FadeIn>
						</GalleryColumn>
						<GalleryColumn>
							<FadeIn duration={500} delay={500} isShow={isShow}>
								<Img2
									src='/images/company/Role/2.jpg'
									srcSet='/images/company/Role/2@2x.jpg 2x'
									alt='Big city'
									loading='lazy'
								/>
							</FadeIn>
							<FadeIn duration={500} delay={1100} isShow={isShow}>
								<Img4
									src='/images/company/Role/4.jpg'
									srcSet='/images/company/Role/4@2x.jpg 2x'
									alt='Big city'
									loading='lazy'
								/>
							</FadeIn>
						</GalleryColumn>
					</GalleryGrid>
					<Content>
						<GalleryTitle>{t('company:rolesText')}</GalleryTitle>
						<Explore
							data-text={t('company:rolesButton')}
							href='https://www.linkedin.com/company/tinvio/jobs/'
							target='_blank'
						>
							{t('company:rolesButton')}
						</Explore>
					</Content>
				</GalleryCon>
			</FeaturesCon>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	margin-bottom: 180px;
	position: relative;
	z-index: 1;

	@media (min-width: 1024px) {
		margin-bottom: 140px;
	}
`;

const GalleryCon = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;

	@media (min-width: 1024px) {
		flex-direction: row;
		gap: 64px;
	}
`;

const GalleryGrid = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	width: 100%;
	z-index: 1;
	position: relative;

	@media (min-width: 768px) {
		flex-direction: row;
	}

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

const GalleryImg = styled.img`
	border-radius: 32px;
	width: 100%;
	object-fit: cover;
`;

const Img1 = styled(GalleryImg)`
	@media (min-width: 768px) {
		height: 346px;
	}
`;

const Img2 = styled(GalleryImg)`
	@media (min-width: 768px) {
		height: 376px;
	}
`;

const Img3 = styled(GalleryImg)`
	@media (min-width: 768px) {
		height: 338px;
	}

	@media (min-width: 1024px) {
		height: 330px;
	}
`;

const Img4 = styled(GalleryImg)`
	@media (min-width: 768px) {
		height: 308px;
	}

	@media (min-width: 1024px) {
		height: 301px;
	}
`;

const Content = styled.div`
	order: -2;

	@media (min-width: 1024px) {
		order: 1;
	}
`;

const GalleryTitle = styled.h2`
	font-family: 'Gilroy';
	font-weight: 600;
	font-size: 32px;
	line-height: 39px;
	color: #212121;
	text-align: center;
	margin: 0 0 32px 0;
	position: relative;
	max-width: 330px;

	&::before {
		content: url('/images/company/Role/dec.svg');
		position: absolute;
		top: -42px;
		left: -24px;
	}

	@media (min-width: 768px) {
		font-size: 44px;
		line-height: 54px;
		max-width: 525px;

		&::before {
			left: 0;
		}
	}

	@media (min-width: 1024px) {
		text-align: left;
		max-width: 359px;

		&::before {
			left: -33px;
			top: -40px;
		}
	}

	@media (min-width: 1280px) {
		font-size: 48px;
		line-height: 59px;
		max-width: 405px;
	}

	@media (min-width: 1440px) {
		max-width: 550px;
	}

	@media (min-width: 1920px) {
		font-size: 56px;
		line-height: 69px;
		max-width: 710px;
	}
`;

const Explore = styled.a`
	display: block;
	border: 1px solid #d2d2d2;
	border-radius: 18px;
	background-color: #ffffff;
	font-family: 'Gilroy';
	font-weight: 700;
	font-size: 16px;
	text-decoration: none;
	text-align: center;
	padding: 0;
	width: 188px;
	height: 48px;
	color: #212121;
	padding: 14px 0;
	margin: 0 auto 48px auto;
	cursor: pointer;
	position: relative;
	transition: all 0.2s ease;

	&::before {
		position: absolute;
		width: 100%;
		content: attr(data-text);
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: rgba(33, 33, 33, 0.1);
		z-index: 2;
		filter: blur(1px);
		opacity: 0;
		transition: opacity 0.2s ease;
	}

	&::after {
		position: absolute;
		content: '';
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		border: 2px solid rgba(33, 33, 33, 0.1);
		filter: blur(2px);
		border-radius: 16px;
		opacity: 0;
		transition: opacity 0.2s ease;
	}

	&:hover::after,
	&:hover::before {
		opacity: 1;
	}

	&:hover {
		color: rgba(33, 33, 33, 0.8);
	}

	@media (min-width: 768px) {
		margin: 0 auto 64px auto;
	}

	@media (min-width: 1024px) {
		margin: 0;
	}

	@media (min-width: 1920px) {
		font-size: 18px;
		line-height: 23px;
		width: 210px;
		height: 56px;
		padding: 16px;
	}
`;

const Dots = styled.div`
	position: absolute;
	right: 134px;
	top: 13px;
	width: 338px;
	height: 256px;
	background: url('/images/company/Role/dots.svg') no-repeat;
	z-index: -1;
	@media (min-width: 375px) {
		right: -238px;
		top: -237px;
	}
	@media (min-width: 768px) {
		right: 605px;
		top: 756px;
	}
	@media (min-width: 1024px) {
		right: -284px;
		top: 28px;
	}
	@media (min-width: 1280px) {
		right: -11%;
		top: 28px;
	}
	@media (min-width: 1440px) {
		right: 2%;
		top: 28px;
	}
	@media (min-width: 1440px) {
		right: 17%;
		top: -24px;
	}
`;

const Square = styled.div`
	position: absolute;
	left: -513px;
	top: -274px;
	background: radial-gradient(95.51% 95.51% at 50% 50%, #dadada 0%, #fafafa 100%);
	width: 724.91px;
	height: 724.91px;
	opacity: 0.15;
	border-radius: 67.4765px;
	transform: rotate(-45deg);
	z-index: -1;
	@media (min-width: 375px) {
		left: -82%;
		top: 187px;
	}
	@media (min-width: 768px) {
		left: -26%;
		top: -276px;
	}
	@media (min-width: 1024px) {
		left: -21%;
	}
	@media (min-width: 1440px) {
		left: -15%;
	}
	@media (min-width: 1920px) {
		left: -28%;
	}
`;

export default Role;
