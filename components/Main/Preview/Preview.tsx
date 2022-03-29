import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Button from '../../common/Buttons/Button';

const Preview: FC = () => {
	const { t } = useTranslation();

	return (
		<PreviewInfo>
			<PreviewTitle>
				Collecting payments <span className='accent'>is easy</span>, right?
			</PreviewTitle>
			<PreviewText>{t('home:ManageAll')}</PreviewText>
			<PreviewAction>
				<Button>Get Started Now</Button>
				<PreviewFootnote>
					It's free to try!
					<PreviewSmile src='/images/main/preview/smile.svg' alt='smile in glasses' />
				</PreviewFootnote>
			</PreviewAction>
		</PreviewInfo>
	);
};

const PreviewInfo = styled.div`
	padding: 252px 0 0 0;
	position: relative;
`;

const PreviewTitle = styled.h2`
	max-width: 427px;
	margin: 0 0 11px 0;
	font-family: 'Gilroy';
	font-weight: 600;
	font-size: 44px;
	line-height: 54px;
	&:before {
		content: url('/images/main/preview/decorations.png');
		position: absolute;
		z-index: 1;
		left: -46px;
		top: 215px;
	}
`;

const PreviewText = styled.p`
	max-width: 369px;
	font-family: 'Inter';
	font-weight: 400;
	font-size: 18px;
	line-height: 24px;
	color: var(--text-second);
	margin: 0 0 32px 0;
`;
const PreviewAction = styled.div`
	display: inline-flex;
	flex-direction: column;
	align-items: center;
	row-gap: 12px;
`;

const PreviewFootnote = styled.span`
	display: flex;
	align-items: center;
	font-family: 'Gilroy';
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	color: var(--text-second);
`;

const PreviewSmile = styled.img`
	margin-left: 8px;
`;

export default Preview;
