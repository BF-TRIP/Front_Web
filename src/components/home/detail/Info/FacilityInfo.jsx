import styled from 'styled-components';
import PropTypes from 'prop-types';
import wheelchairIcon from '../../../../assets/images/wheelchair.svg'; 
import familyIcon from '../../../../assets/images/family.svg'; 
import strollerIcon from '../../../../assets/images/stroller.svg'; 
import visualIcon from '../../../../assets/images/visual.svg'; 
import hearingIcon from '../../../../assets/images/hearing.svg'; 

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

const WheelchairIconStyled = styled.img`
  width: 1.94888rem;
  height: 2.3665rem;
`;

const FamilyIconStyled = styled.img`
width: 2.3665rem;
height: 2.58144rem;
`;

const StrollerIconStyled = styled.img`
width: 2.3665rem;
height: 2.16613rem;
`;

const VisualIconStyled = styled.img`
width: 2.875rem;
height: 2.875rem;
`;

const HearingIconStyled = styled.img`
width: 1.80969rem;
height: 2.64488rem;
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
        {wheelchair && (
          <WheelchairIconStyled src={wheelchairIcon} alt="Wheelchair accessible" />
        )}
        {family && (
          <FamilyIconStyled src={familyIcon} alt="Family friendly" />
        )}
        {stroller && (
          <StrollerIconStyled src={strollerIcon} alt="Stroller accessible" />
        )}
        {visual && (
          <VisualIconStyled src={visualIcon} alt="Visual aid available" />
        )}
        {hearing && (
          <HearingIconStyled src={hearingIcon} alt="Hearing aid available" />
        )}
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
