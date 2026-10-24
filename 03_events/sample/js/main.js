console.log('success!');

const btn = document.getElementById('btn');
const mainTitle = document.getElementById('main-title');

btn.addEventListener('click', () => {
    mainTitle.textContent = 'ボタンがクリックされました！';
    mainTitle.style.color = '#e67e22';
});

window.addEventListener('scroll', () => {
    // スクロールされたピクセル数（px）をそのままグラデーションの角度（deg）に変換
    document.body.style.backgroundImage = `linear-gradient(${window.scrollY}deg, #ff9a9e, #fad0c4)`;
});

// スクロールしたとき
window.addEventListener('load', () => {
    document.body.style.backgroundImage = `linear-gradient(${window.scrollY}deg, #ff9a9e, #fad0c4)`;
});
