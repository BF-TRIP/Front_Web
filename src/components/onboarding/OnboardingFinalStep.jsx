import styled from 'styled-components';
import PropTypes from 'prop-types'; 
import { useContext } from 'react'; 
import { OnboardingContext } from '../../utils/OnboardingContext'; 
import sendOnboardingData from '../../api/onboarding/sendOnboardingData';  
import TextSection from './onboarding4/TextSection'; 
import ConfirmButton from './onboarding4/ConfirmButton';
import onboardingImage from '../../assets/images/onboarding.png'; 
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #FFE651; 
`;

const Image = styled.img`
  width: 17.57663rem;
  height: 14.75rem;
  margin-left: 1.5rem;
  margin-top: 3.5rem; 
`;

const OnboardingFinalStep = ({ onConfirm }) => {
  const { onboardingData, updateOnboardingData } = useContext(OnboardingContext); // Context 사용
  const navigate = useNavigate();
  
  const calculateAge = (year) => {
    const currentYear = new Date().getFullYear();
    return currentYear - parseInt(year, 10);
  };

  const formatRequestData = () => {
    const {
      userName,
      gender,
      year,
      selectedHandicaps,
      selectedStyles
    } = onboardingData;
    
    const age = calculateAge(year);
    
    return {
      userName,
      gender,
      age: age.toString(),
      senior: selectedHandicaps.senior || false,
      wheelchair: selectedHandicaps.wheelchair || false,
      blindHandicap: selectedHandicaps.blindHandicap || false,
      hearingHandicap: selectedHandicaps.hearingHandicap || false,
      infantsFamily: selectedHandicaps.infantsFamily || false,
      travelType: selectedStyles,
    };
  };

  const handleSubmit = async () => {
    const requestData = formatRequestData();
    console.log("최종 온보딩 데이터:", requestData);
  
    try {
      const response = await sendOnboardingData(requestData);
      console.log('응답 데이터:', response);
  
      // userNumber와 userName을 Context에 저장
      updateOnboardingData('userNumber', response.userNumber);
      updateOnboardingData('userName', response.userName);
  
      console.log('저장된 userNumber:', response.userNumber);
      console.log('저장된 userName:', response.userName);

      console.log('온보딩 후 저장된 userNumber:', onboardingData.userNumber);
      console.log('온보딩 후 저장된 userName:', onboardingData.userName);
  
      navigate('/home', { state: { userNumber: response.userNumber, userName: response.userName } });

  
      onConfirm();
    } catch (error) {
      console.error('온보딩 데이터 전송 실패:', error);
    }
  };
  

  return (
    <Container>
      <TextSection />
      <ConfirmButton onClick={handleSubmit} /> 
      <Image src={onboardingImage} alt="온보딩 이미지" /> 
    </Container>
  );
};

OnboardingFinalStep.propTypes = {
  onConfirm: PropTypes.func.isRequired, 
};

OnboardingFinalStep.defaultProps = {
  onConfirm: () => {},
};

export default OnboardingFinalStep;