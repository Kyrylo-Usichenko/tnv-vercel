import React, { FC } from 'react';
import styled from 'styled-components';

const Logo: FC = () => {
	return <Img src='icons/common/logo/logo.svg' alt='octopus' />;
};

const Img = styled.img`
	width: 50.43px;
	height: 44px;

	@media (max-width: 1440px) {
		width: 43.55px;
		height: 38px;
	}
`;

export default Logo;
