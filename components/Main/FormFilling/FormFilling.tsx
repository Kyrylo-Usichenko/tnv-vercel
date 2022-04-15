import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import Circle from '../../common/Circle/Circle';
import { Container } from '../../common/Container/Container';

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
					<Container>
						<Inner>
							<TitleWrapper>
								<Title>Fill up the form and we’ll get in touch within a few hours</Title>
								<Map src='images/main/formFilling/map.png' alt='' />
							</TitleWrapper>

							<FormWrapper>
								<Form onSubmit={handleFormSubmit}>
									<FormTitle>
										Hi, we’re <FormTitleSpan>Tinvio!</FormTitleSpan> And you?
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
										<Button type='submit' />
									)}
									<Spam>
										No spam, promise
										<Img src='images/main/formFilling/hands.svg' alt='' />
									</Spam>
								</Form>
								<Dots src='images/main/formFilling/dots.svg' alt='' />
							</FormWrapper>
						</Inner>
					</Container>
				</Null>
			</WrapperRotated>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	height: 950px;
	position: relative;
	margin-top: 150px;
	right: 0;
	bottom: 0;
	overflow: hidden;
	border-radius: 0 0 50px 0;
	margin-right: 54px;

	@media (max-width: 1024px) {
		margin-top: 250px;
		margin-right: 0;
	}
	@media (max-width: 768px) {
		height: 1320px;
	}
	@media (max-width: 580px) {
		height: 1215px;
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
	@media (max-width: 1024px) {
	}
`;
const Null = styled.div`
	transform: skewY(-8deg);
`;

const Inner = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 127px;
	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
		margin-top: 95px;
	}
`;

const Title = styled.h5`
	font-family: 'Gilroy';
	font-style: normal;
	font-weight: 600;
	font-size: 44px;
	line-height: 54px;
	margin: 0;
	padding: 0;
	color: #212121;
	max-width: 580px;
	@media (max-width: 1280px) {
		font-size: 36px;
		line-height: 42px;
	}
	@media (max-width: 1024px) {
		font-size: 32px;
		line-height: 38px;
	}
	@media (max-width: 768px) {
		font-size: 32px;
		line-height: 39px;
		text-align: center;
	}
	@media (max-width: 580px) {
		font-size: 28px;
		line-height: 33px;
	}
	@media (max-width: 425px) {
		max-width: 310px;
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
	@media (max-width: 768px) {
		top: 401px;
	}
	@media (max-width: 425px) {
		width: 620px;
		top: 572px;
	}
`;

const FormWrapper = styled.div`
	background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(255, 255, 255, 0.3) 0%, rgba(250, 250, 250, 0.3) 100%);
	border-radius: 36px;
	padding: 32px;
	width: 504px;
	height: 597px;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: 768px) {
		width: 489px;
	}
	@media (max-width: 580px) {
		width: 375px;
	}
`;
const Form = styled.form`
	width: 440px;
	height: 533px;
	background: #ffffff;
	border-radius: 32px;
	padding: 48px;
	@media (max-width: 580px) {
		width: 343px;
		padding: 40px 24px 0;
	}
`;

const FormTitle = styled.p`
	font-family: 'Gilroy';
	font-style: normal;
	font-weight: 600;
	font-size: 28px;
	line-height: 34px;
	color: #212121;
	padding: 0;
	margin: 0 0 32px 0;
	@media (max-width: 768px) {
		font-size: 24px;
		line-height: 29px;
		text-align: center;
	}
	@media (max-width: 580px) {
		font-size: 20px;
		line-height: 25px;
	}
`;
const FormTitleSpan = styled.span`
	margin: 0;
	padding: 0;
	color: #ff474d;
`;

const Label = styled.p`
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	color: #5c5c5c;
	margin: 0 0 8px 0;
	padding: 0;
`;

const Input = styled.input<{ error: boolean }>`
	background: #f3f4f5;
	border-radius: 8px;
	padding: 14px 16px 15px;
	width: 342px;
	height: 46px;
	margin: 0 0 16px 0;
	border: ${({ error }) => (error ? '1px solid #FA656A' : '1px solid #f3f4f5')};
	outline: none;
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	color: #212121;
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
	@media (max-width: 580px) {
		width: 295px;
	}
`;

const Button = styled.input`
	display: block;
	background: #ff474d;
	border-radius: 18.6667px;
	width: 210px;
	height: 56px;
	padding: 0;
	margin: 16px auto 0 auto;
	font-family: 'Gilroy';
	font-style: normal;
	font-weight: 700;
	font-size: 20px;
	line-height: 25px;
	color: #ffffff;
	border: none;
	box-sizing: content-box;
	cursor: pointer;
`;

const Spam = styled.div`
	margin: 12px 0 0 0;
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: 'Gilroy';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 19px;
	color: #bdbdbd;
`;

const Img = styled.img`
	margin-left: 8px;
`;

const Dots = styled.img`
	position: absolute;
	right: -2px;
	bottom: -37px;
	z-index: -1;
	@media (max-width: 768px) {
		right: 129px;
		bottom: 429px;
	}
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
