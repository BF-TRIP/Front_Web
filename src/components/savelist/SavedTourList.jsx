import styled from 'styled-components';
import SavedTourItem from './savedtour/SavedTourItem';
import savedTourData from '../../utils/savedTourData'; 

const Container = styled.div`
  padding: 1.15rem;
  padding-bottom: 1.56rem;
`;

const Title = styled.div`
  color: #000;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.375rem; 
  margin-bottom: 1rem; 
`;

const SavedTourListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 0.88rem;
`;

const SavedTourList = () => {
  return (
    <Container>
      <Title>저장한 관광지</Title>
      <SavedTourListContainer>
        {savedTourData.map((tour, index) => (
          <SavedTourItem key={index} image={tour.image} title={tour.title} />
        ))}
      </SavedTourListContainer>
    </Container>
  );
};

export default SavedTourList;
