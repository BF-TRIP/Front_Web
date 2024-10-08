import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom'; 

const CardContainer = styled.div`
  width: 12.1875rem;
  height: 12.1875rem;
  display: flex;
  flex-shrink: 0;
  border-radius: 1.25rem;
  overflow: hidden;
  position: relative;
  cursor: pointer; 
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CardTitle = styled.div`
  position: absolute;
  bottom: 0.88rem;
  left: 0.81rem;
  color: #FFF;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 80%;
`;

const TourCard = ({ image, title }) => {
  const navigate = useNavigate(); 

  const handleCardClick = () => {
    navigate('/recommended-list');
  };

  return (
    <CardContainer onClick={handleCardClick}> 
      <CardImage src={image} alt={title} />
      <CardTitle>{title}</CardTitle>
    </CardContainer>
  );
};

TourCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default TourCard;