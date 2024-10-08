import styled from 'styled-components';
import PropTypes from 'prop-types'; 
import backIcon from '../../assets/images/back.svg';

const HeaderContainer = styled.div`
  width: 100%;
  height: 3.25rem;
  display: flex;
  align-items: center;
  background: #fff;
  position: relative;
`;

const BackButton = styled.img`
  width: 0.75rem;
  cursor: pointer;
  position: absolute;
  left: 1rem;
  top: 60%;
  transform: translateY(-50%);
`;

const ProgressBarContainer = styled.div`
  width: 100%; 
  height: 0.25rem;
  background-color: #f3f3f3; 
  margin-top: 0.5rem;
  flex-shrink: 0;
  overflow: hidden;
`;

const ProgressBar = styled.div`
  height: 100%;
  width: ${({ progress }) => progress}%;
  background-color: var(--Color-5, #FFE651);
  transition: width 0.6s ease-in-out; /* 애니메이션 속도 및 효과 조정 */
`;


const Header = ({ onBack, progress, showBackButton }) => {
  return (
    <>
      <HeaderContainer>
        {showBackButton && <BackButton src={backIcon} alt="뒤로가기" onClick={onBack} />}
      </HeaderContainer>
      <ProgressBarContainer>
        <ProgressBar progress={progress} />
      </ProgressBarContainer>
    </>
  );
};

Header.propTypes = {
  onBack: PropTypes.func,
  progress: PropTypes.number.isRequired,
  showBackButton: PropTypes.bool,
};

Header.defaultProps = {
  showBackButton: false, 
};

export default Header;
