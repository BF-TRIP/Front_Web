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
  width: 1rem;
  height: 1.5rem;
  cursor: pointer;
  position: absolute;
  left: 1rem;
  top: 50%;
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
  transition: width 0.3s ease;
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

// PropTypes 추가
Header.propTypes = {
  onBack: PropTypes.func,
  progress: PropTypes.number.isRequired,
  showBackButton: PropTypes.bool, // 뒤로 가기 버튼 표시 여부 prop 추가
};

Header.defaultProps = {
  showBackButton: false, // 기본값은 false로 설정
};

export default Header;
