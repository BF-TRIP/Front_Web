import { useEffect, useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../../components/header/Header';
import VoiceRecognitionButton from '../../components/home/landing/voice/VoiceRecognitionButton';
import RecommendedSection from '../../components/home/landing/recommendedTour/RecommendedSection';
import NearbyTourSection from '../../components/home/landing/nearbyTour/NearbyTourSection';
import VoiceRecognitionModal from '../../components/home/landing/voice/VoiceRecognitionModal'; 
import getRecommendedLocations from '../../api/home/recommend';  
import messageImage from '../../assets/images/message.png'; // 말풍선 이미지 추가

const HomeContainer = styled.div`
  width: 390px; 
  height: 844px; 
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  overflow-y: auto; 
  
  &::-webkit-scrollbar {
    display: none; 
  }
  -ms-overflow-style: none; 
  scrollbar-width: none; 
`;

const HeaderBackground = styled.div`
  width: 100%;
  height: 14rem;
  background: #FFE023;
  padding-top: 1.5rem;
  padding-left: 1rem;
  z-index: 1;
`;

const RoundedBackground = styled.div`
  width: 100%;
  height: 90%;
  background-color: #f6f5fa;
  border-radius: 0.4rem;
  position: absolute;
  top: 9rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
`;

const VoiceRecognitionButtonBackground = styled.div`
  width: 9.75531rem;
  height: 10.33581rem;
  background: #f6f5fa;
  border-radius: 50%;
  position: absolute;
  top: 6rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
`;

const VoiceRecognitionButtonWrapper = styled.div`
  margin-top: -2rem;
`;

const MessageBubble = styled.img`
  position: absolute;
  top: 4.2rem; 
  left: 12rem; 
  z-index: 3;
  width: 11.5rem; 
  height: auto;
`;

const RecommendedSectionContainer = styled.div`
  width: 100%;
  position: absolute; 
  top: 13.1rem; 
  left: 0;
  z-index: 4;
`;

const NearbySectionContainer = styled.div`
  width: 100%;
  position: absolute; 
  top: 29.3rem; 
  left: 0;
  z-index: 4;
`;

const Home = () => {
  const { state } = useLocation(); 
  const userNumber = state?.userNumber || null; // userNumber를 받아옴
  const userName = state?.userName || '사용자'; // 유저 이름이 없으면 기본값으로 '사용자' 사용
  const [recommendedLocations, setRecommendedLocations] = useState([]); 
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log('userNumber:', userNumber); 

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // 추천 관광지 데이터 가져오기
  const fetchRecommendedLocations = useCallback(async () => {
    if (userNumber) {
      try {
        const data = await getRecommendedLocations(userNumber);
        setRecommendedLocations(data);
      } catch (error) {
        console.error('추천 관광지 데이터를 불러오는 중 오류 발생:', error);
      }
    }
  }, [userNumber]);

  // 컴포넌트가 마운트되었을 때 추천 관광지 데이터를 가져옴
  useEffect(() => {
    fetchRecommendedLocations();
  }, [fetchRecommendedLocations]);

  // JavaScript와 iOS 간 통신 함수
  const javaScriptToIOS = () => {
    if (window.webkit?.messageHandlers?.serverEvent) {
      console.log('Send Event');
      window.webkit.messageHandlers.serverEvent.postMessage('Voice');
    } else {
      console.log('Cannot send event');
    }
  };

  // iOS에서 자바스크립트로 이벤트 발생 함수
  useEffect(() => {
    window.iOSToJavaScript = function() {
      console.log('Event Occurred');
    };
  }, []);

  return (
    <HomeContainer>
      <HeaderBackground>
        <Header />
      </HeaderBackground>
      <RoundedBackground />
      <RecommendedSectionContainer>
        <RecommendedSection recommendedLocations={recommendedLocations} userName={userName} />
      </RecommendedSectionContainer>
      <NearbySectionContainer>
        <NearbyTourSection />
      </NearbySectionContainer>
      <VoiceRecognitionButtonBackground>
        <VoiceRecognitionButtonWrapper>
          <VoiceRecognitionButton
            onClick={() => {
              openModal();
              javaScriptToIOS();
            }}
          />
        </VoiceRecognitionButtonWrapper>
      </VoiceRecognitionButtonBackground>
      {/* 말풍선 이미지 렌더링 */}
      <MessageBubble src={messageImage} alt="음성으로 검색할 수 있어요!" />
      <VoiceRecognitionModal isOpen={isModalOpen} onClose={closeModal} />
    </HomeContainer>
  );
};

export default Home;
