import React, { FC } from 'react';
import styled from 'styled-components';
import { FeaturesCon } from '../../common/Container/Container';

const Send: FC = () => {
	return (
		<StyledSend>
			<FeaturesCon>
				<SendInfo>
					<SendTitle>Send invoices, save the trees </SendTitle>
					<SendText>
						Send invoices digitally, and track them all the way until they're paid. It's easier to reconcile
						and more organized than printouts. If they're overdue, automatically send a friendly reminder or
						two!
					</SendText>
				</SendInfo>
				<picture>
					<source
						srcSet='images/features/send/women-1920.jpg 1x, images/features/send/women-1920@2x.jpg 2x'
						media='(min-width: 1920px)'
					/>
					<source
						srcSet='images/features/send/women-1440.jpg 1x, images/features/send/women-1440@2x.jpg 2x'
						media='(min-width: 1440px)'
					/>
					<source
						srcSet='images/features/send/women-1280.jpg 1x, images/features/send/women-1280@2x.jpg 2x'
						media='(min-width: 1280px)'
					/>
					<source
						srcSet='images/features/send/women-1024.jpg 1x, images/features/send/women-1024@2x.jpg 2x'
						media='(min-width: 1024px)'
					/>
					<source
						srcSet='images/features/send/women-768.jpg 1x, images/features/send/women-768@2x.jpg 2x'
						media='(min-width: 768px)'
					/>
					<SendImg
						src='images/features/send/women-375.jpg'
						srcSet='images/features/send/women-375@2x.jpg 2x'
						alt='women'
						loading='lazy'
					/>
				</picture>
				<Invoice>
					<InvoiceCon>
						<InvoiceInfo>
							<InvoiceTitle>Send an invoice for this order</InvoiceTitle>
							<InvoiceText>
								Need a template? <InvoiceSpan> Generate Invoice</InvoiceSpan>{' '}
								<InvoiceArrow src='images/features/send/arrow.svg' alt='arrow' loading='lazy' />
							</InvoiceText>
						</InvoiceInfo>
						<InvoiceButton>Send Invoice</InvoiceButton>
					</InvoiceCon>
				</Invoice>
				<Remind>
					<RemindInfo>
						<RemindBell src='images/features/send/bell.svg' alt='bell' loading='lazy' />
						<RemindTitle>Send Reminders</RemindTitle>
					</RemindInfo>
					<RemindCheck src='images/features/send/check.svg' alt='check' loading='lazy' />
				</Remind>
				<Dec1></Dec1>
			</FeaturesCon>
		</StyledSend>
	);
};

const StyledSend = styled.section`
	margin-bottom: 120px;
`;

const SendInfo = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 77px;

	@media (min-width: 768px) {
		flex-direction: row;
		justify-content: space-between;
		gap: 54px;
		margin-bottom: 32px;
	}

	@media (min-width: 1024px) {
		gap: 48px;
		margin-bottom: 40px;
	}

	@media (min-width: 1440px) {
		gap: 88px;
	}

	@media (min-width: 1920px) {
		gap: 66px;
	}
`;

const SendTitle = styled.h2`
	font-family: 'Gilroy';
	font-weight: 600;
	font-size: 36px;
	line-height: 44px;
	text-align: center;
	align-self: center;
	color: #212121;
	margin: 0 0 16px 0;
	max-width: 250px;

	@media (min-width: 768px) {
		flex: 0 0 320px;
		max-width: 100%;
		text-align: left;
	}

	@media (min-width: 1024px) {
		flex: 0 0 490px;
		align-self: flex-start;
	}

	@media (min-width: 1280px) {
		font-size: 40px;
		line-height: 49px;
		flex: 0 0 540px;
	}
`;

const SendText = styled.p`
	font-family: 'Inter';
	font-weight: 400;
	font-size: 16px;
	line-height: 23px;
	color: #5c5c5c;
	margin: 0;
`;

const SendImg = styled.img`
	border-radius: 43px;
	width: 100%;
	height: auto;
`;

const Invoice = styled.div`
	position: absolute;
	top: 267px;
	right: 17px;
	display: flex;
	align-items: center;
	width: 295.19px;
	height: 50.18px;
	background: #f3f4f5;
	border-radius: 11.8076px;
	padding: 11.3px;
	box-shadow: 7px 7px 20px 0 rgba(33, 33, 33, 0.1);

	@media (min-width: 768px) {
		width: 392.91px;
		height: 66.8px;
		border-radius: 15.7165px;
		padding: 15px;
		top: 221px;
		right: 46px;
	}

	@media (min-width: 1024px) {
		top: 195px;
		right: 67px;
	}

	@media (min-width: 1280px) {
		width: 429.41px;
		height: 73px;
		border-radius: 17.1765px;
		padding: 16px;
		top: 192px;
		right: 33px;
	}

	@media (min-width: 1440px) {
		top: 231px;
		right: 55px;
	}

	@media (min-width: 1920px) {
		top: 259px;
	}
`;

const InvoiceCon = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const InvoiceInfo = styled.div``;

const InvoiceTitle = styled.p`
	font-family: 'Gilroy';
	font-weight: 700;
	font-size: 12.3737px;
	line-height: 15px;
	color: #212121;
	margin: 0 0 2.87px 0;

	@media (min-width: 768px) {
		font-size: 16.47px;
		line-height: 20px;
		margin: 0 0 3.79px 0;
	}

	@media (min-width: 1280px) {
		font-size: 18px;
		line-height: 22px;
		margin: 0 0 4px 0;
	}
`;

const InvoiceText = styled.p`
	font-family: 'Inter';
	font-weight: 500;
	font-size: 8.24917px;
	line-height: 10px;
	color: #5c5c5c;
	margin: 0;

	@media (min-width: 768px) {
		font-size: 10.98px;
		line-height: 13px;
	}

	@media (min-width: 1280px) {
		font-size: 12px;
		line-height: 15px;
	}
`;

const InvoiceSpan = styled.span`
	color: #212121;
`;

const InvoiceButton = styled.button`
	width: 70.81px;
	height: 22.32px;
	border: 0.550809px solid #d2d2d2;
	background-color: transparent;
	border-radius: 8.81294px;
	font-family: 'Gilroy';
	font-weight: 700;
	font-size: 8.24917px;
	line-height: 10px;
	text-align: center;
	color: #212121;

	@media (min-width: 768px) {
		width: 94.25px;
		height: 29.71px;
		border-radius: 11.7304px;
		font-size: 10.98px;
		line-height: 14px;
	}

	@media (min-width: 1280px) {
		width: 103px;
		height: 32.47px;
		border-radius: 12.8201px;
		font-size: 12px;
		line-height: 15px;
	}
`;

const InvoiceArrow = styled.img`
	width: auto;
	height: 5px;

	@media (min-width: 768px) {
		height: 7px;
	}

	@media (min-width: 1280px) {
		height: 8px;
	}
`;

const Remind = styled.div`
	position: absolute;
	top: 370px;
	right: 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 141px;
	height: 30.93px;
	background: #f3f4f5;
	border-radius: 7.98307px;
	padding: 9.5px;
	box-shadow: 5px 3px 20px 0 rgba(33, 33, 33, 0.1);

	@media (min-width: 768px) {
		width: 187.68px;
		height: 41.18px;
		padding: 13px;
		top: 338px;
		right: 9px;
	}

	@media (min-width: 1024px) {
		top: 309px;
		right: 19px;
	}

	@media (min-width: 1280px) {
		width: 205px;
		height: 45px;
		top: 316px;
		right: -23px;
	}

	@media (min-width: 1440px) {
		top: 355px;
	}

	@media (min-width: 1920px) {
		top: 384px;
	}
`;

const RemindInfo = styled.div`
	display: flex;
	align-items: center;
	gap: 5.5px;

	@media (min-width: 768px) {
		gap: 7.7px;
	}
`;

const RemindBell = styled.img`
	width: 12.38px;
	height: 13.76px;

	@media (min-width: 768px) {
		width: 16.48px;
		height: 18.32px;
	}

	@media (min-width: 1280px) {
		width: 18px;
		height: 20px;
	}
`;

const RemindTitle = styled.p`
	font-family: 'Gilroy';
	font-weight: 400;
	font-size: 9.62403px;
	line-height: 12px;
	color: #212121;
	margin: 0;

	@media (min-width: 768px) {
		font-size: 12.81px;
		line-height: 16px;
	}

	@media (min-width: 1280px) {
		font-size: 14px;
		line-height: 17px;
	}
`;

const RemindCheck = styled.img`
	width: 11.98px;
	height: 11.97px;

	@media (min-width: 768px) {
		width: 15.95px;
		height: 15.94px;
	}

	@media (min-width: 1280px) {
		width: 17.42px;
		height: 17.42px;
	}
`;

const Dec1 = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;

	&::before {
		content: url('images/features/send/line-l-375.svg');
		position: absolute;
		bottom: 244px;
		right: 140px;
	}

	&::after {
		content: url('images/features/send/line-r-375.svg');
		position: absolute;
		bottom: 340px;
		right: 70px;
	}

	@media (min-width: 768px) {
		&::before {
			content: url('images/features/send/line-l-768.svg');
			bottom: 287px;
			right: 270px;
		}

		&::after {
			content: url('images/features/send/line-r-768.svg');
			bottom: 332px;
			right: 137px;
		}
	}

	@media (min-width: 1024px) {
		&::before {
			bottom: 297px;
			right: 308px;
		}

		&::after {
			bottom: 345px;
		}
	}

	@media (min-width: 1280px) {
		&::before {
			content: url('images/features/send/line-l-1280.svg');
			bottom: 332px;
			right: 296px;
		}

		&::after {
			content: url('images/features/send/line-r-1280.svg');
			right: 111px;
			bottom: 387px;
		}
	}

	@media (min-width: 1440px) {
		&::before {
			bottom: 270px;
			right: 346px;
		}

		&::after {
			bottom: 324px;
		}
	}

	@media (min-width: 1920px) {
		&::before {
			bottom: 242px;
			right: 380px;
		}

		&::after {
			bottom: 295px;
		}
	}
`;

export default Send;
