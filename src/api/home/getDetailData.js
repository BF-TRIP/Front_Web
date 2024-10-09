import axios from 'axios';
import BASE_URL from '../config';

const getDetailData = async (contentId) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/detail`, {
      params: { contentid: contentId }
    });
    return response.data;
  } catch (error) {
    console.error('상세 정보 데이터를 불러오는 중 오류 발생:', error);
    throw error;
  }
};

export default getDetailData;
