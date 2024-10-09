import styled from 'styled-components';
import PropTypes from 'prop-types';
import TourCard from './TourCard';

const CardListContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  gap: 1rem;

  &::-webkit-scrollbar {
    display: none; 
  }
`;

const TourCardList = ({ tourData }) => {
  return (
    <CardListContainer>
      {tourData.map((tour, index) => (
        <TourCard 
          key={index} 
          image={tour.thumbnailImage} 
          title={tour.contentTitle}
        />
      ))}
    </CardListContainer>
  );
};

TourCardList.propTypes = {
  tourData: PropTypes.arrayOf(
    PropTypes.shape({
      contentTitle: PropTypes.string.isRequired,  
      thumbnailImage: PropTypes.string.isRequired,  
    })
  ).isRequired,
};

export default TourCardList;
