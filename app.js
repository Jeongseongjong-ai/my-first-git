// 버튼 클릭 시 메시지를 보여주는 간단한 기능
document.getElementById('btn').addEventListener('click', () => {
    const messageTag = document.getElementById('message');
    messageTag.innerText = "축하해! 첫 깃허브 업로드 준비가 끝났어! 🚀";
    messageTag.style.color = "blue";
    console.log("버튼이 클릭되었습니다.");
});