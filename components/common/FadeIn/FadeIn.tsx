import React from 'react';
import styled, { keyframes } from 'styled-components';

interface IFAdeIn {
	duration: number;
	delay: number;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const FadeIn: React.FC<IFAdeIn> = ({ duration = 300, delay = 0, children }) => {
	return (
		<Wrapper
			style={{
				animationDuration: `${duration}ms`,
				animationDelay: `${delay}ms`,
			}}
		>
			{children}
		</Wrapper>
	);
};
const Wrapper = styled.div`
	@media (prefers-reduced-motion: no-preference) {
		animation-name: ${fadeIn};
		animation-fill-mode: backwards;
	}
`;
export default FadeIn;
