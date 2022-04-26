import React, { FunctionComponent, useEffect, useState } from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

import {
	// FeaturesCon,
	Container,
} from '../Container/Container';
import Logo from '../Logos/Logo';
import LogoText from '../Logos/LogoText';
import {
	ArrowWrapper,
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
	Social,
	Burger,
	BurgerSpan1,
	BurgerSpan2,
	BurgerSpan3,
} from './HeaderStyles';
import ArrowDown from '../Arrow/ArrowDown';
import useOnClickOutside from '../../../hooks/useOnClickOutside';

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
	console.log(t('header:Features'));

	console.log(locale);

	useEffect(() => {
		function handleScroll() {
			setHeaderScrolled(window.pageYOffset > 50);
		}
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);
	const modalRef = useOnClickOutside(() => {
		setDropDawn(false);
	});
	return (
		<HeaderStyled isHeaderScrolled={isHeaderScrolled} isMenuOpend={isMenuOpend}>
			<Container className='h-100'>
				<MobileContainer isMenuOpend={isMenuOpend}>
					<HeaderContainer>
						<LeftWrapper>
							<LogoLink href={'/'}>
								<LogoInner>
									<Logo />
									<LogoText />
								</LogoInner>
							</LogoLink>
							<LanguageWrapper
								ref={modalRef}
								onClick={() => setDropDawn(!dropDawn)}
								isMenuOpend={isMenuOpend}
							>
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
								<Link href='/'>{t('header:Home')}</Link>
							</NavItem>
							<NavItem isActive={Tab === 'Features'}>
								<Link href='/features'>{t('header:Features')}</Link>
							</NavItem>
							<NavItem isActive={Tab === 'Company'}>
								<Link href='/company'>{t('header:Company')}</Link>
							</NavItem>
						</Nav>

						<ButtonWrapper>
							<Link href={'/'}>
								<HeaderButton isHeaderScrolled={isHeaderScrolled} Tab={Tab}>
									{t('header:GetStarted')}
								</HeaderButton>
							</Link>
						</ButtonWrapper>

						<Burger onClick={menuToggle}>
							<BurgerSpan1 isMenuOpend={isMenuOpend}></BurgerSpan1>
							<BurgerSpan2 isMenuOpend={isMenuOpend}></BurgerSpan2>
							<BurgerSpan3 isMenuOpend={isMenuOpend}></BurgerSpan3>
						</Burger>
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
						<Link href='/'>
							<MobileButton>{t('home:GetStarted')}</MobileButton>
						</Link>
						<Socials>
							<Social href={'/'}>
								<Image src='/images/footer/linkedin.svg' alt='linkedin' width={32} height={32} />
							</Social>
							<Social href={'/'}>
								<Image src='/images/footer/inst.svg' alt='instagram' width={32} height={32} />
							</Social>
							<Store href={'/'}>
								<Image src='/images/footer/gp@2x.png' width={113} height={40} alt='google play' />
							</Store>
							<Store href={'/'}>
								<Image src='/images/footer/as@2x.png' width={113} height={40} alt='google play' />
							</Store>
						</Socials>
					</MobileLinks>
				</MobileContainer>
			</Container>
		</HeaderStyled>
	);
};

export default Header;
