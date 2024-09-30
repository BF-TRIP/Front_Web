import styled from 'styled-components';
import VoiceIconBackground from '../../../../assets/images/VoiceBg.svg'; 
import VoiceIcon from '../../../../assets/images/VoiceIcon.svg'; 

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
  width: 2.11938rem;
  height: 3.33056rem;
  z-index: 1; 
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
