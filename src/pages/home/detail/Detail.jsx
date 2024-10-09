import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import DetailTop from '../../../components/home/detail/DetailTop'; 
import TitleSection from '../../../components/home/detail/TitleSection'; 
import InfoSection from '../../../components/home/detail/InfoSection'; 
import getDetailData from '../../../api/home/getDetailData';  // 상세 정보 API 호출 함수

const DetailPageContainer = styled.div`
  width: 390px;
  height: 844px;
  background-color: #fff;
  overflow-y: auto;
  padding-bottom: 10em;

  &::-webkit-scrollbar {
    display: none;
  }
  
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const SectionDivider = styled.div`
  width: 100%;
  height: 0.5rem;
  background-color: var(--Color-7, #F1F1F1);
`;

const Detail = () => {
  const location = useLocation();  
  const { contentId, images = [], placeName = '장소 이름', description = '설명', address = '주소' } = location.state || {};

  const [detailData, setDetailData] = useState({});  // 상세 정보 상태 관리

  useEffect(() => {
    const fetchDetailData = async () => {
      if (contentId) {
        try {
          const data = await getDetailData(contentId);  // API 요청
          setDetailData(data);
        } catch (error) {
          console.error('상세 정보를 불러오는 중 오류 발생:', error);
        }
      }
    };

    fetchDetailData();
  }, [contentId]);

  return (
    <DetailPageContainer>
      <DetailTop images={images} />
      <TitleSection 
        placeName={placeName}
        description={description}  
        address={address}
      />
      <SectionDivider />
      <InfoSection details={detailData} />  {/* 상세 정보를 전달 */}
    </DetailPageContainer>
  );
};

export default Detail;
