import styled from 'styled-components';

export const TabContainer = styled.div`
	max-width: 375px;
	padding: 140px 16px 80px 16px;
	margin: 0 auto;

	@media (min-width: 768px) {
		max-width: 768px;
		padding: 140px 16px 80px 16px;
	}

	@media (min-width: 1024px) {
		max-width: 1024px;
		padding: 140px 40px 80px 40px;
	}

	@media (min-width: 1280px) {
		max-width: 752px;
		padding: 140px 0 80px 0;
	}
`;

export const TabTitle = styled.h2`
	font-family: 'Gilroy';
	font-weight: 600;
	font-size: 28px;
	line-height: 34px;
	margin: 0 0 48px 0;
	color: var(--main-text);
	text-align: center;

	@media (min-width: 768px) {
		font-size: 32px;
		line-height: 39px;
		margin: 0 0 40px 0;
	}

	@media (min-width: 1024px) {
		font-size: 36px;
		line-height: 44px;
		margin: 0 0 48px 0;
	}

	@media (min-width: 1920px) {
		font-size: 44px;
		line-height: 54px;
		margin: 0 0 42px 0;
	}
`;

export const TabWrapper = styled.div<{ isActive: boolean }>`
	display: ${({ isActive }) => (isActive ? 'block' : 'none')};
`;

export const TabSection = styled.div`
	margin: 0 0 48px 0;

	&:last-of-type {
		margin: 0;
	}
`;

export const TabSubTitle = styled.h3`
	font-family: 'Gilroy';
	font-weight: 600;
	font-size: 16px;
	line-height: 20px;

	color: var(--main-text);
	margin: 0 0 16px 0;

	@media (min-width: 1920px) {
		font-size: 18px;
		line-height: 22px;
	}
`;

export const TabText = styled.p`
	font-family: 'Inter';
	font-weight: 400;
	font-size: 14px;
	line-height: 23px;

	color: var(--main-text);
	margin: 0 0 20px 0;

	@media (min-width: 1920px) {
		font-size: 16px;
		line-height: 23px;
	}
`;

export const TabUl = styled.ul`
	margin: 0 0 20px 0;
	padding: 0 0 0 22px;

	&:last-child {
		margin-bottom: 0;
	}
`;

export const TabLi = styled.li`
	font-family: 'Inter';
	font-weight: 400;
	font-size: 14px;
	line-height: 23px;
	color: var(--main-text);
	margin-bottom: 5px;

	&:last-child {
		margin-bottom: 0;
	}

	@media (min-width: 1920px) {
		font-size: 16px;
		line-height: 23px;
	}
`;

export const CurrentTabCon = styled.div`
	display: flex;
	margin-bottom: 43px;

	@media (min-width: 768px) {
		margin-bottom: 32px;
	}
`;

export const CurrentTabName = styled.button<{ isActive: boolean }>`
	position: relative;
	background-color: transparent;
	border: none;
	font-family: 'Gilroy';
	font-weight: ${({ isActive }) => (isActive ? '600' : '400')};
	font-size: 20px;
	line-height: 24px;
	color: ${({ isActive }) => (isActive ? 'var(--text-primary)' : '#bdbdbd')};
	text-align: center;
	cursor: pointer;
	margin: 0;
	padding: 0 0 9px 0;
	flex: 1;

	&::after {
		content: '';
		position: absolute;
		bottom: ${({ isActive }) => (isActive ? '-1px' : '0')};
		left: 0;
		width: 100%;
		height: ${({ isActive }) => (isActive ? '3px' : '1px')};
		background-color: ${({ isActive }) => (isActive ? 'var(--text-primary)' : '#c4c4c4')};
	}

	@media (min-width: 768px) {
		font-size: 24px;
		line-height: 29px;
	}

	@media (min-width: 1920px) {
		font-size: 28px;
		line-height: 34px;
		padding: 0 0 7px 0;
	}
`;
