import React, { FC } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

interface ISlide {
	sliderText: string;
	logo: string;
	name: string;
	text: string;
	image: string;
}

const Slide: FC<ISlide> = ({ sliderText, logo, name, text, image }) => {
	return (
		<Wrapper>
			<SliderLeft>
				<SliderText>{sliderText}</SliderText>
				<SliderBottom>
					<Content>
						<Image src={logo} width={68} height={64} alt='' />
						<ContentText>
							<Name>{name}</Name>
							<Text>{text}</Text>
						</ContentText>
					</Content>
				</SliderBottom>
			</SliderLeft>
			<ImageBlock>
				<Image src={image} layout='fill' objectFit='cover' />
			</ImageBlock>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	max-width: 1132px;
	width: 100%;
	margin: 40px 0 0 0;
	background: radial-gradient(136.24% 142.18% at 50% 50%, #ffffff 0%, rgba(250, 250, 250, 0.8) 100%);
	border-radius: 32px;
	padding: 48px;
	display: flex;
	justify-content: space-between;
	position: relative;
	@media (max-width: 1024px) {
		flex-direction: column;
		max-width: 490px;
		align-items: center;
	}
	@media (max-width: 425px) {
		max-width: 343px;
	}
`;

const SliderText = styled.p`
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 20px;
	line-height: 25px;
	color: #212121;
	padding: 0 0 0 0;
	margin: 0 0 24px 0;
	@media (max-width: 1024px) {
		font-size: 18px;
		line-height: 24px;
	}
	@media (max-width: 768px) {
		font-size: 16px;
		line-height: 23px;
	}
`;

const SliderLeft = styled.div`
	flex: 0 1 auto;
	max-width: 588px;
	padding: 12px 0 12px 12px;
	margin-right: 48px;

	@media (max-width: 1280px) {
		margin-right: 48px;
		max-width: 454px;
	}

	@media (max-width: 1024px) {
		padding: 0;
		margin: 32px 0 24px 0;
	}
`;

const SliderBottom = styled.div`
	width: 488px;

	border-top: 1px solid #d2d2d2;
	padding-top: 24px;
	background-color: #ffffff;
	@media (max-width: 1280px) {
		width: 454px;
	}
	@media (max-width: 1024px) {
		width: 100%;
	}
`;

const ImageBlock = styled.div`
	position: relative;
	flex: 0 0 40.3%;
	background: #ededed;
	border-radius: 24px;
	overflow: hidden;

	@media (max-width: 1280px) {
		width: 362px;
	}
	@media (max-width: 1024px) {
		order: -1;
		width: 100%;
	}
`;
const Name = styled.p`
	padding: 0 0 4px 0;
	margin: 0;
	font-family: 'Gilroy';
	font-style: normal;
	font-weight: 700;
	font-size: 18px;
	line-height: 22px;
	color: #212121;
`;
const Text = styled.p`
	padding: 0;
	margin: 0;
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 12px;
	line-height: 15px;
	display: flex;
	align-items: center;
	text-transform: uppercase;
	color: #5c5c5c;
`;

const Content = styled.div`
	display: flex;
	align-items: center;
`;

const ContentText = styled.div`
	margin-left: 16px;
`;

export default Slide;
