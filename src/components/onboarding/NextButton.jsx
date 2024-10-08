import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 24.375rem;
  height: 6.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--Color, #FFE54A);
  border: 1px solid var(--Color, #FFE54A);
  z-index: 1000; 
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
