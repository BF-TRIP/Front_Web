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
  const [uuid, setuuid] = useState(null);
  const [courseNumber, setCourseNumber] = useState(null);

  useEffect(() => {
    const storeduuid = localStorage.getItem('uuid');
    const receivedCourseNumber = location.state?.courseNumber; 

    if (storeduuid) {
      setuuid(storeduuid);
    } else {
      console.warn('uuid가 로컬스토리지에 존재하지 않습니다.');
    }

    if (receivedCourseNumber) {
      setCourseNumber(receivedCourseNumber);
    } else {
      console.warn('courseNumber가 전달되지 않았습니다.');
    }
  }, [location.state]);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <AddListContainer>
      {uuid && courseNumber && (
        <AddToList 
          listName={location.state?.listName || '리스트 이름'}
          uuid={uuid}
          courseNumber={courseNumber} 
          onBack={handleBack}
        />
      )}
    </AddListContainer>
  );
};

export default Addlist;
