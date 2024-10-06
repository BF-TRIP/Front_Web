import { useState } from "react";

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
  
    // javascriptArray 인덱스 순환
    jsIndex++;
    if (jsIndex === javascriptArray.length) {
      jsIndex = 0;
    }
  
    // textArray 인덱스 순환 및 상태 업데이트
    currentIndex++;
    if (currentIndex === textArray.length) {
      currentIndex = 0;
    }
  
    setDisplayText(textArray[currentIndex]);
  };
  

  return (
    <div className="center-element">
      <p className="margin-bottom" id="displayText">
        {displayText}
      </p>

      <button onClick={handleClick} className="button-normal bg-orange margin-bottom">
        자바스크립트 버튼
      </button>
    </div>
  );
}

export default Text;
