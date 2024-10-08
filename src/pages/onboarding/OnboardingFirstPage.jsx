import styled from 'styled-components';
import OnboardingFirstStep from '../../components/onboarding/OnboardingFirstStep'; 

const PageContainer = styled.div`
  position: relative;
  width: 390px;
  height: 844px;
  background-color: #fff;
`;

const OnboardingFirstPage = () => {
  const handleBack = () => {
    // 뒤로가기 로직
    console.log('뒤로 가기');
  };

  return (
    <PageContainer>
      <OnboardingFirstStep onBack={handleBack} progress={25} />
    </PageContainer>
  );
};

export default OnboardingFirstPage;
