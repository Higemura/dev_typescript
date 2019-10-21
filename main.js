// let x: number = 10;
// // x = 'Hello!'; // 型が違うからエラー
// x = 100; // OK
// console.log(x);
// 列挙型
// enum Signal {
//   Red = 0,
//   Blue = 1,
//   Yellow = 2,
// };
// console.log(Signal[2]); // Yellow
// enum Signal {
//   Red, // 0（省略記法）
//   Blue = 3,
//   Yellow, // 4（省略記法 連番になるから4になる）
// };
// enum Signal {
//   Green = 5, // 既存のSignalと結合する
// };
// console.log(Signal);
// let result: Signal;
// if (result === Signal.Yellow) {
//   console.log('Yellow');
// }
// if (result === Signal['Yellow']) {
//   console.log('Yellow');
// }
// function add(a: number, b: number): number {
//   return a + b;
// }
/* 関数
void 返り値(return hoge)がない場合
*/
// const add = (a: number, b: number): number => {
//   return a + b;
// }
// b: number = 10 で初期値10を設定している
// const add = (a: number, b: number = 10): number => {
//   return a + b;
// }
// 引数bに?（option）をつけることで、引数がなくても動作する。
// その場合関数内部で分岐処理をかけなくてはならない
// const add = (a: number, b?: number): number => {
//   if (b) {
//     return a + b; // 引数bがあれば
//   } else {
//     return a;
//   }
// }
// console.log(add(4, 5));
// console.log(add(5));
// 関数のオーバーロード
// function add(a: number, b: number): number; // シグネチャ
// function add(a: string, b: string): string; // シグネチャ
// function add(a: any, b: any): any {
//   if (typeof a === 'string' && typeof b === 'string') {
//     return `${a} ${b}`;
//   }
//   return a + b;
// };
// console.log(add(7, 3)); // numberシグネチャで出力
// console.log(add('hello', 'world')); // stringシグネチャで出力
// console.log(add(4, 'world')); //　エラー
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    ;
    User.prototype.sayHi = function () {
        console.log("\u79C1\u306F " + this.name);
    };
    return User;
}());
var tom = new User('Tom');
console.log(tom.name);
tom.sayHi();
