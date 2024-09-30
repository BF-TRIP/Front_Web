import styled from 'styled-components';
import PropTypes from 'prop-types';

const CardContainer = styled.div`
  width: 13.3125rem; 
  height: auto; 
  display: flex;
  flex-direction: column; 
  flex-shrink: 0;
  overflow: hidden;
  background-color: #fff;
  border-radius: 1.25rem;
  padding: 0.38rem;
`;

const CardImage = styled.img`
  width: 100%;
  height: 7.375rem; 
  object-fit: cover;
  border-radius: 1.125rem;
`;

const CardContent = styled.div`
  margin-left: 0.2rem;
`;

const CardTitle = styled.div`
  color: #000;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 0.62rem;
  margin-bottom: 0.25rem; 
`;

const CardSubtitle = styled.div`
  color: #000;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const NearbyTourCard = ({ image, title, subtitle }) => {
  return (
    <CardContainer>
      <CardImage src={image} alt={title} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
      </CardContent>
    </CardContainer>
  );
};

NearbyTourCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default NearbyTourCard;
