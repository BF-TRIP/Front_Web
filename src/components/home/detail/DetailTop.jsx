import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'; 
import BackButton from '../../common/BackButton'; 
import BookmarkButton from '../../common/BookmarkButton'; 

const TopContainer = styled.div`
  position: relative;
  width: 100%;
  height: 14.375rem;
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 10px;
  width: 100%;
  padding-top: 0.6rem;
  padding-left: 1.06rem;
  padding-right: 1.06rem;
  z-index: 10;
`;

const ImageSlider = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ddd;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const SlidePagination = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: white;
  font-size: 0.875rem;
  background: rgba(0, 0, 0, 0.5);
  padding: 2px 8px;
  border-radius: 10px;
`;

const DetailTop = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      handleNextSlide();
    } else if (touchStartX - touchEndX < -50) {
      handlePrevSlide(); 
    }
  };

  return (
    <TopContainer
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <Header>
        <BackButton size="2.125rem" />
        <BookmarkButton size="2.125rem" />
      </Header>

      <ImageSlider>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        <SlidePagination>
          {currentIndex + 1} / {images.length}
        </SlidePagination>
      </ImageSlider>
    </TopContainer>
  );
};

DetailTop.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DetailTop;
