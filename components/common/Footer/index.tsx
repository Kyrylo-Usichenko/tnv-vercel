import Link from 'next/link';
import React, { FC } from 'react';
import styled from 'styled-components';

import { Container } from '../Container/Container';
import { Tabs } from '../../../constants';

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
							<FooterLogo src='icons/common/logo/logo.svg' alt='octopus' />
							<FooterLogoText src='icons/common/logo/logo-text.svg' alt='tinvio' />
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
									<Social src='images/footer/linkedin.svg' alt='linkedin' />
								</Link>
								<Link href={'/'}>
									<Social src='images/footer/inst.svg' alt='instagram' />
								</Link>
							</Socials>
							<FirstLineSeparate />
							<Stores>
								<Link href={'/'}>
									<Store>
										<img src='images/footer/gplay.svg' alt='google play' />
										<StoreText>
											<StoreTextFirst>Available on the</StoreTextFirst>
											<StoreTextSecond>Google Play</StoreTextSecond>
										</StoreText>
									</Store>
								</Link>
								<Link href={'/'}>
									<Store>
										<img src='images/footer/astore.svg' alt='apple store' />
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
							<Link href={'/legal'} as={Tabs.privacy}>
								Privacy Policy
							</Link>
						</SecondLineText>
						<SecondLineSeparate2 />
						<SecondLineText>
							<Link href={'/legal'} as={Tabs.terms}>
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
	padding: 48px 0 16px 0;

	@media (max-width: 900px) {
		padding: 32px 0 16px 0;
	}
`;

const FirstLine = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 40px;

	@media (max-width: 900px) {
		flex-direction: column;
		margin-bottom: 25px;
	}

	@media (max-width: 460px) {
		margin-bottom: 16px;
	}
`;

const FirstLineSeparate = styled.span`
	display: inline-block;
	width: 1px;
	height: 32px;
	background-color: #c4c4c4;
	margin: 0 24px 0 0;

	@media (max-width: 900px) {
		display: none;
	}
`;

const FirstLineHalf = styled.div`
	display: flex;
	align-items: center;

	@media (max-width: 900px) {
		flex-direction: column;
	}
`;

const SecondLineHalf = styled.div`
	display: flex;
	align-items: center;
`;

const FooterFullLogo = styled.div`
	display: flex;
	align-items: center;

	@media (max-width: 900px) {
		margin-bottom: 25px;
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
	color: var(--text-main);
	margin: 0;
	padding: 0;
	list-style-type: none;

	@media (max-width: 900px) {
		margin-bottom: 32px;
	}

	@media (max-width: 460px) {
		flex-direction: column;
		gap: 16px;
		margin-bottom: 48px;
	}
`;

const FooterLi = styled.li`
	margin-right: 32px;

	@media (max-width: 1024px) {
		margin-right: 24px;
	}

	@media (max-width: 900px) {
		margin-right: 56px;
	}

	@media (max-width: 460px) {
		margin: 0;
		font-size: 14px;
		line-height: 27px;
	}

	&:last-child {
		margin-right: 0;
	}

	& > a {
		color: var(--text-main);
		text-decoration: none;
		font-family: 'Gilroy', sans-serif;
		font-size: 16px;
		line-height: 27px;
		font-weight: 400;
		transition: color 0.3s ease;

		@media (max-width: 460px) {
			font-size: 14px;
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

	@media (max-width: 460px) {
		flex-direction: column;
	}
`;

const Socials = styled.div`
	display: flex;
	align-items: center;

	@media (max-width: 460px) {
		margin-bottom: 16px;
	}
`;

const Social = styled.img`
	cursor: pointer;
	margin-right: 16px;

	&:last-of-type {
		margin-right: 24px;
	}

	@media (max-width: 900px) {
		&:last-of-type {
			margin-right: 32px;
		}
	}

	@media (max-width: 460px) {
		&:last-of-type {
			margin-right: 0;
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

	@media (max-width: 900px) {
		justify-content: center;
	}

	@media (max-width: 460px) {
		flex-direction: column;
		align-items: center;
		gap: 8px;
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
	display: inline-block;
	width: 1px;
	height: 14px;
	background-color: #c4c4c4;
	margin: 0 8px 0 0;

	@media (max-width: 460px) {
		display: none;
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
