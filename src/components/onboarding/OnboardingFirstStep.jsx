import styled from 'styled-components';
import PropTypes from 'prop-types'; 
import { useState, useEffect, useContext } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import Header from './Header'; 
import NameInputSection from './onboarding1/NameInputSection'; 
import GenderSelectionSection from './onboarding1/GenderSelectionSection';
import BirthdaySection from './onboarding1/BirthdaySection'; 
import NextButton from './NextButton'; 
import { OnboardingContext } from '../../utils/OnboardingContext'; 

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InfoContainer = styled.div`
  padding: 0.8rem;
  flex-grow: 1; 
`;

const OnboardingFirstStep = ({ onBack }) => {
  const { onboardingData, updateOnboardingData } = useContext(OnboardingContext);
  const [userName, setUserName] = useState(onboardingData.userName || ''); 
  const [gender, setGender] = useState(onboardingData.gender || ''); 
  const [year, setYear] = useState(onboardingData.year || ''); 
  const [month, setMonth] = useState(onboardingData.month || ''); 
  const [day, setDay] = useState(onboardingData.day || ''); 
  const [progress, setProgress] = useState(0); 

  const navigate = useNavigate(); 

  useEffect(() => {
    // 페이지 로드 시 0에서 33%까지 부드럽게 진행
    const timeout = setTimeout(() => {
      setProgress(33); 
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  const handleNameChange = (e) => {
    setUserName(e.target.value); 
  };

  const handleGenderSelect = (selectedGender) => {
    setGender(selectedGender);
  };

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
  };

  const handleDayChange = (e) => {
    setDay(e.target.value);
  };
  
  const handleNext = () => {
    // 현재 상태를 Context에 저장
    updateOnboardingData('userName', userName);
    updateOnboardingData('gender', gender);
    updateOnboardingData('year', year);
    updateOnboardingData('month', month);
    updateOnboardingData('day', day);
  
    // 다음 버튼 클릭 시 33%에서 50%로 부드럽게 증가
    setProgress(50);
    
    // 0.5초 뒤에 두 번째 페이지로 이동
    setTimeout(() => {
      navigate('/onboarding-second');
    }, 500);
  };
  
  return (
    <Container>
      <Header onBack={onBack} progress={progress} />
      <InfoContainer> 
        <NameInputSection value={userName} onChange={handleNameChange} /> {/* userName으로 변경 */}
        <GenderSelectionSection selectedGender={gender} onGenderSelect={handleGenderSelect} />
        <BirthdaySection 
          year={year} 
          month={month} 
          day={day} 
          onYearChange={handleYearChange} 
          onMonthChange={handleMonthChange} 
          onDayChange={handleDayChange} 
        />
      </InfoContainer>
      <NextButton onClick={handleNext} /> 
    </Container>
  );
};

OnboardingFirstStep.propTypes = {
  onBack: PropTypes.func.isRequired, 
};

export default OnboardingFirstStep;
