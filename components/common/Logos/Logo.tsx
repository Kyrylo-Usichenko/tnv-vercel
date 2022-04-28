import React, { FC } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Logo: FC = () => {
	return (
		<Wrapper>
			<Image priority width='100%' height='100%' src='/icons/common/logo/logo.svg' alt='octopus' />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 43.55px;
	height: 38px;

	@media (min-width: 1920px) {
		width: 50.43px;
		height: 44px;
	}
`;

export default Logo;
