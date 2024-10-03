import styled from 'styled-components';
import RecommendedTourCardList from '../../../components/home/list/RecommendedTourList';

const ListContainer = styled.div`
  width: 390px;
  height: 844px;
  background-color: #F6F5FA;
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
      <RecommendedTourCardList />
    </ListContainer>
  );
};

export default RecommendedList;
