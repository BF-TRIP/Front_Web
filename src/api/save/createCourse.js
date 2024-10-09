import axios from 'axios';
import BASE_URL from '../config'; // BASE_URL을 설정한 config 파일을 가져옴

const createCourse = async (userNumber, name) => {
  try {
    const response = await axios.post(`${BASE_URL}/course/${userNumber}/create`, null, {
      params: { name }
    });
    return response.data; // 생성된 코스 데이터를 반환
  } catch (error) {
    console.error('코스 생성 실패:', error);
    throw error;
  }
};

export default createCourse;
