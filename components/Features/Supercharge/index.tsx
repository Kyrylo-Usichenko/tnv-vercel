import React, { FC } from 'react';
import styled from 'styled-components';
import { Container } from '../../common/Container/Container';

const Supercharge: FC = () => {
	return (
		<>
			<Container>
				<SuperchargeTitle>Supercharge your business with Tinvio</SuperchargeTitle>
			</Container>
			<FullCon>
				<Container>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quis quae vero atque maiores fugit ab
					iste rem consequatur dicta eius nam, necessitatibus porro, inventore, eligendi repudiandae ex enim
					repellendus!
				</Container>
			</FullCon>
		</>
	);
};

const SuperchargeTitle = styled.h2`
	font-family: 'Gilroy';
	font-weight: 600;
	font-size: 48px;
	line-height: 59px;
	color: var(--text-main);
	margin: 0 0 32px 0;
`;

const FullCon = styled.div`
	max-width: 1686px;
	width: 95%;
	padding: 50px 0;
	border-top-right-radius: 48px;
	border-bottom-right-radius: 48px;
	background-color: var(--bg-black);
	color: var(--text-white);
`;

export default Supercharge;
