import React, { FC } from 'react';
import styled from 'styled-components';
import { Container } from '../../common/Container/Container';

const Role: FC = () => {
	return (
		<Container>
			<Wrapper>
				<Square />
				<Photos>
					<TopLeft src='images/company/Role/topLeft.png' alt='' />
					<TopRight src='images/company/Role/topRight.png' alt='' />

					<BotLeft src='images/company/Role/botLeft.png' alt='' />
					<BotRight src='images/company/Role/botRight.png' alt='' />
				</Photos>
				<Right>
					<Title>
						<Dots />
						Find the perfect role at any of our offices near you
					</Title>
					<Explore href='/'>Explore roles</Explore>
				</Right>
			</Wrapper>
		</Container>
	);
};

const Wrapper = styled.div`
	margin-top: 180px;
	display: flex;
	position: relative;
	z-index: 1;
`;

const Photos = styled.div`
	display: flex;
	min-width: 806px;
	height: 702px;
	flex-wrap: wrap;
	width: 100%;
`;

const Title = styled.p`
	margin: 0;
	padding: 0;
	font-family: 'Gilroy';
	font-style: normal;
	font-weight: 600;
	font-size: 56px;
	line-height: 69px;
	color: #212121;
	width: 442px;
	position: relative;
	z-index: 0;
	&:before {
		content: '';
		position: absolute;
		left: -30px;
		top: -37px;
		width: 66px;
		height: 62px;
		background: url('images/company/Role/stars.svg');
	}
`;

const Explore = styled.a`
	margin: 32px 0 0;
	padding: 0;
	border: 1.16667px solid #d2d2d2;
	border-radius: 18px;
	background: #fff;
	font-family: 'Gilroy';
	font-style: normal;
	font-weight: 700;
	font-size: 18.6667px;
	line-height: 23px;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 210px;
	height: 56px;
	color: #212121;
	text-decoration: none;
`;
const Right = styled.a`
	margin: 207px 0 32px 64px;
	padding: 0;
`;

const TopLeft = styled.img`
	width: 389px;
	height: 346px;
	margin: 0 24px 24px 0;
	border-radius: 32px;
`;
const TopRight = styled.img`
	width: 393px;
	height: 376px;
	border-radius: 32px;
`;
const BotLeft = styled.img`
	width: 389px;
	height: 330px;
	border-radius: 32px;
`;
const BotRight = styled.img`
	width: 393px;
	height: 300px;
	margin: 30px 0 0 24px;
	border-radius: 32px;
`;

const Dots = styled.div`
	position: absolute;
	right: 25px;
	top: -177px;
	width: 338px;
	height: 256px;
	background: url('images/company/Role/dots.svg') no-repeat;
	z-index: -1;
`;

const Square = styled.div`
	position: absolute;
	left: -513px;
	top: -274px;
	background: radial-gradient(95.51% 95.51% at 50% 50%, #dadada 0%, #fafafa 100%);
	width: 724.91px;
	height: 724.91px;
	opacity: 0.15;
	border-radius: 67.4765px;
	transform: rotate(-45deg);
	z-index: -1;
`;

export default Role;
