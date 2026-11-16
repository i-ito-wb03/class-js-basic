// 06_ループの応用とMathオブジェクト
console.log('ready!');

const diceResult = document.getElementById('dice-result');
const rollDiceBtn = document.getElementById('roll-dice-btn');

rollDiceBtn.addEventListener('click', () => {
    // 0〜5 のランダム整数に +1 して 1〜6 にする
    const diceNumber = Math.floor(Math.random() * 6) + 1;

    // 画面に表示
    diceResult.textContent = diceNumber;
});
