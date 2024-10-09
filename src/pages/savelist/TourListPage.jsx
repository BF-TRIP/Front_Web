import styled from 'styled-components';
import Header1 from '../../components/common/Header';
import Header2 from '../../components/savelist/tourlist/Header';
import TourCard from '../../components/savelist/tourlist/TourCard';
import AddMoreSection from '../../components/savelist/tourlist/AddMoreSection';

const PageContainer = styled.div`
  position: relative;
  width: 390px;
  height: 844px;
  background-color: #F6F5FA;
  overflow-y: auto;
  padding-bottom: 10em;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const TourListPage = () => {
  return (
    <PageContainer>
      <Header1 />
      <Header2 title="부산 2박 3일 리스트" description="리스트 세부 설명 적는 칸" />
      
      {/* 더미 데이터 */}
      <TourCard 
        imageUrl="https://example.com/image1.jpg"
        title="해운대 해수욕장"
        address="부산 해운대구 우동"
      />
      <TourCard 
        imageUrl="https://example.com/image2.jpg"
        title="동백섬"
        address="부산 해운대구 해운대로 612"
      />
      
      <AddMoreSection />
    </PageContainer>
  );
};

export default TourListPage;
