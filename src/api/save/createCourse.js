import axios from 'axios';
import BASE_URL from '../config';

const createCourse = async (uuid, name, description) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/course/${uuid}/create`, 
      { name, description },  // 요청 본문에 JSON 형식으로 포함하게 수정
      {
        headers: {
          'Content-Type': 'application/json'  
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('코스 생성 실패:', error);
    throw error;
  }
};

export default createCourse;
