import styled from 'styled-components';

const AddSectionContainer = styled.div`
  width: 20.75rem;
  height: 14.625rem;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px dashed #7a7a7a;
  border-radius: 1rem;
  background-color: #f9f9f9;
  margin: 0 auto 1rem auto;
  cursor: pointer;
`;

const AddMoreText = styled.p`
  font-size: 1rem;
  color: #7a7a7a;
`;

const AddMoreSection = () => (
  <AddSectionContainer>
    <AddMoreText>관광지를 추가해보세요!</AddMoreText>
  </AddSectionContainer>
);

export default AddMoreSection;
