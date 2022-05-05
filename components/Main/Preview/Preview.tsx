import React, { FC, RefObject, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'next-i18next';

import RedButton from '@/components/common/Buttons/Button';

import useIntersectionObserver from '@/hooks/useIntersectionObserver';

type PreviewProps = {
  scrollDown: () => void;
  locale: string;
};

const Preview: FC<PreviewProps> = ({ scrollDown, locale }) => {
  const { t } = useTranslation();

  const heading = useRef() as RefObject<HTMLHeadingElement>;
  const entry = useIntersectionObserver(heading, {});

  const pic1 = useRef() as RefObject<HTMLImageElement>;

  useEffect(() => {
    const isVisible = !!entry?.isIntersecting;

    const dec1 = pic1?.current;

    const scrollHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight,
    );

    const updateScale = () => {
      const scrolled = (window.scrollY / (scrollHeight - window.innerHeight)) * 20;
      const scale = 1 + scrolled;
      const opacity = 1 - scrolled;

      dec1!.style.transform = `scale(${scale})`;

      dec1!.style.opacity = `${opacity}`;
    };

    const onScroll = () => {
      window.requestAnimationFrame(updateScale);
    };

    if (isVisible) {
      window.addEventListener('scroll', onScroll);
    } else {
      window.removeEventListener('scroll', onScroll);
    }

    return () => window.removeEventListener('scroll', onScroll);
  }, [entry]);

  return (
    <PreviewInfo>
      <PreviewTitle locale={locale} ref={heading}>
        <PreviewTitleDec ref={pic1} src='/images/main/preview/decorations.svg' alt='Stars' />
        {t('main:previewTitle1')} <span className='accent'> {t('main:previewTitle2')}</span> {t('main:previewTitle3')}
      </PreviewTitle>
      <PreviewText>{t('main:previewText')}</PreviewText>
      <PreviewAction>
        <RedButton type='button' onClick={scrollDown}>
          {t('main:previewButton')}
        </RedButton>
        <PreviewFootnote>
          {t('main:previewButtonText')}
          <PreviewSmile />
        </PreviewFootnote>
      </PreviewAction>
    </PreviewInfo>
  );
};

const PreviewInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 140px 0 0;
  @media (min-width: 768px) {
    padding: 126px 0 0;
    margin-left: 0;
  }
  @media (min-width: 1024px) {
    padding: 257px 0 0;
    align-items: flex-start;
  }
  @media (min-width: 1280px) {
    padding: 252px 0 0;
  }
  @media (min-width: 1440px) {
    padding: 252px 0 0;
  }
  @media (min-width: 1920px) {
    padding: 260px 0 0;
  }
`;

const PreviewTitle = styled.h2<{ locale: string }>`
  font-family: 'Gilroy';
  font-weight: 600;
  position: relative;
  font-size: 32px;
  line-height: 39px;
  margin: 0 0 16px 0;
  max-width: 333px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 39px;
    margin: 0 0 16px 0;
    max-width: 333px;
    max-width: ${({ locale }) => (locale === 'id' ? '333px' : locale === 'vn' ? '375px' : '333px')};
  }
  @media (min-width: 1024px) {
    text-align: left;
  }
  @media (min-width: 1280px) {
    font-size: 44px;
    line-height: 54px;
    margin: 0 0 11px 0;
    max-width: 427px;
    max-width: ${({ locale }) => (locale === 'id' ? '455px' : locale === 'vn' ? '427px' : '427px')};
  }
  @media (min-width: 1440px) {
    font-size: 44px;
    line-height: 54px;
    margin: 0 0 11px 0;
    max-width: ${({ locale }) => (locale === 'id' ? '455px' : locale === 'vn' ? '427px' : '427px')};
  }
  @media (min-width: 1920px) {
    max-width: 478px;
    margin: 0 0 16px 0;
    font-weight: 600;
    font-size: 48px;
    line-height: 59px;
    max-width: ${({ locale }) => (locale === 'id' ? '495px' : locale === 'vn' ? '478px' : '478px')};
  }
`;

const PreviewTitleDec = styled.img`
  position: absolute;
  z-index: 1;
  transform: rotate(27deg);
  height: 80px;
  width: 75px;
  left: -20px;
  top: -45px;

  @media (min-width: 768px) {
    left: -32px;
    top: -44px;
  }
  @media (min-width: 1024px) {
    left: -38px;
    top: -38px;
  }
  @media (min-width: 1280px) {
    left: -42px;
    top: -27px;
    transform: rotate(0deg);
  }
  @media (min-width: 1920px) {
    left: -42px;
    top: -44px;
    width: 87px;
    height: 80px;
  }
`;

const PreviewText = styled.p`
  font-family: 'Inter';
  font-weight: 400;
  color: var(--text-second);
  margin: 0 0 32px 0;
  text-align: center;
  font-size: 14px;
  line-height: 22px;
  max-width: 333px;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    max-width: 477px;
  }
  @media (min-width: 1024px) {
    font-size: 16px;
    line-height: 24px;
    max-width: 334px;
    text-align: left;
  }
  @media (min-width: 1280px) {
    font-size: 18px;
    line-height: 24px;
    max-width: 369px;
  }
  @media (min-width: 1920px) {
    font-size: 20px;
    line-height: 26px;
    max-width: 415px;
  }
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
  font-size: 16px;
  line-height: 19px;
  color: var(--text-second);
  font-size: 14px;
  line-height: 17px;
  @media (min-width: 1440px) {
    font-size: 16px;
    line-height: 19px;
  }
`;

const PreviewSmile = styled.div`
  margin-left: 8px;
  background: url('/images/main/preview/smile.svg') no-repeat;
  width: 16px;
  height: 16px;
`;

export default Preview;
