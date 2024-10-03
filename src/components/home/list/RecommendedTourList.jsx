import styled from 'styled-components';
import recommendedTourData from '../../../utils/recommendData'
import RecommendedTourListCard from './RecommendedTourCard';

const ListContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding: 1rem;
  padding-bottom: 100em;

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
  line-height: 1.375rem;
`;

const CardWrapper = styled.div`
  margin-bottom: 1.19rem;
`;

const RecommendedTourList = () => {
  return (
    <ListContainer>
      <Title>OO님이 좋아할만한 관광지 리스트</Title>
      {recommendedTourData.map((tour, index) => (
        <CardWrapper key={index}>
          <RecommendedTourListCard
            image={tour.image2}
            title={tour.title}
            subtitle={tour.subtitle}
            accessibility={tour.accessibility}
          />
        </CardWrapper>
      ))}
    </ListContainer>
  );
};

export default RecommendedTourList;
