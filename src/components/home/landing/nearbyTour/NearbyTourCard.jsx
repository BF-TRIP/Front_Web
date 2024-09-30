import styled from 'styled-components';
import PropTypes from 'prop-types';

const CardContainer = styled.div`
  width: 13.3125rem; 
  height: auto; 
  display: flex;
  flex-direction: column; 
  flex-shrink: 0;
  overflow: hidden;
`;

const CardImage = styled.img`
  width: 100%;
  height: 7.375rem; 
  object-fit: cover;
  border-radius: 1.125rem;
`;

const CardContent = styled.div`
`;

const CardTitle = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 0.62rem;
  margin-bottom: 0.25rem; /* 제목과 부제목 사이의 간격 */
`;

const CardSubtitle = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 300;
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
