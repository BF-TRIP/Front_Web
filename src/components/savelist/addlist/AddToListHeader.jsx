import styled from 'styled-components';
import PropTypes from 'prop-types';
import backIcon from '../../../assets/images/back.svg'; 

const HeaderContainer = styled.div`
  width: 100%;
  height: 4.25rem;
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 0 1rem;
`;


const BackButton = styled.img`
  width: 0.625rem;
  height: 1.04431rem;
  flex-shrink: 0;
  cursor: pointer;
`;


const ListTitle = styled.h1`
  flex-grow: 1;
  font-weight: 600;
  margin: 0;

  color: #000;
  font-family: Pretendard;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 1.6875rem */
  letter-spacing: -0.0175rem;
  margin-left: 0.63rem;
`;

const Divider = styled.div`
  width: 100%;
  height: 0.31rem;
  flex-shrink: 0;
  background: #F7F6FB;;
`;


const AddToListHeader = ({ onBack }) => {
  return (
    <>
    <HeaderContainer>
      <BackButton src={backIcon} alt="뒤로 가기" onClick={onBack} />
      <ListTitle>리스트 이름</ListTitle>
    </HeaderContainer>
    <Divider />
    </>
  );
};

AddToListHeader.propTypes = {
  listName: PropTypes.string.isRequired,
  onBack: PropTypes.func.isRequired, 
};

export default AddToListHeader;
