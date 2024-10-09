import { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';  
import RecommendedTourCard from './RecommendedTourCard';
import getRecommendedLocations from '../../../api/home/recommend';  

const ListContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding: 1rem;
  padding-bottom: 10em;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Title = styled.h3`
  color: #000;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  margin-left: 0.2rem;
  margin-top: 0.5rem;
  margin-bottom: 1.12rem;
  line-height: 1.375rem;
`;

const CardWrapper = styled.div`
  margin-bottom: 1.19rem;
`;

const RecommendedTourList = () => {
  const [tourData, setTourData] = useState([]);
  const userNumber = localStorage.getItem('userNumber'); 
  const userName = localStorage.getItem('userName') || '사용자'; 

  useEffect(() => {
    const fetchTourData = async () => {
      try {
        const data = await getRecommendedLocations(userNumber);  
        setTourData(data); 
      } catch (error) {
        console.error('추천 관광지 데이터를 불러오는 중 오류 발생:', error);
      }
    };

    if (userNumber) {
      fetchTourData();  
    }
  }, [userNumber]);

  return (
    <ListContainer>
      <Title>{userName}님이 좋아할만한 관광지 리스트</Title> 
      {tourData.map((tour, index) => (
        <CardWrapper key={index}>
          <RecommendedTourCard
            contentId={tour.contentId}  
            imageUrl={tour.thumbnailImage || ''}
            title={tour.contentTitle}
            address={tour.addr}
            publicTransport={tour.publicTransport || ''}
            wheelchair={tour.wheelchair || ''}
            stroller={tour.stroller || ''}
            braileBlock={tour.braileBlock || ''}
            hearingHandicapEtc={tour.hearingHandicapEtc || ''}
          />
        </CardWrapper>
      ))}
    </ListContainer>
  );
};

RecommendedTourList.propTypes = {
  userName: PropTypes.string, 
};

export default RecommendedTourList;
