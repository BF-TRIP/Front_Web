import styled from 'styled-components';

const TitleContainer = styled.div`
  text-align: left;
  margin-top: 3.31rem;
  margin-left: 0.2rem;
`;

const TitleText = styled.h1`
  color: #000;
  font-family: Pretendard;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  white-space: pre-wrap; 
`;

const SubtitleText = styled.p`
  color: #616161;
  font-family: Pretendard;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 0.5rem;
`;

const Title = () => {
  return (
    <TitleContainer>
      <TitleText>
        하고 싶은 여행{'\n'}
        스타일을 골라주세요
      </TitleText>
      <SubtitleText>
        나에게 맞는 관광지를 추천해줘요!
      </SubtitleText>
    </TitleContainer>
  );
};

export default Title;
