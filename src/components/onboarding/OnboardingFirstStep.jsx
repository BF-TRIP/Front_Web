import styled from 'styled-components';
import PropTypes from 'prop-types'; 
import { useState } from 'react'; 
import Header from './Header'; 
import NameInputSection from './onboarding1/NameInputSection'; 
import GenderSelectionSection from './onboarding1/GenderSelectionSection';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
`;

const OnboardingFirstStep = ({ onBack, progress }) => {
  const [name, setName] = useState(''); // 이름 입력 상태 관리
  const [gender, setGender] = useState(''); // 성별 선택 상태 관리

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleGenderSelect = (selectedGender) => {
    setGender(selectedGender); // 성별 선택 상태 업데이트
  };

  return (
    <Container>
      <Header onBack={onBack} progress={progress} />
      <NameInputSection value={name} onChange={handleNameChange} />
      <GenderSelectionSection selectedGender={gender} onGenderSelect={handleGenderSelect} />
    </Container>
  );
};

OnboardingFirstStep.propTypes = {
  onBack: PropTypes.func.isRequired, 
  progress: PropTypes.number.isRequired, 
};

export default OnboardingFirstStep;
