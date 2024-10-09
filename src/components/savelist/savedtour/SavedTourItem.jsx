import styled from 'styled-components';
import PropTypes from 'prop-types'; 
import { useState } from 'react';

const SavedTourCardContainer = styled.div`
  width: 10.75rem;
  height: 14.5625rem;
  padding: 0.625rem;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  overflow: hidden;
  background-color: #fff;
  border-radius: 1.125rem;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.08);
  position: relative; 
`;

const SavedTourTitle = styled.div`
  width: 80%;
  color: #000;
  font-size: 1.25rem;
  font-weight: 600;
  margin-left: 0.2rem;
  white-space: nowrap;
  overflow: hidden; 
  text-overflow: ellipsis; 
`;

const SavedTourImage = styled.div`
  width: 100%;
  height: 10.5rem;
  border-radius: 1rem;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  margin-top: 0.62rem;
`;

const CustomCheckbox = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 1.5rem;
  height: 1.5rem;
  border: 1px solid #A8A8A8;
  border-radius: 50%; 
  background-color: ${(props) => (props.checked ? '#FFF8C4;' : 'transparent')}; 
  cursor: pointer;
  display: ${(props) => (props.show ? 'block' : 'none')}; 

  display: flex;
  justify-content: center;
  align-items: center;
  
  &:after {
    content: '${(props) => (props.checked ? '✓' : '')}';
    font-size: 1rem;
    color: #4D4D4D;
  }
`;

const SavedTourItem = ({ contentId, image, title, showCheckbox, onSelectItem }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    onSelectItem(contentId, newValue);  // 선택 시 contentId와 함께 onSelectItem 호출

    // 콘솔에 체크된 contentId 출력
    console.log(`Content ID ${contentId} is ${newValue ? 'checked' : 'unchecked'}`);
  };

  return (
    <SavedTourCardContainer>
      {showCheckbox && (
        <CustomCheckbox 
          checked={isChecked} 
          onClick={handleCheckboxChange} 
          show={showCheckbox} 
        />
      )}
      <SavedTourTitle>{title}</SavedTourTitle>
      <SavedTourImage image={image} />
    </SavedTourCardContainer>
  );
};

SavedTourItem.propTypes = {
  contentId: PropTypes.number.isRequired, // contentId prop 추가
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  showCheckbox: PropTypes.bool,
  onSelectItem: PropTypes.func.isRequired,  // 선택 함수 prop 전달
};

SavedTourItem.defaultProps = {
  showCheckbox: false, 
};

export default SavedTourItem;
