import styled from 'styled-components';

const TitleContainer = styled.div`
  text-align: left;
  margin-top: 3.31rem;
  margin-left: 0.3rem;
`;

const TitleText = styled.h1`
  color: #000;
  font-family: Pretendard;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  white-space: pre-wrap; /* 줄바꿈을 허용 */
`;

const Title = () => {
  return (
    <TitleContainer>
      <TitleText>
        해당하시는 유형을{'\n'}
        선택해주세요
      </TitleText>
    </TitleContainer>
  );
};

export default Title;
