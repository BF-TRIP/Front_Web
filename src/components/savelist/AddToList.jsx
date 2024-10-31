import { useNavigate } from 'react-router-dom'; 
import styled from 'styled-components';
import AddToListHeader from './addlist/AddToListHeader'; 
import SavedTourList from '../savelist/SavedTourList'; 
import AddToListFooter from './addlist/AddToListFooter';
import { useEffect, useState } from 'react';
import getSavedTours from '../../api/save/getSavedTours';
import addCourseItems from '../../api/save/addCourseItems';  
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

const AddToList = ({ uuid, courseNumber, listName, onBack }) => {
  const [savedTourData, setSavedTourData] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const navigate = useNavigate(); 

  const fetchSavedTourData = async () => {
    try {
      const data = await getSavedTours(uuid);
      const transformedData = data.map(tour => ({
        ...tour,
        thumbnailImage: tour.thumbnail_image,
        contentTitle: tour.content_title,
        contentId: tour.content_id,  
      }));
      setSavedTourData(transformedData);
    } catch (error) {
      console.error('저장한 관광지 데이터를 불러오는 중 에러가 발생했습니다:', error);
    }
  };

  useEffect(() => {
    if (uuid) {
      fetchSavedTourData();
    }
  }, [uuid]);

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
      navigate('/tour-list', { state: { courseNumber } }); 
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

AddToList.propTypes = {
  uuid: PropTypes.string.isRequired,
  courseNumber: PropTypes.string.isRequired,  
  listName: PropTypes.string.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default AddToList;
