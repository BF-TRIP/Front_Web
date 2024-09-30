import styled from 'styled-components';

const CourseContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  justify-content: center; /* 수직 중앙 정렬 */
  align-items: center;     /* 좌우 중앙 정렬 */
  height: 100vh;           /* 화면 전체 높이 사용 */
  text-align: center;      /* 텍스트 좌우 중앙 정렬 */
`;

const Course = () => {
  return (
    <CourseContainer>
      <h1>코스 만들기 페이지</h1>
    </CourseContainer>
  );
};

export default Course;
