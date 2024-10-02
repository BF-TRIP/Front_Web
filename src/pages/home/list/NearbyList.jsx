import styled from 'styled-components';
import NearbyTourCardList from '../../../components/home/list/NearbyTourList'; // 기존 리스트 컴포넌트 임포트

// 전체 페이지 컨테이너
const ListContainer = styled.div`
  width: 390px;  /* 고정된 너비 */
  height: 844px; /* 고정된 높이 */
  background-color: #F6F5FA; /* 배경색 추가 */
  overflow-y: auto;  /* 페이지 전체 스크롤 가능 */
  
  &::-webkit-scrollbar {
    display: none; /* 스크롤바 숨기기 */
  }
  -ms-overflow-style: none;  /* IE 및 Edge에서 스크롤바 숨기기 */
  scrollbar-width: none;  /* Firefox에서 스크롤바 숨기기 */
`;

const NearbyList = () => {
  return (
    <ListContainer>
      <NearbyTourCardList /> {/* 리스트 컴포넌트 */}
    </ListContainer>
  );
};

export default NearbyList;
