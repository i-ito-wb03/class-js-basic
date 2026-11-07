console.log('ready!');
const stepIndicator = document.getElementById('step-indicator');
const stepMessage = document.getElementById('step-message');
const nextBtn = document.getElementById('next-btn');

// ガイドメッセージの配列（全4件：インデックスは 0 ~ 3）
const steps = [
    'ようこそ！まずはアカウント登録を始めましょう。',
    'お名前とメールアドレスを入力してください。',
    '入力内容を確認し、利用規約に同意してください。',
    '登録が完了しました！サービスをお楽しみください🎉',
];

// 現在表示しているインデックス番号（0からスタート）
let currentIndex = 0;

// 初期表示の反映
stepIndicator.textContent = `STEP ${currentIndex + 1} / ${steps.length}`;
stepMessage.textContent = steps[currentIndex];

// ボタンクリックで次のメッセージへ進める
nextBtn.addEventListener('click', () => {
    // 1. インデックスを1つ進める
    currentIndex++;

    // 2. 最後まで行ったら最初（0）に戻す
    if (currentIndex >= steps.length) {
        currentIndex = 0;
    }

    // 3. 画面のテキストを更新（人間向けの表示番号は　+1　する）
    stepIndicator.textContent = `STEP ${currentIndex + 1} / ${steps.length}`;
    stepMessage.textContent = steps[currentIndex];
});
