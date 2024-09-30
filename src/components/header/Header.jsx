import styled from 'styled-components';
import headerImage from '../../assets/images/header.png'; 

const HeaderImage = styled.img`
  width: 32%;
  height: auto; 
`;

const Header = () => {
  return <HeaderImage src={headerImage} alt="Header" />;
};

export default Header;
