import styled from 'styled-components';

const LocationInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem;
  background-color: #fff;
`;

const MapPlaceholder = styled.div`
  width: 21rem;
  height: 21rem;
  background-color: #e0e0e0; 
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  color: #7d7d7d;
  border-radius: 0.5rem; 
`;

const LocationInfo = () => {
  return (
    <LocationInfoContainer>
      <MapPlaceholder>
        Location Map
      </MapPlaceholder>
    </LocationInfoContainer>
  );
};

export default LocationInfo;
