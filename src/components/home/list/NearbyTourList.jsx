import styled from 'styled-components';
import nearbyTourData from '../../../utils/nearbyTourData'; 
import NearbyTourListCard from './NearbyTourCard';

const ListContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding: 1rem;
  padding-bottom: 10em;
  border: 1px solid red;

  &::-webkit-scrollbar {
    display: none; 
  }
`;

const Title = styled.h3`
  color: #000;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  margin-left: 0.2rem;
  margin-top: 1.75rem;
  margin-bottom: 1.79rem;
  line-height: 1.375rem; /* 110% */
`;

const CardWrapper = styled.div`
  margin-bottom: 1.19rem;
`;

const NearbyTourList = () => {
  return (
    <ListContainer>
      <Title>내 위치 주변 관광지 리스트</Title>
      {nearbyTourData.map((tour, index) => (
        <CardWrapper key={index}>
          <NearbyTourListCard
            image={tour.image2}
            title={tour.title}
            subtitle={tour.subtitle}
            icons={tour.icons}
          />
        </CardWrapper>
      ))}
    </ListContainer>
  );
};

export default NearbyTourList;
