import styled from 'styled-components';
import PropTypes from 'prop-types';

const ListItemContainer = styled.div`
  width: 10.625rem;
  height: 10.3125rem;
  display: flex;
  flex-shrink: 0;
  border-radius: 1.25rem;
  overflow: hidden;
  position: relative;
  background-color: #f5f5f5;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CardTitle = styled.div`
  position: absolute;
  bottom: 0.88rem;
  left: 0.81rem;
  color: #fff;
  font-size: 1.125rem;
  font-weight: 700;
`;

const TourListItem = ({ image, title }) => {
  return (
    <ListItemContainer>
      <CardImage src={image} alt={title} />
      <CardTitle>{title}</CardTitle>
    </ListItemContainer>
  );
};

TourListItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default TourListItem;
