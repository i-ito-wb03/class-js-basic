// 準備したリンク（#external-link）のhref 属性を取得してみる
const link = document.getElementById('external-link');
const url = link.getAttribute('href');

console.log(url); // => "https://google.com"
