import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import FadeIn from '../../common/FadeIn/FadeIn';

interface IMock {
	name: string;
	image: string;
}

const LeftMockComponent: FC<IMock> = ({ name, image }) => {
	const [updatedName, setUpdatedName] = useState<string | null>(null);

	useEffect(() => {
		if (name) setUpdatedName(name);
	}, [name]);

	return (
		<>
			{updatedName === name && (
				<FadeIn duration={300} delay={100}>
					<LeftMock>
						<ImageInner>
							<Image src={image} alt={updatedName} layout='fill' objectFit='contain' priority />
						</ImageInner>
					</LeftMock>
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

const LeftMock = styled.div`
	position: absolute;
	left: -139px;
	top: -102px;
	width: 300px;
	height: 488px;
	transition: all 0.3s ease 2s;
	@media (max-width: 1023px) {
		right: 39%;
		left: auto;
		top: -95px;
		width: 330px;
		height: 536px;
	}
	@media (max-width: 425px) {
		width: 225px;
		height: 520px;
		right: 45%;
		top: -75px;
	}
`;

export default LeftMockComponent;
