import styled from 'styled-components';

export const Container = styled.div`
	max-width: 1344px;
	padding: 0 16px;
	margin: 0 auto;
	position: relative;

	@media (max-width: 1440px) {
		max-width: 1224px;
	}

	@media (max-width: 1280px) {
		max-width: 1064px;
	}

	@media (max-width: 1024px) {
		max-width: 976px;
	}

	@media (max-width: 768px) {
		max-width: 772px;
	}

	@media (max-width: 375px) {
		max-width: 379px;
	}
`;

export const FeaturesCon = styled.div`
	max-width: 100%;
	padding: 0 16px;
	margin: 0 auto;
	position: relative;

	@media (min-width: 1024px) {
		max-width: 1024px;
		padding: 0 40px;
	}

	@media (min-width: 1280px) {
		max-width: 1032px;
		padding: 0;
	}

	@media (min-width: 1440px) {
		max-width: 1192px;
	}

	@media (min-width: 1920px) {
		max-width: 1312px;
	}
`;
