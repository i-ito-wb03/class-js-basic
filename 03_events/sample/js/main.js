console.log('success!');

const btn = document.getElementById('btn');
const mainTitle = document.getElementById('main-title');

btn.addEventListener('click', () => {
    mainTitle.textContent = 'ボタンがクリックされました！';
    mainTitle.style.color = '#e67e22';
});

window.addEventListener('scroll', () => {
    // スクロールされたピクセル数（px）をそのまま回転角度（deg）に変換
    btn.style.transform = `rotate(${window.scrollY}deg)`;
});
