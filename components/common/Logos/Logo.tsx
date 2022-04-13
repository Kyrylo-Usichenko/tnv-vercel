import React, { FC } from 'react';
import styled from 'styled-components';

const Logo: FC = () => {
	return <Img src='icons/common/logo/logo.svg' alt='octopus' />;
};

const Img = styled.img`
	width: 43.55px;
	height: 38px;

	@media (min-width: 1920px) {
		width: 50.43px;
		height: 44px;
	}
`;

export default Logo;
