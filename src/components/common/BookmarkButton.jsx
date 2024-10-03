import styled from 'styled-components';
import PropTypes from 'prop-types';
import bookmarkIcon from '../../assets/images/bookmark.png';

const StyledBookmarkButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none; 

  &:focus {
    outline: none; /* 포커스 시 outline 제거 */
  }

  img {
    width: ${({ size }) => size};
    height: ${({ size }) => size};
    object-fit: contain;
  }
`;

const BookmarkButton = ({ size }) => {
  const handleBookmarkClick = () => {
    alert('저장되었습니다.');
  };

  return (
    <StyledBookmarkButton onClick={handleBookmarkClick} size={size}>
      <img src={bookmarkIcon} alt="Bookmark" />
    </StyledBookmarkButton>
  );
};

BookmarkButton.propTypes = {
  size: PropTypes.string,  
};

BookmarkButton.defaultProps = {
  size: '2.125rem', 
};

export default BookmarkButton;
