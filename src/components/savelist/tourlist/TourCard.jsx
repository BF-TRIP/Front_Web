import styled from 'styled-components';
import PropTypes from 'prop-types';

import seniorIcon from '../../../assets/images/senior.png';
import wheelchairIcon from '../../../assets/images/wheelchair.png';
import strollerIcon from '../../../assets/images/infant.png';
import brailleIcon from '../../../assets/images/blind.png';
import hearingIcon from '../../../assets/images/deaf.png';
import noImageIcon from '../../../assets/images/noimage.png';

const CardContainer = styled.div`
  width: 21.75rem;
  height: 17.5625rem;
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
  margin: 0 auto 1rem auto;  
  position: relative;
`;

const TourImage = styled.div`
  width: 100%;
  height: 10rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  background-image: ${(props) =>
    props.imageUrl
      ? `url(${props.imageUrl})`
      : `url(${noImageIcon})`};  // 이미지가 없을 때 noImageIcon 사용
  background-color: #ddd;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TourTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0.5rem 1rem;
`;

const TourAddress = styled.p`
  font-size: 0.875rem;
  color: #7a7a7a;
  margin: -0.6rem 1rem 1rem 1rem;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: -0.2rem;
`;

const Icon = styled.img`
  width: auto;
  height: 2.5rem;  /* 비율 유지하면서 아이콘 높이를 설정 */
  object-fit: contain;
  opacity: ${(props) => (props.isActive ? '1' : '0.3')};
`;

// TourCard 컴포넌트
const TourCard = ({ 
  imageUrl, 
  title, 
  address, 
  publicTransport,  // 고령자 접근성
  wheelchair,       // 휠체어 접근성 (지체장애인)
  stroller,         // 임산부/유아동반자 관련 시설
  braileBlock,      // 시각장애인 점자 블록
  hearingHandicapEtc // 청각장애인 관련 시설
}) => (
  <CardContainer>
    <TourImage imageUrl={imageUrl} />
    <TourTitle>{title}</TourTitle>
    <TourAddress>{address}</TourAddress>
    <IconContainer>
      <Icon 
        src={seniorIcon} 
        alt="Elderly Friendly" 
        isActive={!!publicTransport} 
      />
      <Icon 
        src={wheelchairIcon} 
        alt="Wheelchair Accessible" 
        isActive={!!wheelchair}
      />
      <Icon 
        src={strollerIcon} 
        alt="Stroller Friendly" 
        isActive={!!stroller}
      />
      <Icon 
        src={brailleIcon} 
        alt="Braille Block" 
        isActive={!!braileBlock}
      />
      <Icon 
        src={hearingIcon} 
        alt="Deaf Accessibility" 
        isActive={!!hearingHandicapEtc}
      />
    </IconContainer>
  </CardContainer>
);

// PropTypes 설정
TourCard.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  publicTransport: PropTypes.string,  
  wheelchair: PropTypes.string,      
  stroller: PropTypes.string,         
  braileBlock: PropTypes.string,     
  hearingHandicapEtc: PropTypes.string 
};

export default TourCard;
