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
					<source srcSet='images/features/send/send-img-1920.png' media='(min-width: 1920px)' />
					<source srcSet='images/features/send/send-img-1440.png' media='(min-width: 1440px)' />
					<source srcSet='images/features/send/send-img-1280.png' media='(min-width: 1280px)' />
					<source srcSet='images/features/send/send-img-1024.png' media='(min-width: 1024px)' />
					<source srcSet='images/features/send/send-img-768.png' media='(min-width: 768px)' />
					<SendImg src='images/features/send/send-img-375.png' alt='women' />
				</picture>
				<Dec1></Dec1>
				<Dec2></Dec2>
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

const SendImg = styled.img``;

const Dec1 = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;

	&::before {
		content: url(images/features/send/invoice.png);
		position: absolute;
		bottom: 360px;
		right: -5px;
	}

	&::after {
		content: url(images/features/send/remind.png);
		position: absolute;
		bottom: 265px;
		right: 0;
	}

	@media (min-width: 768px) {
		display: none;
	}
`;

const Dec2 = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;

	&::before {
		content: url(images/features/send/line-l.svg);
		position: absolute;
		bottom: 229px;
		right: 140px;
	}

	&::after {
		content: url(images/features/send/line-s.svg);
		position: absolute;
		bottom: 319px;
		right: 70px;
	}

	@media (min-width: 768px) {
		display: none;
	}
`;

export default Send;
