import styled from 'styled-components';
import PropTypes from 'prop-types'; 
import { useEffect, useState, useContext } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import Header from './Header'; 
import NextButton from './NextButton'; 
import Title from './onboarding2/Title'; 
import HandicapSelection from './onboarding2/HandicapSelection'; 
import { OnboardingContext } from '../../utils/OnboardingContext'; 

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
`;

const InfoContainer = styled.div`
  padding: 1rem;
`;

const OnboardingSecondStep = ({ progress }) => {
  const { onboardingData, updateOnboardingData } = useContext(OnboardingContext);
  const [selectedHandicaps, setSelectedHandicaps] = useState(onboardingData.selectedHandicaps || {});
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
    const selectedCount = Object.values(selectedHandicaps).filter(Boolean).length;
    if (selectedCount === 0) {
      alert('최소 한 가지 유형을 선택해주세요.');
      return;
    }

    // 현재 상태를 Context에 저장
    updateOnboardingData('selectedHandicaps', selectedHandicaps);

    setLocalProgress(75);
    setTimeout(() => {
      navigate('/onboarding-third'); 
    }, 500);
  };

  const handleBack = () => {
    navigate(-1); 
  };

  const handleHandicapSelectionChange = (newSelections) => {
    setSelectedHandicaps(newSelections); 
  };

  return (
    <Container>
      <Header onBack={handleBack} progress={localProgress} showBackButton={true} />
      <InfoContainer>
        <Title /> 
        <HandicapSelection onSelectionChange={handleHandicapSelectionChange} selectedHandicaps={selectedHandicaps} />
      </InfoContainer>
      <NextButton onClick={handleNext} /> 
    </Container>
  );
};

OnboardingSecondStep.propTypes = {
  progress: PropTypes.number.isRequired, 
};

export default OnboardingSecondStep;
