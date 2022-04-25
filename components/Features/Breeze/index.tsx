import React, { FC } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { FeaturesCon } from '../../common/Container/Container';

const Breeze: FC = () => {
	return (
		<SyledBreeze>
			<FeaturesCon>
				<BreezeCon>
					<BreezeTitle>Breeze through orders without the stress</BreezeTitle>
					<BreezeText>
						Your customers will love that they can browse item catalogs and check availability before
						placing orders. You'll receive orders in beautifully formatted lists. Confirm or amend them in a
						few taps, even when on-the-go!
					</BreezeText>
					<BreezeBlock1>
						<BreezeBlock2>
							<Block>
								<Add>
									<AddCon>
										<AddFile>
											<Image
												src='/images/features/breeze/file.svg'
												layout='fill'
												objectFit='contain'
												alt='file'
											/>
										</AddFile>
										<AddText>Add Catalog to Order List</AddText>
									</AddCon>
									<AddArrow>
										<Image
											src='/images/features/breeze/arrow.svg'
											layout='fill'
											objectFit='contain'
											alt='arrow'
										/>
									</AddArrow>
								</Add>
								<Del>
									<DelCon>
										<DelCal>
											<Image
												src='/images/features/breeze/calendar.svg'
												layout='fill'
												objectFit='contain'
												alt='calendar'
											/>
										</DelCal>
										<DelText>Delivery on</DelText>
									</DelCon>
									<DelDate>Tue, 27 Oct</DelDate>
								</Del>
								<Man>
									<Image
										src='/images/features/breeze/man@2x.jpg'
										layout='fill'
										objectFit='contain'
										alt='man'
									/>
								</Man>
								<Women>
									<Image
										src='/images/features/breeze/women@2x.jpg'
										layout='fill'
										objectFit='contain'
										alt='man'
									/>
								</Women>
								<Order>
									<OrderInfo>
										<OrderText>Total Amount</OrderText>
										<OrderPrice>$ 1340.00</OrderPrice>
									</OrderInfo>
									<OrderButton>Confirm Order (9 Items)</OrderButton>
								</Order>
							</Block>
							<BreezeBlock2Dec0></BreezeBlock2Dec0>
						</BreezeBlock2>
					</BreezeBlock1>
				</BreezeCon>
			</FeaturesCon>
		</SyledBreeze>
	);
};

const SyledBreeze = styled.section`
	margin-bottom: 160px;
	position: relative;

	@media (min-width: 1024px) {
		padding: 288px 0;
		margin-bottom: 80px;
	}
`;

const BreezeCon = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (min-width: 1024px) {
		display: block;
	}
`;

const BreezeTitle = styled.h2`
	font-family: 'Gilroy';
	font-weight: 600;
	font-size: 32px;
	line-height: 39px;
	color: #212121;
	margin: 0 0 12px 0;
	max-width: 343px;
	text-align: center;

	@media (min-width: 768px) {
		font-size: 36px;
		line-height: 44px;
		max-width: 373px;
	}

	@media (min-width: 1024px) {
		margin: 0 0 16px 0;
		text-align: left;
	}

	@media (min-width: 1280px) {
		font-size: 40px;
		line-height: 49px;
		max-width: 420px;
	}

	@media (min-width: 1440px) {
		font-size: 44px;
		line-height: 54px;
		max-width: 450px;
	}

	@media (min-width: 1920px) {
		font-size: 44px;
		line-height: 54px;
	}
`;

const BreezeText = styled.p`
	font-family: 'Inter';
	font-weight: 400;
	font-size: 14px;
	line-height: 23px;
	color: #5c5c5c;
	margin: 0;
	position: relative;

	@media (min-width: 768px) {
		font-weight: 400;
		font-size: 16px;
	}

	@media (min-width: 1024px) {
		max-width: 340px;

		&::before {
			content: url('/images/features/breeze/breeze-dots-l.webp');
			position: absolute;
			left: -250px;
			bottom: -215px;
			z-index: -1;
		}
	}

	@media (min-width: 1280px) {
		max-width: 442px;
	}

	@media (min-width: 1440px) {
		&::before {
			left: -160px;
		}
	}

	@media (min-width: 1920px) {
		font-size: 18px;
		line-height: 25px;
		max-width: 515px;

		&::before {
			left: -100px;
		}
	}
`;

const BreezeBlock1 = styled.div`
	position: static;
	width: 405px;
	height: 405px;
	padding: 25px;
	margin-top: 130px;
	background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(218, 218, 218, 0.3) 0%, rgba(250, 250, 250, 0.3) 100%);
	border-radius: 55.2257px;
	transform: rotate(-45deg);

	@media (min-width: 768px) {
		width: 560.03px;
		height: 560.03px;
		padding: 35px;
	}

	@media (min-width: 1024px) {
		position: absolute;
		margin: 0;
		top: -168px;
		right: -66px;
	}

	@media (min-width: 1280px) {
		right: -132px;
	}

	@media (min-width: 1440px) {
		right: -76px;
	}
`;

const BreezeBlock2 = styled.div`
	width: 354px;
	height: 354px;
	background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(218, 218, 218, 0.6) 0%, rgba(250, 250, 250, 0.6) 100%);
	border-radius: 55.2257px;
	position: relative;

	@media (min-width: 768px) {
		width: 490px;
		height: 490px;
	}
`;

const Block = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	transform: rotate(45deg);

	&::before {
		content: url('/images/features/breeze/women-dec.svg');
		position: absolute;
		top: 94px;
		right: -21px;
	}

	@media (min-width: 768px) {
		&::before {
			top: 120px;
			right: -8px;
		}

		&::after {
			content: url('/images/features/breeze/man-dec.svg');
			position: absolute;
			top: 204px;
			left: -58px;
		}
	}

	@media (min-width: 1280px) {
		&::before {
			top: 113px;
			right: -25px;
		}

		&::after {
			left: -23px;
		}
	}
`;

const ImgDiv = styled.div`
	position: absolute;
	height: 91px;
	width: 91px;
	border-radius: 50%;

	& img {
		border-radius: 50%;
	}

	@media (min-width: 768px) {
		width: 124px;
		height: 124px;

		&::before {
			top: 114px;
			right: -6px;
		}
	}
`;

const Man = styled(ImgDiv)`
	left: 6px;
	bottom: 75px;

	@media (min-width: 768px) {
		left: -28px;
		bottom: 121px;
	}

	@media (min-width: 1280px) {
		left: 5px;
	}
`;

const Women = styled(ImgDiv)`
	top: 118px;
	right: 17px;

	@media (min-width: 768px) {
		top: 162px;
		right: 22px;
	}

	@media (min-width: 1280px) {
		right: 5px;
	}
`;

const Add = styled.div`
	position: absolute;
	top: 35px;
	left: 70px;
	width: 196px;
	height: 33px;
	background-color: #ffffff;
	border-radius: 8.5px;
	padding: 9.5px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-shadow: 5px 8px 17px 0 rgba(33, 33, 33, 0.1);

	&::before {
		content: url('/images/features/breeze/con-l-375.svg');
		position: absolute;
		left: 33px;
		bottom: -64px;
	}

	&::after {
		content: url('/images/features/breeze/women-l-375.svg');
		position: absolute;
		right: -13px;
		bottom: -90px;
	}

	@media (min-width: 768px) {
		width: 268px;
		height: 45px;
		border-radius: 11px;
		padding: 13px;
		top: 31px;

		&::before {
			content: url('/images/features/breeze/con-l-768.svg');
			bottom: -85px;
		}

		&::after {
			content: url('/images/features/breeze/women-l-768.svg');
			right: -55px;
			bottom: -119px;
		}
	}

	@media (min-width: 1280px) {
		left: 120px;

		&::before {
			left: 47px;
		}

		&::after {
			right: -21px;
		}
	}
`;

const AddCon = styled.div`
	display: flex;
	align-items: center;
	gap: 5.8px;

	@media (min-width: 768px) {
		gap: 8px;
	}
`;

const AddFile = styled.div`
	position: relative;
	width: 13px;
	height: 13px;

	@media (min-width: 768px) {
		width: 18px;
		height: 18px;
	}
`;

const AddArrow = styled.div`
	position: relative;
	height: 6px;
	width: 6px;

	@media (min-width: 768px) {
		height: 9px;
		width: 9px;
	}
`;

const AddText = styled.p`
	font-family: 'Gilroy';
	font-weight: 400;
	font-size: 10px;
	line-height: 12px;
	color: #5c5c5c;
	margin: 0;

	@media (min-width: 768px) {
		font-size: 14px;
		line-height: 17px;
	}
`;

const Del = styled.div`
	position: absolute;
	top: 118px;
	left: 7px;
	width: 192px;
	height: 32px;
	background-color: #ffffff;
	border-radius: 10px;
	padding: 9.5px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-shadow: 5px 8px 17px 0 rgba(33, 33, 33, 0.1);

	@media (min-width: 768px) {
		width: 262px;
		height: 44px;
		border-radius: 14px;
		padding: 13px;
		top: 145px;
		left: -7px;
	}

	@media (min-width: 1280px) {
		top: 144px;
		left: 46px;
	}
`;

const DelCon = styled.div`
	display: flex;
	align-items: center;
	gap: 5.8px;

	@media (min-width: 768px) {
		gap: 8px;
	}
`;

const DelCal = styled.div`
	position: relative;
	width: 11px;
	height: 13px;

	@media (min-width: 768px) {
		width: 16px;
		height: 18px;
	}
`;

const DelText = styled.p`
	font-family: 'Gilroy';
	font-weight: 400;
	font-size: 10px;
	line-height: 12px;
	color: #5c5c5c;
	margin: 0;

	@media (min-width: 768px) {
		font-size: 14px;
		line-height: 17px;
	}
`;

const DelDate = styled.p`
	font-family: 'Gilroy';
	font-weight: 400;
	font-size: 10px;
	line-height: 12px;
	color: #212121;
	margin: 0;

	@media (min-width: 768px) {
		font-size: 14px;
		line-height: 17px;
	}
`;

const Order = styled.div`
	position: absolute;
	right: 9px;
	bottom: 35px;
	background-color: #ffffff;
	border-radius: 9px;
	box-shadow: 5px 8px 17px 0 rgba(33, 33, 33, 0.1);

	&::before {
		content: url('/images/features/breeze/man-l-375.svg');
		position: absolute;
		top: -51px;
		left: -44px;
	}

	@media (min-width: 768px) {
		border-radius: 14px;
		right: 43px;
		bottom: 72px;

		&::before {
			content: url('/images/features/breeze/man-l-768.svg');
			top: -69px;
			left: -74px;
		}
	}

	@media (min-width: 1280px) {
		right: 8px;
	}
`;

const OrderInfo = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 9.5px 7.5px;

	@media (min-width: 768px) {
		padding: 13px 9px;
	}
`;

const OrderText = styled.p`
	font-family: 'Gilroy';
	font-weight: 400;
	font-size: 8px;
	line-height: 11px;
	color: #212121;
	margin: 0;

	@media (min-width: 768px) {
		font-size: 12px;
		line-height: 15px;
	}
`;

const OrderPrice = styled.p`
	font-family: 'Gilroy';
	font-weight: 700;
	font-size: 8px;
	line-height: 11px;
	color: #212121;
	margin: 0;

	@media (min-width: 768px) {
		font-size: 12px;
		line-height: 15px;
	}
`;

const OrderButton = styled.button`
	background-color: #ff474d;
	border-style: none;
	border-radius: 9.81273px;
	font-family: 'Gilroy';
	font-weight: 700;
	font-size: 10px;
	line-height: 13px;
	color: #ffffff;
	padding: 10.5px 50px;

	@media (min-width: 768px) {
		font-size: 14px;
		line-height: 17px;
		padding: 15px 67px;
		border-radius: 13px;
	}
`;

const BreezeBlock2Dec0 = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	transform: rotate(45deg);
	z-index: -1;

	&::after {
		content: url('/images/features/breeze/breeze-dots-m.webp');
		position: absolute;
		left: -9px;
		bottom: -54px;
		z-index: -3;
	}

	@media (min-width: 768px) {
		&::before {
			content: url('/images/features/breeze/breeze-dots-r.webp');
			position: absolute;
			right: -290px;
			top: -130px;
		}

		&::after {
			left: -30px;
			bottom: -58px;
		}
	}

	@media (min-width: 1024px) {
		&::before {
			right: -260px;
		}
	}
`;

export default Breeze;
