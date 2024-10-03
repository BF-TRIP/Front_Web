import styled from 'styled-components';
import DetailTop from '../../../components/home/detail/DetailTop'; 
import TitleSection from '../../../components/home/detail/TitleSection'; 
import InfoSection from '../../../components/home/detail/InfoSection'; // InfoSection import

const DetailPageContainer = styled.div`
  width: 390px;
  height: 844px;
  background-color: #fff;
  overflow-y: auto;
`;

const SectionDivider = styled.div`
  width: 100%;
  height: 0.5rem;
  background-color: var(--Color-7, #F1F1F1);
`;

const Detail = () => {
  const images = [
    '/path/to/image1.jpg',
    '/path/to/image2.jpg',
    '/path/to/image3.jpg',
  ]; 

  // 임시 데이터
  const placeName = '덕수궁';
  const description = '덕수궁(德壽宮)은 서울 중구 정동(貞洞)에 있는 조선과 대한제국의 궁궐이다. 대한민국의 사적으로 지정되어 있다. 본래 이름은 경운궁(慶運宮)으로, 아관파천 이후 환궁하여 법궁으로 사용되다가 순종 즉위 후 궁의 이름을 현재의 덕수궁으로 변경하였다.';
  const address = '서울특별시 중구 세종대로 99';

  return (
    <DetailPageContainer>
      <DetailTop images={images} />
      <TitleSection 
        placeName={placeName}
        description={description}
        address={address}
      />
      <SectionDivider /> {/* 섹션 간 구분선 */}
      
      {/* InfoSection 추가 */}
      <InfoSection />

    </DetailPageContainer>
  );
};

export default Detail;
