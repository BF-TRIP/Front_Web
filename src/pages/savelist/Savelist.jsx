import styled from 'styled-components';
import Header from '../../components/common/Header'; // Header 컴포넌트 import

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
      {/* 다른 컴포넌트들 추가 예정 */}
    </SaveListContainer>
  );
};

export default Savelist;
