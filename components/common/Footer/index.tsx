import Link from 'next/link';
import React, { FC } from 'react';
import styled from 'styled-components';

import { FeaturesCon } from '../Container/Container';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

type Props = {
	background?: string | undefined;
};

const Footer: FC<Props> = ({ background }) => {
	const { t } = useTranslation();
	console.log(t('main:footerLogin'));
	return (
		<StyledFooter background={background}>
			<FeaturesCon>
				<FirstLine>
					<FirstLineHalf>
						<FooterFullLogo>
							<FooterLogo>
								<Image src='/icons/common/logo/logo.svg' width={43.55} height={38} alt='octopus' />
							</FooterLogo>
							<FooterLogoText>
								<Image src='/icons/common/logo/logo-text.svg' width={60.2} height={19} alt='tinvio' />
							</FooterLogoText>
						</FooterFullLogo>
						<FirstLineSeparate />
						<FooterUl>
							<FooterLi>
								<Link href={'/'}>{t('main:footerHome')}</Link>
							</FooterLi>
							<FooterLi>
								<Link href={'/features'}>{t('main:footerFeatures')}</Link>
							</FooterLi>
							<FooterLi>
								<Link href={'/company'}>{t('main:footerCompany')}</Link>
							</FooterLi>
							<FooterLi>
								<Link href={'/login'}>{t('main:footerLogin')}</Link>
							</FooterLi>
						</FooterUl>
					</FirstLineHalf>
					<SecondLineHalf>
						<Links>
							<Socials>
								<Social href={'/'}>
									<Image src='/images/footer/linkedin.svg' alt='linkedin' width={32} height={32} />
								</Social>
								<Social href={'/'}>
									<Image src='/images/footer/inst.svg' alt='instagram' width={32} height={32} />
								</Social>
							</Socials>
							<FirstLineSeparate />
							<Stores>
								<Store href={'/'}>
									<Image src='/images/footer/gp@2x.png' width={113} height={40} alt='google play' />
								</Store>
								<Store href={'/'}>
									<Image src='/images/footer/as@2x.png' width={113} height={40} alt='google play' />
								</Store>
							</Stores>
						</Links>
					</SecondLineHalf>
				</FirstLine>
				<SecondLine>
					<SecondLineText>{t('main:footerRights')}</SecondLineText>
					<SecondLineSeparate1 />
					<SecondLineCon>
						<SecondLineText>
							<Link href={'/legal'} as='/privacy'>
								{t('main:footerPrivacy')}
							</Link>
						</SecondLineText>
						<SecondLineSeparate2 />
						<SecondLineText>
							<Link href={'/legal'} as='/terms'>
								{t('main:footerTerms')}
							</Link>
						</SecondLineText>
					</SecondLineCon>
				</SecondLine>
			</FeaturesCon>
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

const FooterLogo = styled.div`
	margin-right: 7.4px;
`;

const FooterLogoText = styled.div`
	@media (min-width: 1024px) {
		margin-right: 24px;
	}
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

const Social = styled.a`
	cursor: pointer;
	margin-right: 16px;
	height: 32px;

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

const Store = styled.a`
	height: 40px;
	margin-right: 16px;
	&:last-child {
		margin-right: 0;
	}
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
