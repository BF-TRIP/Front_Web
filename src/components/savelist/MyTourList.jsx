import styled from 'styled-components';
import PropTypes from 'prop-types'; 
import TourListItem from './mytour/TourListItem';
import CreateNewListButton from './mytour/CreateNewListButton';
import tourData from '../../utils/tourData'; 

const Container = styled.div`
  padding: 1.15rem;
  padding-bottom: 1.56rem;
`;

const Title = styled.div`
  color: #000;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.375rem; 
  margin-bottom: 1rem; 
`;

const TourListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 0.78rem;
`;

const Divider = styled.div`
  width: 100%;
  height: 0.38rem;
  flex-shrink: 0;
  background: #F7F6FB;;
`;

const MyTourList = ({ userNumber }) => {
  return (
    <>
      <Container>
        <Title>내가 만든 관광지</Title>
        <TourListContainer>
          {tourData.map((tour, index) => (
            <TourListItem key={index} image={tour.image} title={tour.title} />
          ))}
          <CreateNewListButton userNumber={userNumber} /> {/* userNumber 전달 */}
        </TourListContainer>
      </Container>
      <Divider />
    </>
  );
};

MyTourList.propTypes = {
  userNumber: PropTypes.string.isRequired, // userNumber 필수
  tourData: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default MyTourList;
