function color16(rgb){
  c = 1/255;
  red =parseInt(rgb.substring(0, 2), 16);
  green =parseInt(rgb.substring(2, 4), 16)
  blue =parseInt(rgb.substring(4, 6), 16)
  return [c*red,c*green,c*blue,1];
}
var colors = {};
colors.r = color16("e22d6e");
colors.y = color16("ffd697");
colors.db = color16("5b7ab6");
colors.lg = color16("b1e8d0");
colors.w = color16("fffaf6");
colors.g = color16("5a6070");
colors.lb = color16("89ffff");
colors.p = color16("fb80f3");
colors.b = color16("0086fa");