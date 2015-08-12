// playground.jsx
var now = new Date();
var items = app.project.items;

var myComp = app.project.items.addComp("playground : "+now.toLocaleString(), 1920, 1080, 1.00, 600, 29.97);

function searchLetterIndex(letter){
  var num=0;
  var str="letter_"+letter;
  for (var i=1; i<=app.project.items.length ; i++){
    if (app.project.item(i).name == str){
      num = i;
      break;
    }
  }
  return num;
}


myComp.layers.add(items[searchLetterIndex("翼")])
