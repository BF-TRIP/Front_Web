import styled from 'styled-components';
import NearbySectionTitle from './NearbySectionTitle';
import NearbyTourCardList from './NearbyTourCardList';

const SectionContainer = styled.div`
  padding-top: 1rem;
  padding-left: 1rem;
  border-radius: 1rem;
  width: 100%;
`;

const NearbyTourSection = () => {
  return (
    <SectionContainer>
      <NearbySectionTitle title="내 위치 주변 관광지"/>
      <NearbyTourCardList />
    </SectionContainer>
  );
};

export default NearbyTourSection;
