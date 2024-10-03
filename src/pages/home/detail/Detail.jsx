import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import DetailTop from '../../../components/home/detail/DetailTop'; 
import TitleSection from '../../../components/home/detail/TitleSection'; 
import InfoSection from '../../../components/home/detail/InfoSection'; 

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
  
  // 전달받은 데이터가 없을 경우 기본값 설정
  const { images = [], placeName = '장소 이름', description = '설명', address = '주소' } = location.state || {};

  return (
    <DetailPageContainer>
      <DetailTop images={images} />
      <TitleSection 
        placeName={placeName}
        description={description}  // description 데이터 사용
        address={address}
      />
      <SectionDivider /> {/* 섹션 간 구분선 */}
      
      {/* InfoSection 추가 */}
      <InfoSection />
    </DetailPageContainer>
  );
};

export default Detail;
