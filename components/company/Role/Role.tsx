import React, { FC } from 'react';
import styled from 'styled-components';
import { FeaturesCon } from '../../common/Container/Container';

const Role: FC = () => {
	return (
		<Wrapper>
			<Square />
			<Dots />
			<FeaturesCon>
				<GalleryCon>
					<GalleryGrid>
						<GalleryColumn>
							<Img1
								src='images/company/Role/1.jpg'
								srcSet='images/company/Role/1@2x.jpg 2x'
								alt='Big city'
								loading='lazy'
							/>
							<Img3
								src='images/company/Role/3.jpg'
								srcSet='images/company/Role/3@2x.jpg 2x'
								alt='Big city'
								loading='lazy'
							/>
						</GalleryColumn>
						<GalleryColumn>
							<Img2
								src='images/company/Role/2.jpg'
								srcSet='images/company/Role/2@2x.jpg 2x'
								alt='Big city'
								loading='lazy'
							/>
							<Img4
								src='images/company/Role/4.jpg'
								srcSet='images/company/Role/4@2x.jpg 2x'
								alt='Big city'
								loading='lazy'
							/>
						</GalleryColumn>
					</GalleryGrid>
					<Content>
						<GalleryTitle>Find the perfect role at any of our offices near you</GalleryTitle>
						<Explore>Explore roles</Explore>
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
	width: 100%;

	@media (min-width: 1280px) {
		gap: 24px;
	}
`;

const GalleryImg = styled.img`
	border-radius: 32px;
	width: 100%;
	object-fit: cover;

	@media (min-width: 768px) {
		width: 360px;
	}

	@media (min-width: 1024px) {
		width: 310px;
	}

	@media (min-width: 1280px) {
		width: 335px;
	}

	@media (min-width: 1440px) {
		width: 374px;
	}

	@media (min-width: 1920px) {
		width: 390px;
	}
`;

const Img1 = styled(GalleryImg)`
	height: 260px;

	@media (min-width: 768px) {
		height: 346px;
	}
`;

const Img2 = styled(GalleryImg)`
	height: 260px;

	@media (min-width: 768px) {
		height: 376px;
	}
`;

const Img3 = styled(GalleryImg)`
	height: 260px;

	@media (min-width: 768px) {
		height: 338px;
	}

	@media (min-width: 1024px) {
		height: 330px;
	}
`;

const Img4 = styled(GalleryImg)`
	height: 260px;

	@media (min-width: 768px) {
		height: 308px;
	}

	@media (min-width: 1024px) {
		height: 300px;
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
	max-width: 315px;

	&::before {
		content: url('images/company/Role/dec.svg');
		position: absolute;
		top: -42px;
		left: -24px;
	}

	@media (min-width: 768px) {
		font-size: 44px;
		line-height: 54px;
		max-width: 540px;

		&::before {
			left: 0;
		}
	}

	@media (min-width: 1024px) {
		text-align: left;
		max-width: 400px;

		&::before {
			left: -33px;
			top: -40px;
		}
	}

	@media (min-width: 1280px) {
		font-size: 48px;
		line-height: 59px;
	}

	@media (min-width: 1440px) {
		max-width: 600px;
	}

	@media (min-width: 1920px) {
		font-size: 56px;
		line-height: 69px;
		max-width: 750px;
	}
`;

const Explore = styled.button`
	display: block;
	border: 1px solid #d2d2d2;
	border-radius: 18px;
	background-color: #ffffff;
	font-family: 'Gilroy';
	font-weight: 700;
	font-size: 16px;
	line-height: 20px;
	padding: 0;
	width: 188px;
	height: 48px;
	color: #212121;
	margin: 0 auto 48px auto;
	cursor: pointer;

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
	}
`;

const Dots = styled.div`
	position: absolute;
	right: 134px;
	top: 13px;
	width: 338px;
	height: 256px;
	background: url('images/company/Role/dots.svg') no-repeat;
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
