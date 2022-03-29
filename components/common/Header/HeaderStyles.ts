import Link from 'next/link';
import styled from 'styled-components';
import Button from '../Buttons/Button';

export const HeaderStyled = styled.header<{ isHeaderScrolled: boolean; isMenuOpend: boolean }>`
	height: ${({ isMenuOpend }) => (isMenuOpend ? '100vh' : '88px')};
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	padding: ${({ isMenuOpend }) => (isMenuOpend ? '24px 0 16px 0' : '24px 0')};
	z-index: 999;
	color: ${({ isHeaderScrolled }) => (isHeaderScrolled ? '#FF474D' : '#212121')};
	background-color: ${({ isHeaderScrolled, isMenuOpend }) =>
		isHeaderScrolled && !isMenuOpend
			? 'rgba(255, 255, 255, 0.9)'
			: isMenuOpend
			? 'rgba(255, 255, 255)'
			: 'rgba(255, 255, 255, 0)'};
	backdrop-filter: ${({ isHeaderScrolled }) => (isHeaderScrolled ? 'blur(24px)' : 'none')};

	&::before {
		content: '';
		margin: -35px;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		filter: blur(24px);
		z-index: -1;
	}

	@media (max-width: 375px) {
		&::after {
			content: url('images/header/mobile-dots-right-375.svg');
			display: ${({ isMenuOpend }) => (isMenuOpend ? 'block' : 'none')};
			position: absolute;
			bottom: 20px;
			right: -5px;
		}
	}
`;

export const MobileContainer = styled.div<{ isMenuOpend: boolean }>`
	height: inherit;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	position: relative;

	&::before {
		content: '';
		display: ${({ isMenuOpend }) => (isMenuOpend ? 'block' : 'none')};
		position: absolute;
		top: -180px;
		right: -330px;
		width: 537.11px;
		height: 537.11px;
		background: radial-gradient(
			95.51% 95.51% at 50% 50%,
			rgba(218, 218, 218, 0.15) 0%,
			rgba(250, 250, 250, 0.15) 100%
		);
		border-radius: 94.1447px;
		transform: rotate(-45deg);
		z-index: -2;
	}

	&::after {
		content: '';
		position: absolute;
		display: ${({ isMenuOpend }) => (isMenuOpend ? 'block' : 'none')};
		width: 456.27px;
		height: 456.27px;
		left: -230px;
		bottom: 20px;
		background: radial-gradient(
			95.51% 95.51% at 50% 50%,
			rgba(218, 218, 218, 0.15) 0%,
			rgba(250, 250, 250, 0.15) 100%
		);
		border-radius: 42.4708px;
		transform: rotate(-45deg);
		z-index: -2;
	}

	@media (max-width: 375px) {
		justify-content: flex-start;

		&::before {
			width: 256.08px;
			height: 256.08px;
			top: -50px;
			right: -140px;
			border-radius: 44.8865px;
		}

		&::after {
			width: 238.75px;
			height: 238.75px;
			left: -120px;
			bottom: -20px;
			border-radius: 22.2239px;
		}
	}
`;

export const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const LogoInner = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
`;

export const LogoLink = styled(Link)`
	cursor: pointer;
`;

export const LeftWrapper = styled.div`
	display: flex;
`;

export const LanguageWrapper = styled.div<{ isMenuOpend: boolean }>`
	margin-left: 24px;
	display: flex;
	align-items: center;
	cursor: pointer;
	position: relative;

	@media (max-width: 768px) {
		display: ${({ isMenuOpend }) => (isMenuOpend ? 'flex' : 'none')};
	}
`;

export const CurrentLanguage = styled.div`
	margin-right: 4px;
	text-transform: uppercase;
	font-family: 'Gilroy';
	font-weight: 400;
	font-size: 18px;
	line-height: 27px;
	color: var(--main-text);

	@media (max-width: 1440px) {
		font-size: 16px;
		line-height: 26px;
	}
`;

export const ArrowWrapper = styled.div<{ isOpen: boolean }>`
	display: flex;
	align-items: center;
	transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

export const LanguageMenu = styled.div<{ isOpen: boolean }>`
	position: absolute;
	display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
	top: 33px;
	left: -9px;
	flex-direction: column;
	height: 139px;
	width: 48px;
	background-color: #fff;
	border-radius: 8px;
	padding: 12px 0;
	align-items: center;
	cursor: default;
	box-shadow: 4px 4px 16.4664px 0px rgba(33, 33, 33, 0.1);
`;

export const FlagWrapper = styled.div`
	border-bottom: 1px solid #f3f4f5;
	margin-bottom: 8px;
	width: 24px;
	height: 24px;
	cursor: pointer;
	&:last-child {
		border-bottom: none;
		margin-bottom: 0;
		height: 16px;
	}
`;

export const Nav = styled.ul`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	color: var(--text-main);
	margin: 0;
	padding: 0;
	list-style-type: none;

	@media (max-width: 768px) {
		display: none;
	}
`;

export const NavItem = styled.li<{ isActive: boolean }>`
	margin-right: 72px;

	&:last-child {
		margin-right: 0;
	}

	& > a {
		color: ${({ isActive }) => (isActive ? 'var(--text-primary)' : 'var(--text-main)')};
		text-decoration: none;
		font-family: 'Gilroy', sans-serif;
		font-size: 18px;
		line-height: 22px;
		font-weight: 400;
		transition: color 0.3s ease;

		@media (max-width: 1440px) {
			font-size: 16px;
			line-height: 18.83px;
		}
	}

	& > a:hover {
		color: var(--text-primary);
	}
`;

export const MobileNav = styled.ul<{ isMenuOpend: boolean }>`
	display: ${({ isMenuOpend }) => (isMenuOpend ? 'flex' : 'none')};
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	gap: 48px;
	color: var(--text-main);
	padding: 0;
	margin: 0;
	list-style-type: none;
	position: relative;

	@media (max-width: 375px) {
		margin-top: 231px;
	}
`;

export const MobileNavItem = styled.li<{ isActive: boolean }>`
	& > a {
		color: ${({ isActive }) => (isActive ? 'var(--text-primary)' : 'var(--text-main)')};
		text-decoration: none;
		font-family: 'Gilroy', sans-serif;
		font-size: 20px;
		line-height: 27px;
		font-weight: 400;
		transition: color 0.3s ease;

		@media (max-width: 375px) {
			font-size: 18px;
			line-height: 22px;
		}
	}

	& > a:hover {
		color: var(--text-primary);
	}
`;

export const ButtonWrapper = styled.div`
	@media (max-width: 768px) {
		display: none;
	}
`;

export const HeaderButton = styled.button<{ isHeaderScrolled: boolean; Tab: string }>`
	padding: 12px 0;
	width: 156px;
	height: 48px;
	font-family: 'Gilroy', sans-serif;
	font-weight: 700;
	font-size: 14px;
	line-height: 17px;
	color: ${({ Tab, isHeaderScrolled }) =>
		Tab === 'Home' && !isHeaderScrolled ? 'var(--text-main)' : 'var(--text-white)'};
	background-color: ${({ Tab, isHeaderScrolled }) =>
		Tab === 'Home' && !isHeaderScrolled ? 'var(--text-white)' : 'var(--text-primary)'};
	text-align: center;
	border: none;
	border-radius: 16px;
	cursor: pointer;
	transition: all 0.3s ease;

	&:hover {
		background-color: ${({ Tab, isHeaderScrolled }) =>
			Tab === 'Home' && !isHeaderScrolled ? '#ffffffcc' : 'var(--text-primary-hover)'};
		box-shadow: 8px 8px 20px 0 var(--shadow-color);
		box-shadow: ${({ Tab, isHeaderScrolled }) =>
			Tab === 'Home' && !isHeaderScrolled
				? '14px 4px 20px 0 var(--shadow-color)'
				: '8px 8px 20px 0 var(--shadow-color)'};
	}

	&:focus {
		background-color: ${({ Tab, isHeaderScrolled }) =>
			Tab === 'Home' && !isHeaderScrolled ? 'var(--text-white)' : 'var(--text-primary)'};
		box-shadow: 8px 4px 20px 0 var(--shadow-color);
		box-shadow: ${({ Tab, isHeaderScrolled }) =>
			Tab === 'Home' && !isHeaderScrolled
				? '12px 2px 20px 0 var(--shadow-color)'
				: '8px 4px 20px 0 var(--shadow-color)'};
	}

	@media (max-width: 1440px) {
		padding: 10px 0;
		width: 130px;
		height: 40px;
	}
`;

export const Burger = styled.img`
	display: none;
	cursor: pointer;

	@media (max-width: 768px) {
		display: block;
	}
`;

export const MobileLinks = styled.div<{ isMenuOpend: boolean }>`
	display: ${({ isMenuOpend }) => (isMenuOpend ? 'flex' : 'none')};
	flex-direction: column;
	align-items: center;
	gap: 32px;

	&::before {
		content: url('images/header/mobile-dots-left.svg');
		position: absolute;
		left: -16px;
		bottom: 20px;
		z-index: -1;
	}

	&::after {
		content: url('images/header/mobile-dots-right.svg');
		position: absolute;
		right: -16px;
		bottom: 75px;
		z-index: -1;
	}

	@media (max-width: 375px) {
		display: none;
	}
`;

export const MobileButton = styled(Button)`
	width: 188px;
`;

export const Socials = styled.div`
	display: flex;
	align-items: center;
`;

export const Social = styled.img`
	cursor: pointer;
	margin-right: 16px;

	&:last-of-type {
		margin-right: 32px;
	}
`;

export const Store = styled.div`
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

export const StoreText = styled.div`
	margin-left: 7.15px;
`;

export const StoreTextFirst = styled.p`
	font-family: 'Inter';
	font-weight: 400;
	font-size: 7.15567px;
	line-height: 9px;
	color: #ffffff;
	margin: 0 0 1.43px 0;
`;

export const StoreTextSecond = styled.p`
	font-family: 'Inter';
	font-weight: 600;
	font-size: 10.7335px;
	line-height: 13px;
	color: #ffffff;
	margin: 0;
`;
