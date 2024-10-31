import { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'; 
import TourListItem from './mytour/TourListItem';
import CreateNewListButton from './mytour/CreateNewListButton';
import getUserCourses from '../../api/save/getUserCourses';
import getCourseTourList from '../../api/save/getCourseTourList'; 

const Container = styled.div`
  padding: 1.15rem;
  padding-bottom: 1.56rem;
`;

const Title = styled.div`
  color: #000;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.375rem; 
  margin-bottom: 1rem; 
`;

const TourListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 0.78rem;
`;

const Divider = styled.div`
  width: 100%;
  height: 0.38rem;
  flex-shrink: 0;
  background: #F7F6FB;
`;

const MyTourList = ({ uuid }) => {
  const [tourData, setTourData] = useState([]); 

  useEffect(() => {
    const fetchUserCourses = async () => {
      try {
        const data = await getUserCourses(uuid); 
        const enrichedCourses = await Promise.all(
          data.map(async (course) => {
            const courseDetails = await getCourseTourList(course.courseNumber); 
            const thumbnailImage = courseDetails.locationInfoResList.length > 0
              ? courseDetails.locationInfoResList[0].thumbnailImage  
              : null;  
            return { ...course, thumbnailImage }; 
          })
        );
        setTourData(enrichedCourses);  
      } catch (error) {
        console.error('코스 데이터를 불러오는 중 에러 발생:', error);
      }
    };

    if (uuid) {
      fetchUserCourses(); 
    }
  }, [uuid]);

  return (
    <>
      <Container>
        <Title>내가 만든 관광지 리스트</Title>
        <TourListContainer>
          {tourData.map((tour, index) => (
            <TourListItem 
              key={index} 
              title={tour.courseName} 
              image={tour.thumbnailImage || 'https://via.placeholder.com/300x200?text=%F0%9F%93%B7'}  // 썸네일 이미지 없을 때 기본 이미지
            />
          ))}
          <CreateNewListButton uuid={uuid} /> 
        </TourListContainer>
      </Container>
      <Divider />
    </>
  );
};

MyTourList.propTypes = {
  uuid: PropTypes.string.isRequired,
};

export default MyTourList;
