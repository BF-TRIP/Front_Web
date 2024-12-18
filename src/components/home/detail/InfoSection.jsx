import styled from 'styled-components';
import PropTypes from 'prop-types';
import FacilityInfo from './Info/FacilityInfo';
import DetailedFacilityInfo from './Info/DetailedFacilityInfo';
import LocationInfo from './Info/LocationInfo'

const InfoSectionContainer = styled.div`
  padding: 1rem;
  background-color: #fff;
  margin-bottom: 0.5rem;
`;

const SectionTitle = styled.div`
  color: #000;
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: -0.0175rem;
  margin-bottom: 0.75rem;

  ${({ isLocation }) => isLocation && `
    margin-top: 2.57rem;
  `}
`;

const InfoSection = ({ details }) => {

  const {
    wheelchair,
    restroom,
    stroller,
    braileBlock,
    hearingHandicapEtc,
    guideHuman,
    helpDog,
    signGuide,
    publicTransport,
    gpsX, 
    gpsY,
  } = details;

  return (
    <InfoSectionContainer>
      <SectionTitle>시설물 정보</SectionTitle>
      <FacilityInfo 
        wheelchair={!!wheelchair || !!restroom || !!publicTransport}  
        family={!!guideHuman || !!signGuide}    
        stroller={!!stroller}                  
        visual={!!braileBlock || !!helpDog}   
        hearing={!!hearingHandicapEtc}         
      />
      
      <SectionTitle>세부 시설물 정보</SectionTitle>
      <DetailedFacilityInfo
        visualImpairmentInfo={guideHuman || braileBlock || ''} 
        wheelchairInfo={[wheelchair, restroom, publicTransport].filter(Boolean).join(', ') || ''} 
        hearingImpairmentInfo={hearingHandicapEtc || signGuide || ''} 
        familyInfo={stroller || ''} 
        elderlyInfo={publicTransport || ''} 
        helpDog={helpDog || ''}  
      />

      <SectionTitle isLocation>위치 정보</SectionTitle>
      {gpsX && gpsY ? (
        <LocationInfo gpsX={gpsX} gpsY={gpsY} />
      ) : (
        <p>위치 정보가 제공되지 않았습니다.</p>
      )}

    </InfoSectionContainer>
  );
};

InfoSection.propTypes = {
  details: PropTypes.shape({
    wheelchair: PropTypes.string,
    restroom: PropTypes.string,
    stroller: PropTypes.string,
    braileBlock: PropTypes.string,
    hearingHandicapEtc: PropTypes.string,
    guideHuman: PropTypes.string,
    helpDog: PropTypes.string,  
    signGuide: PropTypes.string,
    publicTransport: PropTypes.string, 
    gpsX: PropTypes.number,
    gpsY: PropTypes.number,
  }).isRequired,
};

export default InfoSection;
