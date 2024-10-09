import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import AddToList from '../../components/savelist/AddToList'; 

const AddListContainer = styled.div`
  position: relative;
  width: 390px;
  height: 844px;
  background-color: #fff;
`;

const Addlist = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [userNumber, setUserNumber] = useState(null);

  useEffect(() => {
    const storedUserNumber = localStorage.getItem('userNumber');
    if (storedUserNumber) {
      setUserNumber(storedUserNumber);
    } else {
      console.warn('userNumber가 로컬스토리지에 존재하지 않습니다.');
    }
  }, []);

  const { courseName } = location.state || { courseName: '리스트 이름' };

  // 뒤로 가기 함수
  const handleBack = () => {
    navigate(-1); 
  };

  return (
    <AddListContainer>
      {userNumber && (
        <AddToList 
          listName={courseName}  
          userNumber={userNumber}  
          onBack={handleBack}  
        />
      )}
    </AddListContainer>
  );
};

export default Addlist;
