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

const Subtitle = styled.div`
  color: var(--Color-2, #676767);
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 1.40625rem */
  letter-spacing: -0.0175rem;
  margin-top: 0.3rem;
`;

const SavedTourListContainer = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 0.88rem;
`;

const SavedTourList = ({ savedTourData, showSubtitle, showCheckbox, onSelectItem }) => {
  return (
    <Container>
      <Title>저장한 관광지</Title>
      {showSubtitle && (
        <Subtitle>저장한 공간들을 리스트에 추가해보세요</Subtitle> 
      )}
      <SavedTourListContainer>
        {savedTourData.map((tour, index) => (
          <SavedTourItem 
            key={index}
            contentId={tour.content_id} 
            image={tour.thumbnailImage} 
            title={tour.contentTitle}    
            showCheckbox={showCheckbox}
            onSelectItem={onSelectItem} 
          />
        ))}
      </SavedTourListContainer>
    </Container>
  );
};

SavedTourList.propTypes = {
  savedTourData: PropTypes.arrayOf(PropTypes.object).isRequired,
  showSubtitle: PropTypes.bool,
  showCheckbox: PropTypes.bool, 
  onSelectItem: PropTypes.func.isRequired, 
};

SavedTourList.defaultProps = {
  showCheckbox: false, 
};

export default SavedTourList;
