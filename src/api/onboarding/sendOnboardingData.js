import axios from 'axios';
import BASE_URL from '../config';  

const sendOnboardingData = async (onboardingData) => {
    try {
      const response = await axios.post(`${BASE_URL}/user/join`, onboardingData, {
        headers: {
          'Content-Type': 'application/json', 
        }
      });
      console.log('응답 데이터:', response.data);
      return response.data;
    } catch (error) {
      console.error('API 요청 중 오류 발생:', error);
      throw error;
    }
  };
  

export default sendOnboardingData;
