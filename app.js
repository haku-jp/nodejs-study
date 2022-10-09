'use strict';
//process.argv は Node.js がデフォルトで提供してくれる、コマンドライン引数が入った配列
//添え字が2の理由は、
//0 番には node コマンドのファイルのパスが入り、
//1 番には実行しているプログラムのファイルのパスが入る、という決まりがある
//"||"は論理和。代入式の中で使うと左式がfalsyなら右の式を代入するという処理になる。
const number = process.argv[2] || 0;  
let sum = 0;
for (let i = 1;i <= number; i++) {
  sum = sum + i;
}
console.log(sum);
