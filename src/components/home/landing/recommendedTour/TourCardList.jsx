import styled from 'styled-components';
import PropTypes from 'prop-types';
import TourCard from './TourCard';
import tourData from '../../../../utils/recommendData';

const CardListContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  gap: 1rem;

  &::-webkit-scrollbar {
    display: none; 
  }
`;

const TourCardList = () => {
  return (
    <CardListContainer>
      {tourData.map((tour, index) => (
        <TourCard key={index} image={tour.image} title={tour.title} />
      ))}
    </CardListContainer>
  );
};

TourCardList.propTypes = {
  tourData: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default TourCardList;