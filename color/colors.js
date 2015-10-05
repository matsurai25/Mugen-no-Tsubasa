// eval(comp("_global").layer("exp").text.sourceText.value)
// randomColor(time,3)

function color16(rgb){
  c = 1/255;
  red =parseInt(rgb.substring(0, 2), 16);
  green =parseInt(rgb.substring(2, 4), 16)
  blue =parseInt(rgb.substring(4, 6), 16)
  return [c*red,c*green,c*blue,1];
}

function countColors(obj){
    var colorsCount = 0;
    for(var j in obj){
        colorsCount++;
    }
    return colorsCount
}

function getColorsKey(obj){
    var colorsKey = [];
    for(var j in obj){
        colorsKey.push(j)
    }
    return colorsKey
}
function getColorsKeyFreeGray(obj){
    var colorsKey = [];
    for(var j in obj){
        if(j=="gray"){continue}
        colorsKey.push(j)
    }
    return colorsKey
}

function randomColor(time,slowly){
    if(typeof(slowly) == "undefined") {
        slowly = 1;
    }
    var t = Math.abs(timeToFrames(time, fps = 1.0 / thisComp.frameDuration, isDuration = false))
    var keys = getColorsKey(colors);
    var size = countColors(colors);
    var num = Math.floor((t / slowly) % size);
    return colors[keys[num]]
}
function randomColorFreeGray(time,slowly){
    if(typeof(slowly) == "undefined") {
        slowly = 1;
    }
    var t = Math.abs(timeToFrames(time, fps = 1.0 / thisComp.frameDuration, isDuration = false))
    var keys = getColorsKeyFreeGray(colors);
    var size = countColors(colors)-1;
    var num = Math.floor((t / slowly) % size);
    return colors[keys[num]]
}
function randomColorFromNum(anynum){
    var keys = getColorsKey(colors);
    var size = countColors(colors)-1;
    var num = Math.floor(Math.abs(anynum) % size);
    return colors[keys[num]]
}


var colors = {};
colors.white = color16("fffaf6");
colors.red = color16("e22d6e");
colors.paleorange = color16("ffd697");
colors.yellow = color16("FFE900");
colors.blue = color16("0086fa");
colors.lightgreen = color16("b1e8d0");
colors.lightblue = color16("89ffff");
colors.darkblue = color16("103896");
colors.paleblue = color16("5b7ab6");
colors.gray = color16("5a6070");
colors.darkgray = color16("222222");
colors.r = color16("e22d6e");
colors.y = color16("ffd697");
colors.db = color16("5b7ab6");
colors.lg = color16("b1e8d0");
colors.w = color16("5a6070");
colors.g = color16("5a6070");
colors.lb = color16("89ffff");
colors.p = color16("fb80f3");
colors.b = color16("0086fa");