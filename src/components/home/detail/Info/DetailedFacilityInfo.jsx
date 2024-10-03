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
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #2E2E2E;
  line-height: 1.3125rem;
`;

const InfoTitle = styled.span`
  font-weight: 600;
`;

const InfoDescription = styled.span`
  color: #000;]
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 1.875rem */
  letter-spacing: -0.0175rem;
`;

const DetailedFacilityInfo = ({ wheelchairInfo, visualImpairmentInfo }) => {
  return (
    <DetailedFacilityInfoContainer>
      <InfoRow>
        <InfoTitle>지체장애 :</InfoTitle>
        <InfoDescription>{wheelchairInfo}</InfoDescription>
      </InfoRow>
      <InfoRow>
        <InfoTitle>시각장애 :</InfoTitle>
        <InfoDescription>{visualImpairmentInfo}</InfoDescription>
      </InfoRow>
    </DetailedFacilityInfoContainer>
  );
};

DetailedFacilityInfo.propTypes = {
  wheelchairInfo: PropTypes.string.isRequired,
  visualImpairmentInfo: PropTypes.string.isRequired,
};

export default DetailedFacilityInfo;
