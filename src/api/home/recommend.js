import axios from 'axios';
import BASE_URL from '../config';

const getRecommendedLocations = async (uuid) => {
    try {
      console.log('API 요청 전송 중:', uuid); 
      const response = await axios.get(`${BASE_URL}/api/location/recommend`, {
        params: { uuid },
      });
      console.log('API 응답 성공:', response.data); 
      return response.data; 
    } catch (error) {
      console.error('추천 관광지 데이터를 불러오는 중 오류 발생:', error);
      throw error;
    }
  };
  

export default getRecommendedLocations;
