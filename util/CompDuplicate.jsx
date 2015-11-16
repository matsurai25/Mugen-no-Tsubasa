// コンポジションを選択した状態で実行、文字列を1文字ずつ分解して、その文字数分だけコンポジションを複製して"prefix"+letter+"suffix"の形で保存

var Lyrics = "空を見上げ僕らは夢見た あの鳥のような翼を 夏の陽炎が君を消した あの空に行ってしまったの？ 残された手紙握り締め 今決めた 君を探すため空へ飛ぶんだ 作りかけの翼が大空へと羽ばたく時 きっときっと叶うだろう 僕たちが描いた夢が 空の上の世界できっと君は待ってるから 無限の夢翼に乗せ いつの日か飛んでみせる 難しい本片手に作る この空を飛べる翼を 雨上がりの空架かった虹 今君もどこかで見てる？ 君への思いを握り締め さあ時は満ちた走り出せ 翼を広げ 小さなこの翼が大空へと今羽ばたく 高い高いこの景色を なあ君も見ていたんだろ？ 空の上の世界へあと少しで辿り着ける 無限の夢翼に乗せ 届けるよこの気持ちを 荒れ狂う空 折れた翼 僕は空を飛べないの？ 霞む意識に響いた少女の声 「解き放て ムゲンノツバサ」 天使のような翼が 光纏い僕を包む 青い青い空の下で また君に出会えた奇跡 夢を乗せた翼が たとえ幻だとしても 夢幻の彼方の世界へ 君となら飛んで行ける".split('');
var prefix = "letterA_";
var suffix = "_light";



// forEach使えないので使えるように
// Production steps of ECMA-262, Edition 5, 15.4.4.18
// Reference: http://es5.github.com/#x15.4.4.18
if ( !Array.prototype.forEach ) {
  Array.prototype.forEach = function( callback, thisArg ) {
    var T, k;
    if ( this == null ) {
      throw new TypeError( " this is null or not defined" );
    }
    var O = Object(this);
    var len = O.length >>> 0; // Hack to convert O.length to a UInt32
    if ( {}.toString.call(callback) != "[object Function]" ) {
      throw new TypeError( callback + " is not a function" );
    }
    if ( thisArg ) {
      T = thisArg;
    }
    k = 0;
    while( k < len ) {
      var kValue;
      if ( k in O ) {
        kValue = O[ k ];
        callback.call( T, kValue, k, O );
      }
      k++;
    }
  };
}

var activeItem = app.project.activeItem;
var letters = [];
var flag;

letters.push(Lyrics[0]);

for(var i = 0; i < Lyrics.length; i++){
  flag = true;
  for(var j = 0; j < letters.length; j++){
    if(Lyrics[i] === letters[j]){
      flag = false;
    }
  }

  if(flag){
    letters.push(Lyrics[i]);
  }
}

if ((activeItem == null) || !(activeItem instanceof CompItem)) {
  alert("コンポジションを選択した状態で実行しよう");
}else{
  letters.forEach(function(_){
    var curComp = activeItem.duplicate();
    curComp.name = prefix+_+suffix;
  })
}


