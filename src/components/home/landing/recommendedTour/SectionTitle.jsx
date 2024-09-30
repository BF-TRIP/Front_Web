import PropTypes from 'prop-types'; 
import styled from 'styled-components';

const TitleContainer = styled.div`
  margin: 1rem 0;
  text-align: left;
  width: 100%;
`;

const TitleText = styled.h2`
  color: #000;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.375rem; /* 110% */
`;

const SectionTitle = ({ title }) => {
  return (
    <TitleContainer>
      <TitleText>{title}</TitleText>
    </TitleContainer>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,  
};

export default SectionTitle;
