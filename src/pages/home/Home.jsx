import { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../../components/header/Header';
import VoiceRecognitionButton from '../../components/home/landing/voice/VoiceRecognitionButton';
import RecommendedSection from '../../components/home/landing/recommendedTour/RecommendedSection';
import NearbyTourSection from '../../components/home/landing/nearbyTour/NearbyTourSection';
import messageImage from '../../assets/images/message.png';
import getNearbyLocations from '../../api/home/getNearbyLocations';
import { OnboardingContext } from '../../utils/OnboardingContext'; 

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
  const { onboardingData, updateOnboardingData } = useContext(OnboardingContext);
  const userNumber = state?.userNumber || onboardingData.userNumber || null;
  const userName = state?.userName || onboardingData.userName || '사용자';
  const [nearbyLocations, setNearbyLocations] = useState([]);

  useEffect(() => {
    if (state?.userNumber && !onboardingData.userNumber) {
      updateOnboardingData('userNumber', state.userNumber);
      localStorage.setItem('userNumber', state.userNumber); 
    }
  }, [state, updateOnboardingData, onboardingData]);

  const fetchNearbyLocations = async (gpsX, gpsY) => {
    try {
      const data = await getNearbyLocations(gpsX, gpsY, userNumber);
      setNearbyLocations(data);
    } catch (error) {
      console.error('내 위치 주변 관광지 데이터 불러오기 실패:', error);
    }
  };

  // iOS에서 좌표 데이터를 전달받는 함수
  useEffect(() => {
    window.iOSToJavaScript = function(gpsX, gpsY) {
      console.log('iOS로부터 받은 좌표:', gpsX, gpsY);

      if (userNumber) {
        fetchNearbyLocations(gpsX, gpsY);  
      }
    };
  }, [userNumber]);


  // iOS와의 통신 함수 추가
  const javaScriptToIOS = () => {
    if (window.webkit?.messageHandlers?.serverEvent) {
      console.log('Send Event');
      window.webkit.messageHandlers.serverEvent.postMessage('Voice');
    } else {
      console.log('Cannot send event');
    }
  };

  return (
    <HomeContainer>
      <HeaderBackground>
        <Header />
      </HeaderBackground>
      <RoundedBackground />
      <RecommendedSectionContainer>
        <RecommendedSection userName={userName} />
      </RecommendedSectionContainer>
      <NearbySectionContainer>
        <NearbyTourSection nearbyLocations={nearbyLocations} userNumber={userNumber} /> 
      </NearbySectionContainer>

      <VoiceRecognitionButtonBackground>
        <VoiceRecognitionButtonWrapper>
          <VoiceRecognitionButton
            onClick={() => {
              javaScriptToIOS(); 
            }}
          />
        </VoiceRecognitionButtonWrapper>
      </VoiceRecognitionButtonBackground>
      <MessageBubble src={messageImage} alt="음성으로 검색할 수 있어요!" />
    </HomeContainer>
  );
};

export default Home;
