import styled from 'styled-components';
import OnboardingFinalStep from '../../components/onboarding/OnboardingFinalStep'; 

const PageContainer = styled.div`
  width: 390px;
  height: 844px;
  background-color: var(--Color-12, #FFFCE7);
  overflow: hidden;
`;

const OnboardingFinalPage = () => {
  return (
    <PageContainer>
      <OnboardingFinalStep /> 
    </PageContainer>
  );
};

export default OnboardingFinalPage;
