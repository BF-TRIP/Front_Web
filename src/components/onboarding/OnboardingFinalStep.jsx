import styled from 'styled-components';
import PropTypes from 'prop-types'; 
import TextSection from './onboarding4/TextSection'; 
import ConfirmButton from './onboarding4/ConfirmButton';
import onboardingImage from '../../assets/images/onboarding.png'; 

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #FFE651; /* 배경색 설정 */
`;

const Image = styled.img`
  width: 17.57663rem;
  height: 14.75rem;
  margin-left: 1.5rem;
  margin-top: 3.5rem; /* 확인 버튼과의 간격 조정 */
`;

const OnboardingFinalStep = ({ onConfirm }) => {
  return (
    <Container>
      <TextSection />
      <ConfirmButton onClick={onConfirm} /> 
      <Image src={onboardingImage} alt="온보딩 이미지" /> 
    </Container>
  );
};

OnboardingFinalStep.propTypes = {
  onConfirm: PropTypes.func.isRequired, 
};

export default OnboardingFinalStep;
