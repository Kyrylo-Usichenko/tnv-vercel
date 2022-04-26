import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import FadeIn from '../../common/FadeIn/FadeIn';

interface IMock {
	name: string;
	image: string;
}

const RightMockComponent: FC<IMock> = ({ name, image }) => {
	const [updatedName, setUpdatedName] = useState<string | null>(null);

	useEffect(() => {
		if (name) setUpdatedName(name);
	}, [name]);

	return (
		<>
			{updatedName === name && (
				<FadeIn duration={300} delay={400}>
					<RightMock>
						<ImageInner>
							<Image src={image} alt={updatedName} layout='fill' objectFit='contain' priority />
						</ImageInner>
					</RightMock>
				</FadeIn>
			)}
		</>
	);
};

const ImageInner = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
`;

const RightMock = styled.div`
	position: absolute;
	left: 116px;
	top: 42px;
	background: url('/images/main/moreMoney/fruitPlanet.png') no-repeat;
	background-size: contain;
	width: 300px;
	height: 488px;

	@media (max-width: 1023px) {
		top: 0;
		left: 47%;
		width: 330px;
		height: 536px;
	}
	@media (max-width: 425px) {
		// left: 204px;
		// top: 0;
		width: 225px;
	}
`;
export default RightMockComponent;
