import { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'; 
import TourListItem from './mytour/TourListItem';
import CreateNewListButton from './mytour/CreateNewListButton';
import getUserCourses from '../../api/save/getUserCourses';

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

const MyTourList = ({ userNumber }) => {
  const [tourData, setTourData] = useState([]); 

  useEffect(() => {
    const fetchUserCourses = async () => {
      try {
        const data = await getUserCourses(userNumber); 
        setTourData(data);
      } catch (error) {
        console.error('코스 데이터를 불러오는 중 에러 발생:', error);
      }
    };

    if (userNumber) {
      fetchUserCourses(); 
    }
  }, [userNumber]);

  return (
    <>
      <Container>
        <Title>내가 만든 관광지</Title>
        <TourListContainer>
          {tourData.map((tour, index) => (
            <TourListItem 
              key={index} 
              title={tour.courseName} 
              image={null} // 코스 이미지가 없으므로 기본 이미지로 설정 가능 (추가 구현 필요)
            />
          ))}
          <CreateNewListButton userNumber={userNumber} /> 
        </TourListContainer>
      </Container>
      <Divider />
    </>
  );
};

MyTourList.propTypes = {
  userNumber: PropTypes.string.isRequired,
};

export default MyTourList;
