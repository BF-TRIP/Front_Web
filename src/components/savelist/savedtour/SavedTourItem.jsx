import styled from 'styled-components';
import PropTypes from 'prop-types'; 

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
  cursor: pointer;
`;

const SavedTourTitle = styled.div`
  width: 80%;
  color: #000;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 1.875rem */
  letter-spacing: -0.0175rem;
  text-align: left;
  margin-left: 0.2rem;
  white-space: nowrap;
  overflow: hidden; 
  text-overflow: ellipsis; 
`;

const SavedTourImage = styled.div`
  width: 100%;
  height: 10.5rem;
  border-radius: 1rem;
  background: #ddd;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  margin: 0 auto; 
  margin-top: 0.62rem;
`;

const SavedTourItem = ({ image, title }) => {
  return (
    <SavedTourCardContainer>
      <SavedTourTitle>{title}</SavedTourTitle>
      <SavedTourImage image={image} />
    </SavedTourCardContainer>
  );
};

SavedTourItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default SavedTourItem;
