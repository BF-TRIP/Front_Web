import { useState } from 'react';
import styled from 'styled-components';
import Header from '../../components/header/Header';
import VoiceRecognitionButton from '../../components/home/landing/voice/VoiceRecognitionButton';
import RecommendedSection from '../../components/home/landing/recommendedTour/RecommendedSection';
import NearbyTourSection from '../../components/home/landing/nearbyTour/NearbyTourSection';
import VoiceRecognitionModal from '../../components/home/landing/voice/VoiceRecognitionModal'; 

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [jsIndex, setJsIndex] = useState(0);
  const javascriptArray = [
    "웹 뷰에서 왔습니다.",
    "아이폰 참 좋네요 ㅎㅎㅎ",
    "🧻🧻🧻🧻🧻🧻",
    "집들이 선물입니다",
    "The End"
  ];

  const openModal = () => {
    setIsModalOpen(true);
    // 버튼 클릭 시 메시지를 보내는 로직 추가
    sendMessageToiOS();
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const sendMessageToiOS = () => {
    let text = javascriptArray[jsIndex];
    window.webkit.messageHandlers.textfieldText.postMessage(text);
    
    // 인덱스 업데이트
    let newIndex = jsIndex + 1;
    if (newIndex >= javascriptArray.length) {
      newIndex = 0;
    }
    setJsIndex(newIndex);
  };

  return (
    <HomeContainer>
      <HeaderBackground>
        <Header />
      </HeaderBackground>
      <RoundedBackground />
      <RecommendedSectionContainer>
        <RecommendedSection />
      </RecommendedSectionContainer>
      <NearbySectionContainer>
        <NearbyTourSection />
      </NearbySectionContainer>
      <VoiceRecognitionButtonBackground>
        <VoiceRecognitionButtonWrapper>
          <VoiceRecognitionButton onClick={openModal} />
        </VoiceRecognitionButtonWrapper>
      </VoiceRecognitionButtonBackground>
      <VoiceRecognitionModal isOpen={isModalOpen} onClose={closeModal} />
    </HomeContainer>
  );
};

export default Home;
