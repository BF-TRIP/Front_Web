import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import saveIcon from '../../../assets/images/save.svg'; 
import savedIcon from '../../../assets/images/save2.svg';
import saveCourse from '../../../api/save/saveCourse'; 

import WheelchairIcon from '../../../assets/images/senior.png';
import FamilyIcon from '../../../assets/images/wheelchair.png';
import StrollerIcon from '../../../assets/images/infant.png';
import VisualIcon from '../../../assets/images/blind.png';
import HearingIcon from '../../../assets/images/deaf.png';

const CardContainer = styled.div`
  width: 100%; 
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.08);
  margin-bottom: 1rem;
  overflow: hidden;
  position: relative;
  cursor: pointer;
`;

const CardImage = styled.div`
  width: 100%;
  height: 12rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  background-image: ${(props) =>
    props.imageUrl ? `url(${props.imageUrl})` : 'none'};
  background-color: #ddd;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlaceholderIcon = styled.img`
  width: 3rem;
  opacity: 0.5;
  display: ${(props) => (props.imageUrl ? 'none' : 'block')};  
`;

const CardTitleRow = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
`;

const CardTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;
  color: #000;
`;

const CardSubtitle = styled.p`
  font-size: 0.875rem;
  color: #7a7a7a;
  margin-left: 0.53rem;
`;

const AccessibilityIcons = styled.div`
  display: flex;
  justify-content: space-around;
  padding-bottom: 1rem;
`;

const Icon = styled.img`
  width: auto;
  height: 2.5rem;
  opacity: ${(props) => (props.isActive ? '1' : '0.3')};
`;

const ScrapButton = styled.button`
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 2;
  outline: none;

  &:focus {
    outline: none;
  }
`;

const ScrapIcon = styled.img`
  width: 2rem;
  height: 2rem;
`;

const RecommendedTourCard = ({
  imageUrl,
  title,
  address,
  publicTransport,
  wheelchair,
  stroller,
  braileBlock,
  hearingHandicapEtc,
  contentId 
}) => {
  const [isScraped, setIsScraped] = useState(false);
  const uuid = localStorage.getItem('uuid');
  const navigate = useNavigate();  // useNavigate 사용

  const toggleScrap = async (e) => {
    e.stopPropagation();
    setIsScraped(!isScraped);

    if (!isScraped && uuid) {
      try {
        const response = await saveCourse(uuid, contentId); 
        console.log('저장 성공:', response);
      } catch (error) {
        console.error('저장 실패:', error);
      }
    } else {
      console.log('이미 저장되었거나 uuid가 없습니다.');
    }
  };

  const handleCardClick = () => {
    console.log("Navigating to detail with:", {
      contentId,
      title,
      imageUrl,
      address,
    });
    
    navigate(`/detail`, {
      state: {
        contentId,  
        title,     
        address,
        images: [imageUrl],  
        publicTransport,
        wheelchair,
        stroller,
        braileBlock,
        hearingHandicapEtc,
        
      },
    });
  };

  

  return (
    <CardContainer onClick={handleCardClick}>
      <ScrapButton onClick={toggleScrap}>
        <ScrapIcon src={isScraped ? savedIcon : saveIcon} alt="스크랩 아이콘" />
      </ScrapButton>
      <CardImage imageUrl={imageUrl}>
        <PlaceholderIcon src="src/assets/images/image.png" alt="Placeholder Icon" imageUrl={imageUrl} />
      </CardImage>
      <CardTitleRow>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{address}</CardSubtitle>
      </CardTitleRow>
      <AccessibilityIcons>
        <Icon 
          src={FamilyIcon} 
          alt="Family Friendly" 
          isActive={!!publicTransport} 
        />
        <Icon 
          src={WheelchairIcon} 
          alt="Wheelchair Accessible" 
          isActive={!!wheelchair} 
        />
        <Icon 
          src={VisualIcon} 
          alt="Braille Block" 
          isActive={!!braileBlock} 
        />
        <Icon 
          src={StrollerIcon} 
          alt="Stroller Accessible" 
          isActive={!!stroller} 
        />
        <Icon 
          src={HearingIcon} 
          alt="Hearing Aid Accessible" 
          isActive={!!hearingHandicapEtc} 
        />
      </AccessibilityIcons>
    </CardContainer>
  );
};

RecommendedTourCard.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  publicTransport: PropTypes.string,
  wheelchair: PropTypes.string,
  stroller: PropTypes.string,
  braileBlock: PropTypes.string,
  hearingHandicapEtc: PropTypes.string,
  contentId: PropTypes.number.isRequired 
};

export default RecommendedTourCard;
