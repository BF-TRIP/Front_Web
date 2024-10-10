import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import BackIcon from '../../../assets/images/back.svg'; 

const HeaderContainer = styled.div`
  width: 100%;
  height: 3.5rem;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  border-bottom: 1px solid #E0E0E0;
  background-color: #fff;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:focus {
    outline: none;
  }

  color: #000;
  font-size: 1.02481rem;
  font-weight: 500;
`;

const BackIconImage = styled.img`
  width: 0.6rem;  
  height: auto;
  margin-right: 0.7rem;
`;

const Header = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <HeaderContainer>
      <BackButton onClick={goBack}>
        <BackIconImage src={BackIcon} alt="뒤로가기" /> 
        뒤로가기
      </BackButton>
    </HeaderContainer>
  );
};

export default Header;
