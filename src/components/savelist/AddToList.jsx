import styled from 'styled-components';
import AddToListHeader from './addlist/AddToListHeader'; 
import SavedTourList from '../savelist/SavedTourList'; 
import AddToListFooter from './addlist/AddToListFooter';
import { useEffect, useState } from 'react';
import getSavedTours from '../../api/save/getSavedTours'; 
import PropTypes from 'prop-types'; 

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding-bottom: 10em;

  &::-webkit-scrollbar {
    display: none;
  }
  
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const AddToList = ({ userNumber, listName, onBack }) => {
  const [savedTourData, setSavedTourData] = useState([]);

  const fetchSavedTourData = async () => {
    try {
      const data = await getSavedTours(userNumber);
      const transformedData = data.map(tour => ({
        ...tour,
        thumbnailImage: tour.thumbnail_image, 
        contentTitle: tour.content_title
      }));
      setSavedTourData(transformedData);
    } catch (error) {
      console.error('저장한 관광지 데이터를 불러오는 중 에러가 발생했습니다:', error);
    }
  };

  useEffect(() => {
    if (userNumber) {
      fetchSavedTourData();
    }
  }, [userNumber]);

  return (
    <Container>
      <AddToListHeader listName={listName} onBack={onBack} />  
      <SavedTourList showSubtitle={true} showCheckbox={true} savedTourData={savedTourData} />
      <AddToListFooter /> 
    </Container>
  );
};

AddToList.propTypes = {
  userNumber: PropTypes.string.isRequired, 
  listName: PropTypes.string.isRequired, 
  onBack: PropTypes.func.isRequired, 
};

export default AddToList;
