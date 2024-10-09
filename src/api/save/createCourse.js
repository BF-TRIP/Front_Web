import axios from 'axios';
import BASE_URL from '../config'; 

const createCourse = async (userNumber, name, description) => {
  try {
    const response = await axios.post(`${BASE_URL}/course/${userNumber}/create`, null, {
      params: { name, description }
    });
    return response.data;
  } catch (error) {
    console.error('코스 생성 실패:', error);
    throw error;
  }
};

export default createCourse;
