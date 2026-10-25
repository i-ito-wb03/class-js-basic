console.log('success!');

const btn = document.getElementById('btn');
const mainTitle = document.getElementById('main-title');

// 画面を開いた瞬間の文字サイズを設定（画面幅の1/25）
mainTitle.style.fontSize = `${window.innerWidth / 25}px`;

// リサイズされるたびに文字サイズを更新
window.addEventListener('resize', () => {
    mainTitle.style.fontSize = `${window.innerWidth / 25}px`;
});

btn.addEventListener('click', () => {
    mainTitle.textContent = 'ボタンがクリックされました！';
    mainTitle.style.color = '#e67e22';
});

window.addEventListener('scroll', () => {
    // スクロールされたピクセル数（px）をそのままグラデーションの角度（deg）に変換
    document.body.style.backgroundImage = `linear-gradient(${window.scrollY}deg, #ff9a9e, #fad0c4)`;
});

// スクロールしたとき
window.addEventListener('scroll', () => {
    document.body.style.backgroundImage = `linear-gradient(${window.scrollY}deg, #ff9a9e, #fad0c4)`;
});

// ページの読み込みが完了したとき（リロード時にも適用）
window.addEventListener('load', () => {
    document.body.style.backgroundImage = `linear-gradient(${window.scrollY}deg, #ff9a9e, #fad0c4)`;
});

const windowWidthText = document.getElementById('window-width');
const windowHeightText = document.getElementById('window-height');

// 画像を開いた瞬間の幅と高さを表示
windowWidthText.textContent = window.innerWidth;
windowHeightText.textContent = window.innerHeight;

// ウィンドウがリサイズされるたびに数値を更新
window.addEventListener('resize', () => {
    windowWidthText.textContent = window.innerWidth;
    windowHeightText.textContent = window.innerHeight;
});
