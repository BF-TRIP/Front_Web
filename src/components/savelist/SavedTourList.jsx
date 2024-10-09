import styled from 'styled-components';
import PropTypes from 'prop-types';
import SavedTourItem from './savedtour/SavedTourItem';

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
`;

const SavedTourListContainer = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 0.88rem;
`;

const SavedTourList = ({ savedTourData, showCheckbox }) => { 
  return (
    <Container>
      <Title>저장한 관광지</Title>
      <SavedTourListContainer>
        {savedTourData.map((tour, index) => (
          <SavedTourItem 
            key={index} 
            image={tour.thumbnailImage} 
            title={tour.contentTitle} 
            showCheckbox={showCheckbox}  
          />
        ))}
      </SavedTourListContainer>
    </Container>
  );
};

SavedTourList.propTypes = {
  savedTourData: PropTypes.arrayOf(PropTypes.object).isRequired,
  showCheckbox: PropTypes.bool,
};

SavedTourList.defaultProps = {
  showCheckbox: false, 
};

export default SavedTourList;
