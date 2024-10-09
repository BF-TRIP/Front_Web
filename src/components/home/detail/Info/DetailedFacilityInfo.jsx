import styled from 'styled-components';
import PropTypes from 'prop-types';

const DetailedFacilityInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;  
`;

const InfoRow = styled.div`
  display: flex;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #2E2E2E;
  line-height: 1.3125rem;
`;

const InfoTitle = styled.div`
  width: 17%;
  color: #000;
  font-weight: 600;
`;

const InfoDescription = styled.div`
  color: #000;
  font-weight: 400;
`;

const DetailedFacilityInfo = ({
  visualImpairmentInfo,
  wheelchairInfo,
  hearingImpairmentInfo,
  familyInfo,
  elderlyInfo,
  helpDog 
}) => {
  const visualInfoCombined = [visualImpairmentInfo, helpDog]
    .filter(Boolean) 
    .join(', ');

  return (
    <DetailedFacilityInfoContainer>
      {visualInfoCombined && (
        <InfoRow>
          <InfoTitle>시각장애 :</InfoTitle>
          <InfoDescription>{visualInfoCombined}</InfoDescription>
        </InfoRow>
      )}

      {wheelchairInfo && (
        <InfoRow>
          <InfoTitle>지체장애 :</InfoTitle>
          <InfoDescription>{wheelchairInfo}</InfoDescription>
        </InfoRow>
      )}

      {hearingImpairmentInfo && (
        <InfoRow>
          <InfoTitle>청각장애 :</InfoTitle>
          <InfoDescription>{hearingImpairmentInfo}</InfoDescription>
        </InfoRow>
      )}

      {familyInfo && (
        <InfoRow>
          <InfoTitle>임산부/유아동반자 :</InfoTitle>
          <InfoDescription>{familyInfo}</InfoDescription>
        </InfoRow>
      )}

      {elderlyInfo && (
        <InfoRow>
          <InfoTitle>고령자 :</InfoTitle>
          <InfoDescription>{elderlyInfo}</InfoDescription>
        </InfoRow>
      )}
    </DetailedFacilityInfoContainer>
  );
};

DetailedFacilityInfo.propTypes = {
  visualImpairmentInfo: PropTypes.string,
  wheelchairInfo: PropTypes.string,
  hearingImpairmentInfo: PropTypes.string,
  familyInfo: PropTypes.string,
  elderlyInfo: PropTypes.string,
  helpDog: PropTypes.string,
};

export default DetailedFacilityInfo;
