import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const TopRow = styled.div`
  display: flex;
  align-items: center; 
  justify-content: flex-start;
`;

const LogoContainer = styled.div`
  width: 1.54094rem;
  height: 1.45713rem;
  border-radius: 0.3125rem;
  background: #d9d9d9;
  flex-shrink: 0;
  margin-right: 0.31rem;
  display: flex;
  align-items: center; /* 로고 내 컨텐츠 수직 중앙 */
  justify-content: center; /* 로고 내 컨텐츠 수평 중앙 */
`;

const TitleText = styled.div`
  color: #292929;
  font-family: 'Tenada', sans-serif;
  font-size: 1.44919rem;
  font-weight: 800;
  line-height: 0; 
  letter-spacing: -0.06038rem;
  margin-top: 0.5rem;
`;

const SubtitleText = styled.div`
  color: #000;
  text-align: left;
  font-family: 'Pretendard', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 0.9375rem; 
  letter-spacing: -0.06038rem;
  margin-top: 0.25rem;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <TopRow>
        <LogoContainer /> {/* 로고가 나올 위치 */}
        <TitleText>베프트립</TitleText>
      </TopRow>
      <SubtitleText>장벽없이 손쉽고 즐거운 여행!</SubtitleText>
    </HeaderContainer>
  );
};

export default Header;
