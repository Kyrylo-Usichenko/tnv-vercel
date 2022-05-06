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
  panelWidth: {
    '1920w': string;
    '1280w': string;
    '1024w': string;
  };
  textPanelWidth: {
    '1920w': string;
    '1280w': string;
    '1024w': string;
  };
}

const SlideLeft: FC<ISlide> = ({ sliderText, logo, name, text, width, height, panelWidth, textPanelWidth }) => {
  return (
    <Wrapper>
      <SliderTextWrap width={panelWidth}>
        <SliderText width={textPanelWidth}>
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
  margin-right: 16px;
  order: 2;

  @media (min-width: 1024px) {
    margin: 32px 18px 125px 32px;
  }

  @media (min-width: 1280px) {
    margin: 32px 18px 141px 32px;
  }
`;

const SliderTextWrap = styled.div<{
  width: {
    '1920w': string;
    '1280w': string;
    '1024w': string;
  };
}>`
  background-color: #f1f1f1;
  margin: 0 0 24px 0;
  padding: 20px 16px 20px 24px;
  border-radius: 0 16px 16px 0;
  width: 100%;

  @media (min-width: 768px) {
    padding: 24px 24px 24px 32px;
    margin: 0 0 24px 0;
  }

  @media (min-width: 1024px) {
    width: ${({ width }) => width['1024w']};
    border-radius: 16px;
    padding: 24px;
  }

  @media (min-width: 1280px) {
    width: ${({ width }) => width['1280w']};
  }

  @media (min-width: 1920px) {
    width: ${({ width }) => width['1920w']};
  }
`;

const SliderText = styled.p<{
  width: {
    '1920w': string;
    '1280w': string;
    '1024w': string;
  };
}>`
  font-family: 'Inter';
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  color: #212121;
  margin: 0;
  position: relative;

  @media (min-width: 1024px) {
    width: ${({ width }) => width['1024w']};
    font-size: 18px;
    line-height: 24px;
  }

  @media (min-width: 1280px) {
    width: ${({ width }) => width['1280w']};
  }

  @media (min-width: 1920px) {
    width: ${({ width }) => width['1920w']};
  }
`;

const QuotesImg1 = styled.span`
  display: none;
  position: absolute;
  right: -5px;
  bottom: 0;
  height: 24px;
  width: 24px;

  @media (min-width: 1024px) {
    display: block;
  }
`;

const QuotesImg2 = styled.span`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 24px;
  width: 24px;
  display: block;
  right: 0;
  bottom: 20px;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const SliderBottom = styled.div`
  padding-left: 24px;
  position: relative;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const Name = styled.p`
  margin: 0;
  font-family: 'Gilroy';
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  margin: 0 0 4px 0;
  color: #212121;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 22px;
  }
`;

const Text = styled.p`
  font-family: 'Inter';
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  text-transform: uppercase;
  color: #5c5c5c;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 12px;
    line-height: 15px;
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
