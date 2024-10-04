import { useState } from 'react';
import styled from 'styled-components';
import Header from '../../components/common/Header';
import MyTourList from '../../components/savelist/MyTourList';
import SavedTourList from '../../components/savelist/SavedTourList';
import NewListModal from '../../components/savelist/newlist/NewListModal';

const SaveListContainer = styled.div`
  position: relative; /* 모달이 이 부모 컴포넌트 안에서만 위치하게 설정 */
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirm = () => {
    console.log('리스트가 생성되었습니다!');
    setIsModalOpen(false);
  };

  return (
    <SaveListContainer>
      <Header />
      <MyTourList onOpenModal={handleOpenModal} />
      <SavedTourList />
      {/* 모달 추가 */}
      <NewListModal show={isModalOpen} onClose={handleCloseModal} onConfirm={handleConfirm} />
    </SaveListContainer>
  );
};

export default Savelist;
