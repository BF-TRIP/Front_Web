import styled from 'styled-components';
import headerImage from '../../assets/images/header.png'; 

const HeaderContainer = styled.div`
  width: 100%;
  height: 3.625rem;
  flex-shrink: 0;
  flex-shrink: 0;
  background: #FFE023;
  display: flex;
`;

const HeaderImage = styled.img`
  margin-top: 1.05rem;
  margin-left: 1.19rem;
  width: auto;
  height: 1.5rem;  
`;

const Divider = styled.div`
  width: 100%;
  height: 0.38rem;
  flex-shrink: 0;
  background: #F7F6FB;;
`;

const Header = () => {
  return (
      <>
    <HeaderContainer>
      <HeaderImage src={headerImage} alt="베프트림 헤더" />
    </HeaderContainer>
    <Divider />
    </>

  );
};

export default Header;
