import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types'; 
import styled from 'styled-components';

const LocationInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem;
  background-color: #fff;
`;

const MapContainer = styled.div`
  width: 21rem;
  height: 21rem;
  border-radius: 0.5rem;
`;

const LocationInfo = ({ gpsX, gpsY }) => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    if (window.kakao && window.kakao.maps) {
      const { kakao } = window;
      const mapContainer = mapContainerRef.current;
      const options = {
        center: new kakao.maps.LatLng(gpsY, gpsX),
        level: 3,
      };
      const map = new kakao.maps.Map(mapContainer, options);

      const markerPosition = new kakao.maps.LatLng(gpsY, gpsX);
      const marker = new kakao.maps.Marker({
        position: markerPosition,
      });
      marker.setMap(map);
    }
  }, [gpsX, gpsY]);

  return (
    <LocationInfoContainer>
      <MapContainer ref={mapContainerRef} />
    </LocationInfoContainer>
  );
};

// PropTypes 추가
LocationInfo.propTypes = {
  gpsX: PropTypes.number.isRequired,
  gpsY: PropTypes.number.isRequired,
};

export default LocationInfo;
