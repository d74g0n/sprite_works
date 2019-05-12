class character {
    constructor(x = 90, y = 90, scale = 512/2, id = 'foo') {
        this.id = id;
        //location:
        this.x = x;
        this.y = y;
        this.scale = scale;
        //velocity:
        this.vx = 0;
        this.vy = 0;
        this.isAirborne = false;
        //animation:
        this.frame = 0;
        this.animation = 'idle'; // assuming case select is based on these strings.
        this.itemHand = 0; //assuming 0 is blank/empty tile of items.
        //control:
        this.keyspressed = { //unused
            left: false,
            right: false,
            up: false,
            down: false,
            jump: false,
        }
        //stuff to get from scene.
        //z-index:
        this.groundtop = undefined;
        this.groundbottom = undefined;

        this.noise = function () {
            return Math.random(3).toFixed(1) * 16;
        }
                
        this.tick = function (frame) { //unused
            //do tick stuff here;

            //apply velocity to coordinates.
        }

        this.readout = function () { //untested
            console.log(JSON.stringify(this));
        }

        this.drawself = function (frame = 1) {

            let row = 1;
            let noise = 1;
            
            
//            
//            global.ctx.clearRect(0 + this.x, 0 + this.y, global.draw_scale, global.draw_scale);
//            draw_gradient_top2bot('skyblue', 'white', 'green');
//
//
//            // 0 - shirt
//            global.ctx.drawImage(global.spirtesheet, 0 * global.raw_scale, row * global.raw_scale, global.raw_scale, global.raw_scale, this.x, this.y, global.draw_scale, global.draw_scale);
//
//            // 1 - head
//            global.ctx.drawImage(global.spirtesheet, 1 * global.raw_scale, row * global.raw_scale, global.raw_scale, global.raw_scale, 0 + this.x + this.noise() / 4, 0 + this.y + this.noise() / 6, global.draw_scale, global.draw_scale);
//
//            // 2 - l_hand
//
//            //    console.log(noise);
//            global.ctx.drawImage(global.spirtesheet, 2 * global.raw_scale, row * global.raw_scale, global.raw_scale, global.raw_scale, 0 + this.x, 0 + this.y + this.noise(), global.draw_scale, global.draw_scale);
//
//            // 3 - r_hand
//            global.ctx.drawImage(global.spirtesheet, 3 * global.raw_scale, row * global.raw_scale, global.raw_scale, global.raw_scale, 0 + this.x, 0 + this.y - this.noise(), global.draw_scale, global.draw_scale);
//
//            // 4to6 - legs
//            global.ctx.drawImage(global.spirtesheet, 4 * global.raw_scale, row * global.raw_scale, global.raw_scale, global.raw_scale, 0 + this.x, 0 + this.y, global.draw_scale, global.draw_scale);
//
//     
//            
//            
//                global.ctx.drawImage(global.spirtesheet, 0 * global.raw_scale, row * global.raw_scale, global.raw_scale, global.raw_scale, 0 + madude.x, 0 + madude.y - noise / 4, global.draw_scale, global.draw_scale);

    // 1 - head
    global.ctx.drawImage(global.spirtesheet, 1 * global.raw_scale, row * global.raw_scale, global.raw_scale, global.raw_scale, 0 + madude.x + noise/4, 0 + madude.y + noise/6, global.draw_scale, global.draw_scale);
    
    // 2 - l_hand
    
//    console.log(noise);
    global.ctx.drawImage(global.spirtesheet, 2 * global.raw_scale, row * global.raw_scale, global.raw_scale, global.raw_scale, 0 + madude.x, 0 + madude.y + noise, global.draw_scale, global.draw_scale);    
    
    // 3 - r_hand
    global.ctx.drawImage(global.spirtesheet, 3 * global.raw_scale, row * global.raw_scale, global.raw_scale, global.raw_scale, 0 + madude.x, 0 + madude.y - noise, global.draw_scale, global.draw_scale);

    // 4to6 - legs
    global.ctx.drawImage(global.spirtesheet, frame * global.raw_scale, row * global.raw_scale, global.raw_scale, global.raw_scale, 0 + madude.x, 0 + madude.y, global.draw_scale, global.draw_scale);

            
                   global.ctx.resetTransform();
        }

    } // end constructor;

    hitGround() { //unused
        this.isAirborne = false;
    }

    mutatePosition() {
        this.x += this.vx;
        this.y += this.vy;
        //apply friction
    }

    getGroundLevel() {

        //check collumn (vert?) for ground tiles then * by tile size.

    }

    drawself() {
        // draw to canvas based on ani_case and x,y coordinates.
    }



} // end proto
