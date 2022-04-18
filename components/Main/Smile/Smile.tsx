import React, { FC } from 'react';
import styled from 'styled-components';
import { Container } from '../../common/Container/Container';

const Smile: FC = () => {
	return (
		<Wrapper>
			<Container>
				<Title>We’ll put a smile on your supply chain </Title>
			</Container>

			<MainBox>
				<GreyBox1>
					<GreyBoxInner>
						<BoxImg src='images/main/smile/toko-kita.svg' alt='' />
					</GreyBoxInner>
				</GreyBox1>
				<GreyBox2>
					<GreyBoxInner>
						<BoxImg src='images/main/smile/bbs.svg' alt='' />
					</GreyBoxInner>
				</GreyBox2>
				<GreyBox3>
					<GreyBoxInner>
						<BoxImg src='images/main/smile/pet-shop.png' alt='' />
					</GreyBoxInner>
				</GreyBox3>
				<GreyBox4>
					<GreyBoxInner>
						<BoxImg src='images/main/smile/nex.svg' alt='' />
					</GreyBoxInner>
				</GreyBox4>
				<GreyBox5>
					<GreyBoxInner>
						<BoxImg src='images/main/smile/nayla.svg' alt='' />
					</GreyBoxInner>
				</GreyBox5>

				<GreyBox6>
					<GreyBoxInner>
						<BoxImg src='images/main/smile/group-of-companies.svg' alt='' />
					</GreyBoxInner>
				</GreyBox6>
				<GreyBox7>
					<GreyBoxInner>
						<BoxImg src='images/main/smile/gong-cha.png' alt='' />
					</GreyBoxInner>
				</GreyBox7>
				<GreyBox8>
					<GreyBoxInner>
						<BoxImg src='images/main/smile/kho-pa-ka.png' alt='' />
					</GreyBoxInner>
				</GreyBox8>

				<GreyBox9>
					<GreyBoxInner>
						<BoxImg src='images/main/smile/es-teh.svg' alt='' />
					</GreyBoxInner>
				</GreyBox9>
				<GreyBox10>
					<GreyBoxInner>
						<BoxImg src='images/main/smile/burger-lobster.png' alt='' />
					</GreyBoxInner>
				</GreyBox10>

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
								<Line />
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
	@media (max-width: 1024px) {
		margin-top: 200px;
	}
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
	padding: 0 0 40px;
	@media (max-width: 1440px) {
		font-size: 36px;
		line-height: 42px;
	}
	@media (max-width: 1024px) {
		font-size: 32px;
		line-height: 39px;
	}
	@media (max-width: 1023px) {
		padding: 0;
	}
	@media (max-width: 425px) {
		font-size: 28px;
		line-height: 33px;
	}
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
	@media (max-width: 1023px) {
		margin-top: 255px;
	}
	@media (max-width: 650px) {
		width: 242.54px;
		height: 242.54px;
	}
	@media (max-width: 650px) {
		margin-top: 188px;
	}
`;

const B2 = styled(Box)`
	background: rgba(251, 36, 43, 0.4);
	height: 309px;
	width: 309px;
	@media (max-width: 650px) {
		width: 215px;
		height: 215px;
	}
`;

const B3 = styled(Box)`
	background: #fb242b;
	height: 260.62px;
	width: 260.62px;
	position: relative;
	@media (max-width: 650px) {
		width: 181.35px;
		height: 181.35px;
	}
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
	@media (max-width: 1440px) {
		font-size: 30px;
		line-height: 37px;
	}
	@media (max-width: 1440px) {
		font-size: 30px;
		line-height: 37px;
	}
	@media (max-width: 1024px) {
		font-size: 28px;
		line-height: 34px;
	}
	@media (max-width: 758px) {
		font-size: 29.5682px;
		line-height: 36px;
	}
	@media (max-width: 650px) {
		font-size: 20.6988px;
		line-height: 25px;
		&:first-child {
			margin-top: 20px;
		}
	}
`;
const Line = styled.div`
	position: absolute;
	top: 13px;
	background: url('images/main/smile/line.svg') no-repeat;
	width: 202px;
	height: 77px;
	background-size: contain;
	@media (max-width: 650px) {
		width: 150px;
		height: 60px;
	}
`;

const GreyBox1 = styled.div`
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
	top: -117px;
	left: -106px;
	@media (max-width: 1440px) {
		width: 120.45px;
		height: 120.45px;
	}
	@media (max-width: 1330px) {
		left: -68px;
	}
	@media (max-width: 1280px) {
		left: -89px;
	}
	@media (max-width: 1250px) {
		left: -68px;
	}

	//@media (max-width: 1023px) {
	//	top: -222px;
	//	left: 176px;
	//	// }
	//	// @media (max-width: 768px) {
	//	width: 110.41px;
	//	height: 107.38px;
	//}
	//@media (max-width: 650px) {
	//	width: 67.07px;
	//	height: 65.23px;
	//	top: -144px;
	//	left: 202px;
	//}
	//@media (max-width: 480px) {
	//	top: -144px;
	//	left: 150px;
	//}
	@media (max-width: 1023px) {
		left: unset;
		top: -5px;
		right: -64px;
		// }
		// @media (max-width: 768px) {
		width: 110.41px;
		height: 107.38px;
	}
	@media (max-width: 650px) {
		width: 67.07px;
		height: 65.23px;
		top: -19px;
		right: 49px;
	}
	@media (max-width: 480px) {
		top: -28px;
		right: 19px;
	}
`;
const GreyBox2 = styled.div`
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
	top: -23px;
	left: -381px;
	@media (max-width: 1440px) {
		width: 120.45px;
		height: 120.45px;
	}
	@media (max-width: 1330px) {
		left: -240px;
	}
	@media (max-width: 1280px) {
		left: -267px;
	}
	@media (max-width: 1250px) {
		left: -240px;
	}
	//@media (max-width: 1023px) {
	//	top: -114px;
	//	left: 45px;
	//	// }
	//	// @media (max-width: 768px) {
	//	width: 110.41px;
	//	height: 107.38px;
	//}
	//@media (max-width: 650px) {
	//	width: 67.07px;
	//	height: 65.23px;
	//	top: -86px;
	//	left: 119px;
	//}
	//@media (max-width: 480px) {
	//	top: -86px;
	//	left: 87px;
	//}
	@media (max-width: 1023px) {
		left: unset;
		top: -114px;
		right: 45px;
		// }
		// @media (max-width: 768px) {
		width: 110.41px;
		height: 107.38px;
	}
	@media (max-width: 650px) {
		width: 67.07px;
		height: 65.23px;
		top: -86px;
		right: 119px;
	}
	@media (max-width: 480px) {
		top: -86px;
		right: 87px;
	}
`;
const GreyBox3 = styled.div`
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
	top: 114px;
	left: -236px;
	@media (max-width: 1440px) {
		width: 120.45px;
		height: 120.45px;
	}
	@media (max-width: 1330px) {
		left: -150px;
	}
	@media (max-width: 1280px) {
		left: -162px;
	}
	@media (max-width: 1250px) {
		left: -150px;
	}
	//@media (max-width: 1023px) {
	//	top: -5px;
	//	left: -64px;
	//	// }
	//	// @media (max-width: 768px) {
	//	width: 110.41px;
	//	height: 107.38px;
	//}
	//@media (max-width: 650px) {
	//	width: 67.07px;
	//	height: 65.23px;
	//	top: -19px;
	//	left: 49px;
	//}
	//@media (max-width: 480px) {
	//	top: -28px;
	//	left: 19px;
	//}
	@media (max-width: 1023px) {
		top: -222px;
		left: 176px;
		// }
		// @media (max-width: 768px) {
		width: 110.41px;
		height: 107.38px;
	}
	@media (max-width: 650px) {
		width: 67.07px;
		height: 65.23px;
		top: -144px;
		left: 202px;
	}
	@media (max-width: 480px) {
		top: -144px;
		left: 150px;
	}
`;
const GreyBox4 = styled.div`
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
	top: 257px;
	left: -381px;
	@media (max-width: 1440px) {
		width: 120.45px;
		height: 120.45px;
	}
	@media (max-width: 1330px) {
		left: -240px;
	}
	@media (max-width: 1280px) {
		left: -267px;
	}
	@media (max-width: 1250px) {
		left: -240px;
	}
	//@media (max-width: 1023px) {
	//	top: 225px;
	//	left: -64px;
	//	// }
	//	// @media (max-width: 768px) {
	//	width: 110.41px;
	//	height: 107.38px;
	//}
	//@media (max-width: 650px) {
	//	width: 67.07px;
	//	height: 65.23px;
	//	top: 186px;
	//	left: 49px;
	//}
	//@media (max-width: 480px) {
	//	top: 186px;
	//	left: 19px;
	//}
	@media (max-width: 1023px) {
		top: -114px;
		left: 45px;
		// }
		// @media (max-width: 768px) {
		width: 110.41px;
		height: 107.38px;
	}
	@media (max-width: 650px) {
		width: 67.07px;
		height: 65.23px;
		top: -86px;
		left: 119px;
	}
	@media (max-width: 480px) {
		top: -86px;
		left: 87px;
	}
`;
const GreyBox5 = styled.div`
	background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(246, 245, 245, 0.5) 0%, rgba(250, 250, 250, 0.5) 100%);
	border-radius: 14.8359px;
	position: absolute;
	width: 134.79px;
	height: 134.79px;
	z-index: 1;
	transform: rotate(45deg);
	display: flex;
	align-items: center;
	justify-content: center;
	top: 329px;
	left: -106px;
	@media (max-width: 1440px) {
		width: 120.45px;
		height: 120.45px;
	}
	@media (max-width: 1330px) {
		left: -68px;
	}
	@media (max-width: 1280px) {
		left: -89px;
	}
	@media (max-width: 1250px) {
		left: -68px;
	}
	//@media (max-width: 1023px) {
	//	top: 345px;
	//	left: 45px;
	//	// }
	//	// @media (max-width: 768px) {
	//	width: 110.41px;
	//	height: 107.38px;
	//}
	//
	//@media (max-width: 650px) {
	//	width: 67.07px;
	//	height: 65.23px;
	//	top: 253px;
	//	left: 119px;
	//}
	//@media (max-width: 480px) {
	//	top: 253px;
	//	left: 76px;
	//}
	@media (max-width: 1023px) {
		top: -5px;
		left: -64px;
		// }
		// @media (max-width: 768px) {
		width: 110.41px;
		height: 107.38px;
	}
	@media (max-width: 650px) {
		width: 67.07px;
		height: 65.23px;
		top: -19px;
		left: 49px;
	}
	@media (max-width: 480px) {
		top: -28px;
		left: 19px;
	}
`;

const GreyBox6 = styled.div`
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
	top: -117px;
	right: -106px;
	@media (max-width: 1440px) {
		width: 120.45px;
		height: 120.45px;
	}
	@media (max-width: 1330px) {
		right: -68px;
	}
	@media (max-width: 1280px) {
		right: -89px;
	}
	@media (max-width: 1250px) {
		right: -68px;
	}
	//@media (max-width: 1023px) {
	//	top: -114px;
	//	right: 45px;
	//	// }
	//	// @media (max-width: 768px) {
	//	width: 110.41px;
	//	height: 107.38px;
	//}
	//@media (max-width: 650px) {
	//	width: 67.07px;
	//	height: 65.23px;
	//	top: -86px;
	//	right: 119px;
	//}
	//@media (max-width: 480px) {
	//	top: -86px;
	//	right: 87px;
	//}
	@media (max-width: 1023px) {
		top: 225px;
		right: -64px;
		// }
		// @media (max-width: 768px) {
		width: 110.41px;
		height: 107.38px;
	}
	@media (max-width: 650px) {
		width: 67.07px;
		height: 65.23px;
		top: 186px;
		right: 49px;
	}
	@media (max-width: 480px) {
		top: 186px;
		right: 19px;
	}
`;

const GreyBox7 = styled.div`
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
	top: -23px;
	right: -381px;
	@media (max-width: 1440px) {
		width: 120.45px;
		height: 120.45px;
	}
	@media (max-width: 1330px) {
		right: -240px;
	}
	@media (max-width: 1280px) {
		right: -267px;
	}
	@media (max-width: 1250px) {
		right: -240px;
	}
	//@media (max-width: 1023px) {
	//	top: -5px;
	//	right: -64px;
	//	// }
	//	// @media (max-width: 768px) {
	//	width: 110.41px;
	//	height: 107.38px;
	//}
	//@media (max-width: 650px) {
	//	width: 67.07px;
	//	height: 65.23px;
	//	top: -19px;
	//	right: 49px;
	//}
	//@media (max-width: 480px) {
	//	top: -28px;
	//	right: 19px;
	//}
	@media (max-width: 1023px) {
		top: 345px;
		right: 45px;
		// }
		// @media (max-width: 768px) {
		width: 110.41px;
		height: 107.38px;
	}
	@media (max-width: 650px) {
		width: 67.07px;
		height: 65.23px;
		top: 253px;
		right: 119px;
	}
	@media (max-width: 480px) {
		top: 253px;
		right: 76px;
	}
`;

const GreyBox8 = styled.div`
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
	top: 114px;
	right: -236px;
	@media (max-width: 1440px) {
		width: 120.45px;
		height: 120.45px;
	}
	@media (max-width: 1330px) {
		right: -150px;
	}
	@media (max-width: 1280px) {
		right: -165px;
	}
	@media (max-width: 1250px) {
		right: -150px;
	}
	//@media (max-width: 1023px) {
	//	top: 225px;
	//	right: -64px;
	//	// }
	//	// @media (max-width: 768px) {
	//	width: 110.41px;
	//	height: 107.38px;
	//}
	//@media (max-width: 650px) {
	//	width: 67.07px;
	//	height: 65.23px;
	//	top: 186px;
	//	right: 49px;
	//}
	//@media (max-width: 480px) {
	//	top: 186px;
	//	right: 19px;
	//}
	@media (max-width: 1023px) {
		top: 460px;
		right: 176px;
		// }
		// @media (max-width: 768px) {
		width: 110.41px;
		height: 107.38px;
	}
	@media (max-width: 650px) {
		width: 67.07px;
		height: 65.23px;
		top: 322px;
		right: 202px;
	}
	@media (max-width: 480px) {
		top: 316px;
		right: 157px;
	}
`;

const GreyBox9 = styled.div`
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
	top: 257px;
	right: -381px;
	@media (max-width: 1440px) {
		width: 120.45px;
		height: 120.45px;
	}
	@media (max-width: 1330px) {
		right: -240px;
	}
	@media (max-width: 1280px) {
		right: -267px;
	}
	@media (max-width: 1250px) {
		right: -240px;
	}
	//@media (max-width: 1023px) {
	//	top: 345px;
	//	right: 45px;
	//	// }
	//	// @media (max-width: 768px) {
	//	width: 110.41px;
	//	height: 107.38px;
	//}
	//@media (max-width: 650px) {
	//	width: 67.07px;
	//	height: 65.23px;
	//	top: 253px;
	//	right: 119px;
	//}
	//@media (max-width: 480px) {
	//	top: 253px;
	//	right: 76px;
	//}
	@media (max-width: 1023px) {
		top: 345px;
		left: 45px;
		// }
		// @media (max-width: 768px) {
		width: 110.41px;
		height: 107.38px;
	}

	@media (max-width: 650px) {
		width: 67.07px;
		height: 65.23px;
		top: 253px;
		left: 119px;
	}
	@media (max-width: 480px) {
		top: 253px;
		left: 76px;
	}
`;

const GreyBox10 = styled.div`
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
	top: 329px;
	right: -106px;
	@media (max-width: 1440px) {
		width: 120.45px;
		height: 120.45px;
	}
	@media (max-width: 1330px) {
		right: -68px;
	}
	@media (max-width: 1280px) {
		right: -89px;
	}
	@media (max-width: 1250px) {
		right: -68px;
	}
	//@media (max-width: 1023px) {
	//	top: 460px;
	//	right: 176px;
	//	// }
	//	// @media (max-width: 768px) {
	//	width: 110.41px;
	//	height: 107.38px;
	//}
	//@media (max-width: 650px) {
	//	width: 67.07px;
	//	height: 65.23px;
	//	top: 322px;
	//	right: 202px;
	//}
	//@media (max-width: 480px) {
	//	top: 316px;
	//	right: 157px;
	//}
	@media (max-width: 1023px) {
		top: 225px;
		left: -64px;
		// }
		// @media (max-width: 768px) {
		width: 110.41px;
		height: 107.38px;
	}
	@media (max-width: 650px) {
		width: 67.07px;
		height: 65.23px;
		top: 186px;
		left: 49px;
	}
	@media (max-width: 480px) {
		top: 186px;
		left: 19px;
	}
`;

const GreyBoxInner = styled.div`
	background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(218, 218, 218, 0.8) 0%, rgba(250, 250, 250, 0.8) 100%);
	border-radius: 13.4952px;
	width: 100.28px;
	height: 100.28px;
	display: flex;
	justify-content: center;
	align-items: center;
	@media (max-width: 1440px) {
		width: 89.61px;
		height: 89.61px;
		border-radius: 11.9999px;
	}
	@media (max-width: 768px) {
		width: 82.15px;
		height: 82.15px;
		border-radius: 11.9999px;
	}
	@media (max-width: 650px) {
		border-radius: 5.58511px;

		width: 49.92px;
		height: 49.92px;
	}
`;

const MainBox = styled.div`
	max-width: 480px;
	margin: 0 auto;
	position: relative;
	@media (max-width: 480px) {
		max-width: 375px;
	}
`;

const BoxImg = styled.img`
	transform: rotate(-45deg);
	@media (min-width: 320px) {
		max-width: 48px;
		width: 100%;
	}
	@media (min-width: 768px) {
		max-width: 76px;
		width: 100%;
	}
	@media (min-width: 1024px) {
		max-width: 86px;
		width: 100%;
	}
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
	z-index: -1;
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
