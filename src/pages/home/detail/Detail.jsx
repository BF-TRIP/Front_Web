import styled from 'styled-components';
import DetailTop from '../../../components/home/detail/DetailTop'; 

const DetailPageContainer = styled.div`
  width: 390px;
  height: 844px;
  background-color: #fff;
  overflow-y: auto;
`;

const Detail = () => {
  const images = [
    '/path/to/image1.jpg',
    '/path/to/image2.jpg',
    '/path/to/image3.jpg',
  ]; 

  return (
    <DetailPageContainer>
      <DetailTop images={images} />
    </DetailPageContainer>
  );
};

export default Detail;
