import React, { FC } from 'react';
import styled from 'styled-components';

const Smile: FC = () => {
	return (
		<Wrapper>
			<Title>We’ll put a smile on your supply chain </Title>
			<MainBox>
				<GreyBox top='-90' left='-106'>
					<GreyBoxInner>
						<BoxImg src='images/main/smile/chicken.png' alt='' />
					</GreyBoxInner>
				</GreyBox>
				<GreyBox top='356' left='-106'>
					<GreyBoxInner>
						<BoxImg src='images/main/smile/simply.png' alt='' />
					</GreyBoxInner>
				</GreyBox>
				<GreyBox top='141' left='-237'>
					<GreyBoxInner>
						<BoxImg src='images/main/smile/itacho.png' alt='' />
					</GreyBoxInner>
				</GreyBox>
				<GreyBox top='6' left='-381'>
					<GreyBoxInner>
						<BoxImg src='images/main/smile/Joliebean.png' alt='' />
					</GreyBoxInner>
				</GreyBox>
				<GreyBox top='284' left='-381'>
					<GreyBoxInner>
						<BoxImg src='images/main/smile/gongcha.png' alt='' />
					</GreyBoxInner>
				</GreyBox>
				<GreyBox top='-90' right='-106'>
					<GreyBoxInner>
						<BoxImg src='images/main/smile/chicken.png' alt='' />
					</GreyBoxInner>
				</GreyBox>
				<GreyBox top='356' right='-106'>
					<GreyBoxInner>
						<BoxImg src='images/main/smile/simply.png' alt='' />
					</GreyBoxInner>
				</GreyBox>
				<GreyBox top='141' right='-237'>
					<GreyBoxInner>
						<BoxImg src='images/main/smile/itacho.png' alt='' />
					</GreyBoxInner>
				</GreyBox>
				<GreyBox top='6' right='-381'>
					<GreyBoxInner>
						<BoxImg src='images/main/smile/Joliebean.png' alt='' />
					</GreyBoxInner>
				</GreyBox>
				<GreyBox top='284' right='-381'>
					<GreyBoxInner>
						<BoxImg src='images/main/smile/gongcha.png' alt='' />
					</GreyBoxInner>
				</GreyBox>
				<Dots top='-512' left='647' src='images/main/smile/rightDots.svg' alt='' />

				<RightTopGrey top='-329' left='714' size='457.92' radius='42.6248' />
				<LeftTopGrey top='-411' left='-653' size='554.34' radius='51.6' />
				<LeftGrey top='-94' left='-714' size='554.34' radius='51.6' />

				<Dots top='418' left='-490' src='images/main/smile/leftDots.svg' alt='' />
				<B1>
					<B2>
						<B3>
							<Content>
								<TextWrapper>
									<Text>5000+</Text>
									<Text>happy businesses</Text>
								</TextWrapper>
								<Line src='images/main/smile/line.svg' alt='' />
							</Content>
						</B3>
					</B2>
				</B1>
			</MainBox>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	margin-top: 340px;
`;

const Title = styled.p`
	font-family: 'Gilroy';
	font-style: normal;
	font-weight: 600;
	font-size: 44px;
	line-height: 54px;
	color: #212121;
	text-align: center;
	margin: 0;
	padding: 0;
`;

const Box = styled.div`
	border-radius: 25.5029px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
`;

const B1 = styled(Box)`
	background: rgba(251, 36, 43, 0.3);
	height: 348.57px;
	width: 348.57px;
	transform: rotate(-45deg);
	margin-top: 147px;
	position: relative;
	z-index: 1;
`;

const B2 = styled(Box)`
	background: rgba(251, 36, 43, 0.4);
	height: 309px;
	width: 309px;
`;

const B3 = styled(Box)`
	background: #fb242b;
	height: 260.62px;
	width: 260.62px;
	position: relative;
`;

const Content = styled.div`
	text-align: center;
	display: flex;
	flex-direction: column;
	transform: rotate(45deg);
	align-items: center;
	position: relative;
`;

const TextWrapper = styled.div`
	font-family: 'Gilroy';
	font-style: normal;
	font-weight: 600;
	font-size: 32px;
	line-height: 39px;
	text-align: center;
	color: #ffffff;
	position: absolute;
	top: -79px;
`;

const Text = styled.p`
	font-family: 'Gilroy';
	font-style: normal;
	font-weight: 600;
	font-size: 32px;
	line-height: 39px;
	color: #ffffff;
	margin: 0;
	padding: 0;
	white-space: nowrap;
`;
const Line = styled.img`
	position: absolute;
	top: 13px;
`;

const GreyBox = styled.div<{ top: string; left?: string; right?: string }>`
	background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(246, 245, 245, 0.5) 0%, rgba(250, 250, 250, 0.5) 100%);
	border-radius: 14.8359px;
	position: absolute;
	width: 134.79px;
	height: 134.79px;
	z-index: 0;
	transform: rotate(45deg);
	display: flex;
	align-items: center;
	justify-content: center;
	top: ${({ top }) => `${top}px`};
	${({ left }) => (left ? `left: ${left}px` : '')};
	${({ right }) => (right ? `right: ${right}px` : '')};
`;

const GreyBoxInner = styled.div`
	background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(218, 218, 218, 0.8) 0%, rgba(250, 250, 250, 0.8) 100%);
	border-radius: 13.4952px;
	width: 100.28px;
	height: 100.28px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const MainBox = styled.div`
	width: 480px;
	margin: 0 auto;
	position: relative;
`;

const BoxImg = styled.img`
	transform: rotate(-45deg);
`;

const Dots = styled.img<{ top: string; left: string }>`
	position: absolute;
	left: ${({ left }) => `${left}px`};
	top: ${({ top }) => `${top}px`};
`;

const BigGrey = styled.div<{ top: string; left: string; size: string; radius: string }>`
	position: absolute;
	height: ${({ size }) => `${size}px`};
	width: ${({ size }) => `${size}px`};
	left: ${({ left }) => `${left}px`};
	top: ${({ top }) => `${top}px`};
	border-radius: ${({ radius }) => `${radius}px`};
	transform: rotate(-45deg);
`;

const RightTopGrey = styled(BigGrey)`
	background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(218, 218, 218, 0.15) 0%, rgba(250, 250, 250, 0.15) 100%);
`;

const LeftTopGrey = styled(BigGrey)`
	background: radial-gradient(95.51% 95.51% at 50% 50%, #dadada 0%, #fafafa 100%)
		/* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
	opacity: 0.1;
`;

const LeftGrey = styled(BigGrey)`
	background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(218, 218, 218, 0.15) 0%, rgba(250, 250, 250, 0.15) 100%);
`;

export default Smile;
