import styled from 'styled-components';

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 16.37rem;
  margin-bottom: 3.63rem;
`;

const MainText = styled.h1`
  color: #414141;
  text-align: center;
  font-family: Pretendard;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2rem; /* 133.333% */
  letter-spacing: -0.03125rem;
  white-space: pre-line; 
`;

const TextSection = () => {
  return (
    <TextContainer>
      <MainText>
        이제 모든 준비가 끝났어요!
        {"\n"}편안한 여행을 시작해 볼까요?
      </MainText>
    </TextContainer>
  );
};

export default TextSection;
