import React, { FC } from 'react';
import styled from 'styled-components';

import { FeaturesCon } from '../../common/Container/Container';
import Panel from './Panel';

const Faq: FC = () => {
	return (
		<StyledFaq>
			<StyledFaqDec1></StyledFaqDec1>
			<StyledFaqDec2></StyledFaqDec2>
			<FeaturesCon>
				<FaqTitle>FAQ</FaqTitle>
				<Panel name='How to get started with Tinvio?'>
					You can create an account on Tinvio (dashboard or mobile app) within a minute to start managing
					chats, orders, and invoices. For payments, our Customer Success team will reach out for account
					verification and onboarding. Once verified, you'll be good to go!
				</Panel>
				<Panel name='How does Tinvio work?'>
					This dashboard is an easy all-in-one interface for you to manage chats, orders, invoices, and
					payments with your merchants. Merchants just need to download the free Tinvio mobile app to exchange
					messages, place orders, and make payments. It's zero friction for them!
				</Panel>
				<Panel name='How to collect payments on Tinvio?'>
					Once your account is verified, you'll be able to request and reconcile payments for all your orders
					and invoices on Tinvio. Your merchants will receive notifications for each payment request in their
					favorite channels (e.g. Tinvio app, WhatsApp), and they'll be able to complete payment in a fast and
					flexible checkout experience. You'll receive real-time updates and reports for all your payments!
				</Panel>
				<Panel name='What are the supported payment methods?'>
					We’re always enabling new payment methods. Our Customer Success teams will advise on the available
					methods in your market (including transaction fees for that method). In general, we support bank
					transfers, credit cards, and B2B BNPL options!
				</Panel>
				<Panel name='I have more product questions! Who do I contact?'>
					If you're already signed up, you can live chat with "Team Tinvio" in the dashboard or mobile app.
					Otherwise, you can contact us at support@tinvio.com for more information!
				</Panel>
			</FeaturesCon>
		</StyledFaq>
	);
};

const StyledFaq = styled.section`
	padding-bottom: 80px;
	position: relative;

	&::before {
		content: url('images/features/faq/faq-dots-l-min.webp');
		position: absolute;
		top: 90px;
		left: 0;
	}

	@media (min-width: 768px) {
		&::before {
			content: url('images/features/faq/faq-dots-l.webp');
			top: 220px;
			left: -150px;
		}
	}

	@media (min-width: 1024px) {
		&::before {
			top: 200px;
			left: -320px;
		}
	}

	@media (min-width: 1280px) {
		&::after {
			content: url('images/features/faq/faq-dots-r.webp');
			position: absolute;
			right: -100px;
			top: 486px;
		}

		&::before {
			top: 200px;
			left: -250px;
		}
	}

	@media (min-width: 1440px) {
		&::before {
			left: -180px;
		}

		&::after {
			right: 0;
		}
	}

	@media (min-width: 1920px) {
		&::before {
			left: 60px;
		}

		&::after {
			right: 150px;
		}
	}
`;

const StyledFaqDec1 = styled.div`
	&::before {
		content: '';
		position: absolute;
		top: 425px;
		left: -380px;
		width: 586.83px;
		height: 586.83px;
		background: radial-gradient(
			95.51% 95.51% at 50% 50%,
			rgba(218, 218, 218, 0.15) 0%,
			rgba(250, 250, 250, 0.15) 100%
		);
		border-radius: 67.463px;
		transform: rotate(-45deg);
	}

	&::after {
		content: '';
		position: absolute;
		top: 74px;
		right: -380px;
		width: 586.83px;
		height: 586.83px;
		background: radial-gradient(
			95.51% 95.51% at 50% 50%,
			rgba(218, 218, 218, 0.15) 0%,
			rgba(250, 250, 250, 0.15) 100%
		);
		border-radius: 67.463px;
		transform: rotate(-45deg);
	}

	@media (min-width: 768px) {
		&::before {
			width: 724.76px;
			height: 724.76px;
			top: 290px;
			left: -450px;
		}

		&::after {
			width: 724.76px;
			height: 724.76px;
			top: 0;
			right: -520px;
		}
	}

	@media (min-width: 1024px) {
		&::before {
			top: 210px;
		}
	}

	@media (min-width: 1280px) {
		&::before {
			left: -350px;
		}

		&::after {
			right: -400px;
		}
	}

	@media (min-width: 1440px) {
		&::after {
			right: -300px;
		}
	}

	@media (min-width: 1920px) {
		&::before {
			left: -80px;
		}

		&::after {
			top: 20px;
			right: -100px;
		}
	}
`;

const StyledFaqDec2 = styled.div`
	&::before {
		content: '';
		position: absolute;
		top: 426px;
		right: -220px;
		width: 381.1px;
		height: 381.1px;
		background: radial-gradient(
			95.51% 95.51% at 50% 50%,
			rgba(218, 218, 218, 0.15) 0%,
			rgba(250, 250, 250, 0.15) 100%
		);
		border-radius: 43.8115px;
		transform: rotate(-45deg);
		z-index: -1;
	}

	@media (min-width: 768px) {
		&::before {
			width: 470.67px;
			height: 470.67px;
			top: 337px;
			right: -260px;
		}
	}

	@media (min-width: 1024px) {
		&::before {
			top: 400px;
			right: -300px;
		}
	}

	@media (min-width: 1280px) {
		&::before {
			top: 420px;
			right: -200px;
		}
	}

	@media (min-width: 1440px) {
		&::before {
			top: 460px;
			right: -100px;
		}
	}

	@media (min-width: 1920px) {
		&::before {
			right: 135px;
		}
	}
`;

const FaqTitle = styled.h2`
	font-family: 'Gilroy';
	font-weight: 600;
	font-size: 32px;
	line-height: 39px;
	color: #212121;
	text-align: center;
	margin: 0 0 40px 0;

	@media (min-width: 768px) {
		font-size: 36px;
		line-height: 42px;
	}

	@media (min-width: 1280px) {
		font-size: 40px;
		line-height: 49px;
	}

	@media (min-width: 1920px) {
		font-size: 44px;
		line-height: 54px;
	}
`;

export default Faq;
