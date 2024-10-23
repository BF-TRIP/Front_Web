import styled from 'styled-components';
import PropTypes from 'prop-types'; 
import { useEffect, useState, useContext } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import Header from './Header'; 
import NextButton from './NextButton'; 
import Title from './onboarding3/Title'; 
import StyleSelection from './onboarding3/StyleSelection'; 
import { OnboardingContext } from '../../utils/OnboardingContext'; 

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
`;

const InfoContainer = styled.div`
  padding: 1rem;
`;

const OnboardingThirdStep = ({ progress }) => {
  const { onboardingData, updateOnboardingData } = useContext(OnboardingContext);
  const [localProgress, setLocalProgress] = useState(progress); 
  const [selectedStyles, setSelectedStyles] = useState(onboardingData.selectedStyles || []); 

  const navigate = useNavigate(); 

  useEffect(() => {
    // 페이지 로드 시 부드럽게 75%로 설정
    const timeout = setTimeout(() => {
      setLocalProgress(75);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  const handleNext = () => {
    if (selectedStyles.length === 0) {
      alert('최소 한 가지 여행 스타일을 선택해주세요.');
      return;
    }

    // 현재 선택된 스타일을 Context에 저장
    updateOnboardingData('selectedStyles', selectedStyles);

    setLocalProgress(100);
    setTimeout(() => {
      console.log("선택된 스타일:", selectedStyles); 
      navigate('/onboarding-final'); 
    }, 500);
  };

  const handleBack = () => {
    navigate(-1); 
  };

  const handleStyleSelectionChange = (styles) => {
    setSelectedStyles(styles);
  };

  return (
    <Container>
      <Header onBack={handleBack} progress={localProgress} showBackButton={true} />
      <InfoContainer>
        <Title /> 
        <StyleSelection onSelectionChange={handleStyleSelectionChange} selectedStyles={selectedStyles} />
      </InfoContainer>
      <NextButton onClick={handleNext} /> 
    </Container>
  );
};

OnboardingThirdStep.propTypes = {
  progress: PropTypes.number.isRequired, 
};

export default OnboardingThirdStep;
