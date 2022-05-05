import React, { ChangeEvent, Dispatch, FC, MouseEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import { FormLoading, FormState } from '@/types';
import { addSpaceToPhone } from '@/utils';

type ModalProps = {
  modalActive: boolean;
  setModalActive: Dispatch<React.SetStateAction<boolean>>;
};

const Modal: FC<ModalProps> = ({ modalActive, setModalActive }) => {
  const { t } = useTranslation();

  const [loading, setLoading] = useState<FormLoading>('idle');
  const [result, setResult] = useState(false);

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

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
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
        setTimeout(() => {
          setResult(true);
        }, 1000);
      }
    }, 2000);
  };

  const closeModal = (event: MouseEvent<HTMLElement>) => {
    const target = event.target as Element;

    if (target.classList.contains('modal-btn')) {
      setModalActive(false);
    }

    setLoading('idle');
    setResult(false);
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
            <Image src='/images/features/modal/close.svg' alt='close' width={12} height={12} className='modal-btn' />
          </ModalClose>
          {result ? (
            <ModalTitle>Thank you!</ModalTitle>
          ) : (
            <ModalTitle>
              {t('main:formHeadingBefore')} <span className='accent'>Tinvio!</span> {t('main:formHeadingAfter')}
            </ModalTitle>
          )}
          {result ? (
            <ModalSuccess>
              <Image src='/images/features/modal/dec.svg' alt='decorations' width={110} height={110} />
              <ModalSucceessText>We'll get in touch as soon as possible </ModalSucceessText>
              <ModalButton type='button' className='modal-btn' onClick={closeModal}>
                Close
              </ModalButton>
            </ModalSuccess>
          ) : (
            <ModalForm onSubmit={handleFormSubmit}>
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
                {loading === 'error' && nameError ? <ModalInputError>Invalid Name</ModalInputError> : null}
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
                {loading === 'error' && businessError ? <ModalInputError>Invalid Business Name</ModalInputError> : null}
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
                {loading === 'error' && phoneError ? <ModalInputError>Invalid phone number</ModalInputError> : null}
              </ModlaLabel>
              <ModalButton type='submit' loaded={loading !== 'idle'}>
                {t('main:formButton')}
                <StyledSvg loaded={loading !== 'idle'}>
                  <g>
                    <ellipse ry='23' rx='23' cy='24' cx='24' strokeWidth='2' stroke='transparent' fill='transparent' />
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
                {loading === 'success' ? (
                  <Indicate>
                    <Image src='/images/features/modal/success.svg' alt='success' width={28} height={22} />
                  </Indicate>
                ) : null}
                {loading === 'error' ? (
                  <Indicate>
                    <Image src='/images/features/modal/error.svg' alt='error' width={20} height={20} />
                  </Indicate>
                ) : null}
              </ModalButton>
              <ModalSpam>
                {t('main:formUnderButton')}{' '}
                <Image src='/images/main/formFilling/hands.svg' alt='hands' width={16} height={18} />
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

const ModalButton = styled.button<{ loaded?: boolean }>`
  --btn-width: 48px;

  display: block;
  position: relative;
  margin: 0 auto;
  width: ${({ loaded }) => (loaded ? 'var(--btn-width)' : '180px')};
  height: 48px;
  padding: 14px;
  background-color: #ff474d;
  border-style: none;
  border-radius: ${({ loaded }) => (loaded ? '50%' : '18px')};
  text-align: center;
  font-family: 'Gilroy';
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: ${({ loaded }) => (loaded ? 'transparent' : '#ffffff')};
  cursor: pointer;
  transition: all 0.3s ease;
  animation: ${({ loaded }) => (loaded ? 'btnLoader 2s ease' : 'none')};

  &:hover {
    background-color: var(--text-primary-hover);
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

  @media (min-width: 1920px) {
    --btn-width: 56px;

    width: ${({ loaded }) => (loaded ? 'var(--btn-width)' : '210px')};
    height: 56px;
    font-size: 20px;
    line-height: 25px;
    padding: 16px 0;
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

  @media (min-width: 1920px) {
    --btn-width: 56px;
    left: 50%;
    top: 50%;
  }
`;

const StyledEllipse = styled.ellipse<{ loaded: boolean }>`
  stroke-dasharray: 180;
  stroke-dashoffset: ${({ loaded }) => (loaded ? '0' : '-180')};
  transition: all 0.5s ease 0.3s;

  @media (min-width: 1920px) {
    ry: 49%;
    rx: 49%;
    cy: 50%;
    cx: 50%;
  }
`;

const Indicate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 48px;
  border-radius: 50%;
  line-height: 0;
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

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
  margin: 12px 0 0 0;

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

const ModalSuccess = styled.div`
  display: flex;
  flex-direction: column;
`;

const ModalSucceessText = styled.p`
  font-family: 'Inter';
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #717071;
  text-align: center;
  margin: 12px 0 32px 0;
`;

export default Modal;
