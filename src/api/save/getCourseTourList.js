import axios from 'axios';
import BASE_URL from '../config';  

const getCourseTourList = async (courseNumber) => {
  try {
    const response = await axios.get(`${BASE_URL}/course/${courseNumber}/list`);
    return response.data; 
  } catch (error) {
    console.error('코스 관광지 리스트 불러오기 실패:', error);
    throw error;
  }
};

export default getCourseTourList;
