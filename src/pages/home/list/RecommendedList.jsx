import styled from 'styled-components';
import RecommendedTourCardList from '../../../components/home/list/RecommendedTourList';
import Header from '../../../components/home/list/Header'; 

const ListContainer = styled.div`
  width: 390px;
  height: 844px;
  background-color: #fff;
  overflow-y: auto;
  
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const RecommendedList = () => {
  return (
    <ListContainer>
      <Header />
      <RecommendedTourCardList />
    </ListContainer>
  );
};

export default RecommendedList;
