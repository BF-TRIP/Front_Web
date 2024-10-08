import styled from 'styled-components';
import PropTypes from 'prop-types'; 
import { useEffect, useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import Header from './Header'; 
import NextButton from './NextButton'; 
import Title from './onboarding3/Title'; 
import StyleSelection from './onboarding3/StyleSelection'; 

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
`;

const InfoContainer = styled.div`
  padding: 1rem;
`;

const OnboardingThirdStep = ({ progress }) => {
  const [localProgress, setLocalProgress] = useState(progress); 
  const [selectedStyles, setSelectedStyles] = useState([]); 

  const navigate = useNavigate(); 

  useEffect(() => {
    // 페이지 로드 시 부드럽게 75%로 설정
    const timeout = setTimeout(() => {
      setLocalProgress(80);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  const handleNext = () => {
    // 다음 버튼 클릭 시 100%로 설정 후 다음 페이지로 이동
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
        <StyleSelection onSelectionChange={handleStyleSelectionChange} /> 
      </InfoContainer>
      <NextButton onClick={handleNext} /> 
    </Container>
  );
};

OnboardingThirdStep.propTypes = {
  progress: PropTypes.number.isRequired, 
};

export default OnboardingThirdStep;
