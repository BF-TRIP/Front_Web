import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import saveIcon from '../../../../assets/images/save.svg'; 
import savedIcon from '../../../../assets/images/save2.svg';
import saveCourse from '../../../../api/save/saveCourse'; 

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

const CardImage = styled.img`
  width: 100%;
  height: 7.375rem; 
  object-fit: cover;
  border-radius: 1.125rem;
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

const NearbyTourCard = ({ contentTitle, addr, originalImage, description, contentId, userNumber }) => {
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
        const response = await saveCourse(userNumber, contentId); 
        console.log('저장 성공:', response);
      } catch (error) {
        console.error('저장 실패:', error);
      }
    }
  };

  return (
    <CardContainer onClick={handleCardClick}> 
      <ScrapButton onClick={toggleScrap}>
        <ScrapIcon src={isScraped ? savedIcon : saveIcon} alt="스크랩 아이콘" />
      </ScrapButton>
      <CardImage src={originalImage || '/path/to/default/image.jpg'} alt={contentTitle} />
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
  userNumber: PropTypes.number.isRequired, 
};

export default NearbyTourCard;
