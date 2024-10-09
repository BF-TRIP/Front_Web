// AddToList.js
import styled from 'styled-components';
import AddToListHeader from './addlist/AddToListHeader'; 
import SavedTourList from '../savelist/SavedTourList'; 
import AddToListFooter from './addlist/AddToListFooter';
import { useEffect, useState } from 'react';
import getSavedTours from '../../api/save/getSavedTours';
import addCourseItems from '../../api/save/addCourseItems';  // API 호출 함수 추가
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

const AddToList = ({ userNumber, courseNumber, listName, onBack }) => { // courseNumber 추가
  const [savedTourData, setSavedTourData] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);  // 선택된 아이템 관리

  // 저장한 관광지 데이터를 불러오는 함수
  const fetchSavedTourData = async () => {
    try {
      const data = await getSavedTours(userNumber);
      const transformedData = data.map(tour => ({
        ...tour,
        thumbnailImage: tour.thumbnail_image,
        contentTitle: tour.content_title,
        contentId: tour.content_id,  // contentId 추가
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

  const handleSelectItem = (tourId, isChecked) => {
    setSelectedItems((prevSelected) => 
      isChecked
        ? [...prevSelected, tourId]  
        : prevSelected.filter((id) => id !== tourId) 
    );
  };

  const handleAddToList = async () => {
    try {
      await addCourseItems(courseNumber, selectedItems);  
      alert('선택한 관광지가 코스에 추가되었습니다.');
    } catch (error) {
      console.error('관광지 추가 중 오류 발생:', error);
    }
  };

  return (
    <Container>
      <AddToListHeader listName={listName} onBack={onBack} />
      <SavedTourList 
        showSubtitle={true} 
        showCheckbox={true} 
        savedTourData={savedTourData} 
        onSelectItem={handleSelectItem}
      />
      <AddToListFooter onAddToList={handleAddToList} />  
    </Container>
  );
};

// PropTypes 설정
AddToList.propTypes = {
  userNumber: PropTypes.string.isRequired,
  courseNumber: PropTypes.string.isRequired,  // courseNumber 추가
  listName: PropTypes.string.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default AddToList;
