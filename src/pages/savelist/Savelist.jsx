import { useContext, useEffect, useState } from 'react';
import { OnboardingContext } from '../../utils/OnboardingContext';
import getSavedTours from '../../api/save/getSavedTours';
import styled from 'styled-components';
import Header from '../../components/common/Header';
import MyTourList from '../../components/savelist/MyTourList';
import SavedTourList from '../../components/savelist/SavedTourList';
import NewListModal from '../../components/savelist/newlist/NewListModal';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  let { uuid } = onboardingData;

  useEffect(() => {
    if (!uuid) {
      const saveduuid = localStorage.getItem('uuid');
      if (saveduuid) {
        uuid = saveduuid;
        setLocaluuid(saveduuid); 
        updateOnboardingData('uuid', saveduuid); 
      } else {
        console.warn('uuid가 존재하지 않습니다. 홈으로 리디렉션합니다.');
        navigate('/home'); // UUID가 없으면 홈으로 리디렉션
      }
    } else {
      setLocaluuid(uuid); 
    }

    // iOS에서 UUID를 받을 수 있도록 설정
    window.iOSToJavaScript = function(receivedUuid) {
      console.log('iOS로부터 받은 UUID:', receivedUuid);

      // UUID가 없을 때만 업데이트
      if (!onboardingData.uuid && receivedUuid) {
        updateOnboardingData('uuid', receivedUuid);
        setLocaluuid(receivedUuid);
        localStorage.setItem('uuid', receivedUuid);
      }
    };

    return () => {
      // 컴포넌트 언마운트 시 함수 제거
      delete window.iOSToJavaScript;
    };
  }, [uuid, updateOnboardingData, navigate, onboardingData]);

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
