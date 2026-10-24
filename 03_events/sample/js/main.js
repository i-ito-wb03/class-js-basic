console.log('success!');

const btn = document.getElementById('btn');
const mainTitle = document.getElementById('main-title');

btn.addEventListener('click', () => {
    mainTitle.textContent = 'ボタンがクリックされました！';
    mainTitle.style.color = '#e67e22';
});
