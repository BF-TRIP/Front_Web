import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useState } from 'react';
import forestIcon from '../../../assets/images/forest.svg';
import beachIcon from '../../../assets/images/beach.svg'; 
import heritageIcon from '../../../assets/images/heritage.png';
import outdoorIcon from '../../../assets/images/outdoor.png'; 

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 2rem;
  margin-left: 0.2rem;
`;

const StyleButton = styled.button`
  display: flex;
  position: relative;
  width: 10.5rem;
  height: 12.5rem;
  padding: 1rem;
  flex-shrink: 0;
  border-radius: 1rem;
  background: ${({ selected }) => (selected ? '#FFE651' : '#FFFCE7')}; 
  box-shadow: 0px 4px 12.1px 0px rgba(0, 0, 0, 0.06);
  border: none;
  cursor: pointer;
  outline: none;

  &:focus {
    outline: none;
  }
`;

const StyleText = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  color: rgba(0, 0, 0, 0.80);
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 1.5rem */
  text-align: left;
`;

const Subtitle = styled.div`
  position: absolute;
  top: 2.7rem; 
  left: 1rem;
  color: #1E1E1E;
  font-family: Pretendard;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 500;
  line-height: 0.9rem; 
  letter-spacing: -0.01875rem;
  text-align: left;
  white-space: pre-wrap;
`;

const StyleIcon = styled.img`
  position: absolute;
  bottom: ${({ iconBottom }) => iconBottom}; 
  right: ${({ iconRight }) => iconRight}; 
  width: ${({ iconWidth }) => iconWidth};
  height: ${({ iconHeight }) => iconHeight};
  flex-shrink: 0;
`;

const StyleSelection = ({ onSelectionChange }) => {
  const [selectedStyles, setSelectedStyles] = useState([]); 

  // 버튼 클릭 시 상태 업데이트
  const toggleStyle = (styleKey) => {
    setSelectedStyles((prevState) => {
      const isSelected = prevState.includes(styleKey);

      if (isSelected) {
        // 이미 선택된 경우 배열에서 제거
        const updatedStyles = prevState.filter((style) => style !== styleKey);
        onSelectionChange(updatedStyles); // 상태 변경 콜백 호출
        return updatedStyles;
      } else {
        // 선택되지 않은 경우 배열에 추가
        const updatedStyles = [...prevState, styleKey];
        onSelectionChange(updatedStyles); // 상태 변경 콜백 호출
        return updatedStyles;
      }
    });
  };

  return (
    <ButtonContainer>
      {/* 숲 속 휴양 및 치유 버튼 */}
      <StyleButton selected={selectedStyles.includes('forest')} onClick={() => toggleStyle('forest')}>
        <StyleText>숲 속 휴양 및 치유</StyleText>
        <Subtitle>울창한, 자연, 치유, 웰빙,<br />숲속, 산림욕장, 휴양림</Subtitle>
        <StyleIcon 
          src={forestIcon} 
          alt="숲 속 휴양 아이콘" 
          iconWidth="6.6875rem" 
          iconHeight="6.6875rem" 
          iconBottom="-0.4rem"
          iconRight="-0.4rem"
        />
      </StyleButton>

      {/* 해양 및 수변활동 버튼 */}
      <StyleButton selected={selectedStyles.includes('ocean')} onClick={() => toggleStyle('ocean')}>
        <StyleText>해양 및 수변활동</StyleText>
        <Subtitle>해수욕장, 바닷가, 물놀이<br />댐, 호수</Subtitle>
        <StyleIcon 
          src={beachIcon} 
          alt="해양 및 수변활동 아이콘" 
          iconWidth="6.75rem" 
          iconHeight="6.75rem" 
          iconBottom="-0.6rem"
          iconRight="-0.4rem"
        />
      </StyleButton>

      {/* 역사와 문화유산 버튼 */}
      <StyleButton selected={selectedStyles.includes('culture')} onClick={() => toggleStyle('culture')}>
        <StyleText>역사와 문화유산</StyleText>
        <Subtitle>박물관, 미술관, 유적, 기념관,<br />역사, 문화, 사찰, 조계종, 국립</Subtitle>
        <StyleIcon 
          src={heritageIcon} 
          alt="역사와 문화유산 아이콘" 
          iconWidth="6rem" 
          iconHeight="6.59181rem" 
          iconBottom="0rem" 
          iconRight="-0.1rem"
        />
      </StyleButton>

      {/* 함께하는 야외활동 버튼 */}
      <StyleButton selected={selectedStyles.includes('outside')} onClick={() => toggleStyle('outside')}>
        <StyleText>함께하는 야외활동</StyleText>
        <Subtitle>가족, 어린이, 동반, 공원, 레저,<br /><span style={{ color: '#B3B3B3' }}>(워터/테마)</span>파크</Subtitle>
        <StyleIcon 
          src={outdoorIcon} 
          alt="함께하는 야외활동 아이콘" 
          iconWidth="6.375rem" 
          iconHeight="5.75rem" 
          iconBottom="0rem" 
          iconRight="0rem"
        />
      </StyleButton>
    </ButtonContainer>
  );
};

StyleSelection.propTypes = {
  onSelectionChange: PropTypes.func.isRequired, 
};

export default StyleSelection;
