import styled from 'styled-components';
import PropTypes from 'prop-types'; 

const ButtonContainer = styled.button`
  display: flex;
  width: 12.875rem;
  height: 3.625rem;
  padding: 0.6875rem 2.375rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;
  border-radius: 1.375rem;
  border: 1px solid var(--Color-12, #FFFCE7);
  background: var(--Color-12, #FFFCE7);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.09);
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
  font-style: normal;
  font-weight: 600;
  line-height: 1.875rem; /* 150% */
`;

const ConfirmButton = ({ onClick }) => {
  return (
    <ButtonContainer onClick={onClick}>
      <ButtonText>확인</ButtonText>
    </ButtonContainer>
  );
};

ConfirmButton.propTypes = {
  onClick: PropTypes.func.isRequired, 
};

export default ConfirmButton;
