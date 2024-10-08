import styled from 'styled-components';

const BackgroundContainer = styled.div`
  width: 100%;
  height: 7.1875rem;
  background-color: #fff;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AddToListButton = styled.button`
  width: 90%;
  height: 3.625rem;
  background-color: #FFE54A;
  color: #4D4D4D;
  font-size: 1.25rem;
  font-weight: 600;
  border: none;
  border-radius: 1.375rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;

  color: var(--Color-11, #4D4D4D);
  text-align: center;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 1.875rem */

  &:focus {
    outline: none;
  }
`;

const AddToListFooter = () => {
  const handleAddToList = () => {
    console.log("리스트에 추가 버튼 클릭");
    // 실제 리스트 추가 동작을 여기서 처리
  };

  return (
    <BackgroundContainer>
      <AddToListButton onClick={handleAddToList}>리스트에 추가</AddToListButton>
    </BackgroundContainer>
  );
};

export default AddToListFooter;
