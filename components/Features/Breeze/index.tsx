import React, { FC, useState, useRef, RefObject, useEffect } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { FeaturesCon } from '../../common/Container/Container';
import { useTranslation } from 'next-i18next';

import ManL from './ManL';
import WomenL from './WomenL';
import ConL from './ConL';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';

const Breeze: FC = () => {
	const { t } = useTranslation();

	const [animate, setAnimate] = useState(false);

	const mainBlock = useRef() as RefObject<HTMLImageElement>;
	const blockEntry = useIntersectionObserver(mainBlock, {});

	useEffect(() => {
		const isVisible = !!blockEntry?.isIntersecting;

		if (isVisible) {
			setAnimate(true);
		}
	}, [blockEntry]);

	return (
		<SyledBreeze>
			<FeaturesCon>
				<BreezeCon>
					<BreezeTitle>{t('features:ordersTitle')}</BreezeTitle>
					<BreezeText>
						{t('features:ordersText')}
						<BreezeTextDots>
							<Image src={'/images/features/breeze/breeze-dots-l.png'} width={381} height={295} />
						</BreezeTextDots>
					</BreezeText>
					<BreezeBlock1 ref={mainBlock}>
						<BreezeBlock2>
							<Block>
								<Add>
									<ConL animate={animate} />
									<AddBlock animate={animate}>
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
									</AddBlock>
									<WomenL animate={animate} />
								</Add>
								<Del animate={animate}>
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
								<ManDec animate={animate}>
									<Image
										src='/images/features/breeze/man-dec.svg'
										alt='stars'
										width={73}
										height={67}
									/>
								</ManDec>
								<Man animate={animate}>
									<ImgWrap>
										<Image
											src='/images/features/breeze/man@2x.jpg'
											layout='fill'
											objectFit='contain'
											alt='man'
										/>
									</ImgWrap>
								</Man>
								<WomendDec animate={animate}>
									<Image
										src='/images/features/breeze/women-dec.svg'
										alt='stars'
										width={91}
										height={76}
									/>
								</WomendDec>
								<Women animate={animate}>
									<ImgWrap>
										<Image
											src='/images/features/breeze/women@2x.jpg'
											layout='fill'
											objectFit='contain'
											alt='man'
										/>
									</ImgWrap>
								</Women>
								<ManL animate={animate} />
								<Order animate={animate}>
									<OrderInfo>
										<OrderText>Total Amount</OrderText>
										<OrderPrice>$ 1340.00</OrderPrice>
									</OrderInfo>
									<OrderButton>Confirm Order (9 Items)</OrderButton>
								</Order>
							</Block>
							<BreezeBlock2Dec0>
								<DotsM>
									<Image src={'/images/features/breeze/breeze-dots-m.png'} width={261} height={200} />
								</DotsM>
								<DotsR>
									<Image src={'/images/features/breeze/breeze-dots-r.png'} width={426} height={325} />
								</DotsR>
							</BreezeBlock2Dec0>
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
	}

	@media (min-width: 1280px) {
		max-width: 442px;
	}

	@media (min-width: 1920px) {
		font-size: 18px;
		line-height: 25px;
		max-width: 515px;
	}
`;

const BreezeTextDots = styled.span`
	display: none;

	@media (min-width: 1024px) {
		display: inline-block;
		position: absolute;
		left: -250px;
		bottom: -215px;
		z-index: -1;
	}

	@media (min-width: 1440px) {
		left: -160px;
	}

	@media (min-width: 1920px) {
		left: -100px;
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
`;

const WomendDec = styled.div<{ animate: boolean }>`
	position: absolute;
	top: 94px;
	right: -21px;

	opacity: 0;
	animation: ${({ animate }) => (animate ? 'womenDecAnim 0.3s ease-in' : 'none')};
	animation-fill-mode: forwards;
	animation-delay: 300ms;

	@keyframes womenDecAnim {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@media (min-width: 768px) {
		top: 120px;
		right: -8px;
	}

	@media (min-width: 1280px) {
		top: 113px;
		right: -25px;
	}
`;

const ManDec = styled.div<{ animate: boolean }>`
	display: none;

	@media (min-width: 768px) {
		display: block;
		position: absolute;
		top: 204px;
		left: -58px;

		opacity: 0;
		animation: ${({ animate }) => (animate ? 'manDecAnim 0.3s ease-in' : 'none')};
		animation-fill-mode: forwards;
		animation-delay: 1.8s;
	}

	@media (min-width: 1280px) {
		left: -23px;
	}

	@keyframes manDecAnim {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;

const ImgDiv = styled.div`
	position: absolute;

	@media (min-width: 768px) {
		&::before {
			top: 114px;
			right: -6px;
		}
	}
`;

const Man = styled(ImgDiv)<{ animate: boolean }>`
	left: 6px;
	bottom: 75px;
	opacity: 0;
	animation: ${({ animate }) => (animate ? 'manAnim 0.3s ease-in' : 'none')};
	animation-fill-mode: forwards;
	animation-delay: 1.8s;

	@keyframes manAnim {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@media (min-width: 768px) {
		left: -28px;
		bottom: 121px;
	}

	@media (min-width: 1280px) {
		left: 5px;
	}
`;

const Women = styled(ImgDiv)<{ animate: boolean }>`
	top: 118px;
	right: 17px;
	opacity: 0;
	animation: ${({ animate }) => (animate ? 'womenAnim 0.3s ease-in' : 'none')};
	animation-fill-mode: forwards;
	animation-delay: 300ms;

	@keyframes womenAnim {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@media (min-width: 768px) {
		top: 162px;
		right: 22px;
	}

	@media (min-width: 1280px) {
		right: 5px;
	}
`;

const ImgWrap = styled.div`
	position: relative;
	height: 91px;
	width: 91px;

	& img {
		border-radius: 50%;
	}

	@media (min-width: 768px) {
		width: 124px;
		height: 124px;
	}
`;

const Add = styled.div`
	position: absolute;
	top: 35px;
	left: 70px;

	@media (min-width: 768px) {
		top: 31px;
	}

	@media (min-width: 1280px) {
		left: 120px;
	}
`;

const AddBlock = styled.div<{ animate: boolean }>`
	width: 196px;
	height: 33px;
	background-color: #ffffff;
	border-radius: 8.5px;
	padding: 9.5px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-shadow: 5px 8px 17px 0 rgba(33, 33, 33, 0.1);
	transform: ${({ animate }) => (animate ? 'scale(1)' : 'scale(0.9)')};
	transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) 0.9s;
	opacity: 0;
	animation: ${({ animate }) => (animate ? 'addAnim 0.3s ease-in' : 'none')};
	animation-fill-mode: forwards;
	animation-delay: 0.85s;

	@keyframes addAnim {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@media (min-width: 768px) {
		width: 268px;
		height: 45px;
		border-radius: 11px;
		padding: 13px;
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

const Del = styled.div<{ animate: boolean }>`
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
	transform: ${({ animate }) => (animate ? 'scale(1)' : 'scale(0.9)')};
	transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) 1.45s;
	opacity: 0;
	animation: ${({ animate }) => (animate ? 'delAnim 0.3s ease-in' : 'none')};
	animation-fill-mode: forwards;
	animation-delay: 1.35s;

	@keyframes delAnim {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

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

const Order = styled.div<{ animate: boolean }>`
	position: absolute;
	right: 9px;
	bottom: 35px;
	background-color: #ffffff;
	border-radius: 9px;
	box-shadow: 5px 8px 17px 0 rgba(33, 33, 33, 0.1);
	transform: ${({ animate }) => (animate ? 'scale(1)' : 'scale(0.9)')};
	transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) 2.5s;
	opacity: 0;
	animation: ${({ animate }) => (animate ? 'orderAnim 0.3s ease-in' : 'none')};
	animation-fill-mode: forwards;
	animation-delay: 2.4s;

	@keyframes orderAnim {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@media (min-width: 768px) {
		border-radius: 14px;
		right: 43px;
		bottom: 72px;
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
`;

const DotsM = styled.div`
	position: absolute;
	left: -9px;
	bottom: -54px;
	z-index: -3;

	@media (min-width: 768px) {
		left: -30px;
		bottom: -58px;
	}
`;

const DotsR = styled.div`
	display: none;

	@media (min-width: 768px) {
		display: block;
		position: absolute;
		right: -290px;
		top: -130px;
	}

	@media (min-width: 1024px) {
		right: -260px;
	}
`;

export default Breeze;
