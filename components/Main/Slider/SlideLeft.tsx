import React, { FC } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

interface ISlide {
	sliderText: string;
	logo: string;
	name: string;
	text: string;
}

const SlideLeft: FC<ISlide> = ({ sliderText, logo, name, text }) => {
	return (
		<Wrapper>
			<SliderText>{sliderText}</SliderText>
			<SliderBottom>
				<Content>
					<Image src={logo} width={68} height={64} alt='logo' />
					<ContentText>
						<Name>{name}</Name>
						<Text>{text}</Text>
					</ContentText>
				</Content>
			</SliderBottom>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	position: relative;
	padding-bottom: 50px;

	@media (max-width: 768px) {
		padding-bottom: 0px;
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
	@media (max-width: 1440px) {
		font-size: 18px;
		line-height: 24px;
	}
	@media (max-width: 768px) {
		font-size: 16px;
		line-height: 23px;
	}
`;

// const SliderLeft = styled.div`
// 	flex: 0 1 auto;
// 	max-width: 588px;
// 	padding: 12px 0 12px 12px;
// 	margin-right: 48px;

// 	@media (max-width: 1280px) {
// 		margin-right: 48px;
// 		max-width: 454px;
// 	}

// 	@media (max-width: 1024px) {
// 		padding: 0;
// 		margin: 32px 0 24px 0;
// 	}
// `;

const SliderBottom = styled.div`
	// width: 488px;
	border-top: 1px solid #d2d2d2;
	padding-top: 24px;
	@media (max-width: 1280px) {
		// width: 454px;
	}
	@media (max-width: 1024px) {
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

export default SlideLeft;
