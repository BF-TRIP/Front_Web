import styled from 'styled-components';
import PropTypes from 'prop-types'; 
import OnboardingSecondStep from '../../components/onboarding/OnboardingSecondStep'; 

const PageContainer = styled.div`
  position: relative;
  width: 390px;
  height: 844px;
  background-color: #fff;
  overflow: hidden;
`;

const OnboardingSecondPage = ({ onBack }) => {
  return (
    <PageContainer>
      <OnboardingSecondStep onBack={onBack} progress={50} /> 
    </PageContainer>
  );
};

OnboardingSecondPage.propTypes = {
  onBack: PropTypes.func.isRequired, 
};

export default OnboardingSecondPage;
