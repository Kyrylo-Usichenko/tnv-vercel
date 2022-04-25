import React, { FC } from 'react';
import styled from 'styled-components';

const Send: FC = () => {
	return (
		<StyledSend>
			<SendCon>
				<SendInfo>
					<SendTitle>Send invoices, save the trees </SendTitle>
					<SendText>
						Send invoices digitally, and track them all the way until they're paid. It's easier to reconcile
						and more organized than printouts. If they're overdue, automatically send a friendly reminder or
						two!
					</SendText>
				</SendInfo>
			</SendCon>
			<PreviewImg>
				<picture>
					<source
						srcSet='/images/features/send/women-1920.jpg 1x, /images/features/send/women-1920@2x.jpg 2x'
						media='(min-width: 1920px)'
					/>
					<source
						srcSet='/images/features/send/women-1440.jpg 1x, /images/features/send/women-1440@2x.jpg 2x'
						media='(min-width: 1440px)'
					/>
					<source
						srcSet='/images/features/send/women-1280.jpg 1x, /images/features/send/women-1280@2x.jpg 2x'
						media='(min-width: 1280px)'
					/>
					<source
						srcSet='/images/features/send/women-1024.jpg 1x, /images/features/send/women-1024@2x.jpg 2x'
						media='(min-width: 1024px)'
					/>
					<source
						srcSet='/images/features/send/women-768.jpg 1x, /images/features/send/women-768@2x.jpg 2x'
						media='(min-width: 768px)'
					/>
					<img
						src='/images/features/send/women-375.jpg'
						srcSet='/images/features/send/women-375@2x.jpg 2x'
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
								<InvoiceArrow src='/images/features/send/arrow.svg' alt='arrow' loading='lazy' />
							</InvoiceText>
						</InvoiceInfo>
						<InvoiceButton>Send Invoice</InvoiceButton>
					</InvoiceCon>
				</Invoice>
				<Remind>
					<RemindInfo>
						<RemindBell src='/images/features/send/bell.svg' alt='bell' loading='lazy' />
						<RemindTitle>Send Reminders</RemindTitle>
					</RemindInfo>
					<RemindCheck src='/images/features/send/check.svg' alt='check' loading='lazy' />
				</Remind>
				<Dec1></Dec1>
			</PreviewImg>
		</StyledSend>
	);
};

const StyledSend = styled.section`
	margin-bottom: 120px;
`;

const SendCon = styled.div`
	max-width: 100%;
	padding: 0 16px;
	margin: 0 auto;

	@media (min-width: 768px) {
		max-width: 768px;
	}

	@media (min-width: 1024px) {
		max-width: 1024px;
		padding: 0 40px;
	}

	@media (min-width: 1280px) {
		max-width: 1032px;
		padding: 0;
	}

	@media (min-width: 1440px) {
		max-width: 1192px;
	}

	@media (min-width: 1920px) {
		max-width: 1312px;
	}
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

const PreviewImg = styled.div`
	position: relative;
	max-width: 375px;
	padding: 0 16px;
	margin: 0 auto;

	& > picture:nth-child(1) > img {
		border-radius: 44px;
		width: 100%;
		height: auto;
	}

	@media (min-width: 768px) {
		max-width: 768px;
	}

	@media (min-width: 1024px) {
		max-width: 1024px;
		padding: 0 40px;
	}

	@media (min-width: 1280px) {
		max-width: 1032px;
		padding: 0;
	}

	@media (min-width: 1440px) {
		max-width: 1192px;
	}

	@media (min-width: 1920px) {
		max-width: 1312px;
	}
`;

const Invoice = styled.div`
	position: absolute;
	top: -30px;
	right: 20px;
	display: flex;
	align-items: center;
	width: 295px;
	height: 50px;
	background: #f3f4f5;
	border-radius: 11px;
	padding: 11px;
	box-shadow: 7px 7px 20px 0 rgba(33, 33, 33, 0.1);

	@media (min-width: 768px) {
		width: 392px;
		height: 66px;
		border-radius: 15px;
		padding: 15px;
		top: 76px;
		right: 46px;
	}

	@media (min-width: 1024px) {
		top: 66px;
		right: 66px;
	}

	@media (min-width: 1280px) {
		width: 429px;
		height: 73px;
		border-radius: 17px;
		padding: 16px;
		top: 68px;
		right: 25px;
	}

	@media (min-width: 1440px) {
		top: 115px;
		right: 73px;
	}

	@media (min-width: 1920px) {
		top: 134px;
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
	font-size: 12px;
	line-height: 15px;
	color: #212121;
	margin: 0 0 2.87px 0;

	@media (min-width: 768px) {
		font-size: 16px;
		line-height: 20px;
		margin: 0 0 4px 0;
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
	font-size: 8px;
	line-height: 10px;
	color: #5c5c5c;
	margin: 0;

	@media (min-width: 768px) {
		font-size: 11px;
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
	width: 70px;
	height: 22px;
	border: 0.5px solid #d2d2d2;
	background-color: transparent;
	border-radius: 8px;
	font-family: 'Gilroy';
	font-weight: 700;
	font-size: 8px;
	line-height: 10px;
	text-align: center;
	color: #212121;

	@media (min-width: 768px) {
		width: 94px;
		height: 29px;
		border-radius: 11px;
		font-size: 10px;
		line-height: 14px;
	}

	@media (min-width: 1280px) {
		width: 103px;
		height: 32px;
		border-radius: 12px;
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
	top: 81px;
	right: 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 141px;
	height: 30px;
	background: #f3f4f5;
	border-radius: 7px;
	padding: 9.5px;
	box-shadow: 5px 3px 20px 0 rgba(33, 33, 33, 0.1);

	@media (min-width: 768px) {
		width: 187px;
		height: 41px;
		padding: 13px;
		top: 188px;
		right: 9px;
	}

	@media (min-width: 1024px) {
		top: 178px;
		right: 19px;
	}

	@media (min-width: 1280px) {
		width: 205px;
		height: 45px;
		top: 191px;
		right: -25px;
	}

	@media (min-width: 1440px) {
		top: 239px;
		right: -21px;
	}

	@media (min-width: 1920px) {
		top: 258px;
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
	width: 12px;
	height: 13px;

	@media (min-width: 768px) {
		width: 16px;
		height: 18px;
	}

	@media (min-width: 1280px) {
		width: 18px;
		height: 20px;
	}
`;

const RemindTitle = styled.p`
	font-family: 'Gilroy';
	font-weight: 400;
	font-size: 9px;
	line-height: 12px;
	color: #212121;
	margin: 0;

	@media (min-width: 768px) {
		font-size: 12px;
		line-height: 16px;
	}

	@media (min-width: 1280px) {
		font-size: 14px;
		line-height: 17px;
	}
`;

const RemindCheck = styled.img`
	width: 11px;
	height: 11px;

	@media (min-width: 768px) {
		width: 15px;
		height: 15px;
	}

	@media (min-width: 1280px) {
		width: 17px;
		height: 17px;
	}
`;

const Dec1 = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;

	&::before {
		content: url('/images/features/send/line-l-375.svg');
		position: absolute;
		top: 22px;
		right: 135px;
	}

	&::after {
		content: url('/images/features/send/line-r-375.svg');
		position: absolute;
		top: 13px;
		right: 60px;
	}

	@media (min-width: 768px) {
		&::before {
			content: url('/images/features/send/line-l-768.svg');
			top: 144px;
			right: 270px;
		}

		&::after {
			content: url('/images/features/send/line-r-768.svg');
			top: 121px;
			right: 129px;
		}
	}

	@media (min-width: 1024px) {
		&::before {
			top: 134px;
			right: 309px;
		}

		&::after {
			top: 110px;
			right: 115px;
		}
	}

	@media (min-width: 1280px) {
		&::before {
			content: url('/images/features/send/line-l-1280.svg');
			top: 143px;
			right: 294px;
		}

		&::after {
			content: url('/images/features/send/line-r-1280.svg');
			top: 119px;
			right: 94px;
		}
	}

	@media (min-width: 1440px) {
		&::before {
			top: 191px;
			right: 345px;
		}

		&::after {
			top: 165px;
			right: 121px;
		}
	}

	@media (min-width: 1920px) {
		&::before {
			top: 211px;
			right: 383px;
		}

		&::after {
			top: 185px;
		}
	}
`;

export default Send;
