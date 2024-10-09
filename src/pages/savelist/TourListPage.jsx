import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Header1 from '../../components/common/Header';
import Header2 from '../../components/savelist/tourlist/Header';
import TourCard from '../../components/savelist/tourlist/TourCard';
import AddMoreSection from '../../components/savelist/tourlist/AddMoreSection';
import getCourseTourList from '../../api/save/getCourseTourList';

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
  const location = useLocation();
  const { courseNumber } = location.state; 

  const [tourList, setTourList] = useState([]);
  const [courseName, setCourseName] = useState(''); 
  const [description, setDescription] = useState(''); 

  useEffect(() => {
    const fetchTourList = async () => {
      try {
        const data = await getCourseTourList(courseNumber); 
        setTourList(data.locationInfoResList); 
        setCourseName(data.courseName); 
        setDescription(data.description);
      } catch (error) {
        console.error('코스 관광지 데이터를 불러오는 중 에러 발생:', error);
      }
    };

    if (courseNumber) {
      fetchTourList();
    }
  }, [courseNumber]);

  return (
    <PageContainer>
      <Header1 />
      <Header2 title={courseName} description={description} />
      
      {tourList.map((tour, index) => (
        <TourCard 
          key={index}
          imageUrl={tour.thumbnailImage} 
          title={tour.contentTitle}
          address={tour.addr}
          publicTransport={tour.publicTransport}
          wheelchair={tour.wheelchair}
          stroller={tour.stroller}
          braileBlock={tour.braileBlock}
          hearingHandicapEtc={tour.hearingHandicapEtc}
        />
      ))}
      
      <AddMoreSection />
    </PageContainer>
  );
};

export default TourListPage;
