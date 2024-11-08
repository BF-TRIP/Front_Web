import axios from 'axios';
import BASE_URL from '../config';

const getNearbyLocations = async (gpsX, gpsY, uuid) => {
  try {
    const response = await axios.get(`${BASE_URL}/map`, {
      params: {
        gpsX,
        gpsY,
        uuid
      }
    });
    return response.data; 
  } catch (error) {
    console.error('내 위치 주변 관광지 데이터를 불러오는 중 오류 발생:', error);
    throw error;
  }
};

export default getNearbyLocations;
