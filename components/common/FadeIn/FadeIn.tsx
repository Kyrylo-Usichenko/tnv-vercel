import React from 'react';
import styled, { keyframes } from 'styled-components';

interface IFAdeIn {
	duration: number;
	delay: number;
	isShow?: boolean;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
		visibility: hidden;
		/* transform: translateY(50px) */
  }
  to {
    opacity: 1;
		visibility: visible;
		/* transform: translateY(-50px) */
  }
`;

const FadeIn: React.FC<IFAdeIn> = ({ duration = 300, delay = 0, children, isShow }) => {
	return (
		<Wrapper
			style={{
				animationDuration: `${duration}ms`,
				animationDelay: `${delay}ms`,
			}}
			visible={isShow}
		>
			{children}
		</Wrapper>
	);
};
const Wrapper = styled.div<{ visible?: boolean }>`
	visibility: hidden;

	@media (prefers-reduced-motion: no-preference) {
		animation-name: ${({ visible }) => (visible ? fadeIn : null)};
		animation-fill-mode: forwards;
	}
`;
export default FadeIn;
