import React, { FC } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

interface ISlide {
	image: string;
}

const SlideImage: FC<ISlide> = ({ image }) => {
	return (
		<ImageBlock>
			<Image src={image} layout='fill' objectFit='cover' />
		</ImageBlock>
	);
};

const ImageBlock = styled.div`
	max-width: 100%;
	padding: 0 0 75%;
	background: #ededed;
	border-radius: 24px;
	overflow: hidden;
	position: relative;

	& img {
		max-width: 100%;
	}

	@media (max-width: 425px) {
		order: -1;
		width: 100%;
		padding: 0 0 239px;
	}
`;

export default SlideImage;
