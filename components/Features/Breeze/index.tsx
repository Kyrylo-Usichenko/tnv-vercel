import React, { FC } from 'react';
import styled from 'styled-components';

import { FeaturesCon } from '../../common/Container/Container';

const Breeze: FC = () => {
	return (
		<SyledBreeze>
			<FeaturesCon>
				<BreezeCon>
					<BreezeTitle>Breeze through orders without the stress</BreezeTitle>
					<BreezeText>
						Customers will love that they can browse item catalogs and check availability before placing
						orders. You'll receive orders in beautifully formatted lists. Confirm or amend them in a few
						taps, even when on-the-go!
					</BreezeText>
					<BreezeBlock1>
						<BreezeBlock2>
							<BreezeBlock2Dec0></BreezeBlock2Dec0>
							<BreezeBlock2Dec1></BreezeBlock2Dec1>
							<BreezeBlock2Dec2></BreezeBlock2Dec2>
							<BreezeBlock2Dec3></BreezeBlock2Dec3>
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
			content: url('images/features/breeze/breeze-dots-l.svg');
			position: absolute;
			left: -250px;
			bottom: -215px;
			z-index: -1;
		}
	}

	@media (min-width: 1280px) {
		max-width: 388px;
	}

	@media (min-width: 1440px) {
		&::before {
			left: -160px;
		}
	}

	@media (min-width: 1920px) {
		font-size: 18px;
		line-height: 25px;
		max-width: 477px;

		&::before {
			left: -100px;
		}
	}
`;

const BreezeBlock1 = styled.div`
	position: static;
	width: 405.17px;
	height: 405.17px;
	padding: 25px;
	margin-top: 130px;
	background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(218, 218, 218, 0.3) 0%, rgba(250, 250, 250, 0.3) 100%);
	border-radius: 55.2257px;
	transform: rotate(-45deg);

	&::before {
		content: url('images/features/breeze/add.png');
		position: absolute;
		top: 87px;
		right: 0;
		z-index: 1;
		transform: rotate(45deg);
	}

	@media (min-width: 768px) {
		width: 560.03px;
		height: 560.03px;
		padding: 35px;

		&::before {
			content: url('images/features/breeze/breeze-img.png');
			top: 35px;
			right: 17px;
		}
	}

	@media (min-width: 1024px) {
		position: absolute;
		margin: 0;
		top: -168px;
		right: -66px;
	}

	@media (min-width: 1280px) {
		right: -132px;

		&::before {
			top: 54px;
			right: -11px;
		}
	}

	@media (min-width: 1440px) {
		right: -76px;
	}
`;

const BreezeBlock2 = styled.div`
	width: 354.78px;
	height: 354.78px;
	background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(218, 218, 218, 0.6) 0%, rgba(250, 250, 250, 0.6) 100%);
	border-radius: 55.2257px;
	position: relative;

	&::before {
		content: url('images/features/breeze/man.png');
		position: absolute;
		left: 0px;
		top: 80px;
		transform: rotate(45deg);
	}

	&::after {
		content: url('images/features/breeze/women.png');
		position: absolute;
		top: 219px;
		right: 43px;
		transform: rotate(45deg);
	}

	@media (min-width: 768px) {
		width: 490.37px;
		height: 490.37px;

		&::before,
		&::after {
			display: none;
		}
	}
`;

const BreezeBlock2Dec0 = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	transform: rotate(45deg);
	z-index: -1;

	&::after {
		content: url('images/features/breeze/breeze-dots-m.svg');
		position: absolute;
		left: -9px;
		bottom: -54px;
		z-index: -3;
	}

	@media (min-width: 768px) {
		&::before {
			content: url('images/features/breeze/breeze-dots-r.svg');
			position: absolute;
			right: -290px;
			top: -130px;
		}

		&::after {
			left: -30px;
			bottom: -58px;
		}
	}

	@media (min-width: 768px) {
		&::before {
			right: -260px;
		}
	}
`;

const BreezeBlock2Dec1 = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	transform: rotate(45deg);
	z-index: 1;

	&::before {
		content: url('images/features/breeze/del.png');
		position: absolute;
		left: 0;
		top: 103px;
		z-index: 2;
	}

	&::after {
		content: url('images/features/breeze/add-line.svg');
		position: absolute;
		left: 108px;
		top: 56px;
	}

	@media (min-width: 768px) {
		display: none;
	}
`;

const BreezeBlock2Dec2 = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	transform: rotate(45deg);
	z-index: 1;

	&::before {
		content: url('images/features/breeze/women-line.svg');
		position: absolute;
		right: 62px;
		top: 52px;
	}

	&::after {
		content: url('images/features/breeze/dec.svg');
		position: absolute;
		right: -15px;
		top: 109px;
	}

	@media (min-width: 768px) {
		display: none;
	}
`;

const BreezeBlock2Dec3 = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	transform: rotate(45deg);
	z-index: 1;

	&::before {
		content: url('images/features/breeze/conf.png');
		position: absolute;
		right: -18px;
		bottom: 1px;
	}

	&::after {
		content: url('images/features/breeze/man-line.svg');
		position: absolute;
		left: 93px;
		bottom: 92px;
	}

	@media (min-width: 768px) {
		display: none;
	}
`;

export default Breeze;
