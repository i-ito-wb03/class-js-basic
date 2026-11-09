const colorBtns = document.querySelectorAll('.color-btn');
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

const colorCodes = ['#e74c3c', '#27ae60', '#2980b9', '#8e44ad'];
