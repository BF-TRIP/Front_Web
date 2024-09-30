import styled from 'styled-components';
import Header from '../../components/header/Header';
import VoiceRecognitionButton from '../../components/home/landing/VoiceRecognitionButton'; // 음성인식 버튼 컴포넌트 임포트
import VoiceInfoImage from '../../assets/images/VoiceInfo.png'; // 말풍선 이미지 임포트

const HomeContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  position: relative; /* 절대 위치 기준 */
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
  background-color: #F6F5FA;
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
  background: #F6F5FA;
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
  margin-top: -2rem; /* 버튼을 위로 이동시킴 */
`;

const VoiceInfoImageWrapper = styled.img`
  position: absolute;
  top: -2rem; /* 버튼 위에 위치시키는 조정값 */
  left: 100%;
  transform: translateX(-50%);
  z-index: 4; /* 버튼보다 위에 위치 */
`;

const Home = () => {
  return (
    <HomeContainer>
      <HeaderBackground>
        <Header />
      </HeaderBackground>
      <RoundedBackground />
      <VoiceRecognitionButtonBackground>
        <VoiceRecognitionButtonWrapper>
          <VoiceRecognitionButton /> {/* 음성인식 버튼 추가 */}
        </VoiceRecognitionButtonWrapper>
        <VoiceInfoImageWrapper src={VoiceInfoImage} alt="Voice Info" />
      </VoiceRecognitionButtonBackground>
    </HomeContainer>
  );
};

export default Home;
