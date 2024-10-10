import styled from 'styled-components';
import PropTypes from 'prop-types';
import WheelchairIcon from '../../../../assets/images/senior.png';
import FamilyIcon from '../../../../assets/images/wheelchair.png';
import StrollerIcon from '../../../../assets/images/infant.png';
import VisualIcon from '../../../../assets/images/blind.png';
import HearingIcon from '../../../../assets/images/deaf.png';

const FacilityInfoContainer = styled.div`
  display: flex;
  justify-content: center;  
`;

const AccessibilityIcons = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center;
  gap: 2.31rem;
`;

const Icon = styled.img`
  width: auto;
  height: 2.5rem;
  opacity: ${(props) => (props.isActive ? '1' : '0.2')}; 
`;

const Divider = styled.div`
  width: 21.875rem;
  height: 0.0625rem;
  background-color: #F5F5F5;
  margin: 1rem 0; 
`;

const FacilityInfo = ({ wheelchair, family, stroller, visual, hearing }) => {
  return (
    <>
    <FacilityInfoContainer>
      <AccessibilityIcons>
        <Icon src={FamilyIcon} alt="Family Friendly" isActive={!!family} />
        <Icon src={WheelchairIcon} alt="Wheelchair Accessible" isActive={!!wheelchair} />
        <Icon src={VisualIcon} alt="Braille Block" isActive={!!visual} />
        <Icon src={StrollerIcon} alt="Stroller Accessible" isActive={!!stroller} />
        <Icon src={HearingIcon} alt="Hearing Aid Accessible" isActive={!!hearing} />
      </AccessibilityIcons>
    </FacilityInfoContainer>
    <Divider />
    </>
  );
};

FacilityInfo.propTypes = {
  wheelchair: PropTypes.bool,
  family: PropTypes.bool,
  stroller: PropTypes.bool,
  visual: PropTypes.bool,
  hearing: PropTypes.bool,
};

FacilityInfo.defaultProps = {
  wheelchair: false,
  family: false,
  stroller: false,
  visual: false,
  hearing: false,
};

export default FacilityInfo;
