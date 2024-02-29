//nav바
const depth1 = document.querySelectorAll(".gnb>li"); // gnb 하위의 모든 li 요소를 찾음

depth1.forEach(function (ele) {
  // 마우스가 li 요소 위에 올려졌을 때
  ele.addEventListener("mouseenter", function () {
    // 현재 li 요소의 자식 중에 클래스가 .dep2-menu-list인 요소를 찾아서 보이게 한다.
    let depth2 = this.querySelector(".dep2-menu-list");
    if (depth2) depth2.style.display = "flex"; // 하위 메뉴를 flex로 설정하여 표시
  });
  ele.addEventListener("mouseleave", function () {
    let depth2 = this.querySelector(".dep2-menu-list");
    if (depth2) depth2.style.display = "none";
  });
});

//top버튼 눌렀을 시 맨 위로 이동
window.onload = function () {
  // 버튼 요소를 찾습니다.
  var topButton = document.getElementById("topButton");

  // 해당 버튼에 클릭 이벤트 리스너를 추가합니다.
  topButton.addEventListener("click", function () {
    // 스크롤을 맨 위로 이동합니다.
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
};

//블로그 페이지 호버시 이미지 변경
document
  .querySelector(".hover-change-image")
  .addEventListener("mouseenter", function () {
    this.src = "img/sub-img/hover-subbutton.png";
  });
document
  .querySelector(".hover-change-image")
  .addEventListener("mouseleave", function () {
    this.src = "img/sub-img/subbutton.png";
  });
