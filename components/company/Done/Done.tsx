import React, { FC } from 'react';

import DoneTop from './DoneTop';
import DoneBottom from './DoneBottom';
import styled from 'styled-components';

const Done: FC = () => {
	return (
		<section>
			<DoneTop />
			<DoneBottom />
		</section>
	);
};

export default Done;
