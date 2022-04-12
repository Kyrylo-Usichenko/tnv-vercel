import Link from 'next/link';
import React, { FC } from 'react';
import styled from 'styled-components';

import { Container } from '../Container/Container';

type Props = {
	background?: string | undefined;
};

const Footer: FC<Props> = ({ background }) => {
	return (
		<StyledFooter background={background}>
			<Container>
				<FirstLine>
					<FirstLineHalf>
						<FooterFullLogo>
							<FooterLogo src='icons/common/logo/logo.svg' alt='octopus' loading='lazy' />
							<FooterLogoText src='icons/common/logo/logo-text.svg' alt='tinvio' loading='lazy' />
						</FooterFullLogo>
						<FirstLineSeparate />
						<FooterUl>
							<FooterLi>
								<Link href={'/'}>Home</Link>
							</FooterLi>
							<FooterLi>
								<Link href={'/features'}>Features</Link>
							</FooterLi>
							<FooterLi>
								<Link href={'/company'}>Company</Link>
							</FooterLi>
							<FooterLi>
								<Link href={'/login'}>Login</Link>
							</FooterLi>
						</FooterUl>
					</FirstLineHalf>
					<SecondLineHalf>
						<Links>
							<Socials>
								<Link href={'/'}>
									<Social src='images/footer/linkedin.svg' alt='linkedin' loading='lazy' />
								</Link>
								<Link href={'/'}>
									<Social src='images/footer/inst.svg' alt='instagram' loading='lazy' />
								</Link>
							</Socials>
							<FirstLineSeparate />
							<Stores>
								<Link href={'/'}>
									<Store>
										<img src='images/footer/gplay.svg' alt='google play' loading='lazy' />
										<StoreText>
											<StoreTextFirst>Available on the</StoreTextFirst>
											<StoreTextSecond>Google Play</StoreTextSecond>
										</StoreText>
									</Store>
								</Link>
								<Link href={'/'}>
									<Store>
										<img src='images/footer/astore.svg' alt='apple store' loading='lazy' />
										<StoreText>
											<StoreTextFirst>Available on the</StoreTextFirst>
											<StoreTextSecond>App Store</StoreTextSecond>
										</StoreText>
									</Store>
								</Link>
							</Stores>
						</Links>
					</SecondLineHalf>
				</FirstLine>
				<SecondLine>
					<SecondLineText>© Tinvio™ 2020. All Rights Reserved</SecondLineText>
					<SecondLineSeparate1 />
					<SecondLineCon>
						<SecondLineText>
							<Link href={'/legal'} as='privacy'>
								Privacy Policy
							</Link>
						</SecondLineText>
						<SecondLineSeparate2 />
						<SecondLineText>
							<Link href={'/legal'} as='terms'>
								Terms of Service
							</Link>
						</SecondLineText>
					</SecondLineCon>
				</SecondLine>
			</Container>
		</StyledFooter>
	);
};

const StyledFooter = styled.footer<{ background?: string }>`
	background-color: ${({ background }) => (background ? `${background}` : '#fafafa')};
	padding: 32px 0 16px 0;
	position: relative;
	z-index: 5;

	@media (min-width: 1024px) {
		padding: 48px 0 18px 0;
	}
`;

const FirstLine = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 16px;

	@media (min-width: 768px) {
		margin-bottom: 25px;
	}

	@media (min-width: 1024px) {
		flex-direction: row;
		margin-bottom: 40px;
	}
`;

const FirstLineSeparate = styled.span`
	width: 1px;
	height: 32px;
	background-color: #c4c4c4;
	margin: 0 24px 0 0;
	display: none;

	@media (min-width: 1024px) {
		display: inline-block;
	}
`;

const FirstLineHalf = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;

	@media (min-width: 1024px) {
		flex-direction: row;
	}
`;

const SecondLineHalf = styled.div`
	display: flex;
	align-items: center;
`;

const FooterFullLogo = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 25px;

	@media (min-width: 1024px) {
		margin-bottom: 0;
	}
`;

const FooterLogo = styled.img`
	width: 43.55px;
	height: 38px;
	margin-right: 7.4px;
`;

const FooterLogoText = styled.img`
	width: 60.2px;
	height: 19px;
	margin-right: 24px;
`;

const FooterUl = styled.ul`
	display: flex;
	align-items: center;
	flex-direction: column;
	color: var(--text-main);
	margin: 0;
	padding: 0;
	margin-bottom: 48px;
	list-style-type: none;
	gap: 16px;

	@media (min-width: 768px) {
		flex-direction: row;
		gap: 56px;
		margin-bottom: 32px;
	}

	@media (min-width: 1024px) {
		margin-bottom: 0;
		gap: 24px;
	}

	@media (min-width: 1280px) {
		gap: 32px;
	}
`;

const FooterLi = styled.li`
	margin: 0;

	& > a {
		color: var(--text-main);
		text-decoration: none;
		font-family: 'Gilroy', sans-serif;
		font-size: 14px;
		line-height: 27px;
		font-weight: 400;
		transition: color 0.3s ease;

		@media (min-width: 768px) {
			font-size: 16px;
			line-height: 27px;
		}
	}

	& > a:hover {
		color: var(--text-primary);
	}
`;

const Links = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;

	@media (min-width: 768px) {
		flex-direction: row;
	}
`;

const Socials = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 16px;

	@media (min-width: 768px) {
		margin-bottom: 0;
	}
`;

const Social = styled.img`
	cursor: pointer;
	margin-right: 16px;

	&:last-of-type {
		margin-right: 0;
	}

	@media (min-width: 768px) {
		&:last-of-type {
			margin-right: 32px;
		}
	}
`;

const Stores = styled.div`
	display: flex;
`;

const Store = styled.div`
	display: flex;
	align-items: center;
	height: 40px;
	width: 113px;
	background: radial-gradient(95.51% 95.51% at 50% 50%, #c1c1c1 0%, #ededed 100%);
	opacity: 0.88;
	border-radius: 8px;
	padding: 8.3px;
	margin-right: 16px;
	cursor: pointer;

	&:last-child {
		margin-right: 0;
	}
`;

const StoreText = styled.div`
	margin-left: 7.15px;
`;

const StoreTextFirst = styled.p`
	font-family: 'Inter';
	font-weight: 400;
	font-size: 7.15567px;
	line-height: 9px;
	color: #ffffff;
	margin: 0 0 1.43px 0;
`;

const StoreTextSecond = styled.p`
	font-family: 'Inter';
	font-weight: 600;
	font-size: 10.7335px;
	line-height: 13px;
	color: #ffffff;
	margin: 0;
`;

const SecondLine = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 8px;

	@media (min-width: 768px) {
		flex-direction: row;
		justify-content: center;
	}

	@media (min-width: 1024px) {
		justify-content: flex-start;
	}
`;

const SecondLineCon = styled.div`
	display: flex;
`;

const SecondLineText = styled.p`
	font-family: 'Inter';
	font-weight: 500;
	font-size: 12px;
	line-height: 12px;
	color: #bdbdbd;
	margin: 0 8px 0 0;
	cursor: pointer;

	& > a {
		color: #bdbdbd;
		text-decoration: none;
	}

	&:last-child {
		margin: 0;
	}
`;

const SecondLineSeparate1 = styled.span`
	display: none;
	width: 1px;
	height: 14px;
	background-color: #c4c4c4;
	margin: 0 8px 0 0;

	@media (min-width: 768px) {
		display: inline-block;
	}
`;

const SecondLineSeparate2 = styled.span`
	display: inline-block;
	width: 1px;
	height: 14px;
	background-color: #c4c4c4;
	margin: 0 8px 0 0;
`;

export default Footer;
