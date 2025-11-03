// 모바일 내비 토글
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
if (navToggle) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    navLinks.classList.toggle("show");
  });
  // 메뉴 클릭 시 닫기
  navLinks.querySelectorAll("a").forEach(a =>
    a.addEventListener("click", () => {
      navLinks.classList.remove("show");
      navToggle.setAttribute("aria-expanded", "false");
    })
  );
}

// 스무스 스크롤(접근성 유지)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e){
    const target = document.querySelector(this.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({behavior:"smooth", block:"start"});
    target.setAttribute("tabindex","-1");
    target.focus({preventScroll:true});
  });
});

// Contact 폼 처리 (데모용)
const form = document.getElementById("contactForm");
const statusEl = document.getElementById("formStatus");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name")?.value.trim();
    const email = document.getElementById("email")?.value.trim();
    const message = document.getElementById("message")?.value.trim();

    // 간단 검증
    if (!name || !email || !message) {
      statusEl.textContent = "필수 항목을 모두 입력해주세요.";
      statusEl.style.color = "#ffbaba";
      return;
    }
    // 데모: 실제 전송 대신 성공 메시지
    statusEl.textContent = "감사합니다! 곧 연락드리겠습니다.";
    statusEl.style.color = "#96f5c8";
    form.reset();
  });
}

// 푸터 연도 자동
document.getElementById("year").textContent = new Date().getFullYear();
