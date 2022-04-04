import React, { FC } from 'react';
import styled from 'styled-components';

type PanelProps = {
	name: string;
};

const Panel: FC<PanelProps> = ({ name, children }) => {
	const [isclose, setIsClose] = React.useState(true);
	const [height, setHeight] = React.useState('0px');

	const content = React.useRef<HTMLDivElement>(null);

	const panelBtnHandler = () => {
		setIsClose((prevState) => !prevState);
		setHeight(isclose ? `${content.current!.scrollHeight}px` : '0px');
	};

	return (
		<StyledPanel>
			<PanelName isclose={isclose}>
				<PanelTitle>{name}</PanelTitle>
				<PanelButton type='button' onClick={panelBtnHandler}>
					<img src={`images/features/faq/${isclose ? 'faq-open.svg' : 'faq-close.svg'}`} alt='open' />
				</PanelButton>
			</PanelName>
			<PanelContent ref={content} style={{ maxHeight: `${height}` }}>
				<PanelText>{children}</PanelText>
			</PanelContent>
		</StyledPanel>
	);
};

const StyledPanel = styled.div`
	width: 100%;
	margin-bottom: 24px;
	border-bottom: 1px solid #d2d2d2;

	&:last-of-type {
		border-bottom: none;
		margin-bottom: 0;
	}

	@media (min-width: 768px) {
		margin-bottom: 32px;
	}
`;

const PanelName = styled.div<{ isclose: boolean }>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-bottom: ${(isclose) => (isclose ? '24px' : '16px')};

	@media (min-width: 768px) {
		padding-bottom: ${(isclose) => (isclose ? '32px' : '24px')};
	}
`;

const PanelTitle = styled.div`
	font-family: 'Gilroy';
	font-weight: 600;
	font-size: 16px;
	line-height: 20px;
	padding-right: 10px;
	color: #212121;

	@media (min-width: 768px) {
		font-size: 20px;
		line-height: 25px;
	}

	@media (min-width: 1920px) {
		font-size: 24px;
		line-height: 29px;
	}
`;

const PanelButton = styled.button`
	background-color: transparent;
	border: none;
	padding: 0;
	cursor: pointer;
`;

const PanelContent = styled.div`
	overflow: hidden;
	transition: max-height 0.6s ease;
`;

const PanelText = styled.p`
	font-family: 'Inter';
	font-weight: 400;
	font-size: 14px;
	line-height: 23px;
	color: #212121;
	margin: 0;
	padding-bottom: 24px;

	@media (min-width: 768px) {
		font-size: 16px;
		line-height: 23px;
		padding-bottom: 32px;
	}

	@media (min-width: 1920px) {
		font-size: 18px;
		line-height: 24px;
	}
`;

export default Panel;
