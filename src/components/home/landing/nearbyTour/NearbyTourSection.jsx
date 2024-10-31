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

const NearbyTourSection = ({ nearbyLocations, uuid }) => {  
  return (
    <SectionContainer>
      <NearbySectionTitle title="내 위치 주변 관광지" />
      <NearbyTourCardList tourData={nearbyLocations} uuid={uuid} /> 
    </SectionContainer>
  );
};

NearbyTourSection.propTypes = {
  nearbyLocations: PropTypes.arrayOf(PropTypes.object).isRequired,
  uuid: PropTypes.number.isRequired, 
};

export default NearbyTourSection;
