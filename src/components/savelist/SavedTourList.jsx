import styled from 'styled-components';
import PropTypes from 'prop-types';
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

const SavedTourList = ({ showSubtitle, showCheckbox }) => {
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
            image={tour.image} 
            title={tour.title} 
            showCheckbox={showCheckbox} 
          />
        ))}
      </SavedTourListContainer>
    </Container>
  );
};

SavedTourList.propTypes = {
  showSubtitle: PropTypes.bool, // subtitle을 표시할지 여부
  showCheckbox: PropTypes.bool, // 체크박스를 표시할지 여부
};

SavedTourList.defaultProps = {
  showSubtitle: false, // 기본값은 false로 설정
  showCheckbox: false, // 기본값은 false로 설정 (체크박스 표시 안함)
};

export default SavedTourList;
