import styled from 'styled-components';
import PropTypes from 'prop-types'; 
import VoiceBackground from '../../../../assets/images/VoiceBg2.svg'; 

const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background-color: #f6f5fa;
  width: 100%;
  height: 31.58913rem;
  padding: 2rem;
  text-align: center;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0.2rem;
  right: 1rem;
  background: none;
  border: none;
  font-weight: 300;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
  
  &:focus {
    outline: none;
  }
`;

const Title = styled.h2`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  margin-top: 5.43rem;
`;

const Subtitle = styled.p`
  color: #A1A5AC;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  margin-top: 2rem;
`;


const VoiceRecognitionWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 6.37rem; /* 아이콘 위치 조정 */
`;

const VoiceBackgroundImage = styled.img`
  position: absolute;
  width: 11rem;
  z-index: 0; 
`;

const VoiceRecognitionModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>×</CloseButton>
        <Title>듣고 있어요!</Title>
        <Subtitle>다음과 같이 말해보세요<br />&quot;서울 지체장애인 관광지&quot;</Subtitle>
        <VoiceRecognitionWrapper>
          <VoiceBackgroundImage src={VoiceBackground} alt="Voice Background" />
        </VoiceRecognitionWrapper>
      </ModalContainer>
    </ModalOverlay>
  );
};

VoiceRecognitionModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default VoiceRecognitionModal;
