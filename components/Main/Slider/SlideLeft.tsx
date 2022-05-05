import React, { FC } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

interface ISlide {
  sliderText: string;
  logo: string;
  name: string;
  text: string;
  width: string;
  height: string;
}

const SlideLeft: FC<ISlide> = ({ sliderText, logo, name, text, width, height }) => {
  return (
    <Wrapper>
      <SliderTextWrap>
        <SliderText>
          {sliderText}
          <QuotesImg1>
            <Image src='/images/main/whyChoose/quotes.svg' alt='quotes' width={24} height={24} />
          </QuotesImg1>
        </SliderText>
      </SliderTextWrap>
      <SliderBottom>
        <Content>
          <ContentLeft>
            <Image src={logo} width={width} height={height} alt='logo' />
            <ContentText>
              <Name>{name}</Name>
              <Text>{text}</Text>
            </ContentText>
          </ContentLeft>
        </Content>
        <QuotesImg2>
          <Image src='/images/main/whyChoose/quotes.svg' alt='quotes' width={24} height={24} />
        </QuotesImg2>
      </SliderBottom>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  padding-bottom: 75px;

  @media (max-width: 950px) {
    order: 2;
  }

  @media (max-width: 768px) {
    padding-bottom: 0px;
  }
`;

const SliderTextWrap = styled.div`
  background-color: #f1f1f1;
  margin: 0 0 20px 0;
  padding: 24px;
  border-radius: 16px;
  width: 933px;

  @media (max-width: 1440px) {
    width: 823px;
  }

  @media (max-width: 1280px) {
    width: 724px;
  }

  @media (max-width: 950px) {
    width: 98%;
    border-radius: 0 16px 16px 0;
    padding: 24px 24px 24px 32px;
  }

  @media (max-width: 768px) {
    width: 96%;
  }

  @media (max-width: 425px) {
    padding: 24px;
  }
`;

const SliderText = styled.p`
  font-family: 'Inter';
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  color: #212121;
  max-width: 725px;
  margin: 0;
  position: relative;

  @media (max-width: 1440px) {
    font-size: 18px;
    line-height: 24px;
    max-width: 655px;
  }

  @media (max-width: 1280px) {
    max-width: 487px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 23px;
  }

  @media (max-width: 425px) {
    margin: 0 0 16px 0;
  }
`;

const QuotesImg1 = styled.span`
  display: inline-block;
  position: absolute;
  right: 0;
  bottom: 0;
  height: 24px;
  width: 24px;

  @media (max-width: 1024px) {
    right: -5px;
  }

  @media (max-width: 950px) {
    display: none;
  }
`;

const QuotesImg2 = styled.span`
  display: inline-block;
  position: absolute;
  right: 0;
  bottom: 0;
  height: 24px;
  width: 24px;
  display: none;

  @media (max-width: 950px) {
    display: block;
    right: 25px;
    bottom: 20px;
  }
`;

const SliderBottom = styled.div`
  padding-left: 24px;
  position: relative;

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 950px) {
    padding-left: 32px;
  }

  @media (max-width: 425px) {
    padding-top: 20px;
    padding-left: 24px;
  }
`;

const Name = styled.p`
  padding: 0 0 4px 0;
  margin: 0;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #212121;

  @media (max-width: 425px) {
    font-size: 16px;
    line-height: 20px;
  }
`;

const Text = styled.p`
  padding: 0;
  margin: 0;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: #5c5c5c;

  @media (max-width: 425px) {
    font-size: 10px;
    line-height: 12px;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ContentLeft = styled.div`
  display: flex;
  align-items: center;

  & img {
    max-height: 100%;
  }
`;

const ContentText = styled.div`
  margin-left: 16px;
`;

export default SlideLeft;
