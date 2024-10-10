import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import DetailTop from '../../../components/home/detail/DetailTop'; 
import TitleSection from '../../../components/home/detail/TitleSection'; 
import InfoSection from '../../../components/home/detail/InfoSection'; 
import getDetailData from '../../../api/home/getDetailData'; 

const DetailPageContainer = styled.div`
  width: 390px;
  height: 844px;
  background-color: #fff;
  overflow-y: auto;
  padding-bottom: 10em;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const SectionDivider = styled.div`
  width: 100%;
  height: 0.5rem;
  background-color: var(--Color-7, #F1F1F1);
`;

const Detail = () => {
  const location = useLocation();  
  const { contentId, images = [], title = '장소 이름', placeName = '장소 이름', address = '주소' } = location.state || {};
  
  // 새로운 state에 상세 정보를 저장
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    const fetchDetailData = async () => {
      if (contentId) {
        try {
          const data = await getDetailData(contentId);  
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
        placeName={placeName !== '장소 이름' ? placeName : title}  
        description={detailData.description || '설명이 없습니다.'}  
        address={address}
      />
      <SectionDivider />
      <InfoSection details={detailData} />
    </DetailPageContainer>
  );
};

export default Detail;
