import styled from 'styled-components';
import FacilityInfo from './Info/FacilityInfo';
import DetailedFacilityInfo from './Info/DetailedFacilityInfo'; // 추가된 컴포넌트 임포트

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
      
      {/* 세부 시설물 정보 섹션 추가 */}
      <SectionTitle>세부 시설물 정보</SectionTitle>
      <DetailedFacilityInfo
        wheelchairInfo="장애인주차장, 휠체어 대여"
        visualImpairmentInfo="점자블록, 보조견 동반 가능"
      />
    </InfoSectionContainer>
  );
};

export default InfoSection;
