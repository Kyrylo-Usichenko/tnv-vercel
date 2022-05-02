import React, { FC } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { useTranslation } from 'next-i18next';

const Tools: FC = () => {
	const { t } = useTranslation();

	return (
		<StyledTools>
			<FullCon>
				<Manage>
					<ManageTitle>{t('features:introductionManageOrders')}</ManageTitle>
					<ManageText>{t('features:introductionManageOrdersText')}</ManageText>
					<Image src='/images/features/tools/manage@2x.png' alt='app' width={252} height={324} />
					<ManageDec>
						<ManageDecDots>
							<Image
								src={'/images/features/tools/manage-dots.webp'}
								alt='Dots'
								width={254}
								height={100}
							/>
						</ManageDecDots>
					</ManageDec>
				</Manage>
				<Wrapper>
					<Message>
						<MessageeDec>
							<MessageeDecDots>
								<Image
									src={'/images/features/tools/message-dots.png'}
									alt='Dots'
									width={208}
									height={88}
								/>
							</MessageeDecDots>
						</MessageeDec>
						<MessageButtons>
							<MessageButton disabled>
								<Image src='/images/features/tools/pin.svg' alt='pin' width={16} height={17} />
							</MessageButton>
							<MessageButton disabled>
								<Image src='/images/features/tools/file.svg' alt='file' width={14} height={17} />
							</MessageButton>
							<label>
								<MessageInput placeholder='Type something...' disabled />
							</label>
						</MessageButtons>
						<MessageTitle>{t('features:introductionSendMessages')}</MessageTitle>
					</Message>
					<WrapperLine2>
						<Share>
							<ShareDec>
								<ShareDecDots>
									<Image
										src='/images/features/tools/share-dots.webp'
										alt='Dots'
										width={164}
										height={100}
									/>
								</ShareDecDots>
							</ShareDec>
							<ShareBlock1>
								<Image src='/images/features/tools/share.svg' alt='share' width={48} height={48} />
							</ShareBlock1>
							<ShareTitle>{t('features:introductionShare')}</ShareTitle>
						</Share>
						<Invoices>
							<InvoiceBlock1>
								<InvoiceBlock2>
									<Image
										src='/images/features/tools/dollar.svg'
										alt='dollar'
										width={22}
										height={44}
									/>
								</InvoiceBlock2>
							</InvoiceBlock1>
							<InvoiceTitle>{t('features:introductionCreateInvoices')}</InvoiceTitle>
							<InvoicesDec>
								<InvoicesDecDots>
									<Image
										src='/images/features/tools/invoice-dots.png'
										alt='Dots'
										width={129}
										height={153}
									/>
								</InvoicesDecDots>
							</InvoicesDec>
						</Invoices>
					</WrapperLine2>
				</Wrapper>
			</FullCon>
		</StyledTools>
	);
};

const StyledTools = styled.section`
	margin-bottom: 120px;

	@media (min-width: 768px) {
		margin-bottom: 140px;
	}

	@media (min-width: 1024px) {
		margin-bottom: 80px;
	}

	@media (min-width: 1920px) {
		display: flex;
		justify-content: flex-end;
	}
`;

const FullCon = styled.div`
	@media (min-width: 1024px) {
		display: flex;
		justify-content: space-between;
		gap: 24px;
	}

	@media (min-width: 1920px) {
		margin-left: 234px;
		width: 100%;
	}
`;

const Manage = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	background: #f7f7f7;
	border-radius: 32px;
	text-align: center;
	position: relative;
	overflow: hidden;
	z-index: 1;
	margin-bottom: 16px;
	padding-top: 48px;

	&::before {
		content: '';
		position: absolute;
		width: 364.08px;
		height: 364.08px;
		left: -230px;
		top: 50px;
		background: radial-gradient(
			95.51% 95.51% at 50% 50%,
			rgba(210, 210, 210, 0.3) 0%,
			rgba(250, 250, 250, 0.3) 100%
		);
		border-radius: 24px;
		transform: rotate(-45deg);
		z-index: -1;
	}

	&::after {
		content: '';
		position: absolute;
		width: 229.52px;
		height: 229.52px;
		top: 50px;
		right: -180px;
		background: radial-gradient(
			95.51% 95.51% at 50% 50%,
			rgba(210, 210, 210, 0.3) 0%,
			rgba(250, 250, 250, 0.3) 100%
		);
		border-radius: 32px;
		transform: rotate(-45deg);
		z-index: -1;
	}

	@media (min-width: 768px) {
		&::before {
			left: -100px;
			top: 40px;
		}

		&::after {
			right: -30px;
		}
	}

	@media (min-width: 1024px) {
		flex: 0 0 544px;
		margin-bottom: 0;
		max-height: 481px;

		&::before {
			left: -160px;
		}

		&::after {
			right: -130px;
		}
	}

	@media (min-width: 1280px) {
		flex: 0 0 574px;
		margin-left: 54px;
	}

	@media (min-width: 1440px) {
		flex: 0 0 654px;

		&::before {
			left: -80px;
		}
	}

	@media (min-width: 1920px) {
		flex: 0 0 714px;
		margin-left: 0;

		&::before {
			left: -20px;
		}
	}
`;

const ManageDec = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	height: 100%;
	width: 100%;
`;

const ManageDecDots = styled.div`
	position: absolute;
	bottom: 0;
	right: -190px;
	z-index: -1;

	@media (min-width: 768px) {
		right: 80px;
	}

	@media (min-width: 1024px) {
		right: 0px;
	}
`;

const ManageTitle = styled.h3`
	font-family: 'Gilroy';
	font-weight: 700;
	font-size: 24px;
	line-height: 29px;

	text-align: center;
	color: #212121;
	margin: 0 0 8px 0;

	@media (min-width: 1920px) {
		font-size: 28px;
		line-height: 35px;
	}
`;

const ManageText = styled.p`
	font-family: 'Inter';
	font-weight: 400;
	font-size: 14px;
	line-height: 21px;
	text-align: center;
	color: #727272;
	margin: 0 auto 24px auto;
	max-width: 330px;

	@media (min-width: 1920px) {
		font-size: 16px;
		line-height: 24px;
	}
`;

const Wrapper = styled.div`
	@media (min-width: 1024px) {
		flex: 1;
	}
`;

const Message = styled.div`
	background: #363636;
	border-radius: 32px;
	position: relative;
	overflow: hidden;
	padding: 54px 16px;
	margin-bottom: 16px;
	z-index: 1;

	&::before {
		content: '';
		background-color: #3f3f3f;
		width: 223px;
		height: 223px;
		border-radius: 26px;
		transform: rotate(-45deg);
		position: absolute;
		top: -62px;
		left: -67px;
		z-index: -1;
	}

	@media (min-width: 768px) {
		&::before {
			top: -70px;
			left: -54px;
		}

		&::after {
			content: '';
			width: 294px;
			height: 294px;
			border-radius: 26px;
			transform: rotate(-45deg);
			background-color: #3f3f3f;
			position: absolute;
			right: -101px;
			bottom: -104px;
			z-index: -1;
		}
	}

	@media (min-width: 1024px) {
		padding: 67px 0;
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
		margin-bottom: 24px;

		&::after {
			right: -300px;
		}
	}

	@media (min-width: 1280px) {
		max-height: 228px;

		&::after {
			right: -169px;
			bottom: -106px;
		}
	}

	@media (min-width: 1440px) {
		&::after {
			right: -72px;
			bottom: -88px;
		}
	}

	@media (min-width: 1920px) {
		&::after {
			right: 179px;
		}
	}
`;

const MessageeDec = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	height: 100%;
	width: 100%;
`;

const MessageeDecDots = styled.div`
	position: absolute;
	left: 0;
	bottom: -30px;

	@media (min-width: 768px) {
		bottom: 0;
		left: 20px;
	}
`;

const MessageButtons = styled.form`
	position: relative;
	z-index: 2;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 24px;

	@media (min-width: 1920px) {
		justify-content: flex-start;
		margin-left: 133px;
	}

	& > label {
		position: relative;

		&::before {
			content: url('/images/features/tools/arrow.svg');
			position: absolute;
			top: 10px;
			right: 21px;
		}
	}
`;

const MessageButton = styled.button`
	height: 36px;
	width: 36px;
	flex: 0 0 36px;
	background-color: #f3f4f5;
	border: none;
	border-radius: 8px;
	margin-right: 8px;
	padding: 0;
	display: inline-flex;
	justify-content: center;
	align-items: center;

	&:last-child {
		margin-right: 0;
	}

	@media (min-width: 768px) {
		height: 40px;
		width: 40px;
		flex: 0 0 40px;
	}
`;

const MessageInput = styled.input`
	width: 256px;
	height: 36px;
	background: #f3f4f5;
	border: none;
	border-radius: 8px;
	font-size: 14px;
	padding: 11px 19px 11px 14px;

	&:disabled {
		background: #f3f4f5;
	}

	@media (min-width: 768px) {
		height: 40px;
		width: 283px;
	}
`;

const MessageTitle = styled.h3`
	font-family: 'Gilroy';
	font-weight: 700;
	font-size: 24px;
	line-height: 29px;
	color: #ffffff;
	margin: 0;
	text-align: center;

	@media (min-width: 1920px) {
		font-size: 28px;
		line-height: 35px;
		text-align: left;
		margin-left: 222px;
	}
`;

const WrapperLine2 = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;

	@media (min-width: 768px) {
		flex-direction: row;
	}
`;

const Invoices = styled.div`
	display: flex;
	flex-direction: column;
	background: #363636;
	border-radius: 32px;
	position: relative;
	overflow: hidden;
	z-index: 1;
	padding: 46px 0;

	&::before {
		content: '';
		width: 229px;
		height: 229px;
		background-color: #3f3f3f;
		border-radius: 26px;
		transform: rotate(-45deg);
		position: absolute;
		top: -65px;
		left: -150px;
		z-index: -2;
	}

	&::after {
		content: '';
		width: 235px;
		height: 235px;
		background-color: #3f3f3f;
		border-radius: 26px;
		transform: rotate(-31deg);
		position: absolute;
		right: -73px;
		bottom: -37px;
		z-index: -2;
	}

	@media (min-width: 768px) {
		flex: 1;

		&::before {
			top: -58px;
			left: -162px;
		}
	}

	@media (min-width: 1024px) {
		&::after {
			right: -227px;
			bottom: -51px;
		}
	}

	@media (min-width: 1280px) {
		flex: 0 0 275px;
		padding: 44px 0;
		max-height: 229px;

		&::after {
			right: -151px;
		}
	}
`;

const InvoicesDec = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	height: 100%;
	width: 100%;
`;

const InvoicesDecDots = styled.div`
	position: absolute;
	right: 0;
	top: -7px;
	z-index: -1;

	@media (min-width: 1024px) {
		right: -140px;
	}

	@media (min-width: 1280px) {
		right: -90px;
	}
`;

const InvoiceTitle = styled.h3`
	font-family: 'Gilroy';
	font-weight: 700;
	font-size: 20px;
	line-height: 25px;
	text-align: center;
	color: #ffffff;
	margin: 0;

	@media (min-width: 768px) {
		order: -1;
		margin-bottom: 20px;
	}

	@media (min-width: 1280px) {
		font-size: 24px;
		line-height: 30px;
	}
`;

const InvoiceBlock1 = styled.div`
	width: 96px;
	height: 96px;
	background: #ffffff;
	border-radius: 17px;
	padding: 16px;
	margin: 0 auto 16px auto;

	@media (min-width: 768px) {
		margin: 0 auto;
	}
`;

const InvoiceBlock2 = styled.div`
	width: 64px;
	height: 64px;
	background: #b3b4b5;
	border-radius: 12px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Share = styled.div`
	background: #f7f7f7;
	border-radius: 32px;
	position: relative;
	overflow: hidden;
	padding: 46px 0;

	&::before {
		content: '';
		position: absolute;
		top: -195px;
		left: -121px;
		width: 339.63px;
		height: 339.63px;
		background: radial-gradient(
			95.51% 95.51% at 50% 50%,
			rgba(210, 210, 210, 0.3) 0%,
			rgba(250, 250, 250, 0.3) 100%
		);
		border-radius: 32px;
		transform: rotate(-45deg);
	}

	&::after {
		content: '';
		position: absolute;
		left: 200px;
		bottom: -85px;
		width: 178.21px;
		height: 178.21px;
		background: radial-gradient(
			95.51% 95.51% at 50% 50%,
			rgba(210, 210, 210, 0.3) 0%,
			rgba(250, 250, 250, 0.3) 100%
		);
		border-radius: 32px;
		transform: rotate(-45deg);
	}

	@media (min-width: 768px) {
		flex: 1;
		order: 2;

		&::before {
			top: -170px;
			left: -97px;
		}

		&::after {
			left: 230px;
		}
	}

	@media (min-width: 1024px) {
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;

		&::before {
			left: -137px;
		}

		&::after {
			left: 210px;
		}
	}

	@media (min-width: 1280px) {
		padding: 44px 0;
		max-height: 229px;
	}

	@media (min-width: 1440px) {
		&::after {
			left: 240px;
		}
	}

	@media (min-width: 1920px) {
		&::after {
			left: 200px;
		}
	}
`;

const ShareDec = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	height: 100%;
	width: 100%;
`;

const ShareDecDots = styled.div`
	position: absolute;
	left: 183px;
	top: 0;

	@media (min-width: 768px) {
		left: 200px;
	}

	@media (min-width: 1024px) {
		left: 170px;
	}

	@media (min-width: 1440px) {
		left: 210px;
	}

	@media (min-width: 1920px) {
		left: 170px;
	}
`;

const ShareBlock1 = styled.div`
	width: 96px;
	height: 96px;
	background: #ffffff;
	border-radius: 17.5493px;
	padding: 24px;
	position: relative;
	margin: 0 auto 16px auto;
	z-index: 2;
	box-shadow: 6px 8px 20px 0 rgba(0, 0, 0, 0.1);

	@media (min-width: 1920px) {
		margin: 0 auto 16px 121px;
	}
`;

const ShareTitle = styled.h3`
	font-family: 'Gilroy';
	font-weight: 700;
	font-size: 20px;
	line-height: 25px;
	color: #212121;
	position: relative;
	z-index: 2;
	margin: 0;
	text-align: center;

	@media (min-width: 1280px) {
		font-size: 24px;
		line-height: 30px;
	}

	@media (min-width: 1920px) {
		text-align: left;
		margin-left: 59px;
	}
`;

export default Tools;
