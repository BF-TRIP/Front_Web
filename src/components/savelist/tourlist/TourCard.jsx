import styled from 'styled-components';
import PropTypes from 'prop-types'; 

const CardContainer = styled.div`
  width: 20.75rem;
  height: 14.5625rem;
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
  margin: 0 auto 1rem auto;  
  position: relative;
`;

const TourImage = styled.img`
  width: 100%;
  height: 10rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  object-fit: cover;
`;

const TourTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0.5rem 1rem;
`;

const TourAddress = styled.p`
  font-size: 0.875rem;
  color: #7a7a7a;
  margin: 0 1rem 1rem 1rem;
`;

const TourCard = ({ imageUrl, title, address }) => (
  <CardContainer>
    <TourImage src={imageUrl} alt={title} />
    <TourTitle>{title}</TourTitle>
    <TourAddress>{address}</TourAddress>
  </CardContainer>
);

TourCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,    
  address: PropTypes.string.isRequired,  
};

export default TourCard;
