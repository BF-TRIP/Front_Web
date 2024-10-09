import styled from 'styled-components';
import PropTypes from 'prop-types';
import NearbySectionTitle from './NearbySectionTitle';
import NearbyTourCardList from './NearbyTourCardList';

const SectionContainer = styled.div`
  padding-top: 1rem;
  padding-left: 1rem;
  border-radius: 1rem;
  width: 100%;
`;

const NearbyTourSection = ({ nearbyLocations, userNumber }) => {  
  return (
    <SectionContainer>
      <NearbySectionTitle title="내 위치 주변 관광지" />
      <NearbyTourCardList tourData={nearbyLocations} userNumber={userNumber} /> 
    </SectionContainer>
  );
};

NearbyTourSection.propTypes = {
  nearbyLocations: PropTypes.arrayOf(PropTypes.object).isRequired,
  userNumber: PropTypes.number.isRequired, 
};

export default NearbyTourSection;
