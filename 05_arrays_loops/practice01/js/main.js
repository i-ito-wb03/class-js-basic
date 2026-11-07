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
