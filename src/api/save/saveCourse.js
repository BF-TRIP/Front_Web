import axios from 'axios';
import BASE_URL from '../config';

const saveCourse = async (uuid, contentId) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/course/save`,  // URL에 쿼리 파라미터 대신
      { uuid, contentId },        // JSON 형식의 요청 본문으로 포함
      {
        headers: {
          'Content-Type': 'application/json'  
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('저장 요청 중 오류 발생:', error);
    throw error;
  }
};

export default saveCourse;
