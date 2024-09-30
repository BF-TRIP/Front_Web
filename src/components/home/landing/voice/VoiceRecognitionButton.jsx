import PropTypes from 'prop-types'; 
import styled from 'styled-components';
import VoiceIconBackground from '../../../../assets/images/VoiceBg.svg'; 
import VoiceIcon from '../../../../assets/images/VoiceIcon.svg'; 

const VoiceRecognitionButtonWrapper = styled.button`
  position: relative;
  width: 8rem;
  height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  outline: none;
  
  &:focus {
    outline: none;
  }
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

const VoiceRecognitionButton = ({ onClick }) => {
  return (
    <VoiceRecognitionButtonWrapper onClick={onClick}>
      <VoiceIconBackgroundSVG src={VoiceIconBackground} alt="Voice Recognition Background" />
      <VoiceIconImage src={VoiceIcon} alt="Voice Recognition Icon" />
    </VoiceRecognitionButtonWrapper>
  );
};

VoiceRecognitionButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default VoiceRecognitionButton;
