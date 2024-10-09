import axios from 'axios';
import BASE_URL from '../config'; 

const addCourseItems = async (courseNumber, selectedItems) => {
  try {
    const response = await axios.post(`${BASE_URL}/course/${courseNumber}/add`, {
      contentIdList: selectedItems  
    });
    return response.data;
  } catch (error) {
    console.error('관광지 추가 중 오류 발생:', error);
    throw error;
  }
};

export default addCourseItems;
