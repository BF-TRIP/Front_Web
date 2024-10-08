import styled from 'styled-components';
import PropTypes from 'prop-types'; 
import { useEffect, useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import Header from './Header'; 
import NextButton from './NextButton'; 
import Title from './onboarding2/Title'; 
import HandicapSelection from './onboarding2/HandicapSelection'; 

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
`;

const InfoContainer = styled.div`
  padding: 1rem;
`;

const OnboardingSecondStep = ({ progress }) => {
  const [localProgress, setLocalProgress] = useState(progress); 
  const navigate = useNavigate(); 

  useEffect(() => {
    // 페이지 로드 시 부드럽게 50%로 설정
    const timeout = setTimeout(() => {
      setLocalProgress(50);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  const handleNext = () => {
    setLocalProgress(80);
    setTimeout(() => {
      navigate('/onboarding-third'); 
    }, 500);
  };

  const handleBack = () => {
    navigate(-1); 
  };

  return (
    <Container>
      <Header onBack={handleBack} progress={localProgress} showBackButton={true} />
      <InfoContainer>
        <Title /> 
        <HandicapSelection />
      </InfoContainer>
      <NextButton onClick={handleNext} /> 
    </Container>
  );
};

OnboardingSecondStep.propTypes = {
  progress: PropTypes.number.isRequired, 
};

export default OnboardingSecondStep;
