import styled from 'styled-components';
import PropTypes from 'prop-types'; 
import { useContext } from 'react'; 
import { OnboardingContext } from '../../utils/OnboardingContext'; 
import TextSection from './onboarding4/TextSection'; 
import ConfirmButton from './onboarding4/ConfirmButton';
import onboardingImage from '../../assets/images/onboarding.png'; 

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
    const { onboardingData } = useContext(OnboardingContext);
  
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
          userName: userName,
          gender: gender,
          age: age.toString(),
          senior: selectedHandicaps.senior || false,
          wheelchair: selectedHandicaps.wheelchair || false,
          blindHandicap: selectedHandicaps.blindHandicap || false,
          hearingHandicap: selectedHandicaps.hearingHandicap || false,
          infantsFamily: selectedHandicaps.infantsFamily || false,
          travelType: selectedStyles
        };
      };
  
    const handleSubmit = () => {
      const requestData = formatRequestData();
      console.log("최종 온보딩 데이터:", requestData);
      onConfirm();
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

// 기본값 설정
OnboardingFinalStep.defaultProps = {
  onConfirm: () => {},
};

export default OnboardingFinalStep;
