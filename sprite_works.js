let global = {};
const sw = global;
// 32x32 characters
/*

class character {
    constructor (x = 0,y = 0,frame = 0) {
        this.x = x;
        this.y = y;
        this.frame = frame;
    }
}

*/


let madude = {
    x: 90,
    y: 40,
}

class skunk_works {
    constructor(h = '128px', w = '128px', bg = 'green', border = '2px solid gold') {
        console.log('skunk_works - constructor');
        let display = document.createElement('canvas');
        display.id = 'sprite_works';
        document.body.appendChild(display);
        global.canvas = document.getElementById('sprite_works');
        let style = document.getElementById('sprite_works').style;
        style.position = 'absolute';
        style.display = 'block';
        style.height = '128px';
        style.height = h;
        style.width = w;
        style.background = bg;
        style.border = border;
        style.margin = 'auto';
        style.left = '0';
        style.right = '0';
        style.top = '100px';
        global.ctx = document.getElementById('sprite_works').getContext('2d');
    }
}





let screen = new skunk_works('256px','256px','blue', '2px solid red');



sw.ctx.imageSmoothingEnabled = false;

function loadSpriteSheet() {
    const image = new Image(32, 32); // Using optional size for image
    image.onload = setspritesheet; // Draw when image has loaded
    // Load an image of intrinsic size 300x227 in CSS pixels
    image.src = '/run.png'
}

function setspritesheet() {
    //  global.ctx.drawImage(this, 0, 32, 32, 32, 0, 0, 128, 64);
    global.spirtesheet = this;
}



loadSpriteSheet();
//console.log(sw);



function animate(frame, row) {
    global.ctx.clearRect(0 + madude.x, 0 + madude.y, 128, 64);
    global.ctx.drawImage(global.spirtesheet, frame * 32, row * 32, 32, 32, 0 + madude.x, 0 + madude.y, 128, 64);
}

let frame = 0;
let row = 0;

let gear_driver = setInterval(function () {

    animate(frame, row);
    frame++;
    if (frame > 3) {
        frame = 0;
        row++;
    }

    if (row > 2) {
        row = 0;
    }

}, 200);
