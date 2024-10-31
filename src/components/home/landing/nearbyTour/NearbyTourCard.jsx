import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import saveIcon from '../../../../assets/images/save.svg'; 
import savedIcon from '../../../../assets/images/save2.svg';
import saveCourse from '../../../../api/save/saveCourse'; 
import defaultImageIcon from '../../../../assets/images/image.png'; 

const CardContainer = styled.div`
  width: 14.0625rem;
  height: 12rem; 
  display: flex;
  flex-direction: column; 
  flex-shrink: 0;
  overflow: hidden;
  background-color: #fff;
  border-radius: 1.25rem;
  padding: 0.38rem;
  cursor: pointer;
  position: relative; 
`;

const CardImageContainer = styled.div`
  width: 100%;
  height: 7.375rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ddd;
  border-radius: 1.125rem;
  position: relative;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1.125rem;
  display: ${(props) => (props.hasImage ? 'block' : 'none')};
`;

const DefaultIcon = styled.img`
  width: 3rem;
  height: 3rem;
  opacity: 0.5;
  display: ${(props) => (props.hasImage ? 'none' : 'block')};
`;

const CardContent = styled.div`
  margin-left: 0.2rem;
`;

const CardTitle = styled.div`
  color: #000;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 0.62rem;
  margin-bottom: 0.25rem; 
`;

const CardSubtitle = styled.div`
  color: #000;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
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

const NearbyTourCard = ({ contentTitle, addr, originalImage, description, contentId, uuid }) => {
  const navigate = useNavigate(); 
  const [isScraped, setIsScraped] = useState(false); 

  const handleCardClick = () => {
    navigate('/detail', { 
      state: { 
        contentId,  
        images: [originalImage], 
        placeName: contentTitle, 
        description: description, 
        address: addr 
      }
    }); 
  };

  const toggleScrap = async (e) => {
    e.stopPropagation(); 
    setIsScraped(!isScraped);

    if (!isScraped) {
      try {
        const response = await saveCourse(uuid, contentId); 
        console.log('저장 성공:', response);
      } catch (error) {
        console.error('저장 실패:', error);
      }
    }
  };

  const hasImage = !!originalImage;

  return (
    <CardContainer onClick={handleCardClick}> 
      <ScrapButton onClick={toggleScrap}>
        <ScrapIcon src={isScraped ? savedIcon : saveIcon} alt="스크랩 아이콘" />
      </ScrapButton>
      <CardImageContainer>
        <CardImage src={originalImage} alt={contentTitle} hasImage={hasImage} />
        <DefaultIcon src={defaultImageIcon} alt="기본 이미지 아이콘" hasImage={hasImage} />
      </CardImageContainer>
      <CardContent>
        <CardTitle>{contentTitle}</CardTitle>  
        <CardSubtitle>{addr}</CardSubtitle> 
      </CardContent>
    </CardContainer>
  );
};

NearbyTourCard.propTypes = {
  originalImage: PropTypes.string.isRequired, 
  contentTitle: PropTypes.string.isRequired, 
  addr: PropTypes.string.isRequired,         
  description: PropTypes.string.isRequired, 
  contentId: PropTypes.number.isRequired, 
  uuid: PropTypes.number.isRequired, 
};

export default NearbyTourCard;
