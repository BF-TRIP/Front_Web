import { useState } from "react";
import styled from "styled-components";

// 스타일 정의
const CenterElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
`;

const DisplayText = styled.p`
  font-size: 1.3rem;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: white;
  background-color: orange;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: darkorange;
  }

  &:active {
    background-color: red;
  }
`;

function Text() {
  const [displayText, setDisplayText] = useState("이 곳은 웹 뷰입니다. 넘어오지 마십쇼 휴먼.");

  const textArray = [
    "이 곳은 웹 뷰입니다. 넘어오지 마십쇼 휴먼.",
    "으악",
    "내 몸에서 나가!!!",
    "지금까지 자바스크립트였습니다.",
    "The End",
  ];

  const javascriptArray = [
    "웹 뷰에서 왔습니다.",
    "아이폰 참 좋네요 ㅎㅎㅎ",
    "🧻🧻🧻🧻🧻🧻",
    "집들이 선물입니다",
    "The End",
  ];

  let currentIndex = 0;
  let jsIndex = 0;

  const handleClick = () => {
    // Swift로 메시지 전송
    if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.textfieldText) {
      window.webkit.messageHandlers.textfieldText.postMessage(javascriptArray[jsIndex]);
    }

    jsIndex++;
    if (jsIndex === javascriptArray.length) {
      jsIndex = 0;
    }

    currentIndex++;
    if (currentIndex === textArray.length) {
      currentIndex = 0;
    }

    setDisplayText(textArray[currentIndex]);
  };

  return (
    <CenterElement>
      <DisplayText>{displayText}</DisplayText>
      <Button onClick={handleClick}>자바스크립트 버튼</Button>
    </CenterElement>
  );
}

export default Text;
