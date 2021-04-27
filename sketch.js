var hr,mn,sc;
var hrAngle,mnAngle, scAngle;

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background(0);  
  //calculting time using predefined function
  hr = hour();
  mn = minute();
  sc = second();
  //transaltion and rotation
  translate(200,200);
  rotate(-90);
  //to create iterator rotation
  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr % 12,0,12,0,360);
  //drawing second's hand
  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  //drawing minute's hand
  push();
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,75,0);
  pop();
   //drawing hour's hand
   push();
   rotate(hrAngle);
   stroke(0,0,255);
   strokeWeight(7);
   line(0,0,50,0);
   pop();
  //drawing the arcs
  //per second
  noFill();
  strokeWeight(10);
  stroke(255,0,0);
  arc(0,0,300,300,0,scAngle);
  //minute
  stroke(0,255,0);
  arc(0,0,280,280,0,mnAngle);
  //hour
  stroke(0,0,255);
  arc(0,0,260,260,0,hrAngle);
}