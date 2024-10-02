import styled from 'styled-components';
import PropTypes from 'prop-types';
import WheelchairIcon from '../../../assets/images/wheelchair.svg';
import FamilyIcon from '../../../assets/images/family.svg';
import StrollerIcon from '../../../assets/images/stroller.svg';
import VisualIcon from '../../../assets/images/visual.svg';
import HearingIcon from '../../../assets/images/hearing.svg';

const CardContainer = styled.div`
  width: 22.375rem;
  height: auto;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 1.125rem;
  padding: 0.62rem;
  background: #FFF;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.08);
`;

const CardImage = styled.img`
  width: 21.125rem;
  height: 9.8125rem;
  border-radius: 0.75rem;
  flex-shrink: 0;
`;

const CardTitleRow = styled.div`
  display: flex;
  align-items: center; 
  padding: 0 0.5rem;
  margin-bottom: 0.5rem;
`;

const CardTitle = styled.div`
  color: #000;
  text-align: center;
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`;

const CardSubtitle = styled.div`
  color: #000;
  text-align: center;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-left: 0.5rem;
`;

const AccessibilityIcons = styled.div`
  display: flex;
  justify-content: space-evenly; 
  align-items: center;
  margin-top: 0.75rem;
  gap: 1.4rem;
`;

const WheelchairIconStyled = styled.img`
  width: 1.75rem;
  height: 2.125rem;
  flex-shrink: 0;
`;

const FamilyIconStyled = styled.img`
  width: 2.125rem;
  height: 2.00719rem;
  flex-shrink: 0;
`;

const StrollerIconStyled = styled.img`
  width: 2.125rem;
  height: 1.94506rem;
  flex-shrink: 0;
`;

const VisualIconStyled = styled.img`
  width: 2.75rem;
  height: 2.75rem;
  flex-shrink: 0;
`;

const HearingIconStyled = styled.img`
  width: 1.625rem;
  height: 2.375rem;
  flex-shrink: 0;
`;

const NearbyTourCard = ({
  image,
  title,
  subtitle,
  accessibility = {
    wheelchair: false,
    family: false,
    stroller: false,
    visual: false,
    hearing: false,
  }
}) => {
  return (
    <CardContainer>
      <CardTitleRow>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
      </CardTitleRow>
      <CardImage src={image} alt={title} />
      <AccessibilityIcons>
        {accessibility.wheelchair && (
          <WheelchairIconStyled src={WheelchairIcon} alt="Wheelchair accessible" />
        )}
        {accessibility.family && (
          <FamilyIconStyled src={FamilyIcon} alt="Family friendly" />
        )}
        {accessibility.stroller && (
          <StrollerIconStyled src={StrollerIcon} alt="Stroller accessible" />
        )}
        {accessibility.visual && (
          <VisualIconStyled src={VisualIcon} alt="Visual aid available" />
        )}
        {accessibility.hearing && (
          <HearingIconStyled src={HearingIcon} alt="Hearing aid available" />
        )}
      </AccessibilityIcons>
    </CardContainer>
  );
};

NearbyTourCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  accessibility: PropTypes.shape({
    wheelchair: PropTypes.bool,
    family: PropTypes.bool,
    stroller: PropTypes.bool,
    visual: PropTypes.bool,
    hearing: PropTypes.bool,
  }),
};

export default NearbyTourCard;
