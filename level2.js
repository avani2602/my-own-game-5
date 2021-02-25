function Level2() {

  ground.y = 845;
  ground.x = 910;
  ground.width = 1820;
 // knight.y = 800;



  if (keyDown("space")) {
    knight.velocityY = -12;
  }


  knight.velocityY = knight.velocityY + 0.8;

  if (keyDown("right")) {
    knight.x = knight.x + 12;
  }

  if (keyDown("left")) {
    knight.x = knight.x - 12;
  }

  wall1.destroy();
  wall2.destroy();
  wall3.destroy();                                                //createCanvas(1820,865);
  wall4.destroy();
  wall5.destroy();
  button1.x = 10;
  button1.y = 750;
  button2.destroy();
  button3.destroy();
  plat5.destroy();
  acid.destroy();
  arrow1.destroy();
  arrow2.destroy();
  arrow3.destroy();
  arrow4.destroy();
  trigger.destroy();
  gate.destroy();
  key1.destroy();

  spike1.visible = true;
  spike2.visible = true;
  spike3.visible = true;
  spike4.visible = true;
  spike5.visible = true;
  spike6.visible = true
  spike7.visible = true
  spike8.visible = true


  knight.collide(plat1);
  knight.collide(plat2);
  knight.collide(plat3);   
  knight.collide(plat4);

  plat1.x = 910;
  plat1.y = 432.5;
  plat2.x = 1510;
  plat2.y = 600;
  plat3.x = 300;
  plat3.y = 300;   
  plat4.x = 1050;
  plat4.y = 200;
  plat4.width = 250;
  plat4.height = 20;

  if(knight.isTouching(spike1)|| knight.isTouching(spike3) || knight.isTouching(spike5)|| knight.isTouching(spike7)){
    knight.destroy();
  }
  if(knight.isTouching(button1)){
    spike2.visible = false;
    spike4.visible = false;
    spike6.visible = false;
    spike8.visible = false;

  }
}