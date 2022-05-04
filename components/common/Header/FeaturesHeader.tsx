import React, { FunctionComponent, useEffect, useMemo, useState } from 'react';
import Image from 'next/image';

import { useTranslation } from 'next-i18next';
import useToggle from '../../../hooks/useToggle';
import useOnClickOutside from '../../../hooks/useOnClickOutside';

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
	SocialsDiv,
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
import { Path, Socials } from '../../../constants';
import useScrollPosition from '../../../hooks/useHeaderScroll';

type PropsType = {
	tab: string;
	locale: string;
	openModal?: () => void;
	scrollDown?: () => void;
};

const Header: FunctionComponent<PropsType> = ({ tab, locale, openModal, scrollDown }) => {
	const [isHeaderScrolled, setHeaderScrolled] = useState(false);
	const [dropDawn, setDropDown] = useToggle(false);
	const [isMenuOpend, setMenuOpened] = useState(false);

	const menuToggle = () => {
		setMenuOpened((prevState) => !prevState);
	};

	const scrollHide = () => {
		menuToggle();
		if (scrollDown) scrollDown();
	};

	const { t } = useTranslation();
	const scrollPosition = useScrollPosition();
	useEffect(() => {
		setHeaderScrolled(scrollPosition > 50);

		if (scrollPosition > 50) {
			setHeaderScrolled(true);
		}
	}, [scrollPosition]);

	const modalRef = useOnClickOutside(() => {
		setDropDown(false);
	});

	const localeTab = useMemo(() => {
		switch (tab) {
			case 'Home':
				return Path.home;
			case 'Features':
				return Path.features;
			case 'Company':
				return Path.company;
			case 'Legal':
				return Path.legal;
			default:
				return Path.home;
		}
	}, [tab]);

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
							<LogoLink href={Path.home}>
								<LogoInner>
									<Logo />
									<LogoText />
								</LogoInner>
							</LogoLink>
							<LanguageWrapper ref={modalRef} onClick={setDropDown} isMenuOpend={isMenuOpend}>
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
										<Link href={localeTab} locale='vn'>
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
							<NavItem isActive={tab === 'Home'}>
								<Link href={Path.home}>{t('header:Home')}</Link>
							</NavItem>
							<NavItem isActive={tab === 'Features'}>
								<Link href={Path.features}>{t('header:Features')}</Link>
							</NavItem>
							<NavItem isActive={tab === 'Company'}>
								<Link href={Path.company}>{t('header:Company')}</Link>
							</NavItem>
						</Nav>

						<ButtonWrapper>
							<HeaderButton
								isHeaderScrolled={isHeaderScrolled}
								tab={tab}
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
						<MobileNavItem isActive={tab === 'Home'}>
							<Link href={Path.home}>{t('header:Home')}</Link>
						</MobileNavItem>
						<MobileNavItem isActive={tab === 'Features'}>
							<Link href={Path.features}>{t('header:Features')}</Link>
						</MobileNavItem>
						<MobileNavItem isActive={tab === 'Company'}>
							<Link href={Path.company}>{t('header:Company')}</Link>
						</MobileNavItem>
					</MobileNav>

					<MobileLinks isMenuOpend={isMenuOpend}>
						<MobileButton type='button' onClick={mobileBtnClick}>
							{t('header:GetStarted')}
						</MobileButton>
						<SocialsDiv>
							<Social href={Socials.linkedin} target='_blank' rel='noreferrer noopener'>
								<Image src='/images/footer/linkedin.svg' alt='linkedin' width={32} height={32} />
							</Social>
							<Social href={Socials.instagram} target='_blank' rel='noreferrer noopener'>
								<Image src='/images/footer/inst.svg' alt='instagram' width={32} height={32} />
							</Social>
							<Store href={Socials.googlePlay} target='_blank' rel='noreferrer noopener'>
								<Image src='/images/footer/gp@2x.png' width={113} height={40} alt='google play' />
							</Store>
							<Store href={Socials.appleApps} target='_blank' rel='noreferrer noopener'>
								<Image src='/images/footer/as@2x.png' width={113} height={40} alt='google play' />
							</Store>
						</SocialsDiv>
					</MobileLinks>
				</MobileContainer>
			</MainCon>
		</HeaderStyled>
	);
};

export default Header;
