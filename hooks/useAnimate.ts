import { RefObject, useEffect, useState } from 'react';
import useIntersectionObserver from './useIntersectionObserver';

const useAnimate = (ref: RefObject<Element>) => {
	const [isShow, setIsShow] = useState(false);
	const entry = useIntersectionObserver(ref, {});
	const isVisible = !!entry?.isIntersecting;

	useEffect(() => {
		if (isVisible && !isShow) {
			setIsShow(true);
		}
	}, [isVisible]);

	return isShow;
};

export default useAnimate;
