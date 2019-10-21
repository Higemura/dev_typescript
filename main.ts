
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


// クラス
/*
アクセス修飾指定（変数や関数に対してアクセスを制限を指定できる）
public デフォルト（どこからでもアクセスできる）
protected
private
*/
class User {
  // public name: string; // デフォルトでpublicだから省略可
  // constructor(name: string) {
  //   this.name = name;
  // };
  constructor(public name: string) { // constructorに直接変数とアクセス修飾指定が書ける（上の記述と同じ意味になる）
    this.name = name;
  };
  sayHi(): void {
    console.log(`私は ${this.name}`);
  }
}

const tom = new User('Tom');
console.log(tom.name);
tom.sayHi();
