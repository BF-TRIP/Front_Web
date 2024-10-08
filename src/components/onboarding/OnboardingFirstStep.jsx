import styled from 'styled-components';
import PropTypes from 'prop-types'; 
import { useState } from 'react'; 
import Header from './Header'; 
import NameInputSection from './onboarding1/NameInputSection'; 
import GenderSelectionSection from './onboarding1/GenderSelectionSection';
import BirthdaySection from './onboarding1/BirthdaySection'; 
import NextButton from './NextButton'; 

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

const OnboardingFirstStep = ({ onBack, progress, onNext }) => {
  const [name, setName] = useState(''); // 이름 입력 상태 관리
  const [gender, setGender] = useState(''); // 성별 선택 상태 관리
  const [year, setYear] = useState(''); // 생년 상태 관리
  const [month, setMonth] = useState(''); // 월 상태 관리
  const [day, setDay] = useState(''); // 일 상태 관리

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleGenderSelect = (selectedGender) => {
    setGender(selectedGender); // 성별 선택 상태 업데이트
  };

  const handleYearChange = (e) => {
    setYear(e.target.value); // 생년 상태 업데이트
  };

  const handleMonthChange = (e) => {
    setMonth(e.target.value); // 월 상태 업데이트
  };

  const handleDayChange = (e) => {
    setDay(e.target.value); // 일 상태 업데이트
  };

  return (
    <Container>
      <Header onBack={onBack} progress={progress} />
      <InfoContainer> 
        <NameInputSection value={name} onChange={handleNameChange} />
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
      <NextButton onClick={onNext} /> 
    </Container>
  );
};

OnboardingFirstStep.propTypes = {
  onBack: PropTypes.func.isRequired, 
  progress: PropTypes.number.isRequired, 
  onNext: PropTypes.func.isRequired, 
};

export default OnboardingFirstStep;
