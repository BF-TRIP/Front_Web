import styled from 'styled-components';

const OnboardingContainer = styled.div`
  display: flex;
  background-color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
`;

const ConfirmButton = styled.button`
  padding: 1rem 2rem;
  margin-top: 2rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.2rem;

  &:hover {
    background-color: #0056b3;
  }
`;

const Onboarding = () => {
    const handleConfirmClick = () => {
        // 웹뷰 환경에서만 postMessage를 호출하도록 조건 추가
        if (window.ReactNativeWebView && window.ReactNativeWebView.postMessage) {
          window.ReactNativeWebView.postMessage(
            JSON.stringify({ action: 'navigateToHome' })
          );
        } else {
          console.warn('웹뷰 환경이 아닙니다. Swift와의 통신이 작동하지 않습니다.');
        }
      };
      

  return (
    <OnboardingContainer>
      <h1>온보딩 페이지</h1>
      <ConfirmButton onClick={handleConfirmClick}>확인</ConfirmButton>
    </OnboardingContainer>
  );
};

export default Onboarding;
