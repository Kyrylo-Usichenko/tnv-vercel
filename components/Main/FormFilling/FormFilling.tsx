import React, { ChangeEvent, FC, RefObject, useEffect, useState } from 'react';
import styled from 'styled-components';

import { FeaturesCon } from '../../common/Container/Container';
import MapComponentFlex from './MapFlex';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { FormLoading, FormState } from '../../../types';
import { addSpaceToPhone } from '../../../utils';

type SmileProps = {
	formRef: RefObject<HTMLDivElement>;
	locale: string;
};

const Smile: FC<SmileProps> = ({ formRef, locale }) => {
	const [loading, setLoading] = useState<FormLoading>('idle');

	const { t } = useTranslation();

	const initialValues: FormState = {
		name: '',
		business: '',
		phone: '',
	};

	const [form, setForm] = useState(initialValues);

	const [nameError, setNameError] = useState(true);
	const [businessError, setBusinessError] = useState(true);
	const [phoneError, setPhoneError] = useState(true);

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		setForm((prevState) => ({
			...prevState,
			[name]: value,
		}));

		setLoading('idle');
	};

	const keyDownPhoneInput = (event: any) => {
		addSpaceToPhone(event, form.phone, setForm);
	};

	const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		setLoading('loading');

		if (!nameError && !businessError && !phoneError) {
			console.log('Send data to server');
		}

		setTimeout(() => {
			if (nameError || businessError || phoneError) {
				setLoading('error');
			} else {
				setLoading('success');
				setForm(initialValues);
			}
		}, 2000);
	};

	const validateForm = () => {
		const data = Object.entries(form);

		for (let i = 0; i < data.length; i++) {
			switch (data[i][0]) {
				case 'name':
					if (data[i][1].length < 1) {
						setNameError(true);
					} else {
						setNameError(false);
					}
					break;
				case 'business':
					if (data[i][1].length < 1) {
						setBusinessError(true);
					} else {
						setBusinessError(false);
					}
					break;
				case 'phone':
					const string = data[i][1];
					const stringTest = /\d{2}\s\d{4}\s\d{4}/.test(string);
					if (data[i][1].length < 12 || !stringTest) {
						setPhoneError(true);
					} else {
						setPhoneError(false);
					}
					break;
			}
		}
	};

	useEffect(() => {
		validateForm();
	}, [form]);

	return (
		<Wrapper ref={formRef}>
			<WrapperRotated>
				<Null>
					<FeaturesCon>
						<Inner>
							<TitleWrapper>
								<Title>{t('main:formTitle')}</Title>
								<MapBox>
									<MapComponentFlex locale={locale} />
								</MapBox>
							</TitleWrapper>

							<FormWrapper>
								<Form onSubmit={handleFormSubmit}>
									<FormTitle>
										{t('main:formHeadingBefore')}
										<span className='accent'> Tinvio!</span> {t('main:formHeadingAfter')}
									</FormTitle>
									<ModlaLabel>
										{t('main:formName')}
										<ModalInput
											placeholder='John Appleseed'
											type='text'
											value={form.name}
											name='name'
											onChange={handleInputChange}
											error={loading === 'error' && nameError}
										/>
										{loading === 'error' && nameError ? (
											<ModalInputError>Invalid Name</ModalInputError>
										) : null}
									</ModlaLabel>
									<ModlaLabel>
										{t('main:formBusinessName')}
										<ModalInput
											placeholder={t('main:formBusinessNamePlaceholder')}
											type='text'
											value={form.business}
											name='business'
											onChange={handleInputChange}
											error={loading === 'error' && businessError}
										/>
										{loading === 'error' && businessError ? (
											<ModalInputError>Invalid Business Name</ModalInputError>
										) : null}
									</ModlaLabel>
									<ModlaLabel>
										{t('main:formPhone')}
										<ModalInput
											placeholder={t('main:formPhonePlaceholder')}
											type='tel'
											value={form.phone}
											name='phone'
											onChange={handleInputChange}
											onKeyDown={keyDownPhoneInput}
											error={loading === 'error' && phoneError}
										/>
										{loading === 'error' && phoneError ? (
											<ModalInputError>Invalid phone number</ModalInputError>
										) : null}
									</ModlaLabel>
									<Button type='submit' loaded={loading !== 'idle'}>
										{t('main:formButton')}
										<StyledSvg xmlns='http://www.w3.org/2000/svg' loaded={loading !== 'idle'}>
											<g>
												<ellipse
													ry='23.5'
													rx='23.5'
													cy='24'
													cx='24'
													strokeWidth='2'
													stroke='transparent'
													fill='transparent'
												/>
												<StyledEllipse
													ry='23'
													rx='23'
													cy='24'
													cx='24'
													strokeWidth='2'
													stroke='red'
													fill='transparent'
													loaded={loading !== 'idle'}
												/>
											</g>
										</StyledSvg>
										{loading === 'success' ? <Success /> : null}
										{loading === 'error' ? <Error /> : null}
									</Button>
									<Spam>
										{t('main:formUnderButton')}
										<Img>
											<Image
												src='/images/main/formFilling/hands.svg'
												alt='Hands'
												width={16}
												height={18}
											/>
										</Img>
									</Spam>
								</Form>
								<Dots>
									<Image
										src='/images/main/formFilling/dots.png'
										alt='Dots'
										width={263}
										height={201}
									/>
								</Dots>
							</FormWrapper>
						</Inner>
					</FeaturesCon>
				</Null>
			</WrapperRotated>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	height: 1215px;
	position: relative;
	margin-top: 80px;
	right: 0;
	bottom: 0;
	overflow: hidden;
	border-radius: 0 0 50px 0;
	margin-right: 0px;

	@media (min-width: 415px) {
		height: 1155px;
	}
	@media (min-width: 768px) {
		height: 1350px;
	}

	@media (min-width: 1023px) {
		height: 930px;
	}

	@media (min-width: 1280.5px) {
		height: 890px;
		margin-top: 150px;
		margin-right: 54px;
	}

	@media (min-width: 1441px) {
		height: 920px;
		margin-top: 150px;
		margin-right: 54px;
	}
`;

const WrapperRotated = styled.div`
	height: 100%;
	width: 100%;
	background: #f7f7f7;
	z-index: 0;
	transform: skewY(8deg);
	transform-origin: left center;
	position: absolute;
	right: 0;
	bottom: 0;

	border-radius: 0 50px 0 0;
`;

const Null = styled.div`
	transform: skewY(-8deg);
`;

const Inner = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	align-items: center;
	margin-top: 95px;
	margin-left: 27px;
	margin-right: -27px;

	@media (min-width: 1023px) {
		flex-direction: row;
		margin-top: 127px;
		align-items: flex-start;
	}

	@media (max-width: 1280px) {
		margin-left: 0;
		margin-right: 0;
	}
`;

const Title = styled.h5`
	position: relative;
	z-index: 3;
	font-family: 'Gilroy';
	font-style: normal;
	font-weight: 600;
	font-size: 28px;
	line-height: 33px;
	margin: 0;
	padding: 0;
	text-align: center;
	margin-bottom: 33px;
	color: #212121;
	max-width: 310px;

	@media (min-width: 768px) {
		font-size: 32px;
		line-height: 39px;
		max-width: 450px;
	}

	@media (min-width: 1023px) {
		text-align: left;
		max-width: 430px;
	}

	@media (min-width: 1280px) {
		font-size: 36px;
		line-height: 44px;
		max-width: 480px;
	}

	@media (min-width: 1440.5px) {
		font-size: 44px;
		line-height: 54px;
		max-width: 580px;
	}
`;

const TitleWrapper = styled.div`
	position: relative;
`;

const MapBox = styled.div`
	position: absolute;
	width: 620px;
	left: -305px;
	top: 520px;

	@media (min-width: 415px) {
		width: 710px;
		top: 470px;
		left: -310px;
	}
	@media (min-width: 768px) {
		width: auto;
		top: 370px;
		left: -474px;
	}

	@media (min-width: 1023px) {
		width: 950px;
		top: -52px;
		left: -385px;
	}

	@media (min-width: 1280px) {
		width: auto;
		top: -52px;
		left: -390px;
	}

	@media (min-width: 1440px) {
		top: -63px;
		left: -305px;
	}

	@media (min-width: 1920px) {
		top: -75px;
		left: -235px;
	}
`;

const FormWrapper = styled.div`
	background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(255, 255, 255, 0.3) 0%, rgba(250, 250, 250, 0.3) 100%);
	border-radius: 36px;
	padding: 16px;
	position: relative;
	z-index: 2;

	@media (min-width: 768px) {
		padding: 32px;
	}
`;

const Form = styled.form`
	background-color: #ffffff;
	border-radius: 32px;
	padding: 40px 24px;

	@media (min-width: 768px) {
		padding: 48px 48px 40px 48px;
	}

	@media (min-width: 1440.5px) {
		padding: 48px;
	}
`;

const FormTitle = styled.p`
	font-family: 'Gilroy';
	font-weight: 600;
	font-size: 20px;
	line-height: 25px;
	color: #212121;
	padding: 0;
	margin: 0 0 32px 0;
	text-align: center;
	max-width: 295px;

	@media (min-width: 768px) {
		font-size: 24px;
		line-height: 29px;
		max-width: 329px;
	}

	@media (min-width: 1440.5px) {
		font-size: 28px;
		line-height: 34px;
		max-width: 344px;
	}
`;

const ModlaLabel = styled.label`
	display: flex;
	flex-direction: column;
	font-family: 'Inter';
	font-weight: 400;
	font-size: 12px;
	line-height: 15px;
	color: #5c5c5c;
	margin-bottom: 16px;
	position: relative;

	&:last-of-type {
		margin-bottom: 48px;
	}

	@media (min-width: 768px) {
		&:last-of-type {
			margin-bottom: 32px;
		}
	}

	@media (min-width: 1440.5px) {
		font-size: 14px;
		line-height: 17px;
	}
`;

const ModalInput = styled.input<{ error: boolean }>`
	background: #f3f4f5;
	border: none;
	width: 295px;
	border-radius: 8px;
	border: ${({ error }) => (error ? '1px solid #FA656A' : '1px solid #f3f4f5')};
	padding: 11px 16px;
	font-family: 'Inter';
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	color: #212121;
	outline: none;
	margin: 8px 0 0 0;

	&::placeholder {
		color: #bdbdbd;
	}

	&:focus {
		border: 1px solid #d2d2d2;
	}

	&:disabled {
		opacity: 0.5;
	}

	@media (min-width: 768px) {
		width: 329px;
	}

	@media (min-width: 1440.5px) {
		font-size: 16px;
		line-height: 19px;
		padding: 14px 16px 14px 16px;
		width: 344px;
	}
`;

const ModalInputError = styled.p`
	font-size: 12px;
	line-height: 15px;
	text-align: right;
	color: #ff474d;
	margin: 0 0 0 0;
	position: absolute;
	right: 0;
	bottom: -17px;
`;

const Button = styled.button<{ loaded?: boolean }>`
	--btn-width: 48px;

	display: block;
	position: relative;
	background: #ff474d;
	border-radius: ${({ loaded }) => (loaded ? '50%' : '18px')};
	width: ${({ loaded }) => (loaded ? 'var(--btn-width)' : '180px')};
	height: 48px;
	padding: 0;
	margin: 0 auto 14px auto;
	font-family: 'Gilroy';
	font-weight: 700;
	font-size: 16px;
	line-height: 20px;
	color: ${({ loaded }) => (loaded ? 'transparent' : '#ffffff')};
	border: none;
	cursor: pointer;
	transition: all 0.3s ease;
	animation: ${({ loaded }) => (loaded ? 'btnLoader 2s ease' : 'none')};

	&:hover {
		background-color: var(--text-primary-hover);
		box-shadow: 8px 8px 20px 0 var(--shadow-color);
	}

	@keyframes btnLoader {
		20% {
			width: var(--btn-width);
			border-radius: 50%;
			color: transparent;
		}
		40% {
			width: var(--btn-width);
			border-radius: 50%;
			color: transparent;
			background-color: transparent;
		}
		60% {
			width: var(--btn-width);
			border-radius: 50%;
			color: transparent;
			background-color: #ff474d;
		}
		100% {
			width: var(--btn-width);
			border-radius: 50%;
			color: transparent;
			background-color: #ff474d;
		}
	}

	@media (min-width: 1440.5px) {
		--btn-width: 56px;

		font-size: 20px;
		line-height: 25px;
		width: ${({ loaded }) => (loaded ? 'var(--btn-width)' : '210px')};
		height: 56px;
	}
`;

const Spam = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: 'Gilroy';
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	color: #bdbdbd;

	@media (min-width: 1440.5px) {
		font-size: 16px;
		line-height: 19px;
	}
`;

const Img = styled.div`
	margin-left: 8px;
`;

const Dots = styled.div`
	position: absolute;
	right: -29px;
	bottom: 29px;
	z-index: -1;

	@media (max-width: 768px) {
		right: 129px;
		bottom: 429px;
	}
`;

const StyledSvg = styled.svg<{ loaded: boolean }>`
	--btn-width: 48px;

	position: absolute;
	top: 50%;
	left: 51%;
	width: var(--btn-width);
	height: var(--btn-width);
	transform: translate(-50%, -50%) rotate(-90deg);
	opacity: ${({ loaded }) => (loaded ? '1' : '0')};

	@media (min-width: 1440.5px) {
		--btn-width: 56px;
		left: 49%;
		top: 50%;
	}
`;

const StyledEllipse = styled.ellipse<{ loaded: boolean }>`
	stroke-dasharray: 180;
	stroke-dashoffset: ${({ loaded }) => (loaded ? '0' : '-180')};
	transition: all 0.5s ease 0.3s;

	@media (min-width: 1440.5px) {
		ry: 48%;
		rx: 48%;
		cy: 50%;
		cx: 50%;
	}
`;

const Indicate = styled.div`
	height: 48px;
	width: 48px;
	border-radius: 50%;
	line-height: 0;
	background-color: transparent;
	position: absolute;
	top: 0;
	left: 50%;
	transform: translateX(-50%);

	&::before {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		width: 100%;
	}

	@media (min-width: 1440.5px) {
		height: 56px;
		width: 56px;
	}
`;

const Success = styled(Indicate)`
	&::before {
		content: url('/images/features/modal/success.svg');
	}
`;

const Error = styled(Indicate)`
	&::before {
		content: url('/images/features/modal/error.svg');
	}
`;

export default Smile;
