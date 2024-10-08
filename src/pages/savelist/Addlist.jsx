import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import AddToList from '../../components/savelist/AddToList'; 

const AddListContainer = styled.div`
  position: relative;
  width: 390px;
  height: 844px;
  background-color: #fff;
`;

const Addlist = () => {
  const location = useLocation();
  const { listName } = location.state || { listName: '리스트 이름' }; // 전달받은 listName 없을 경우 기본값

  return (
    <AddListContainer>
      <AddToList listName={listName} /> {/* 리스트 이름을 prop으로 전달 */}
    </AddListContainer>
  );
};

export default Addlist;
