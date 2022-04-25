import React, { ChangeEvent, Dispatch, FC, MouseEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import Circle from '../../common/Circle/Circle';

type ModalProps = {
	modalActive: boolean;
	setModalActive: Dispatch<React.SetStateAction<boolean>>;
};

const Modal: FC<ModalProps> = ({ modalActive, setModalActive }) => {
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
			}
		}, 2000);
	};

	const closeModal = (event: MouseEvent<HTMLElement>) => {
		const target = event.target as Element;
		if (target.classList.contains('modal-btn')) {
			setModalActive(false);
		}
		setLoading('idle');
		setForm(initialValues);
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
		<StyledModal modalActive={modalActive}>
			<FormWrapper modalActive={modalActive}>
				<ModalContent modalActive={modalActive}>
					<ModalClose type='button' onClick={closeModal} className='modal-btn'>
						<img src='/images/features/modal/close.svg' alt='close' className='modal-btn' loading='lazy' />
					</ModalClose>
					{loading === 'success' ? (
						<ModalTitle>Thank you!</ModalTitle>
					) : (
						<ModalTitle>
							Hi, we're <span className='accent'>Tinvio!</span> And you?
						</ModalTitle>
					)}
					{loading === 'success' ? (
						<ModalSuccess>
							<ModalSuccessImg src='/images/features/modal/dec.svg' alt='decorations' />
							<ModalSucceessText>We'll get in touch as soon as possible </ModalSucceessText>
							<ModalButton type='button' className='modal-btn' onClick={closeModal}>
								Close
							</ModalButton>
						</ModalSuccess>
					) : (
						<ModalForm onSubmit={handleFormSubmit}>
							<ModlaLabel>
								Name
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
								Business Name
								<ModalInput
									placeholder='Burgers &Boba (Singapore)'
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
								Phone
								<ModalInput
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
							</ModlaLabel>
							{loading === 'loading' ? (
								<Circle />
							) : loading === 'error' ? (
								<Indicate>
									<img src='/images/features/modal/error.svg' alt='error' />
								</Indicate>
							) : (
								<ModalButton type='submit'>Submit</ModalButton>
							)}
							<ModalSpam>
								No spam, promise{' '}
								<img src='/images/main/formFilling/hands.svg' alt='hands' loading='lazy' />
							</ModalSpam>
						</ModalForm>
					)}
				</ModalContent>
			</FormWrapper>
		</StyledModal>
	);
};

const StyledModal = styled.div<{ modalActive: boolean }>`
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	z-index: 9999;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(33, 33, 33, 0.3);
	backdrop-filter: blur(4px);
	opacity: ${({ modalActive }) => (modalActive ? '1' : '0')};
	transition: opacity 0.3s ease;
	pointer-events: ${({ modalActive }) => (modalActive ? 'all' : 'none')};

	@media (max-width: 375px) {
		padding: 0;
	}
`;

const FormWrapper = styled.div<{ modalActive: boolean }>`
	max-width: 375px;
	padding: 16px;
	width: 100%;
	background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(255, 255, 255, 0.3) 0%, rgba(250, 250, 250, 0.3) 100%);
	border-radius: 36px;
	transform: ${({ modalActive }) => (modalActive ? 'scale(1)' : 'scale(0.5)')};
	transition: transform 0.3s ease;

	@media (min-width: 768px) {
		max-width: 489px;
		padding: 32px;
	}

	@media (min-width: 1920px) {
		max-width: 504px;
	}
`;

const ModalContent = styled.div<{ modalActive: boolean }>`
	width: 100%;
	height: auto;
	background-color: #ffffff;
	border-radius: 32px;
	padding: 40px 24px;
	transform: ${({ modalActive }) => (modalActive ? 'scale(1)' : 'scale(0.5)')};
	transition: transform 0.3s ease;
	position: relative;

	@media (min-width: 768px) {
		padding: 48px 48px 40px 48px;
	}

	@media (min-width: 1920px) {
		padding: 48px;
	}
`;

const ModalTitle = styled.h2`
	font-family: 'Gilroy';
	font-weight: 600;
	font-size: 20px;
	line-height: 25px;
	color: #212121;
	margin: 0 0 32px 0;
	text-align: center;

	@media (min-width: 768px) {
		font-size: 24px;
		line-height: 29px;
	}

	@media (min-width: 1920px) {
		font-size: 28px;
		line-height: 34px;
		text-align: left;
	}
`;

const ModalForm = styled.form``;

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

	@media (min-width: 1920px) {
		font-size: 14px;
		line-height: 17px;
	}
`;

const ModalInput = styled.input<{ error: boolean }>`
	background: #f3f4f5;
	border: none;
	border-radius: 8px;
	border: ${({ error }) => (error ? '1px solid #FA656A' : '1px solid #f3f4f5')};
	padding: 11px 16px 11px 16px;
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

	@media (min-width: 1920px) {
		font-size: 16px;
		line-height: 19px;
		padding: 14px 16px 14px 16px;
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

const ModalButton = styled.button`
	display: block;
	margin: 0 auto 12px auto;
	width: 180px;
	height: 48px;
	padding: 14px;
	background: #ff474d;
	border: none;
	border-radius: 18px;
	text-align: center;
	font-family: 'Gilroy';
	font-weight: 700;
	font-size: 16px;
	line-height: 19px;
	color: #ffffff;
	cursor: pointer;
	transition: all 0.3s ease;

	&:hover {
		background-color: var(--text-primary-hover);
		box-shadow: 8px 8px 20px 0 var(--shadow-color);
	}

	&:focus {
		background-color: var(--text-primary);
		box-shadow: 8px 4px 20px 0 var(--shadow-color);
	}

	@media (min-width: 1920px) {
		width: 210px;
		height: 56px;
		font-size: 20px;
		line-height: 25px;
		padding: 16px 0;
	}
`;

const Indicate = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #ff474d;
	height: 48px;
	width: 48px;
	border-radius: 50%;
	margin: 0 auto 12px auto;

	@media (min-width: 1920px) {
		height: 56px;
		width: 56px;
	}
`;

const ModalSpam = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
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

const ModalClose = styled.button`
	position: absolute;
	top: 16px;
	right: 16px;

	background: #f3f4f5;
	border: none;
	border-radius: 5px;
	padding: 4px 6px;
	cursor: pointer;

	@media (min-width: 768px) {
		top: 24px;
		right: 24px;
	}
`;

const ModalSuccess = styled.div``;

const ModalSuccessImg = styled.img`
	display: block;
	margin: 0 auto 12px auto;
`;

const ModalSucceessText = styled.p`
	font-family: 'Inter';
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	color: #717071;
	text-align: center;
	margin: 0 0 32px 0;
`;

export default Modal;
