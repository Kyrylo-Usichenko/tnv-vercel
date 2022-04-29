import React, { FunctionComponent, useEffect, useState } from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

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
	MainCon,
} from './FeaturesHeaderStyles';
import ArrowDown from '../Arrow/ArrowDown';
import useOnClickOutside from '../../../hooks/useOnClickOutside';

type PropsType = {
	Tab: string;
	locale: string;
	openModal?: () => void;
	scrollDown?: () => void;
};
const Header: FunctionComponent<PropsType> = ({ Tab, locale, openModal, scrollDown }) => {
	const [isHeaderScrolled, setHeaderScrolled] = useState(false);
	const [dropDawn, setDropDawn] = useState(false);
	const [isMenuOpend, setMenuOpend] = useState(false);

	const menuToggle = () => {
		setMenuOpend((prevState) => !prevState);
	};

	const scrollHide = () => {
		menuToggle();
		if (scrollDown) scrollDown();
	};

	const { t } = useTranslation();

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

	const localeTab =
		Tab === 'Home'
			? '/'
			: Tab === 'Features'
			? '/features'
			: Tab === 'Company'
			? '/company'
			: Tab === 'Legal'
			? 'legal'
			: '/';

	const btnClick = () => {
		if (openModal) openModal();
		if (scrollDown) scrollDown();
	};

	const mobileBtnClick = () => {
		if (openModal) openModal();
		if (scrollDown) scrollHide();
	};

	return (
		<HeaderStyled isHeaderScrolled={isHeaderScrolled} isMenuOpend={isMenuOpend}>
			<MainCon className='h-100'>
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
										<Link href={localeTab} locale='en'>
											<img
												src='/icons/common/flags/gbflug.svg'
												alt=''
												width='24px'
												height='16px'
											/>
										</Link>
									</FlagWrapper>
									<FlagWrapper>
										<Link href={localeTab} locale='id'>
											<img
												src='/icons/common/flags/idflug.svg'
												alt=''
												width='24px'
												height='16px'
											/>
										</Link>
									</FlagWrapper>
									<FlagWrapper>
										<Link href={localeTab} locale='th'>
											<img
												src='/icons/common/flags/thflug.svg'
												alt=''
												width='24px'
												height='16px'
											/>
										</Link>
									</FlagWrapper>
									<FlagWrapper>
										<Link href={localeTab} locale='vi'>
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
							<HeaderButton
								isHeaderScrolled={isHeaderScrolled}
								Tab={Tab}
								type='button'
								onClick={btnClick}
							>
								{t('header:GetStarted')}
							</HeaderButton>
						</ButtonWrapper>

						<Burger onClick={menuToggle}>
							<BurgerSpan1 isMenuOpend={isMenuOpend}></BurgerSpan1>
							<BurgerSpan2 isMenuOpend={isMenuOpend}></BurgerSpan2>
							<BurgerSpan3 isMenuOpend={isMenuOpend}></BurgerSpan3>
						</Burger>
					</HeaderContainer>

					<MobileNav isMenuOpend={isMenuOpend}>
						<MobileNavItem isActive={Tab === 'Home'}>
							<Link href='/'>{t('header:Home')}</Link>
						</MobileNavItem>
						<MobileNavItem isActive={Tab === 'Features'}>
							<Link href='/features'>{t('header:Features')}</Link>
						</MobileNavItem>
						<MobileNavItem isActive={Tab === 'Company'}>
							<Link href='/company'>{t('header:Company')}</Link>
						</MobileNavItem>
					</MobileNav>

					<MobileLinks isMenuOpend={isMenuOpend}>
						<MobileButton type='button' onClick={mobileBtnClick}>
							{t('header:GetStarted')}
						</MobileButton>
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
			</MainCon>
		</HeaderStyled>
	);
};

export default Header;
