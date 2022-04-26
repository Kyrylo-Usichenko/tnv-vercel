import React, { FC, RefObject, useRef } from 'react';

import useAnimate from '../../../hooks/useAnimate';

import DoneTop from './DoneTop';
import DoneBottom from './DoneBottom';

const Done: FC = () => {
	const ref = useRef() as RefObject<HTMLElement>;
	const isShow = useAnimate(ref);

	return (
		<section ref={ref}>
			<DoneTop isShow={isShow} />
			<DoneBottom isShow={isShow} />
		</section>
	);
};

export default Done;
