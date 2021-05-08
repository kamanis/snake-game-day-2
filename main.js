//variable for gameState
let gameState;
//image loading variable for start wallpaper
let start;
//image loading variable for log in with guest
let guestbutton;
//image loading variable for log in with email
let emailbutton;
//variable for giving a tint to email button;
var tintemail;
//variable for giving tint to guest button;
var tintguest;
//variable for checking click
var counter;
//variable for checking release of mouse button;
var release;

function preload() {
  start = loadImage("assets/start wallpaer.png");
  guestbutton = loadImage("assets/guestbutton.png");
  emailbutton = loadImage("assets/emailbutton.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  gameState = "start";
  tintemail = 255;
  tintguest = 255;
  release = false;
}

function draw() {
  background(255);
  if (gameState === "start") {
    if (mouseIsPressed) {
      counter++;
    } else {
      //indicates there is a release;
      if (counter > 0) {
        release = true;
      }
      counter = 0;
    }
    push();
    //start wallpaper
    imageMode(CENTER);
    image(start, width / 2, height / 2, width, height);
    pop();
    push();
    //button to log in as guest
    imageMode(CENTER);
    tint(tintguest)
    image(guestbutton, width / 2.5, height / 4, width / 1.7, height / 4.7);
    pop();
    push();
    //button to log in with email
    imageMode(CENTER);
    tint(tintemail);
    image(emailbutton, width / 2.5, height / 1.4, width / 1.7, height / 4.7);
    pop();
    //checking mousepress and mouse release for email button{
    if (mouseIsPressed && buttonpress(width / 2.5, height / 1.4, width / 1.7, height / 4.7)) {
      tintemail = 100;
    } else {
      tintemail = 255;
    }
    if (release && buttonpress(width / 2.5, height / 1.4, width / 1.7, height / 4.7)) {
      gameState = "email";
    }
    //}
    //checking mousepress and mouse release for guest button{
    if (mouseIsPressed && buttonpress(width / 2.5, height / 4, width / 1.7, height / 4.7)) {
      tintguest = 100;
    } else {
      tintguest = 255;
    }
    if (release && buttonpress(width / 2.5, height / 4, width / 1.7, height / 4.7)) {
      gameState = "guest";
    }
    //}
  }
  //making release false after every framecount
  release = false;
}

function buttonpress(xp, yp, w, h) {
  if (mouseX - xp <= w / 2 &&
    xp - mouseX <= w / 2 &&
    yp - mouseY <= h / 2 &&
    mouseY - yp <= h / 2) {
    return true;
  } else {
    return false;
  }
}