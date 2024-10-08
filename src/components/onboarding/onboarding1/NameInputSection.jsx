import styled from 'styled-components';
import PropTypes from 'prop-types';
import number1Icon from '../../../assets/images/number1.png';

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
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

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
`;

const InputField = styled.input`
  width: 16.375rem;
  height: 3.375rem;
  border-radius: 0.625rem;
  border: 1px solid #ffe54a;
  background: #fffce7;
  box-shadow: 0px 4px 12.1px 0px rgba(0, 0, 0, 0.06);
  padding-left: 1rem;
  color: #333;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  outline: none;
`;

const CharacterCount = styled.div`
  color: #000;
  font-family: Pretendard, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  margin-left: 0.8rem;
`;

const NameInputSection = ({ value, onChange }) => {
  return (
    <SectionContainer>
      <Icon src={number1Icon} alt="1번 아이콘" />
      <Title>이름을 입력해주세요!</Title>
      <InputContainer>
        <InputField
          type="text"
          value={value}
          onChange={onChange}
          maxLength={8} // 최대 9글자
          placeholder="이름을 입력하세요"
        />
        <CharacterCount>{`${value.length}/9`}</CharacterCount>
      </InputContainer>
    </SectionContainer>
  );
};

NameInputSection.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default NameInputSection;
