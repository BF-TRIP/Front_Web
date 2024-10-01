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
  line-height: 150%; /* 2.0625rem */
`;

const CardSubtitle = styled.div`
  color: #000;
  text-align: center;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 1.125rem */
  margin-left: 0.5rem;
`;

const AccessibilityIcons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.75rem;
`;

const AccessibilityIcon = styled.img`
  width: 24px;
  height: 24px;
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
          <AccessibilityIcon src={WheelchairIcon} alt="Wheelchair accessible" />
        )}
        {accessibility.family && (
          <AccessibilityIcon src={FamilyIcon} alt="Family friendly" />
        )}
        {accessibility.stroller && (
          <AccessibilityIcon src={StrollerIcon} alt="Stroller accessible" />
        )}
        {accessibility.visual && (
          <AccessibilityIcon src={VisualIcon} alt="Visual aid available" />
        )}
        {accessibility.hearing && (
          <AccessibilityIcon src={HearingIcon} alt="Hearing aid available" />
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
