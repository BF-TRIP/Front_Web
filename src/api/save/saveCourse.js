import axios from 'axios';
import BASE_URL from '../config';

const saveCourse = async (uuid, contentId) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/course/save?uuid=${uuid}&contentId=${contentId}`
    );
    return response.data; 
  } catch (error) {
    console.error('저장 요청 중 오류 발생:', error);
    throw error; 
  }
};

export default saveCourse;
