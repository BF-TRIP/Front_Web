import { useState } from 'react'; 
import styled from 'styled-components';
import plusIcon from '../../../assets/images/plus.svg'; 
import NewListModal from '../newlist/NewListModal'; 
import PropTypes from 'prop-types';

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

const CreateNewListButton = ({ uuid }) => {
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
    <>
      <NewListButtonContainer onClick={handleOpenModal}>
        <PlusIcon src={plusIcon} alt="새 리스트 생성" />
        <ButtonText>새로운 리스트를{`\n`}생성해보세요!</ButtonText>
      </NewListButtonContainer>
      
      <NewListModal
        show={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirm}
        uuid={uuid} // uuid 전달
      />
    </>
  );
};

CreateNewListButton.propTypes = {
  uuid: PropTypes.string.isRequired, // uuid를 필수로 받음
};

export default CreateNewListButton;
