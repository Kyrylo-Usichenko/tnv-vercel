import React, { Dispatch, FC, MouseEvent } from 'react';
import styled from 'styled-components';

type ModalProps = {
	modalActive: boolean;
	setModalActive: Dispatch<React.SetStateAction<boolean>>;
};

const Modal: FC<ModalProps> = ({ modalActive, setModalActive }) => {
	const closeModal = (event: MouseEvent<HTMLElement>) => {
		const target = event.target as Element;
		if (target.classList.contains('modal-btn')) {
			setModalActive(false);
		}
	};

	return (
		<StyledModal modalActive={modalActive}>
			<FormWrapper modalActive={modalActive}>
				<ModalContent modalActive={modalActive}>
					<ModalClose type='button' onClick={closeModal} className='modal-btn'>
						<img src='images/features/modal/close.svg' alt='close' className='modal-btn' />
					</ModalClose>
					<ModalTitle>
						Hi, we're <span className='accent'>Tinvio!</span> And you?
					</ModalTitle>
					<ModalForm>
						<ModlaLabel>
							Name
							<ModalInput placeholder='John Appleseed' type='text' />
						</ModlaLabel>
						<ModlaLabel>
							Business Name
							<ModalInput placeholder='Burgers &Boba (Singapore)' type='text' />
						</ModlaLabel>
						<ModlaLabel>
							Phone
							<ModalInput placeholder='65 9123 4567' type='tel' />
						</ModlaLabel>
						<ModalButton type='submit'>Submit</ModalButton>
						<ModalSpam>
							No spam, promise <img src='images/main/formFilling/hands.svg' alt='hands' />
						</ModalSpam>
					</ModalForm>
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
	gap: 8px;
	font-family: 'Inter';
	font-weight: 400;
	font-size: 12px;
	line-height: 15px;
	color: #5c5c5c;
	margin-bottom: 16px;

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

const ModalInput = styled.input`
	background: #f3f4f5;
	border: none;
	border-radius: 8px;
	padding: 11px 16px 11px 16px;
	font-family: 'Inter';
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	color: #bdbdbd;

	@media (min-width: 1920px) {
		font-size: 16px;
		line-height: 19px;
		padding: 14px 16px 14px 16px;
	}
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

const ModalSpam = styled.span`
	display: block;
	font-family: 'Gilroy';
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;

	color: #bdbdbd;
	text-align: center;

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

export default Modal;
