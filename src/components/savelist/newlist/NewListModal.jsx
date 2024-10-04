import { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import closeIcon from '../../../assets/images/close.svg'; // Close 버튼 이미지 경로

const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 390px; /* 앱의 고정된 너비 */
  height: 844px; /* 앱의 고정된 높이 */
  background: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.show ? 'block' : 'none')};
  z-index: 9999;
`;

const ModalContent = styled.div`
  position: fixed;
  bottom: 0%;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 390px;
  background: #fff;
  border-radius: 1.25rem 1.25rem 0rem 0rem;
  z-index: 10000;
  padding: 1rem;
`;

const CloseButton = styled.img`
  position: absolute;
  top: 1.56rem;
  right: 1.5rem;
  width: 1.25rem;
  height: 1.25rem;
  cursor: pointer;
  outline: none;

  &:focus {
    outline: none;
  }
`;

const ModalTitle = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 1.375rem;
  font-weight: 600;
  line-height: 1.375rem;
  text-align: center;
  margin-top: 0.5rem;
  margin-bottom: 1.82rem;
`;

const InputField = styled.input`
  width: 18.5rem;
  padding: 0.75rem;
  border-radius: 0.75rem;
  background: #E3E3E3;
  font-size: 1rem;
  margin-top: 0.75rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const TextAreaField = styled.textarea`
  width: 18.5rem;
  height: 5rem;
  padding: 0.75rem;
  border-radius: 0.75rem;
  background: #E3E3E3;
  font-size: 1rem;
  margin-top: 0.75rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
  resize: none;
`;

const ConfirmButton = styled.button`
  width: 18.75rem;
  padding: 0.75rem;
  background: #ffe756;
  color: #4d4d4d;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 1.06rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
  outline: none;

  &:focus {
    outline: none;
  }
`;

const NewListModal = ({ show, onClose, onConfirm }) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden'; // 스크롤 비활성화
    } else {
      document.body.style.overflow = 'auto'; // 스크롤 활성화
    }

    return () => {
      document.body.style.overflow = 'auto'; // 컴포넌트 언마운트 시 스크롤 복원
    };
  }, [show]);

  if (!show) return null;

  return (
    <>
      <ModalOverlay show={show} onClick={onClose} />
      <ModalContent>
        <CloseButton src={closeIcon} alt="Close" onClick={onClose} />
        <ModalTitle>새 리스트</ModalTitle>
        <InputField placeholder="리스트 이름을 입력해주세요" />
        <TextAreaField placeholder={`설명을 간단히 작성해보세요\n(예 : 몇월 며칠 누구랑 무슨 여행)`} />
        <ConfirmButton onClick={onConfirm}>확인</ConfirmButton>
      </ModalContent>
    </>
  );
};

NewListModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default NewListModal;
