// ==================================================================================
//
// ムゲンノツバサ用に作成 matsurai25
//
// ==================================================================================


// コンポジションを選択した状態で実行、文字列を1文字ずつ分解して、その文字数分だけコンポジションを複製して"letter_"+nameの形で保存

// 歌詞
// 空を見上げ僕らは夢見た あの鳥のような翼を 夏の陽炎が君を消した あの空に行ってしまったの？ 残された手紙握り締め 今決めた 君を探すため空へ飛ぶんだ 作りかけの翼が大空へと羽ばたく時 きっときっと叶うだろう 僕たちが描いた夢が 空の上の世界できっと君は待ってるから 無限の夢翼に乗せ いつの日か飛んでみせる 難しい本片手に作る この空を飛べる翼を 雨上がりの空架かった虹 今君もどこかで見てる？ 君への思いを握り締め さあ時は満ちた走り出せ 翼を広げ 小さなこの翼が大空へと今羽ばたく 高い高いこの景色を なあ君も見ていたんだろ？ 空の上の世界へあと少しで辿り着ける 無限の夢翼に乗せ 届けるよこの気持ちを 荒れ狂う空 折れた翼 僕は空を飛べないの？ 霞む意識に響いた少女の声 「解き放て ムゲンノツバサ」 天使のような翼が 光纏い僕を包む 青い青い空の下で また君に出会えた奇跡 夢を乗せた翼が たとえ幻だとしても 夢幻の彼方の世界へ 君となら飛んで行ける

// ユニーク化
// 空を見上げ僕らは夢たあの鳥ような翼夏陽炎が君消しに行ってま？残され手紙握り締め今決探すへ飛ぶんだ作かけ大と羽ばく時き叶ろち描い世界で待る無限乗せつ日み難本片こべ雨架虹もど思満走出広小高景色少辿着届気持荒狂折霞む意識響女声「解放ムゲンノツバサ」天使光纏包青下会え奇跡幻彼方


// forEach使えないので使えるように

// Production steps of ECMA-262, Edition 5, 15.4.4.18
// Reference: http://es5.github.com/#x15.4.4.18
if ( !Array.prototype.forEach ) {
  Array.prototype.forEach = function( callback, thisArg ) {

    var T, k;

    if ( this == null ) {
      throw new TypeError( " this is null or not defined" );
    }

    // 1. Let O be the result of calling ToObject passing the |this| value as the argument.
    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get internal method of O with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = O.length >>> 0; // Hack to convert O.length to a UInt32

    // 4. If IsCallable(callback) is false, throw a TypeError exception.
    // See: http://es5.github.com/#x9.11
    if ( {}.toString.call(callback) != "[object Function]" ) {
      throw new TypeError( callback + " is not a function" );
    }

    // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
    if ( thisArg ) {
      T = thisArg;
    }

    // 6. Let k be 0
    k = 0;

    // 7. Repeat, while k < len
    while( k < len ) {

      var kValue;

      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the HasProperty internal method of O with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then

      if ( k in O ) {

        // i. Let kValue be the result of calling the Get internal method of O with argument Pk.
        kValue = O[ k ];

        // ii. Call the Call internal method of callback with T as the this value and
        // argument list containing kValue, k, and O.
        callback.call( T, kValue, k, O );
      }
      // d. Increase k by 1.
      k++;
    }
    // 8. return undefined
  };
}

var activeItem = app.project.activeItem;
var Lyrics = "空を見上げ僕らは夢たあの鳥ような翼夏陽炎が君消しに行ってま？残され手紙握り締め今決探すへ飛ぶんだ作かけ大と羽ばく時き叶ろち描い世界で待る無限乗せつ日み難本片こべ雨架虹もど思満走出広小高景色少辿着届気持荒狂折霞む意識響女声「解放ムゲンノツバサ」天使光纏包青下会え奇跡幻彼方".split('');


if ((activeItem == null) || !(activeItem instanceof CompItem)) {
  alert("コンポジションを選択した状態で実行しよう");
}else{
  Lyrics.forEach(function(_){
    var curComp = activeItem.duplicate();
    curComp.name = "letter_"+_;
  })
}


