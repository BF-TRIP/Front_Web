import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useState } from 'react';
import seniorIcon from '../../../assets/images/senior.png'; 
import wheelchairIcon from '../../../assets/images/wheelchair.png'; 
import blindIcon from '../../../assets/images/blind.png'; 
import infantIcon from '../../../assets/images/infant.png';

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 3rem;
  margin-left: 0.3rem;
`;

const HandicapButton = styled.button`
  display: flex;
  position: relative;
  width: 10.5rem;
  height: 9.625rem;
  padding: 1rem;
  flex-shrink: 0;
  border-radius: 0.875rem;
  background: ${({ selected }) => (selected ? '#FFE651' : '#FFFCE7')}; 
  box-shadow: 0px 4px 12.1px 0px rgba(0, 0, 0, 0.06);
  border: none;
  cursor: pointer;
  outline: none;

  &:focus {
    outline: none;
  }
`;

const HandicapIcon = styled.img`
  position: absolute;
  bottom: 0.4rem;
  right: 1rem;
  width: ${({ iconWidth }) => iconWidth};
  height: ${({ iconHeight }) => iconHeight};
  flex-shrink: 0;
`;

const HandicapText = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  color: rgba(0, 0, 0, 0.80);
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  text-align: left;
`;

const NoOptionButton = styled.button`
  display: flex;
  width: 22rem;
  height: 4.125rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.875rem;
  background: ${({ selected }) => (selected ? '#D3D3D3' : '#E6E6E6')}; // 선택 시 색상 변경
  box-shadow: 0px 4px 12.1px 0px rgba(0, 0, 0, 0.06);
  border: none;
  cursor: pointer;
  outline: none;
  color: ${({ selected }) => (selected ? '#4D4D4D' : '#A6A6A6')};
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 700;
  line-height: 150%; /* 1.5rem */
  letter-spacing: -0.011rem;
  margin-top: 1.06rem;
  margin-left: 0.3rem;

  &:focus {
    outline: none;
  }

  &:active {
    background-color: #ccc; // 클릭 시 색상 피드백
  }
`;

const HandicapSelection = ({ onSelectionChange, selectedHandicaps }) => {

  const [selections, setSelections] = useState(selectedHandicaps);

  const toggleHandicap = (key) => {
    const updatedSelections = {
      ...selections,
      [key]: !selections[key],
    };
    setSelections(updatedSelections);
    onSelectionChange(updatedSelections);
  };

  return (
    <>
      <ButtonContainer>
        {/* 고령자 버튼 */}
        <HandicapButton
          selected={selections.senior}
          onClick={() => toggleHandicap('senior')}
        >
          <HandicapIcon src={seniorIcon} alt="고령자 아이콘" iconWidth="2.89831rem" iconHeight="5.875rem" />
          <HandicapText>고령자</HandicapText>
        </HandicapButton>

        {/* 지체장애인 버튼 */}
        <HandicapButton
          selected={selections.wheelchair}
          onClick={() => toggleHandicap('wheelchair')}
        >
          <HandicapIcon src={wheelchairIcon} alt="지체장애인 아이콘" iconWidth="4.375rem" iconHeight="5.3125rem" />
          <HandicapText>지체장애인</HandicapText>
        </HandicapButton>

        {/* 시각장애인 버튼 */}
        <HandicapButton
          selected={selections.blindHandicap}
          onClick={() => toggleHandicap('blindHandicap')}
        >
          <HandicapIcon src={blindIcon} alt="시각장애인 아이콘" iconWidth="4.89581rem" iconHeight="5.875rem" />
          <HandicapText>시각장애인</HandicapText>
        </HandicapButton>

        {/* 유아동반자/임산부 버튼 */}
        <HandicapButton
          selected={selections.infantsFamily}
          onClick={() => toggleHandicap('infantsFamily')}
        >
          <HandicapIcon src={infantIcon} alt="유아동반자/임산부 아이콘" iconWidth="2.66213rem" iconHeight="5.875rem" />
          <HandicapText>유아동반자/임산부</HandicapText>
        </HandicapButton>
      </ButtonContainer>

      {/* 해당사항 없음 버튼 */}
      <NoOptionButton
        selected={selections.noOption}
        onClick={() => toggleHandicap('noOption')}
      >
        해당사항 없음
      </NoOptionButton>
    </>
  );
};

HandicapSelection.propTypes = {
  onSelectionChange: PropTypes.func.isRequired, // 상태 변경 시 호출될 콜백
  selectedHandicaps: PropTypes.object.isRequired, // 선택된 상태를 넘겨받음
};

export default HandicapSelection;
