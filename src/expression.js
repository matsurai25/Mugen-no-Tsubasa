// 配列の中からランダムな色を出す
// これとアニメーター等を合わせて変化だす

// 16→1
function color16(rgb){
  c = 1/255;
  red =parseInt(rgb.substring(0, 2), 16);
  green =parseInt(rgb.substring(2, 4), 16)
  blue =parseInt(rgb.substring(4, 6), 16)
  return [c*red,c*green,c*blue,1];
}

ColorArray = ["f25076","f05187","836FFF","ff89aa","fd5939","ffc6d6"];
max = ColorArray.length-1;
key = Math.round(random(0,max));
color16(ColorArray[key])


//取得
var RandomColor = comp("_global").layer("gData").effect("RandomColor")("カラー")
var c = [1,1,1,1];
if(time>outPoint-3){
    //終了3秒前
    var key = (outPoint-time)/3;
    c[0] = key;
    c[1] = RandomColor[1]+key;
    c[2] = RandomColor[2]+key;
    c[3] = RandomColor[3]+key;
}else if(time>inPoint+3){
    //2秒以降は白に
    c = [1,1,1,1]
}else if(time>inPoint+2){
    //2秒以降は徐々に白に
    var key = time-2;
    c[0] = key;
    c[1] = RandomColor[1]+key;
    c[2] = RandomColor[2]+key;
    c[3] = RandomColor[3]+key;
}else if(time>inPoint+1){
    //1秒以降は青に
    c[0] = 0;
    c[1] = RandomColor[1];
    c[2] = RandomColor[2];
    c[3] = RandomColor[3];
}else{
    //違うなら、
    c = RandomColor;
}
c


//取得
var RandomColor = comp("_global").layer("gData").effect("RandomColor")("カラー")
var c = [1,1,1,1];
if(time>inPoint+1.5){
    //1秒以降は白に
    c = [1,1,1,1]
}else if(time>inPoint+0.6){
    //0.6秒以降は徐々に白に
    var key = time-inPoint-0.6;
    c[0] = key;
    c[1] = RandomColor[1]+key;
    c[2] = RandomColor[2]+key;
    c[3] = RandomColor[3]+key;
}else if(time>inPoint+0.4){
    c[0] = 0;
    c[1] = RandomColor[1];
    c[2] = RandomColor[2];
    c[3] = RandomColor[3];
}else if(time>inPoint+0.2){
    c[0] = RandomColor[0];
    c[1] = 0.5;
    c[2] = RandomColor[2];
    c[3] = RandomColor[3];
}else if(time>inPoint+0.1){
    c[0] = RandomColor[0]+0.5;
    c[1] = RandomColor[1]+0.5;
    c[2] = 0;
    c[3] = RandomColor[3];
}else{
    //違うなら、
    c = RandomColor;
}
c


// タイムリマップ

var speed = 2;

var currentTime;
var range = 3;
if(time>(outPoint-range)){
    currentTime = time - ( outPoint-range ) + range; //非常にバカっぽい
}else if(time<inPoint+(range*speed)){
    currentTime = time/speed - inPoint;
}else{
    currentTime = range;
}
currentTime;