function createCamera() {
  this.x = 0;
  this.y = 0;
  this.z = 0;
  this.scl = 50;
  this.pitch = 25;
  this.yaw = -45;

  this.applyCamera = function() {
    translate(this.x,this.y,this.z);
    rotateX(radians(this.pitch));
    rotateY(radians(this.yaw));
  }

  this.mouseHandler = function() {
    if (mouseIsPressed) {
      if (mouseButton == RIGHT) {
        x += (mouseX - pmouseX);
        z += (mouseY - pmouseY);
      } else {
        yaw += (mouseX - pmouseX) / 10;
        pitch += (mouseY - pmouseY) / 10;
      }
    }
  }

  this.keyHandler = function() {
    if (keyIsPressed === true) {
      if (keyCode == 82 || keyCode == 114) { // R
        x = 0;
        y = 0;
        yaw = -45;
        pitch = 25;
        scl = 50;
      } else if (48 <= keyCode && keyCode <= 57) {
        switch (keyCode-48) {
          case 0:
          pitch = 25;
          break;
          case 1:
          yaw = 90;
          break;
          case 2:
          yaw = 135;
          break;
          case 3:
          yaw = 180;
          break;
          case 4:
          yaw = 45;
          break;
          case 5:
          yaw = 0;
          pitch = 90;
          x = 0;
          y = 0;
          scl = 50;
          break;
          case 6:
          yaw = 225;
          break;
          case 7:
          yaw = 0;
          break;
          case 8:
          yaw = 315;
          break;
          case 9:
          yaw = 270;
          break;
        }
      }
    }
  }
  return this;
}
