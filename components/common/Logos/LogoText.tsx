import React, { FC } from 'react';
import styled from 'styled-components';

const LogoText: FC = () => {
	return (
		<>
			<Img src='icons/common/logo/logo-text.svg' alt='tinvio' />
		</>
	);
};

const Img = styled.img`
	margin-left: 7.4px;
	width: 69.71px;
	height: 22px;

	@media (max-width: 1440px) {
		width: 60.2px;
		height: 19x;
	}
`;

export default LogoText;
