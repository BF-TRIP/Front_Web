import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useState } from 'react';
import seniorIcon from '../../../assets/images/senior.png'; // 고령자 아이콘
import wheelchairIcon from '../../../assets/images/wheelchair.png'; // 지체장애인 아이콘
import blindIcon from '../../../assets/images/blind.png'; // 시각장애인 아이콘
import infantIcon from '../../../assets/images/infant.png'; // 임산부 아이콘

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 3rem;
  margin-left: 0.2rem;
`;

const HandicapButton = styled.button`
  display: flex;
  position: relative;
  width: 10.5rem;
  height: 9.625rem;
  padding: 1rem;
  flex-shrink: 0;
  border-radius: 0.875rem;
  background: ${({ selected }) => (selected ? '#FFE651' : '#FFFCE7')}; // 선택 시 색상 변경
  box-shadow: 0px 4px 12.1px 0px rgba(0, 0, 0, 0.06);
  border: none;
  cursor: pointer;
  outline: none;

  &:focus {
    outline: none;
  }
`;

/* 텍스트를 왼쪽 상단에 위치 */
const HandicapText = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  color: rgba(0, 0, 0, 0.80);
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 1.5rem */
  letter-spacing: -0.011rem;
  text-align: left; /* 줄바꿈 텍스트를 왼쪽 정렬 */
`;

/* 아이콘을 오른쪽 하단에 위치 */
const HandicapIcon = styled.img`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  width: ${({ iconWidth }) => iconWidth};
  height: ${({ iconHeight }) => iconHeight};
  flex-shrink: 0;
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
  color: ${({ selected }) => (selected ? '#4D4D4D' : '#A6A6A6')}; // 선택 시 글씨 색상 변경
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 700;
  line-height: 150%; /* 1.5rem */
  letter-spacing: -0.011rem;

  &:focus {
    outline: none;
  }

  &:active {
    background-color: #ccc; // 클릭 시 색상 피드백
  }
`;

const HandicapSelection = () => {
  const [selectedHandicaps, setSelectedHandicaps] = useState({
    senior: false,
    wheelchair: false,
    blindHandicap: false,
    infantsFamily: false,
    noOption: false, // 해당 사항 없음 상태 추가
  });

  // 버튼 클릭 시 상태 업데이트
  const toggleHandicap = (key) => {
    setSelectedHandicaps((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <ButtonContainer>
      {/* 고령자 버튼 */}
      <HandicapButton selected={selectedHandicaps.senior} onClick={() => toggleHandicap('senior')}>
        <HandicapText>고령자</HandicapText>
        <HandicapIcon src={seniorIcon} alt="고령자 아이콘" iconWidth="2.89831rem" iconHeight="5.875rem" />
      </HandicapButton>

      {/* 지체장애인 버튼 */}
      <HandicapButton selected={selectedHandicaps.wheelchair} onClick={() => toggleHandicap('wheelchair')}>
        <HandicapText>지체장애인</HandicapText>
        <HandicapIcon src={wheelchairIcon} alt="지체장애인 아이콘" iconWidth="4.375rem" iconHeight="5.3125rem" />
      </HandicapButton>

      {/* 시각장애인 버튼 */}
      <HandicapButton selected={selectedHandicaps.blindHandicap} onClick={() => toggleHandicap('blindHandicap')}>
        <HandicapText>시각장애인</HandicapText>
        <HandicapIcon src={blindIcon} alt="시각장애인 아이콘" iconWidth="4.89581rem" iconHeight="5.875rem" />
      </HandicapButton>

      {/* 유아동반자/임산부 버튼 */}
      <HandicapButton selected={selectedHandicaps.infantsFamily} onClick={() => toggleHandicap('infantsFamily')}>
        <HandicapText>유아동반자/<br />임산부</HandicapText> {/* 줄바꿈을 위한 <br /> 추가 */}
        <HandicapIcon src={infantIcon} alt="유아동반자/임산부 아이콘" iconWidth="2.66213rem" iconHeight="5.875rem" />
      </HandicapButton>

      {/* 해당사항 없음 버튼 */}
      <NoOptionButton selected={selectedHandicaps.noOption} onClick={() => toggleHandicap('noOption')}>
        해당사항 없음
      </NoOptionButton>
    </ButtonContainer>
  );
};

HandicapSelection.propTypes = {
  onSelectionChange: PropTypes.func, // 상태 변경 시 호출될 콜백
};

export default HandicapSelection;
