// practice02
console.log('practice02 ready!');

// 出目を保存する変数（最初は6以外の適当な数字にしておく）
let dice = 0;

// 出目が6ではない間、ずっと繰り返す
while (dice !== 6) {
    // 1〜6のランダムな目を生成
    dice = Math.floor(Math.random() * 6) + 1;
    console.log(`出た目: ${dice}`);
}

console.log('6が出たので終了しました');

const drawUntilBtn = document.getElementById('draw-until-btn');
const drawLog = document.getElementById('draw-log');

const omikujiItems = ['大吉', '中吉', '小吉', '吉', '凶'];
