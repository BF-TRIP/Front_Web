import styled from 'styled-components';
import PropTypes from 'prop-types';
import NearbyTourCard from './NearbyTourCard';

const CardListContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  gap: 1rem;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const NearbyTourCardList = ({ tourData, uuid }) => { 
  return (
    <CardListContainer>
      {tourData.map((tour, index) => (
        <NearbyTourCard
          key={index}
          originalImage={tour.originalImage} 
          contentTitle={tour.contentTitle}    
          addr={tour.addr}                  
          description={tour.description}   
          contentId={tour.contentId}          
          uuid={uuid}             
        />
      ))}
    </CardListContainer>
  );
};

NearbyTourCardList.propTypes = {
  tourData: PropTypes.arrayOf(
    PropTypes.shape({
      originalImage: PropTypes.string.isRequired,
      contentTitle: PropTypes.string.isRequired,
      addr: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      contentId: PropTypes.number.isRequired,
    })
  ).isRequired,
  uuid: PropTypes.number.isRequired,  
};

export default NearbyTourCardList;
