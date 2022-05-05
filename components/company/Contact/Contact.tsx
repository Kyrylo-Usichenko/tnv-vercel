import React, { FC, RefObject } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import { FeaturesCon } from '@/components/common/Container/Container';
import LightLink from '@/components/common/Links/LightLink';
import TransparentLink from '@/components/common/Links/TransparentLink';

type ContactProps = {
  contactSectionRef: RefObject<HTMLDivElement>;
};

const Contact: FC<ContactProps> = ({ contactSectionRef }) => {
  const { t } = useTranslation();

  return (
    <Wrapper className='contact' ref={contactSectionRef}>
      <FeaturesCon>
        <SquareRight />
        <SquareLeft />
        <DotsLeft>
          <Image src='/images/company/Contact/dotsLeft.png' alt='Dots' width={338} height={256} />
        </DotsLeft>
        <Title>{t('company:contactTitle')}</Title>
        <Inner>
          <Block>
            <LeftSquareLeft />
            <LeftSquareBottom />
            <LeftDots>
              <Image src='/images/company/Contact/leftDots.png' alt='Dots' width={218} height={101} />
            </LeftDots>
            <Heading>{t('company:contactHeading1')}</Heading>
            <Content>{t('company:contactText1')}</Content>
            <TransparentLink
              href='http://dashboard.tinvio.com'
              target='_blank'
              rel='noreferrer noopener'
              width={210}
              fSize={18}
              lHeight={22}
            >
              {t('company:contactButton1')}
            </TransparentLink>
          </Block>
          <DarkBlock>
            <MiddleSquareLeft />
            <MiddleSquareBottom />
            <MiddleDots>
              <Image src='/images/company/Contact/midDots.png' alt='Dots' width={158} height={149} />
            </MiddleDots>
            <LightHeading>{t('company:contactHeading2')}</LightHeading>
            <LightContent>{t('company:contactText2')}</LightContent>
            <LightLink
              width={210}
              fSize={18}
              lHeight={22}
              href='mailto:partners@tinvio.com'
              target='_blank'
              rel='noreferrer noopener'
            >
              {t('company:contactButton2')}
            </LightLink>
          </DarkBlock>
          <Block>
            <RightSquareLeft />
            <RightSquareBottom />
            <RightDots>
              <Image src='/images/company/Contact/rightDots.png' alt='Dots' width={124} height={101} />
            </RightDots>
            <Heading>{t('company:contactHeading3')}</Heading>
            <Content>{t('company:contactText3')}</Content>
            <TransparentLink
              href='mailto:press@tinvio.com'
              target='_blank'
              rel='noreferrer noopener'
              width={210}
              fSize={18}
              lHeight={22}
            >
              {t('company:contactButton3')}
            </TransparentLink>
          </Block>
        </Inner>
      </FeaturesCon>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  z-index: -1;
  margin-bottom: 80px;

  & > div {
    @media (max-width: 1023px) {
      max-width: 100%;
      width: 100%;
    }
  }
`;

const Title = styled.p`
  font-family: 'Gilroy';
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  color: #212121;
  text-align: center;
  margin: 0 0 40px 0;

  @media (min-width: 768px) {
    font-size: 36px;
    line-height: 44px;
  }

  @media (min-width: 1024px) {
    margin: 0 0 48px 0;
  }

  @media (min-width: 1920px) {
    font-size: 48px;
    line-height: 59px;
  }
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 24px;
  }
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 32px;
  background-color: #f7f7f7;
  position: relative;
  z-index: 0;
  overflow: hidden;
  padding: 48px 0;

  @media (min-width: 1024px) {
    padding: 80px 0;
    flex: 1;
  }
`;

const DarkBlock = styled(Block)`
  background-color: #363636;
`;

const Heading = styled.p`
  font-family: 'Gilroy';
  font-weight: 600;
  font-size: 28px;
  line-height: 34px;
  text-align: center;
  color: #212121;
  max-width: 270px;
  margin: 0 0 16px 0;

  @media (min-width: 768px) {
    max-width: 100%;
  }

  @media (min-width: 1024px) {
    max-width: 200px;
  }

  @media (min-width: 1920px) {
    font-size: 32px;
    line-height: 39px;
  }
`;

const LightHeading = styled(Heading)`
  color: #ffffff;
`;

const Content = styled.p`
  max-width: 326px;
  font-family: 'Inter';
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #5c5c5c;
  text-align: center;
  max-width: 247px;
  margin: 0 0 32px 0;

  @media (min-width: 768px) {
    max-width: 100%;
  }

  @media (min-width: 1024px) {
    max-width: 230px;
  }

  @media (min-width: 1280px) {
    font-size: 16px;
    line-height: 23px;
    max-width: 260px;
  }

  @media (min-width: 1920px) {
    font-size: 18px;
    line-height: 24px;
    max-width: 285px;
  }
`;

const LightContent = styled(Content)`
  color: #ffffff;
`;

const SquareRight = styled.div`
  position: absolute;
  right: -187px;
  top: -92px;
  width: 646.76px;
  height: 646.76px;
  background: radial-gradient(95.51% 95.51% at 50% 50%, #dadada 0%, #fafafa 100%);
  opacity: 0.15;
  border-radius: 60.2025px;
  transform: rotate(-45deg);
  z-index: -2;
  @media (min-width: 375px) {
    right: 94%;
    top: -200px;
  }
  @media (min-width: 768px) {
    top: -133px;
  }
  @media (min-width: 1024px) {
    top: -115px;
    right: 83%;
  }
  @media (min-width: 1280px) {
    top: -100px;
    right: -36%;
  }
  @media (min-width: 1440px) {
    top: -100px;
    right: -27%;
  }
  @media (min-width: 1920px) {
    top: -115px;
    right: -20%;
  }
`;

const SquareLeft = styled.div`
  position: absolute;
  left: -265px;
  top: 15px;
  width: 377.64px;
  height: 377.64px;
  background: radial-gradient(95.51% 95.51% at 50% 50%, #dadada 0%, #fafafa 100%);
  opacity: 0.15;
  border-radius: 35.1517px;
  transform: rotate(-45deg);
  z-index: -1;
  @media (min-width: 375px) {
    top: -67px;
  }
`;

const DotsLeft = styled.div`
  position: absolute;
  left: -178px;
  bottom: -143px;
  z-index: -1;

  @media (min-width: 375px) {
    bottom: -169px;
  }

  @media (min-width: 768px) {
    bottom: -169px;
    left: -155px;
  }

  @media (min-width: 1024px) {
    bottom: -169px;
    left: -28px;
  }

  @media (min-width: 1440px) {
    bottom: -169px;
    left: -88px;
  }

  @media (min-width: 1920px) {
    bottom: -169px;
    left: -10%;
  }
`;

const LeftSquareLeft = styled.div`
  position: absolute;
  left: -178px;
  top: -62px;
  width: 310px;
  height: 310px;
  background-color: #f1f1f1;
  border-radius: 32px;
  transform: rotate(-45deg);
  z-index: -1;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

const LeftSquareBottom = styled.div`
  position: absolute;
  right: -131px;
  bottom: 20px;
  background-color: #f1f1f1;
  z-index: -1;
  width: 271px;
  height: 271px;
  border-radius: 28px;
  transform: rotate(-45deg);
  display: none;

  @media (min-width: 768px) {
    display: block;
    right: -95px;
    bottom: -84px;
  }

  @media (min-width: 1024px) {
    bottom: -129px;
    width: 211px;
    height: 211px;
  }

  @media (min-width: 1440px) {
    bottom: -165px;
    right: 44px;
  }

  @media (min-width: 1920px) {
    bottom: -149px;
    right: 74px;
  }
`;

const LeftDots = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: -1;

  @media (min-width: 375px) {
    left: -166px;
  }

  @media (min-width: 768px) {
    left: 31px;
  }
`;

const MiddleSquareLeft = styled.div`
  position: absolute;
  left: -244px;
  top: -40px;
  width: 250px;
  height: 250px;
  border-radius: 32px;
  transform: rotate(-45deg);
  background-color: #404040;
  z-index: -1;

  @media (min-width: 768px) {
    left: -113px;
    top: -66px;
    width: 313px;
    height: 313px;
  }

  @media (min-width: 1024px) {
    width: 250px;
    height: 250px;
  }
`;

const MiddleSquareBottom = styled.div`
  position: absolute;
  right: -148px;
  bottom: -153px;
  width: 278px;
  height: 278px;
  border-radius: 32px;
  transform: rotate(-45deg);
  background-color: #404040;
  z-index: -1;

  @media (min-width: 768px) {
    right: -11px;
    bottom: -258px;
    width: 325px;
    height: 325px;
  }

  @media (min-width: 1024px) {
    right: -189px;
    bottom: -133px;
    width: 278px;
    height: 278px;
  }

  @media (min-width: 1440px) {
    right: -122px;
  }
`;

const MiddleDots = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
  z-index: -1;
  display: none;

  @media (min-width: 768px) {
    display: block;
    right: 5px;
    top: -54px;
  }

  @media (min-width: 1024px) {
    right: -127px;
    top: 0px;
  }

  @media (min-width: 1440px) {
    right: -33px;
    top: 0px;
  }
`;

const RightSquareLeft = styled.div`
  position: absolute;
  left: -178px;
  bottom: -80px;
  width: 239px;
  height: 239px;
  border-radius: 32px;
  transform: rotate(-45deg);
  background-color: #f1f1f1;
  z-index: -1;

  @media (min-width: 768px) {
    left: 48px;
    bottom: -116px;
  }

  @media (min-width: 1024px) {
    left: -138px;
  }
`;

const RightSquareBottom = styled.div`
  position: absolute;
  right: -223px;
  top: -91px;
  width: 310px;
  height: 310px;
  border-radius: 32px;
  transform: rotate(-45deg);
  background-color: #f1f1f1;
  z-index: -1;

  @media (min-width: 768px) {
    right: -9px;
  }

  @media (min-width: 1024px) {
    right: -287px;
  }

  @media (min-width: 1280px) {
    right: -245px;
  }

  @media (min-width: 1440px) {
    right: -219px;
  }

  @media (min-width: 1920px) {
    right: -160px;
  }
`;

const RightDots = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: -1;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

export default Contact;
