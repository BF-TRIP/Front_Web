import axios from 'axios';
import BASE_URL from '../config'; 

const getUserCourses = async (userNumber) => {
  try {
    const response = await axios.get(`${BASE_URL}/course/${userNumber}`);
    return response.data;
  } catch (error) {
    console.error('코스 리스트 불러오기 실패:', error);
    throw error;
  }
};

export default getUserCourses;
