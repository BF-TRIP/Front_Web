import styled from 'styled-components';
import AddToListHeader from './addlist/AddToListHeader'; 
import SavedTourList from '../savelist/SavedTourList'; 
import AddToListFooter from './addlist/AddToListFooter';

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding-bottom: 10em;

  &::-webkit-scrollbar {
    display: none;
  }
  
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const AddToList = () => {
  return (
    <Container>
      <AddToListHeader /> 
      <SavedTourList showSubtitle={true} showCheckbox={true} /> 
      <AddToListFooter /> 
    </Container>
  );
};

export default AddToList;
