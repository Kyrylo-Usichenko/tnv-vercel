import React, { FC } from 'react';
import styled from 'styled-components';
import { FeaturesCon } from '../../common/Container/Container';

type PreviewProps = {
	openModal: () => void;
};

const Preview: FC<PreviewProps> = ({ openModal }) => {
	return (
		<StyledPreview>
			<FeaturesCon>
				<PreviewInfo>
					<PreviewTitle>One dashboard, all your supply chain transactions</PreviewTitle>
					<PreviewText>
						From orders to real-time cash in your bank. Run your business like a rockstar.
					</PreviewText>
					<PreviewButton type='button' onClick={openModal}>
						Try it for free
					</PreviewButton>
					<PreviewImg>
						<picture>
							<source
								srcSet='images/features/preview/man-1920.png 1x, images/features/preview/man-1920@2x.png 2x'
								media='(min-width: 1920px)'
							/>
							<source
								srcSet='images/features/preview/man-1440.png 1x, images/features/preview/man-1440@2x.png 2x'
								media='(min-width: 1440px)'
							/>
							<source
								srcSet='images/features/preview/man-1280.png 1x, images/features/preview/man-1280@2x.png 2x'
								media='(min-width: 1280px)'
							/>
							<source
								srcSet='images/features/preview/man-1024.png 1x, images/features/preview/man-1024@2x.png 2x'
								media='(min-width: 1024px)'
							/>
							<source
								srcSet='images/features/preview/man-768.png 1x, images/features/preview/man-768@2x.png 2x'
								media='(min-width: 768px)'
							/>
							<img
								src='images/features/preview/man-375.jpg'
								srcSet='images/features/preview/man-375@2x.jpg 2x'
								alt='Man holding smartphone'
							/>
						</picture>
						<AppImg
							src='images/features/preview/app.png'
							srcSet='images/features/preview/app@2x.png 2x'
							alt='message'
						/>
						<MsgImg
							src='images/features/preview/msg-375.png'
							srcSet='images/features/preview/msg-375@2x.png 2x'
							alt='message'
						/>
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
	max-width: 664px;
	color: var(--text-main);
	margin: 0 0 16px 0;
	position: relative;

	&::before {
		content: url('/images/features/preview/dec1-768.svg');
		position: absolute;
		top: -22px;
		left: -8px;
	}

	&::after {
		content: url('/images/features/preview/dec2-768.svg');
		position: absolute;
		right: -43px;
		bottom: -15px;
		z-index: -1;
	}

	@media (min-width: 768px) {
		font-size: 36px;
		line-height: 44px;
		max-width: 430px;
	}

	@media (min-width: 1024px) {
		font-size: 44px;
		line-height: 52px;
		max-width: 535px;

		&::before {
			content: url('/images/features/preview/dec1-1920.svg');
			position: absolute;
			top: -30px;
			left: -7px;
		}

		&::after {
			content: url('/images/features/preview/dec2-1920.svg');
			position: absolute;
			right: -60px;
			bottom: -25px;
			z-index: 1;
		}
	}

	@media (min-width: 1280px) {
		font-size: 48px;
		line-height: 59px;
		margin: 0 0 16px 0;
		max-width: 600px;

		&::after {
			right: -60px;
			bottom: -25px;
		}
	}

	@media (min-width: 1920px) {
		font-size: 56px;
		line-height: 69px;
		max-width: 685px;
	}
`;

const PreviewText = styled.p`
	font-family: 'Inter';
	font-weight: 400;
	font-size: 14px;
	line-height: 22px;
	text-align: center;
	color: var(--text-second);
	max-width: 420px;
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
		border-radius: 48px;
		width: 100%;
	}

	&::before {
		content: '';
		position: absolute;
		width: 569.32px;
		height: 569.32px;
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
`;

const AppImg = styled.img`
	position: absolute;
	right: -10px;
	bottom: -84px;
	z-index: 1;
	border-radius: 0;
	width: 177px;
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

const MsgImg = styled.img`
	position: absolute;
	top: 123px;
	right: 8px;

	@media (min-width: 768px) {
		display: none;
	}
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
		width: 156px;
		height: 169px;
		background: rgba(0, 0, 0, 0.1);
		filter: blur(16.91px);
		border-radius: 8.93674px;
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
		content: url('images/features/preview/line-375.webp');
		position: absolute;
		top: 168px;
		left: 170px;
	}

	@media (min-width: 768px) {
		&::before {
			content: url('images/features/preview/line-l-768.webp');
			top: 210px;
			left: 340px;
		}
	}

	@media (min-width: 1024px) {
		&::before {
			content: url('images/features/preview/line-l-1024.webp');
			top: 212px;
			left: 473px;
		}
	}

	@media (min-width: 1280px) {
		&::before {
			top: 238px;
			left: 513px;
		}

		&::after {
			content: url('images/features/preview/line-r-1280.webp');
			position: absolute;
			top: 245px;
			left: 659px;
		}
	}

	@media (min-width: 1440px) {
		&::before {
			top: 272px;
			left: 600px;
		}

		&::after {
			display: none;
		}
	}

	@media (min-width: 1920px) {
		&::before {
			top: 292px;
			left: 657px;
		}
	}
`;

const PreviewImgDeco3 = styled.div`
	height: inherit;
	width: inherit;

	&::before {
		content: url('images/features/preview/dots-b.webp');
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
			content: url('images/features/preview/dots-t.webp');
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
