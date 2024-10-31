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
  const [localuuid, setLocaluuid] = useState(null); 

  const { onboardingData, updateOnboardingData } = useContext(OnboardingContext);
  let { uuid } = onboardingData;

  useEffect(() => {
    if (!uuid) {
      const saveduuid = localStorage.getItem('uuid');
      if (saveduuid) {
        uuid = saveduuid;
        setLocaluuid(saveduuid); 
        updateOnboardingData('uuid', saveduuid); 
      } else {
        console.warn('uuid가 존재하지 않습니다. 홈으로 리디렉션 필요.');
      }
    } else {
      setLocaluuid(uuid); 
    }
  }, [uuid, updateOnboardingData]);

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
    if (localuuid) {
      console.log('Savelist에서 전달하려는 uuid:', localuuid); 
      fetchSavedTourList(localuuid); 
    }
  }, [localuuid]);

  // 화면이 다시 나타날 때마다 API 호출
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && localuuid) {
        console.log('화면이 다시 보입니다. 데이터를 갱신합니다.');
        fetchSavedTourList(localuuid);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [localuuid]);

  const fetchSavedTourList = async (uuid) => {
    try {
      const data = await getSavedTours(uuid);
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
      <MyTourList onOpenModal={handleOpenModal} uuid={localuuid} />
      <SavedTourList showCheckbox={false} savedTourData={savedTourList} /> 
      <NewListModal 
        show={isModalOpen} 
        onClose={handleCloseModal} 
        onConfirm={handleConfirm} 
        uuid={localuuid}
      />
    </SaveListContainer>
  );
};

export default Savelist;
