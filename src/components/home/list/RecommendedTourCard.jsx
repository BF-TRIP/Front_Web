import styled from 'styled-components';
import PropTypes from 'prop-types';
import WheelchairIcon from '../../../assets/images/senior.png';
import FamilyIcon from '../../../assets/images/wheelchair.png';
import StrollerIcon from '../../../assets/images/infant.png';
import VisualIcon from '../../../assets/images/blind.png';
import HearingIcon from '../../../assets/images/deaf.png';

const CardContainer = styled.div`
  width: 100%; 
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.08);
  margin-bottom: 1rem;
  overflow: hidden;
`;

const CardImage = styled.div`
  width: 100%;
  height: 12rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  background-image: ${(props) =>
    props.imageUrl ? `url(${props.imageUrl})` : 'none'};
  background-color: #ddd;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlaceholderIcon = styled.img`
  width: 3rem;
  opacity: 0.5;
  display: ${(props) => (props.imageUrl ? 'none' : 'block')};  
`;

const CardTitleRow = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
`;

const CardTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;
  color: #000;
`;

const CardSubtitle = styled.p`
  font-size: 0.875rem;
  color: #7a7a7a;
  margin-left: 0.53rem;
`;

const AccessibilityIcons = styled.div`
  display: flex;
  justify-content: space-around;
  padding-bottom: 1rem;
`;

const Icon = styled.img`
  width: auto;
  height: 2.5rem;
  opacity: ${(props) => (props.isActive ? '1' : '0.3')};
`;

const RecommendedTourCard = ({
  imageUrl,
  title,
  address,
  publicTransport,
  wheelchair,
  stroller,
  braileBlock,
  hearingHandicapEtc,
}) => {
  return (
    <CardContainer>
      <CardImage imageUrl={imageUrl}>
        <PlaceholderIcon src="src/assets/images/image.png" alt="Placeholder Icon" imageUrl={imageUrl} />
      </CardImage>
      <CardTitleRow>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{address}</CardSubtitle>
      </CardTitleRow>
      <AccessibilityIcons>
        <Icon 
          src={FamilyIcon} 
          alt="Family Friendly" 
          isActive={!!publicTransport} 
        />
        <Icon 
          src={WheelchairIcon} 
          alt="Wheelchair Accessible" 
          isActive={!!wheelchair} 
        />
        <Icon 
          src={VisualIcon} 
          alt="Braille Block" 
          isActive={!!braileBlock} 
        />
        <Icon 
          src={StrollerIcon} 
          alt="Stroller Accessible" 
          isActive={!!stroller} 
        />

        <Icon 
          src={HearingIcon} 
          alt="Hearing Aid Accessible" 
          isActive={!!hearingHandicapEtc} 
        />
      </AccessibilityIcons>
    </CardContainer>
  );
};

RecommendedTourCard.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  publicTransport: PropTypes.string,
  wheelchair: PropTypes.string,
  stroller: PropTypes.string,
  braileBlock: PropTypes.string,
  hearingHandicapEtc: PropTypes.string,
};

export default RecommendedTourCard;
