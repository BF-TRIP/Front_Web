import styled from 'styled-components';
import Header from '../../components/common/Header'; // Header 컴포넌트 import
import MyTourList from '../../components/savelist/MyTourList'; // MyTourList 컴포넌트 import

const SaveListContainer = styled.div`
  width: 390px;
  height: 844px;
  background-color: #fff;
  overflow-y: auto;
  padding-bottom: 10em;

  &::-webkit-scrollbar {
    display: none;
  }
  
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const Savelist = () => {
  return (
    <SaveListContainer>
      <Header />
      <MyTourList /> {/* 내가 만든 관광지 컴포넌트 추가 */}
    </SaveListContainer>
  );
};

export default Savelist;
