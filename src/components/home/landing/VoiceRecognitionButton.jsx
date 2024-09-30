import styled from 'styled-components';
import VoiceIconBackground from '../../../assets/images/VoiceBg.svg'; // 흰색 원 SVG
import VoiceIcon from '../../../assets/images/VoiceIcon.svg'; // 음성인식 아이콘 SVG

const VoiceRecognitionButtonWrapper = styled.div`
  position: relative;
  width: 8rem;
  height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const VoiceIconBackgroundSVG = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const VoiceIconImage = styled.img`
  width: 2.11938rem;  /* 음성인식 아이콘 크기 */
  height: 3.33056rem;
  z-index: 1;  /* 아이콘이 흰색 원 위에 표시되도록 */
`;

const VoiceRecognitionButton = () => {
  return (
    <VoiceRecognitionButtonWrapper>
      <VoiceIconBackgroundSVG src={VoiceIconBackground} alt="Voice Recognition Background" />
      <VoiceIconImage src={VoiceIcon} alt="Voice Recognition Icon" />
    </VoiceRecognitionButtonWrapper>
  );
};

export default VoiceRecognitionButton;
