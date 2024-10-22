import styled from 'styled-components';
import OnboardingFirstStep from '../../components/onboarding/OnboardingFirstStep'; 

const PageContainer = styled.div`
  position: relative;
  width: 100vw;  // 전체 뷰포트 너비
  max-width: 430px;  // 모바일 기기의 최대 너비 설정
  height: 100vh;  // 전체 뷰포트 높이
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;  
  align-items: center;
  margin: 0 auto; 

  padding-top: env(safe-area-inset-top);  // 상단 Safe Area 적용
  padding-bottom: env(safe-area-inset-bottom);  // 하단 Safe Area 적용
  padding-left: env(safe-area-inset-left);  // 좌측 Safe Area 적용
  padding-right: env(safe-area-inset-right);  // 우측 Safe Area 적용
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
