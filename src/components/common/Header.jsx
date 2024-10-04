import styled from 'styled-components';
import headerImage from '../../assets/images/header.png'; 

const HeaderContainer = styled.div`
  width: 24.375rem;
  height: 4.25rem;
  flex-shrink: 0;
  background: #FFF;
  display: flex;
`;

const HeaderImage = styled.img`
  margin-top: 0.69rem;
  margin-left: 1.19rem;
  width: auto;
  height: 2.7rem;  
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
