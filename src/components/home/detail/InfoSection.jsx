import styled from 'styled-components';
import FacilityInfo from './Info/FacilityInfo';

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
`;

const InfoSection = () => {
  return (
    <InfoSectionContainer>
      <SectionTitle>시설물 정보</SectionTitle>
      <FacilityInfo 
        wheelchair={true} 
        family={true} 
        stroller={true} 
        visual={true} 
        hearing={true} 
      />
    </InfoSectionContainer>
  );
};

export default InfoSection;
