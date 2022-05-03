import React, { FC, RefObject, useRef } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { useTranslation } from 'next-i18next';
import useAnimate from '../../../hooks/useAnimate';

import { FeaturesCon } from '../../common/Container/Container';
import FadeIn from '../../common/FadeIn/FadeIn';
import TransparentLink from '../../common/Links/TransparentLink';

const Role: FC = () => {
	const { t } = useTranslation();
	const ref = useRef() as RefObject<HTMLDivElement>;
	const isShow = useAnimate(ref);

	return (
		<Wrapper>
			<Square />
			<Dots>
				<Image src='/images/company/Role/dots.png' alt='Dots' width={338} height={256} />
			</Dots>
			<FeaturesCon>
				<GalleryCon>
					<GalleryGrid ref={ref}>
						<GalleryColumn>
							<FadeIn duration={500} delay={200} isShow={isShow}>
								<Img1>
									<Image
										src='/images/company/Role/1@2x.jpg'
										alt='Big city'
										layout='fill'
										objectFit='cover'
									/>
								</Img1>
							</FadeIn>
							<FadeIn duration={500} delay={800} isShow={isShow}>
								<Img3>
									<Image
										src='/images/company/Role/3@2x.jpg'
										alt='Big city'
										layout='fill'
										objectFit='cover'
									/>
								</Img3>
							</FadeIn>
						</GalleryColumn>
						<GalleryColumn>
							<FadeIn duration={500} delay={500} isShow={isShow}>
								<Img2>
									<Image
										src='/images/company/Role/2@2x.jpg'
										alt='Big city'
										layout='fill'
										objectFit='cover'
									/>
								</Img2>
							</FadeIn>
							<FadeIn duration={500} delay={1100} isShow={isShow}>
								<Img4>
									<Image
										src='/images/company/Role/4@2x.jpg'
										alt='Big city'
										layout='fill'
										objectFit='cover'
									/>
								</Img4>
							</FadeIn>
						</GalleryColumn>
					</GalleryGrid>
					<Content>
						<GalleryTitle>
							<GalleryTitleDec>
								<Image src='/images/company/Role/dec.svg' alt='Stars' width={66} height={62} />
							</GalleryTitleDec>
							{t('company:rolesText')}
						</GalleryTitle>
						<Explore
							width={210}
							fSize={18}
							lHeight={22}
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

const GalleryImg = styled.div`
	width: 100%;
	aspect-ratio: 4 / 3.04;
	position: relative;

	& img {
		border-radius: 32px;
	}

	@media (min-width: 768px) {
		aspect-ratio: auto;
	}
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

	@media (min-width: 768px) {
		font-size: 44px;
		line-height: 54px;
		max-width: 525px;
	}

	@media (min-width: 1024px) {
		text-align: left;
		max-width: 359px;
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

const GalleryTitleDec = styled.span`
	display: inline-block;
	position: absolute;
	top: -42px;
	left: -24px;

	@media (min-width: 768px) {
		left: 0;
	}

	@media (min-width: 1024px) {
		left: -33px;
		top: -40px;
	}
`;

const Explore = styled(TransparentLink)`
	display: block;
	margin: 0 auto 48px auto;

	@media (min-width: 768px) {
		margin: 0 auto 64px auto;
	}

	@media (min-width: 1024px) {
		margin: 0;
	}
`;

const Dots = styled.div`
	position: absolute;
	right: 134px;
	top: 13px;
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
