import React, { FC } from 'react';
import styled from 'styled-components';

const Circle: FC = () => {
	return (
		<StyledSvg width='56' height='56' viewBox='0 0 56 56'>
			<circle fill='none' stroke='#F3F4F5' cx='28' cy='28' r='26' strokeWidth='4px'></circle>
			<circle
				fill='none'
				stroke='#FF474D'
				cx='28'
				cy='28'
				r='26'
				strokeWidth='4px'
				strokeDasharray='60.840704496667314,122.52211349000194'
				strokeLinecap='round'
			>
				{/* <animate
				attributeName='stroke-dashoffset'
				values='360;0'
				dur='2s'
				repeatCount='indefinite'
			></animate> */}
			</circle>
		</StyledSvg>
	);
};

const StyledSvg = styled.svg`
	display: block;
	margin: 0 auto 12px auto;
`;

export default Circle;
