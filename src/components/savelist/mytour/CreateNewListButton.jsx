import { useState } from 'react'; // 모달 상태 관리를 위해 useState 추가
import styled from 'styled-components';
import plusIcon from '../../../assets/images/plus.svg'; 
import NewListModal from '../newlist/NewListModal'; // 모달 컴포넌트 불러오기

const NewListButtonContainer = styled.div`
  width: 10.625rem;
  height: 10.3125rem;
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 1.25rem;
  overflow: hidden;
  background-color: #F5F5F5;
  border: 1px dashed var(--Color-10, #B9B9B9);
  cursor: pointer;
  border-style: dashed;
  border-width: 2px;
  border-spacing: 6px; 
`;

const PlusIcon = styled.img`
  margin-top: 1rem;
  width: 2.25rem;
  height: 2.25rem;
  flex-shrink: 0;
`;

const ButtonText = styled.p`
  color: #797979;
  text-align: center;
  font-family: Pretendard;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.125rem; /* 120% */
  margin-top: 0.87rem;
  white-space: pre-line; 
`;

const CreateNewListButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 관리

  const handleOpenModal = () => {
    setIsModalOpen(true); // 모달 열기
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // 모달 닫기
  };

  const handleConfirm = () => {
    // 리스트 생성 로직 처리
    console.log('리스트가 생성되었습니다!');
    setIsModalOpen(false); // 모달 닫기
  };

  return (
    <>
      <NewListButtonContainer onClick={handleOpenModal}>
        <PlusIcon src={plusIcon} alt="새 리스트 생성" />
        <ButtonText>새로운 리스트를{`\n`}생성해보세요!</ButtonText>
      </NewListButtonContainer>
      
      {/* 모달 추가 */}
      <NewListModal
        show={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirm}
      />
    </>
  );
};

export default CreateNewListButton;
