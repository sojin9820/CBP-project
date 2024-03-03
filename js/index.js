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

//arrow-button 클릭시 first-section으로 이동
document
  .querySelector(".arrow-bottom img")
  .addEventListener("click", function () {
    const firstSection = document.querySelector(".first-section");
    if (firstSection) {
      const topPos = firstSection.offsetTop;

      window.scrollTo({
        top: topPos,
        behavior: "smooth",
      });
    }
  });

//first-section
document.querySelectorAll(".first-section-content").forEach((content) => {
  // 마우스 오버 시 사용할 공통 이미지 경로 설정
  const hoverSrc = "img/ui-img/section1-hover.png";

  content.addEventListener("mouseenter", function () {
    // 현재 요소 내의 이미지를 찾아 hoverSrc로 변경
    const img = this.querySelector("img");
    if (img) {
      img.dataset.originalSrc = img.src; // 원래 src를 저장
      img.src = hoverSrc;
    }

    // a 태그 생성 및 설정 (각 요소에 설정된 data-url을 기반으로)
    const targetUrl = this.getAttribute("data-url"); // 이 요소의 data-url 속성 값을 가져옴
    let link = this.querySelector("a.dynamic-link");
    if (!link) {
      link = document.createElement("a");
      link.href = targetUrl;
      link.className = "dynamic-link";
      link.style.display = "none";
      this.appendChild(link);
    }
  });

  content.addEventListener("mouseleave", function () {
    // 마우스가 떠날 때 원래 이미지(src)로 복원
    const img = this.querySelector("img");
    if (img && img.dataset.originalSrc) {
      img.src = img.dataset.originalSrc;
    }

    // 동적으로 추가된 링크 제거 또는 숨김 처리
    const link = this.querySelector("a.dynamic-link");
    if (link) {
      link.style.display = "none";
    }
  });

  content.addEventListener("click", function () {
    const link = this.querySelector("a.dynamic-link");
    if (link) {
      window.location.href = link.href; // 클릭 시 링크로 이동
    }
  });
});

//캐러셀 슬라이더
const cardSlider = new Swiper(".secoond-section-slider .swiper", {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 2500,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//회사연혁
document.querySelectorAll(".year-tabs li").forEach((tab) => {
  tab.addEventListener("click", function () {
    // 모든 탭에서 'selected-year' 클래스 제거
    document.querySelectorAll(".year-tabs li").forEach((el) => {
      el.classList.remove("selected-year");
    });

    // 클릭된 탭에 'selected-year' 클래스 추가
    this.classList.add("selected-year");

    var year = this.getAttribute("data-year");
    document.querySelectorAll(".history-contents").forEach((content) => {
      if (content.id === "history-" + year) {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
    });
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
