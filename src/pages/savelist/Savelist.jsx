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
  const [localUserNumber, setLocalUserNumber] = useState(null); 

  const { onboardingData, updateOnboardingData } = useContext(OnboardingContext);
  let { userNumber } = onboardingData;

  useEffect(() => {
    if (!userNumber) {
      const savedUserNumber = localStorage.getItem('userNumber');
      if (savedUserNumber) {
        userNumber = savedUserNumber;
        setLocalUserNumber(savedUserNumber); 
        updateOnboardingData('userNumber', savedUserNumber); 
      } else {
        console.warn('userNumber가 존재하지 않습니다. 홈으로 리디렉션 필요.');
      }
    } else {
      setLocalUserNumber(userNumber); 
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
    if (localUserNumber) {
      console.log('Savelist에서 전달하려는 userNumber:', localUserNumber); 
      fetchSavedTourList(localUserNumber); 
    }
  }, [localUserNumber]);

  const fetchSavedTourList = async (userNumber) => {
    try {
      const data = await getSavedTours(userNumber);
      const transformedData = data.map((tour) => ({
        contentTitle: tour.content_title,
        thumbnailImage: tour.thumbnail_image,
      }));
      setSavedTourList(transformedData); 
    } catch (error) {
      console.error('저장한 관광지 목록 불러오기 실패:', error);
    }
  };

  return (
    <SaveListContainer>
      <Header />
      <MyTourList onOpenModal={handleOpenModal} userNumber={localUserNumber} />
      <SavedTourList showCheckbox={false} savedTourData={savedTourList} /> 
      <NewListModal 
        show={isModalOpen} 
        onClose={handleCloseModal} 
        onConfirm={handleConfirm} 
        userNumber={localUserNumber}
      />
    </SaveListContainer>
  );
};

export default Savelist;
