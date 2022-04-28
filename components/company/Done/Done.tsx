import React, { FC, RefObject, useRef } from 'react';

import DoneTop from './DoneTop';
import DoneBottom from './DoneBottom';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';

const Done: FC = () => {
	const ref = useRef() as RefObject<HTMLDivElement>;
	const entry = useIntersectionObserver(ref, {});
	const isVisible = !!entry?.isIntersecting;
	return (
		<div ref={ref}>
			<DoneTop isVisible={isVisible} />
			<DoneBottom isVisible={isVisible} />
		</div>
	);
};

export default Done;
