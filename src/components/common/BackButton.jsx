import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types'; // PropTypes import 추가
import backIcon from '../../assets/images/back.png';

const ButtonWrapper = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none; 

  &:focus {
    outline: none; /* 포커스 시 outline 제거 */
  }
`;

const BackButton = ({ size }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); 
  };

  return (
    <ButtonWrapper onClick={handleBack}>
      <img src={backIcon} alt="뒤로가기" style={{ width: size, height: size }} />
    </ButtonWrapper>
  );
};

BackButton.propTypes = {
  size: PropTypes.string,
};

BackButton.defaultProps = {
  size: '2.125rem',  
};

export default BackButton;
