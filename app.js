// 버튼 클릭 시 메시지를 보여주는 간단한 기능 + 다크모드 토글 기능

const btn = document.getElementById('btn');
const messageTag = document.getElementById('message');
const themeToggleButton = document.getElementById('theme-toggle');
const rootElement = document.documentElement;

btn.addEventListener('click', () => {
    messageTag.innerText = "축하해! 첫 깃허브 업로드 준비가 끝났어! 🚀";
    console.log("버튼이 클릭되었습니다.");
});

// 다크모드 상태를 토글하고, HTML 루트에 클래스를 붙여 스타일 변경
themeToggleButton.addEventListener('click', () => {
    const isDark = rootElement.classList.toggle('dark');
    themeToggleButton.setAttribute('aria-pressed', String(isDark));

    const knob = themeToggleButton.querySelector('.toggle-knob');
    if (knob) {
        knob.textContent = isDark ? '🌙' : '☀️';
    }
});