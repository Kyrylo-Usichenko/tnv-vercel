import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import Circle from '../../common/Circle/Circle';
import { FeaturesCon } from '../../common/Container/Container';

const Smile: FC = () => {
	const [loading, setLoading] = useState<'idle' | 'loading' | 'error' | 'success'>('idle');

	const initialValues = {
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

	const addSpaceToPhone = (event: any) => {
		if ((form.phone.length === 12 || event.code === 'Space') && event.code !== 'Backspace') event.preventDefault();

		if ((form.phone.length === 2 || form.phone.length === 7) && event.code !== 'Backspace') {
			setForm((prevState) => ({
				...prevState,
				phone: prevState.phone + ' ',
			}));
		}
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
		<Wrapper>
			<WrapperRotated>
				<Null>
					<FeaturesCon>
						<Inner>
							<TitleWrapper>
								<Title>Fill up the form and we’ll get in touch within a few hours</Title>
								<Map
									src='images/main/formFilling/map.png'
									srcSet='images/main/formFilling/map@2x.png 2x'
									alt='map of asia'
								/>
							</TitleWrapper>

							<FormWrapper>
								<Form onSubmit={handleFormSubmit}>
									<FormTitle>
										Hi, we’re <span className='accent'>Tinvio!</span> And you?
									</FormTitle>
									<Label>Name</Label>
									<Input
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
									<Label>Business Name</Label>
									<Input
										placeholder='Burgers & Boba (Singapore)'
										type='text'
										value={form.business}
										name='business'
										onChange={handleInputChange}
										error={loading === 'error' && businessError}
									/>
									{loading === 'error' && businessError ? (
										<ModalInputError>Invalid Business Name</ModalInputError>
									) : null}
									<Label>Phone</Label>
									<Input
										placeholder='65 9123 4567'
										type='tel'
										value={form.phone}
										name='phone'
										onChange={handleInputChange}
										onKeyDown={addSpaceToPhone}
										error={loading === 'error' && phoneError}
									/>
									{loading === 'error' && phoneError ? (
										<ModalInputError>Invalid phone number</ModalInputError>
									) : null}
									{loading === 'loading' ? (
										<Circle />
									) : loading === 'error' ? (
										<Indicate>
											<img src='images/features/modal/error.svg' alt='error' />
										</Indicate>
									) : loading === 'success' ? (
										<Indicate>
											<img src='images/features/modal/success.svg' alt='success' />
										</Indicate>
									) : (
										<Button>Submit</Button>
									)}
									<Spam>
										No spam, promise
										<Img src='images/main/formFilling/hands.svg' alt='' />
									</Spam>
								</Form>
								<Dots src='images/main/formFilling/dots.svg' alt='' />
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
	margin-top: 250px;
	right: 0;
	bottom: 0;
	overflow: hidden;
	border-radius: 0 0 50px 0;
	margin-right: 0px;

	@media (min-width: 768px) {
		height: 1270px;
	}

	@media (min-width: 1024px) {
		height: 850px;
	}

	@media (min-width: 1280px) {
		height: 890px;
		margin-top: 150px;
		margin-right: 54px;
	}

	@media (min-width: 1920px) {
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

	@media (min-width: 1024px) {
		flex-direction: row;
		margin-top: 127px;
		align-items: flex-start;
	}
`;

const Title = styled.h5`
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

	@media (min-width: 1024px) {
		text-align: left;
		max-width: 430px;
	}

	@media (min-width: 1280px) {
		font-size: 36px;
		line-height: 44px;
		max-width: 480px;
	}

	@media (min-width: 1920px) {
		font-size: 44px;
		line-height: 54px;
		max-width: 580px;
	}
`;

const TitleWrapper = styled.div`
	position: relative;
`;

const Map = styled.img`
	position: absolute;
	left: -243px;
	top: -87px;
	z-index: -1;
	width: 710px;
	top: 545px;
	left: -305px;

	@media (min-width: 768px) {
		width: auto;
		top: 390px;
		left: -474px;
	}

	@media (min-width: 1024px) {
		width: 950px;
		top: -52px;
		left: -410px;
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

	@media (min-width: 1920px) {
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

	@media (min-width: 768px) {
		font-size: 24px;
		line-height: 29px;
	}

	@media (min-width: 1920px) {
		font-size: 28px;
		line-height: 34px;
	}
`;

const Label = styled.p`
	font-family: 'Inter';
	font-weight: 400;
	font-size: 12px;
	line-height: 15px;
	color: #5c5c5c;
	margin: 0 0 8px 0;
	padding: 0;

	@media (min-width: 1920px) {
		font-size: 14px;
		line-height: 17px;
	}
`;

const Input = styled.input<{ error: boolean }>`
	background: #f3f4f5;
	border-radius: 8px;
	padding: 11px 16px;
	width: 295px;
	margin: 0 0 16px 0;
	border: ${({ error }) => (error ? '1px solid #FA656A' : '1px solid #f3f4f5')};
	outline: none;
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	color: #212121;

	&:last-of-type {
		margin-bottom: 48px;
	}

	&::placeholder {
		font-family: 'Inter';
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
		line-height: 17px;
		color: #bdbdbd;
	}

	&:focus {
		border: 1px solid #d2d2d2;
	}

	@media (min-width: 768px) {
		width: 329px;
	}

	@media (min-width: 1920px) {
		font-size: 16px;
		line-height: 19px;
		width: 344px;
	}
`;

const Button = styled.button`
	display: block;
	background: #ff474d;
	border-radius: 18px;
	width: 180px;
	height: 48px;
	padding: 0;
	margin: 0 auto;
	font-family: 'Gilroy';
	font-weight: 700;
	font-size: 16px;
	line-height: 20px;
	color: #ffffff;
	border: none;
	cursor: pointer;

	@media (min-width: 1920px) {
		font-size: 20px;
		line-height: 25px;
		width: 210px;
		height: 56px;
	}
`;

const Spam = styled.div`
	margin: 12px 0 0 0;
	text-align: center;
	font-family: 'Gilroy';
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	color: #bdbdbd;

	@media (min-width: 1920px) {
		font-size: 16px;
		line-height: 19px;
	}
`;

const Img = styled.img`
	margin-left: 8px;
`;

const Dots = styled.img`
	position: absolute;
	right: -2px;
	bottom: -37px;
	z-index: -1;

	/* @media (max-width: 768px) {
		right: 129px;
		bottom: 429px;
	} */
`;

const Indicate = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #ff474d;
	height: 56px;
	width: 56px;
	border-radius: 50%;
	margin: 0 auto 12px auto;
`;

const ModalInputError = styled.p`
	font-size: 12px;
	line-height: 15px;
	text-align: right;
	color: #ff474d;
	margin: -13px 0 0 0;
`;

export default Smile;
