import styled from 'styled-components';
import Header from '../../components/header/Header';
import VoiceRecognitionButton from '../../components/home/landing/voice/VoiceRecognitionButton';
import RecommendedSection from '../../components/home/landing/recommendedTour/RecommendedSection';

const HomeContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  position: relative;
`;

const HeaderBackground = styled.div`
  width: 100%;
  height: 14rem;
  background: var(--Color-5, #FFE651);
  padding-top: 1.5rem;
  padding-left: 1rem;
  z-index: 1;
`;

const RoundedBackground = styled.div`
  width: 100%;
  height: 100%;
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
  top: 12rem; 
  left: 0;
  z-index: 4;
`;

const Home = () => {
  return (
    <HomeContainer>
      <HeaderBackground>
        <Header />
      </HeaderBackground>
      <RoundedBackground />
      <RecommendedSectionContainer>
        <RecommendedSection />
      </RecommendedSectionContainer>
      <VoiceRecognitionButtonBackground>
        <VoiceRecognitionButtonWrapper>
          <VoiceRecognitionButton />
        </VoiceRecognitionButtonWrapper>
      </VoiceRecognitionButtonBackground>
    </HomeContainer>
  );
};

export default Home;
