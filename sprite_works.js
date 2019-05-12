// THIS IS ESSENTIALLY THE INDEX.JS The LAUNCH POINT.  

// 'global' object for managing everything.
let global = {
    raw_scale: 32,
    draw_scale: 512 / 2,
    ctx: undefined,
    canvas: undefined,
    spritesheet: undefined,
    skelement: undefined,
};

let height = document.documentElement.clientHeight - 16;
let width = document.documentElement.clientWidth - 16;
var min_size = height < width ? height : width;

// this centering data is just for inhouse use.
let centerSCR = {};
centerSCR.x = min_size / 2.5;
//centerSCR.y = min_size / 2.5;
centerSCR.y = min_size / 1.5;
//console.log(centerSCR);

global.skelement = new skelement();
global.ctx.imageSmoothingEnabled = false;
// load the images:
loadSpriteSheet();
// draw the initial background:
draw_gradient_top2bot('skyblue', 'white', 'green');

// push characters to a dudes array.
let dudes = [];
dudes.push(new Prisoner(centerSCR.x, centerSCR.y, 'bob'));
global.controller = new web_controls(dudes[0]);
dudes.push(new Prisoner(1, centerSCR.y, 'dale'));
//global.controllerB = new web_controls(dudes[1]);
dudes.push(new Prisoner(256, centerSCR.y+64, 'jeff'));
dudes.push(new Prisoner(662, centerSCR.y+50, 'hammy', true));
//NOTES: greatest Y value (inverted remember) = drawn last = infront.



setTimeout(function () {
    //pause/timeout for load::
    dudes.forEach(function (baddude) {
        baddude.ctx = global.ctx;
    });
    let animationLoop = setInterval(function () {
        draw_gradient_top2bot('skyblue', 'white', 'green');
        dudes.forEach(function (baddude) {
            baddude.tick();
        });
    }, 1000 / 12);

}, 500);
