/*
 * Rendering of components
 */

blankFn = function(){}

drawBox = function(bg, fg, fn=blankFn) {
  ambientMaterial(bg);
  translate(0,scl/2-scl/8,0);
  box(scl,scl/4,scl);
  translate(0,-scl/8-scl/24,0);
  ambientMaterial(fg);
  box(scl/8*7,scl/12,scl/8*7);
  translate(0,-scl/24,0);
  fn();
  translate(0,scl/12+scl/4-scl/2,0);
}

this.drawEnderPulsar = function(state=false) {
  if (state) {
    drawBox(color(44,44,61),color(128,186,81));
  } else {
    drawBox(color(44,44,61),color(13,79,68));
  }
}

this.drawQuartzResonator = function(state=false) {
  if (state) {
    drawBox(color(44,44,61),color(194,188,164));
  } else {
    drawBox(color(44,44,61),color(135,122,84));
  }
}

this.drawLamp = function(state=false) {
  if (state) {
    drawBox(color(44,44,61),color(233,203,1));
  } else {
    drawBox(color(44,44,61),color(104,71,0));
  }
}

this.drawOperator = function(char=' ', side=0) {
  rotateY(-radians(90*side+90));

  ambientMaterial(102);
  translate(0,scl/2-scl/8,0);
  box(scl,scl/4,scl);
  translate(0,-scl/8-scl/48,0);
  ambientMaterial(168);
  box(scl/8*7,scl/24,scl/8*7);
  translate(0,-scl/48,0);
  // Text
  var txt = createGraphics(scl/8*7,scl/8*7);
  txt.background(168);
  txt.fill(0);
  txt.textAlign(CENTER,CENTER);
  txt.textSize(scl/4*3);
  txt.text('-',scl/20,scl/2-scl/10);
  txt.text(char,scl/2-scl/20,scl/2-scl/10);
  texture(txt);
  translate(0,-1,0);
  rotateX(radians(-90));
  plane(scl/8*7);
  rotateX(radians(-90));
  txt = null;
  translate(0,scl/24+scl/4-scl/2+1,0);

  rotateY(radians(90*side+90));
}

this.drawRSWire = function(state=false,top=0,right=0,bottom=0,left=0) {
  rotateY(-radians(90));
  translate(0,scl/2-scl/16,0);
  if (state) {
    ambientMaterial(213,23,23);
  } else {
    ambientMaterial(140,16,16);
  }
  box(scl/3,scl/8,scl/3);
  if (top>0) {
    translate(-scl/3,0,0);
    if (top==2) {
      translate(0,0,scl/3);
      box(scl/3,scl/8,scl/3);
      translate(0,0,-scl/3*2);
      box(scl/3,scl/8,scl/3);
      translate(0,0,scl/3);
    }
    box(scl/3,scl/8,scl/3);
    translate(scl/3,0,0);
  }
  rotateY(-radians(90));
  if (right>0) {
    translate(-scl/3,0,0);
    if (right==2) {
      translate(0,0,scl/3);
      box(scl/3,scl/8,scl/3);
      translate(0,0,-scl/3*2);
      box(scl/3,scl/8,scl/3);
      translate(0,0,scl/3);
    }
    box(scl/3,scl/8,scl/3);
    translate(scl/3,0,0);
  }
  rotateY(-radians(90));
  if (bottom>0) {
    translate(-scl/3,0,0);
    if (bottom==2) {
      translate(0,0,scl/3);
      box(scl/3,scl/8,scl/3);
      translate(0,0,-scl/3*2);
      box(scl/3,scl/8,scl/3);
      translate(0,0,scl/3);
    }
    box(scl/3,scl/8,scl/3);
    translate(scl/3,0,0);
  }
  rotateY(-radians(90));
  if (left>0) {
    translate(-scl/3,0,0);
    if (left==2) {
      translate(0,0,scl/3);
      box(scl/3,scl/8,scl/3);
      translate(0,0,-scl/3*2);
      box(scl/3,scl/8,scl/3);
      translate(0,0,scl/3);
    }
    box(scl/3,scl/8,scl/3);
    translate(scl/3,0,0);
  }
  translate(0,-scl/2+scl/16,0);
}
