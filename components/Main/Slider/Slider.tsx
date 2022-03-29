import React, { FC } from 'react';
import styled from 'styled-components';

const Slider: FC = () => {
	return (
		<Wrapper>
			<SliderLeft>
				<SliderText>
					Tinvio has been a foundational partner and solution. We now have faster and more efficient
					communication with our clients, which makes order processing and deliveries smoother than ever
					before.
				</SliderText>
				<SliderBottom>
					<Content>
						<img width='68px' height='64px' src='images/main/whyChoose/qrCode.png' alt='' />
						<ContentText>
							<Name>David Wang</Name>
							<Text>Supply Chain Manager (Itacho Sushi)</Text>
						</ContentText>
					</Content>

					<Buttons>
						<Button>
							<img height='20px' width='11.67px' src='images/main/whyChoose/arrow.svg' alt='' />
						</Button>
						<Button>
							<img height='20px' width='11.67px' src='images/main/whyChoose/arrow.svg' alt='' />
						</Button>
					</Buttons>
				</SliderBottom>
			</SliderLeft>
			<Img src='images/main/whyChoose/drinkCoffee.png' alt='' />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	height: 377px;
	width: 1132px;
	margin: 40px 0 0 0;
	background: radial-gradient(136.24% 142.18% at 50% 50%, #ffffff 0%, rgba(250, 250, 250, 0.8) 100%);
	border-radius: 32px;
	padding: 32px;
	display: flex;
	justify-content: space-between;
	position: relative;
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
`;

const SliderLeft = styled.div`
	max-width: 588px;
	padding: 12px 0 12px 12px;
`;

const SliderBottom = styled.div`
	width: 488px;
	border-top: 1px solid #d2d2d2;
	padding-top: 24px;
`;

const Buttons = styled.div`
	display: flex;
	justify-content: space-between;
	width: 104px;
	position: absolute;
	left: 48px;
	bottom: 48px;
`;

const Button = styled.button`
	background: #ff474d;
	border-radius: 8px;
	border: none;
	margin: 0;
	display: flex;
	padding: 10px 15px 10px 13.33px;
	cursor: pointer;
	&:last-child {
		transform: rotate(180deg);
		padding: 10px 13.33px 10px 15px;
	}
	&:hover {
		background: rgba(255, 71, 77, 0.8);
	}
`;

const Img = styled.img`
	background: #ededed;
	border-radius: 24px;
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

export default Slider;
