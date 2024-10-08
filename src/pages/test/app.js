var javascriptArray = [
    "웹 뷰에서 왔습니다.",
    "아이폰 참 좋네요 ㅎㅎㅎ",
    "🧻🧻🧻🧻🧻🧻",
    "집들이 선물입니다",
    "The End"
  ];
  
  var jsIndex = 0
  
  document.getElementById("submit-button").addEventListener("click", function() {
    let text = javascriptArray[jsIndex]
    window.webkit.messageHandlers.textfieldText.postMessage(text)
  
    jsIndex++;
    if (jsIndex == javascriptArray.length) {
      jsIndex = 0;
    }
  });