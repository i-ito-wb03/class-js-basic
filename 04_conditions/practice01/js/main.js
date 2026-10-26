console.log('04_conditions ready!');

const score = 85;

if (score >= 80) {
    console.log('合格です！おめでとうございます！');
}

const age = 22;
const hasLicense = true;

// 18歳以上、かつ運転免許を持っているのか？
if (age >= 18 && hasLicense === true) {
    console.log('車の運転が可能です。');
} else {
    console.log('車の運転はできません。');
}
