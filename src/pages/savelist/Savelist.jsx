import { useContext, useEffect, useState } from 'react';
import { OnboardingContext } from '../../utils/OnboardingContext';
import getSavedTours from '../../api/save/getSavedTours';
import styled from 'styled-components';
import Header from '../../components/common/Header';
import MyTourList from '../../components/savelist/MyTourList';
import SavedTourList from '../../components/savelist/SavedTourList';
import NewListModal from '../../components/savelist/newlist/NewListModal';

const SaveListContainer = styled.div`
  position: relative;
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

const Savelist = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [savedTourList, setSavedTourList] = useState([]);
  
  const { onboardingData, updateOnboardingData } = useContext(OnboardingContext);
  let { userNumber } = onboardingData;

  useEffect(() => {
    if (!userNumber) {
      const savedUserNumber = localStorage.getItem('userNumber');
      if (savedUserNumber) {
        userNumber = savedUserNumber;
        updateOnboardingData('userNumber', savedUserNumber); 
      } else {
        console.warn('userNumber가 존재하지 않습니다. 홈으로 리디렉션 필요.');
      }
    }
  }, [userNumber, updateOnboardingData]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirm = () => {
    console.log('리스트가 생성되었습니다!');
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (userNumber) {
      console.log('userNumber:', userNumber); 
      fetchSavedTourList(userNumber); // Context 또는 localStorage에서 받아온 userNumber 사용
    }
  }, [userNumber]);

  const fetchSavedTourList = async (userNumber) => {
    try {
      const data = await getSavedTours(userNumber);
      
      // 받아온 데이터를 변환해서 저장
      const transformedData = data.map((tour) => ({
        contentTitle: tour.content_title, // 백엔드의 필드명을 프론트엔드에 맞게 변환
        thumbnailImage: tour.thumbnail_image, // 백엔드의 필드명을 프론트엔드에 맞게 변환
      }));

      setSavedTourList(transformedData); // 변환된 데이터를 상태에 저장
    } catch (error) {
      console.error('저장한 관광지 목록 불러오기 실패:', error);
    }
  };

  return (
    <SaveListContainer>
      <Header />
      <MyTourList onOpenModal={handleOpenModal} />
      <SavedTourList savedTourData={savedTourList} />
      <NewListModal show={isModalOpen} onClose={handleCloseModal} onConfirm={handleConfirm} />
    </SaveListContainer>
  );
};

export default Savelist;
