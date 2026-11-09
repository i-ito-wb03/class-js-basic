const colorPreview = document.getElementById('color-preview');
const colorBtns = document.querySelectorAll('.color-btn');
const colorCodes = ['#e74c3c', '#27ae60', '#2980b9', '#8e44ad'];

for (let i = 0; i < colorBtns.length; i++) {
    colorBtns[i].addEventListener('click', () => {
        // ★ Step 1: まず全てのボタンから is-active を削除（全員リセット）
        for (let j = 0; j < colorBtns.length; j++) {
            colorBtns[j].classList.remove('is-active');
        }

        // ★ Step 2: クリックされた　i番目のボタンだけに is-active を追加
        colorBtns[i].classList.add('is-active');

        // プレビューエリアの更新
        const colorName = colorBtns[i].textContent;
        const colorCode = colorCodes[i];
        colorPreview.style.backgroundColor = colorCode;
        colorPreview.style.color = '#ffffff';
        colorPreview.textContent = `${colorName} (${colorCode}) `;
    });
}

// 各ボタン（0~3番目）に対応するカラーコードの配列

// 4つのボタンすべてにクリックイベントを登録


console.log(colorBtns);        // => NodeList(4) [button.color-btn, button.color-btn, ...]
console.log(colorBtns.length); // => 4
console.log(colorBtns[0]);     // => 1つ目の「情熱のレッド」ボタン要素

// href属性が　"http"　から始まる a タグ（外部リンク）だけをすべて取得
const externalLinks = document.querySelectorAll('a[href^="http"]');

// 取得したすべての外部リンクに対してループで一括設定
for (let i = 0; i < externalLinks.length; i++) {
    // 1. 新しいタブで開く属性を設定
    externalLinks[i].setAttribute('target', '_blank');
    externalLinks[i].setAttribute('rel', 'noopener noreferrer');

    // 2. リンクテキストの末尾にアイコン記号を追加
    externalLinks[i].textContent += ' ↗︎';
}
