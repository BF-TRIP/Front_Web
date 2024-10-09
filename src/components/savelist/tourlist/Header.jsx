import styled from 'styled-components';
import PropTypes from 'prop-types';  

const HeaderContainer = styled.div`
  padding: 1rem;
`;

const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: 700;
  color: #000;
  margin: 0;
`;

const Description = styled.p`
  margin-top: 0.5rem;
  color: var(--Color-2, #676767);
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 1.40625rem */
  letter-spacing: -0.0175rem;
`;

const Header = ({ title, description }) => (
  <HeaderContainer>
    <Title>{title}</Title>
    <Description>{description}</Description>
  </HeaderContainer>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,       
  description: PropTypes.string.isRequired, 
};

export default Header;
