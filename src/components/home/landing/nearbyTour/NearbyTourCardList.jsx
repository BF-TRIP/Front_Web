import styled from 'styled-components';
import NearbyTourCard from './NearbyTourCard';
import nearbyTourData from '../../../../utils/nearbyTourData'; 

const CardListContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  gap: 1rem;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const NearbyTourCardList = () => {
  return (
    <CardListContainer>
      {nearbyTourData.map((tour, index) => (
        <NearbyTourCard
          key={index}
          image={tour.image}
          title={tour.title}
          subtitle={tour.subtitle}
        />
      ))}
    </CardListContainer>
  );
};

export default NearbyTourCardList;
