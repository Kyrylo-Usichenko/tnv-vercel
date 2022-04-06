import React, { FunctionComponent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

import { FeaturesCon } from '../Container/Container';
import Logo from '../Logos/Logo';
import LogoText from '../Logos/LogoText';
import {
	ArrowWrapper,
	Burger,
	ButtonWrapper,
	CurrentLanguage,
	FlagWrapper,
	HeaderButton,
	HeaderContainer,
	HeaderStyled,
	MobileContainer,
	LanguageMenu,
	LanguageWrapper,
	LeftWrapper,
	LogoInner,
	LogoLink,
	MobileLinks,
	MobileNav,
	MobileNavItem,
	Nav,
	NavItem,
	Socials,
	MobileButton,
	Store,
	StoreText,
	StoreTextFirst,
	StoreTextSecond,
	Social,
} from './HeaderStyles';
import ArrowDown from '../Arrow/ArrowDown';

type PropsType = {
	Tab: string;
	locale: string;
};

const Header: FunctionComponent<PropsType> = ({ Tab, locale }) => {
	const [isHeaderScrolled, setHeaderScrolled] = useState(false);
	const [dropDawn, setDropDawn] = useState(false);
	const [isMenuOpend, setMenuOpend] = useState(false);

	const menuToggle = () => {
		setMenuOpend((prevState) => !prevState);
	};

	const { t } = useTranslation();

	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', () => setHeaderScrolled(window.pageYOffset > 50));
		}
	}, []);

	return (
		<HeaderStyled isHeaderScrolled={isHeaderScrolled} isMenuOpend={isMenuOpend}>
			<FeaturesCon className='h-100'>
				<MobileContainer isMenuOpend={isMenuOpend}>
					<HeaderContainer>
						<LeftWrapper>
							<LogoLink href={'/'}>
								<LogoInner>
									<Logo />
									<LogoText />
								</LogoInner>
							</LogoLink>
							<LanguageWrapper onClick={() => setDropDawn(!dropDawn)} isMenuOpend={isMenuOpend}>
								<CurrentLanguage>{locale}</CurrentLanguage>
								<ArrowWrapper isOpen={dropDawn}>
									<ArrowDown />
								</ArrowWrapper>

								<LanguageMenu isOpen={dropDawn}>
									<FlagWrapper>
										<Link href='/' locale='en'>
											<img
												src='/icons/common/flags/gbflug.svg'
												alt=''
												width='24px'
												height='16px'
											/>
										</Link>
									</FlagWrapper>
									<FlagWrapper>
										<Link href='/' locale='id'>
											<img
												src='/icons/common/flags/idflug.svg'
												alt=''
												width='24px'
												height='16px'
											/>
										</Link>
									</FlagWrapper>
									<FlagWrapper>
										<Link href='/' locale='th'>
											<img
												src='/icons/common/flags/thflug.svg'
												alt=''
												width='24px'
												height='16px'
											/>
										</Link>
									</FlagWrapper>
									<FlagWrapper>
										<Link href='/' locale='vi'>
											<img
												src='/icons/common/flags/viflug.svg'
												alt=''
												width='24px'
												height='16px'
											/>
										</Link>
									</FlagWrapper>
								</LanguageMenu>
							</LanguageWrapper>
						</LeftWrapper>

						<Nav>
							<NavItem isActive={Tab === 'Home'}>
								<Link href='/'>{t('home:Home')}</Link>
							</NavItem>
							<NavItem isActive={Tab === 'Features'}>
								<Link href='/features'>{t('home:Features')}</Link>
							</NavItem>
							<NavItem isActive={Tab === 'Company'}>
								<Link href='/company'>{t('home:Company')}</Link>
							</NavItem>
						</Nav>

						<ButtonWrapper>
							<Link href={'/'}>
								<HeaderButton isHeaderScrolled={isHeaderScrolled} Tab={Tab}>
									{t('home:GetStarted')}
								</HeaderButton>
							</Link>
						</ButtonWrapper>

						<Burger
							src={`${isMenuOpend ? 'images/header/close.svg' : 'images/header/burger.svg'}`}
							alt='open/close menu'
							onClick={menuToggle}
						/>
					</HeaderContainer>

					<MobileNav isMenuOpend={isMenuOpend}>
						<MobileNavItem isActive={Tab === 'Home'}>
							<Link href='/'>{t('home:Home')}</Link>
						</MobileNavItem>
						<MobileNavItem isActive={Tab === 'Features'}>
							<Link href='/features'>{t('home:Features')}</Link>
						</MobileNavItem>
						<MobileNavItem isActive={Tab === 'Company'}>
							<Link href='/company'>{t('home:Company')}</Link>
						</MobileNavItem>
					</MobileNav>

					<MobileLinks isMenuOpend={isMenuOpend}>
						<Link href={'/'}>
							<MobileButton>{t('home:GetStarted')}</MobileButton>
						</Link>
						<Socials>
							<Link href={'/'}>
								<Social src='images/footer/linkedin.svg' alt='linkedin' />
							</Link>
							<Link href={'/'}>
								<Social src='images/footer/inst.svg' alt='instagram' />
							</Link>
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
						</Socials>
					</MobileLinks>
				</MobileContainer>
			</FeaturesCon>
		</HeaderStyled>
	);
};

export default Header;
