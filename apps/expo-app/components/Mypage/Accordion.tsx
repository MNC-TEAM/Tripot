import { useState } from 'react';
import { LayoutAnimation, Pressable } from 'react-native';
import styled from 'styled-components/native';
import UpSVG from '@/assets/icon/up.svg';
import DownSVG from '@/assets/icon/down.svg';

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    LayoutAnimation.configureNext({
      duration: 300,
      update: {
        duration: 300,
        property: LayoutAnimation.Properties.opacity,
        type: LayoutAnimation.Types.easeInEaseOut,
      },
      delete: {
        duration: 200,
        property: LayoutAnimation.Properties.opacity,
        type: LayoutAnimation.Types.easeInEaseOut,
      },
    });
    setIsOpen(!isOpen);
  };

  return (
    <AccordionStyled>
      <Pressable onPress={toggleAccordion}>
        <Csbox>
          <CSTitle>Q. 제목입니다</CSTitle>
          {isOpen && <UpSVG width={24} />}
          {!isOpen && <DownSVG width={24} />}
        </Csbox>
      </Pressable>
      {isOpen && (
        <DescBox>
          <DescTit>답변:</DescTit>
          <Desc>
            내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
            내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
            내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
            내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
            내용입니다.
          </Desc>
        </DescBox>
      )}
    </AccordionStyled>
  );
};

export default Accordion;

const AccordionStyled = styled.View`
  align-items: center;
  overflow: hidden;
`;

const Csbox = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const CSTitle = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
`;

const DescBox = styled.View`
  margin-top: 24px;
`;

const DescTit = styled.Text`
  font-weight: 600;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
`;

const Desc = styled.Text`
  font-size: 14px;
  margin-top: 5px;
  color: rgba(255, 255, 255, 0.8);
`;
