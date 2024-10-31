// OnboardingFirstStep.js

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

const ErrorMessage = styled.div`
  color: red;
  font-size: 0.875rem;
  margin-top: -0.3rem;
  margin-left: 1.1rem;
`;

const OnboardingFirstStep = ({ onBack }) => {
  const { onboardingData, updateOnboardingData } = useContext(OnboardingContext);
  const [userName, setUserName] = useState(onboardingData.userName || ''); 
  const [gender, setGender] = useState(onboardingData.gender || ''); 
  const [year, setYear] = useState(onboardingData.year || ''); 
  const [month, setMonth] = useState(onboardingData.month || ''); 
  const [day, setDay] = useState(onboardingData.day || ''); 
  const [progress, setProgress] = useState(0); 

  const [nameError, setNameError] = useState('');
  const [genderError, setGenderError] = useState('');
  const [dateError, setDateError] = useState('');

  const navigate = useNavigate(); 

  useEffect(() => {
    // iOS에서 UUID를 받는 함수
    window.iOSToJavaScript = (receivedUuid) => {
      updateOnboardingData('uuid', receivedUuid);  
      console.log('Received UUID from iOS:', receivedUuid);
    };

    return () => {
      delete window.iOSToJavaScript;
    };
  }, [updateOnboardingData])
  
  useEffect(() => {
    // 페이지 로드 시 0에서 33%까지 부드럽게 진행
    const timeout = setTimeout(() => {
      setProgress(33); 
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  const handleNameChange = (e) => {
    setUserName(e.target.value); 
    setNameError(''); 
  };

  const handleGenderSelect = (selectedGender) => {
    setGender(selectedGender);
    setGenderError('');
  };

  const handleYearChange = (e) => {
    setYear(e.target.value);
    setDateError(''); 
  };

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
    setDateError(''); 
  };

  const handleDayChange = (e) => {
    setDay(e.target.value);
    setDateError('');
  };

  const isFormValid = () => {
    if (!userName || !gender || !year || !month || !day) {
      return false;
    }
    return true;
  };

  const handleNext = () => {
    if (!isFormValid()) {
      if (!userName) setNameError('이름을 입력해주세요.');
      if (!gender) setGenderError('성별을 선택해주세요.');
      if (!year || !month || !day) setDateError('생년월일을 입력해주세요.');
      return;
    }

    updateOnboardingData('userName', userName);
    updateOnboardingData('gender', gender);
    updateOnboardingData('year', year);
    updateOnboardingData('month', month);
    updateOnboardingData('day', day);

    setProgress(50);
    
    setTimeout(() => {
      navigate('/onboarding-second');
    }, 500);
  };
  
  return (
    <Container>
      <Header onBack={onBack} progress={progress} />
      <InfoContainer> 
        <NameInputSection value={userName} onChange={handleNameChange} />
        {nameError && <ErrorMessage>{nameError}</ErrorMessage>} 

        <GenderSelectionSection selectedGender={gender} onGenderSelect={handleGenderSelect} />
        {genderError && <ErrorMessage>{genderError}</ErrorMessage>} 

        <BirthdaySection 
          year={year} 
          month={month} 
          day={day} 
          onYearChange={handleYearChange} 
          onMonthChange={handleMonthChange} 
          onDayChange={handleDayChange} 
        />
        {dateError && <ErrorMessage>{dateError}</ErrorMessage>} 
      </InfoContainer>
      <NextButton onClick={handleNext} /> 
    </Container>
  );
};

OnboardingFirstStep.propTypes = {
  onBack: PropTypes.func.isRequired, 
};

export default OnboardingFirstStep;
