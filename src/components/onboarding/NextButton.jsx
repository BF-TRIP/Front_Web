import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonContainer = styled.div`
  position: fixed;  // absolute 대신 fixed 사용
  bottom: 0;
  left: 0;
  width: 100%;  // 화면 전체 너비를 사용
  max-width: 430px;  // 최대 너비 고정 (아이폰 크기에 맞춰서 설정)
  height: 6.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--Color, #FFE54A);
  border: 1px solid var(--Color, #FFE54A);
  z-index: 1000;
  margin: 0 auto;  // 브라우저에서 가운데 정렬
`;

const Button = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;

  &:focus {
    outline: none;
  }
`;

const ButtonText = styled.span`
  color: var(--Color-11, #4D4D4D);
  text-align: center;
  font-family: Pretendard, sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 150%; /* 1.875rem */
`;

const NextButton = ({ onClick }) => {
  return (
    <ButtonContainer>
      <Button onClick={onClick}>
        <ButtonText>다음</ButtonText>
      </Button>
    </ButtonContainer>
  );
};

NextButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default NextButton;
