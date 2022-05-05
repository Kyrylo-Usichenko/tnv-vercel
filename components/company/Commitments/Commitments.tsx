import React, { FC } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import { FeaturesCon } from '@/components/common/Container/Container';

const Commitments: FC = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <FlexConInfo>
        <SquareRight />
        <SquareLeft />
        <DotsRight>
          <Image src='/images/company/Commitments/dotsRight.png' alt='Dots' width={257} height={111} />
        </DotsRight>
        <DotsLeft>
          <Image src='/images/company/Commitments/dotsLeft.png' alt='Dots' width={205} height={161} />
        </DotsLeft>
        <FeaturesCon>
          <Content>
            <Heading>{t('company:сommitmentsTitle')}</Heading>
            <List>
              <Item>
                <Image src='/images/company/Commitments/pen.svg' width={64} height={64} alt='pen' priority={true} />
                <Title>{t('company:сommitmentsHeading1')}</Title>
                <SubTitle>{t('company:сommitmentsText1')}</SubTitle>
              </Item>
              <Item>
                <Image
                  src='/images/company/Commitments/message.svg'
                  width={58}
                  height={48}
                  alt='message'
                  priority={true}
                />
                <Title>{t('company:сommitmentsHeading2')}</Title>
                <SubTitle>{t('company:сommitmentsText2')}</SubTitle>
              </Item>
              <Item>
                <Image
                  src='/images/company/Commitments/rocket.svg'
                  width={64}
                  height={64}
                  alt='rocket'
                  priority={true}
                />
                <Title>{t('company:сommitmentsHeading3')}</Title>
                <SubTitle>{t('company:сommitmentsText3')}</SubTitle>
              </Item>
            </List>
          </Content>
        </FeaturesCon>
      </FlexConInfo>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  z-index: 3;
  margin-bottom: 180px;
  overflow: hidden;
`;

const FlexConInfo = styled.div`
  position: relative;
  border-top-right-radius: 48px;
  border-bottom-right-radius: 48px;
  background-color: var(--bg-black);
  overflow: hidden;
  z-index: 0;
  padding: 48px 0;

  @media (min-width: 1280px) {
    margin-right: 54px;
  }

  @media (min-width: 1920px) {
    margin-right: 234px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 1280px) {
    margin-left: 27px;
    margin-right: -27px;
  }

  @media (min-width: 1920px) {
    margin-left: 117px;
    margin-right: -117px;
  }
`;

const Heading = styled.p`
  font-family: 'Gilroy';
  font-weight: 600;
  font-size: 28px;
  line-height: 34px;
  color: #ffffff;
  margin: 0 0 40px 0;
  text-align: center;
  max-width: 200px;

  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 39px;
    margin: 0 0 32px 0;
    max-width: 350px;
  }

  @media (min-width: 1024px) {
    font-size: 36px;
    line-height: 44px;
    max-width: unset;
  }

  @media (min-width: 1920px) {
    font-size: 44px;
    line-height: 54px;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  z-index: 2;

  @media (min-width: 768px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    align-items: baseline;
  }
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    margin: 0;
  }
`;

const Title = styled.p`
  font-family: 'Gilroy';
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  color: #ffffff;
  text-align: center;
  margin: 24px 0 4px 0;

  @media (min-width: 1024px) {
    font-size: 24px;
    line-height: 29px;
  }

  @media (min-width: 1920px) {
    font-size: 28px;
    line-height: 34px;
  }
`;

const SubTitle = styled.p`
  font-family: 'Inter';
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #d2d2d2;
  text-align: center;
  margin: 0;
  max-width: 150px;

  @media (min-width: 1024px) {
    font-size: 16px;
    line-height: 23px;
  }

  @media (min-width: 1920px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

const SquareRight = styled.div`
  position: absolute;
  width: 582px;
  height: 582px;
  border-radius: 66px;
  transform: rotate(-45deg);
  background-color: #404040;
  z-index: -1;
  display: none;

  @media (min-width: 768px) {
    display: block;
    right: -496px;
    top: -162px;
  }

  @media (min-width: 1024px) {
    right: -540px;
  }

  @media (min-width: 1280px) {
    right: -325px;
  }

  @media (min-width: 1440px) {
    right: -192px;
  }

  @media (min-width: 1920px) {
    right: 110px;
  }
`;

const SquareLeft = styled.div`
  position: absolute;
  left: -119px;
  top: -169px;
  width: 391px;
  height: 391px;
  border-radius: 45px;
  transform: rotate(-45deg);
  background-color: #404040;
  z-index: 0;

  @media (min-width: 768px) {
    left: -91px;
  }
`;

const DotsRight = styled.div`
  position: absolute;
  right: 340px;
  top: 0;
  z-index: 0;
  display: none;

  @media (min-width: 768px) {
    display: block;
    right: -27px;
  }

  @media (min-width: 1280px) {
    right: 126px;
  }

  @media (min-width: 1440px) {
    right: 273px;
  }

  @media (min-width: 1920px) {
    right: 600px;
  }
`;

const DotsLeft = styled.div`
  position: absolute;
  left: -70px;
  bottom: 170px;
  z-index: 0;

  @media (min-width: 768px) {
    bottom: -34px;
    left: 0px;
  }

  @media (min-width: 1920px) {
    bottom: 0px;
  }
`;
export default Commitments;
