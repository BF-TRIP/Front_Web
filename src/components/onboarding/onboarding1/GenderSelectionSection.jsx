import styled from 'styled-components';
import PropTypes from 'prop-types';
import number2Icon from '../../../assets/images/number2.png';

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  margin-top: 1rem;
`;

const Icon = styled.img`
  width: 3rem;
  height: 3rem;
  margin-bottom: 0.5rem;
  margin-left: -0.6rem;
`;

const Title = styled.h1`
  color: #333;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  margin-bottom: 0.5rem;
`;

const GenderContainer = styled.div`
  display: flex;
  gap: 0.88rem; /* 버튼 간격 */
  margin-top: 0.5rem;
`;

const GenderButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 9.75rem;
  height: 3.375rem;
  padding: 0.875rem 3.4375rem;
  border-radius: 0.625rem;
  border: ${({ selected }) => (selected ? '1px solid #FFE54A' : '1px solid transparent')}; 
  background: ${({ selected }) => (selected ? '#FFFCE7' : '#F1F1F1')};
  box-shadow: 0px 4px 12.1px 0px rgba(0, 0, 0, 0.06);
  font-size: 1rem;
  font-family: Inter, sans-serif;
  cursor: pointer;
  outline: none;

  &:focus {
    outline: none;
    border: ${({ selected }) => (selected ? '1px solid #FFE54A' : '1px solid #F1F1F1')}; /* 포커스 상태에서도 원하는 border 유지 */
  }

  &:hover {
    outline: none;
    border: ${({ selected }) => (selected ? '1px solid #FFE54A' : '1px solid #F1F1F1')}; /* hover 시에도 동일한 border */
  }

  color: #ABABAB;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;


const GenderSelectionSection = ({ selectedGender, onGenderSelect }) => {
  return (
    <SectionContainer>
      <Icon src={number2Icon} alt="2번 아이콘" />
      <Title>성별을 알려주세요!</Title>
      <GenderContainer>
        <GenderButton 
          selected={selectedGender === '남자'} 
          onClick={() => onGenderSelect('남자')}
        >
          남자
        </GenderButton>
        <GenderButton 
          selected={selectedGender === '여자'} 
          onClick={() => onGenderSelect('여자')}
        >
          여자
        </GenderButton>
      </GenderContainer>
    </SectionContainer>
  );
};

GenderSelectionSection.propTypes = {
  selectedGender: PropTypes.string.isRequired,
  onGenderSelect: PropTypes.func.isRequired,
};

export default GenderSelectionSection;
