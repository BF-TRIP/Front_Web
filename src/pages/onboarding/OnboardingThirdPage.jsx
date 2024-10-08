import styled from 'styled-components';
import OnboardingThirdStep from '../../components/onboarding/OnboardingThirdStep'; 

const PageContainer = styled.div`
  width: 390px;
  height: 844px;
  background-color: #fff;
`;

const OnboardingThirdPage = () => {
  return (
    <PageContainer>
      <OnboardingThirdStep progress={75} /> 
    </PageContainer>
  );
};

export default OnboardingThirdPage;
