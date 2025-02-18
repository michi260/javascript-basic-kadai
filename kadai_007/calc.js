let num = Math.floor(Math.random() * 20);

// 3の倍数を出力する場合
if(num % 3  == 0) {
    console.log('3の倍数です'); 
}
// 5の倍数を出力する場合
else if(num % 5 == 0) {
    console.log('5の倍数です');
}
// 3と5の倍数を出力する場合
else if(num % 3 == 0 && num % 5 == 0) {
    console.log('3と5の倍数です');
}
//それ以外の場合の変数の値を出力する
else{
console.log(num);
}