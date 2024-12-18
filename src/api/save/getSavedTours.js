import axios from 'axios';
import BASE_URL from '../config'; 

const getSavedTours = async (uuid) => {
  try {
    const response = await axios.get(`${BASE_URL}/course/save/${uuid}`);
    return response.data;
  } catch (error) {
    console.error('저장한 관광지 목록 조회 실패:', error);
    throw error;
  }
};

export default getSavedTours;
