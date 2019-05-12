class Prisoner {
    constructor(x, y, id, isLeft = false) {
        //screen coordinates to draw topleft corner.
        this.x = x;
        this.y = y;

        //velocity:
        this.vx = 0;
        this.vy = 0;
        this.vcap = 90;

        this.isJumping = false;
        //TMP
        this.ground = this.y;

        this.jumppwr = 140;
        // probably should be global?
        this.fric = 0.8;
        this.speed = 10;

        this.friction = function () {
            this.vx = this.vx * this.fric;
            this.vy = this.vy * this.fric;
        }

        this.move = function () {
            this.capvelocity();
            this.x += this.vx;
            this.y += this.vy;
            this.friction();
            this.gravity();
        }

        this.capvelocity = function () {
            if (this.vx > this.vcap) {
                this.vx = this.vcap;
            }

            if (this.vx < -this.vcap) {
                this.vx = -this.vcap;
            }
            if (this.vy > this.vcap) {
                //                this.vy = this.vcap;
            }

            if (this.vy < -this.vcap) {
                this.vy = -this.vcap;
            }

            
            if (this.vx < 0.5 && this.vx > 0) {
                this.vx = 0;
            }
            
            if (this.vx > -0.5 && this.vx < 0) {
                this.vx = 0;
            }
            
            
            
        }

        this.gravity = function () {
            if (this.y < this.ground) {
                this.vy = this.vy + 19;
            }

            if (this.y >= this.ground) {
                this.vy = 0;
                this.isJumping = false;
                this.y = this.ground;
            }
        }

        //unused dudes name:
        this.id = id;
        this.noisescale = 32;
        this.noisevol = 5;
        this.isNoisy = false;

        this.noise = function () {
            if (this.isNoisy) {
                return Math.random(this.noisevol).toFixed(4) * this.noisescale;
            } else {
                return 0;
            }
        }


        this.headadjustx = -8;
        this.headadjusty = 0;


        this.isLeft = isLeft;
        //        this.ctx = document.getElementById('sprite_works').getContext('2d');
        this.frame = getRandomArbitrary(4, 6).toFixed(0);
        //        console.log();

        console.log(`Prisoner '${this.id} created with frame: ${this.frame}`);

        this.clearself = function () {
            // clears the area of character - mind other drawings.
            return global.ctx.clearRect(0 + this.x, 0 + this.y, global.draw_scale, global.draw_scale);
        }

        this.setctx = function (ctx = global.ctx) {
            this.ctx = ctx;
        }

        this.draw_legs_walk = function (x, y) {
            //            this.ctx.drawImage(global.spirtesheet, this.frame * global.raw_scale, 0 * global.raw_scale, global.raw_scale, global.raw_scale, this.x, this.y, global.draw_scale, global.draw_scale);

            if (this.vx == 0 && this.vy == 0) {
                //idle pose:
                this.ctx.drawImage(global.spirtesheet, 5 * global.raw_scale, 0 * global.raw_scale, global.raw_scale, global.raw_scale, x-8, y, global.draw_scale, global.draw_scale);     
                
                this.ctx.drawImage(global.spirtesheet, 5 * global.raw_scale, 0 * global.raw_scale, global.raw_scale, global.raw_scale, x+16, y, global.draw_scale-62, global.draw_scale);
            } else {
                //walking cycle:
                this.ctx.drawImage(global.spirtesheet, this.frame * global.raw_scale, 0 * global.raw_scale, global.raw_scale, global.raw_scale, x, y, global.draw_scale, global.draw_scale);
            }
        }

        this.draw_shirt = function (x, y) {
            this.ctx.drawImage(global.spirtesheet, 0 * global.raw_scale, 0 * global.raw_scale, global.raw_scale, global.raw_scale, 0 + x, 0 + y - this.noise() / 4, global.draw_scale, global.draw_scale);
        }

        this.draw_head = function (x, y) {
            this.ctx.drawImage(global.spirtesheet, 1 * global.raw_scale, 0 * global.raw_scale, global.raw_scale, global.raw_scale, this.headadjustx + x + this.noise() / 4, this.headadjusty + y + this.noise() / 6, global.draw_scale, global.draw_scale);
        }

        this.draw_hands = function (x, y) {
            //    console.log(noise);
            this.ctx.drawImage(global.spirtesheet, 2 * global.raw_scale, 0 * global.raw_scale, global.raw_scale, global.raw_scale, 0 + x, 0 + y + this.noise(), global.draw_scale, global.draw_scale);

            // 3 - r_hand
            this.ctx.drawImage(global.spirtesheet, 3 * global.raw_scale, 0 * global.raw_scale, global.raw_scale, global.raw_scale, 0 + x, 0 + y - this.noise(), global.draw_scale, global.draw_scale);

        }

        this.draw_body = function (x, y) {
            console.log(this.vx);
            global.ctx.save();

            if (this.isLeft) {
                global.ctx.translate(width, 0);
                global.ctx.scale(-1, 1);

                var rect = global.canvas.getBoundingClientRect();
                var ix = global.canvas.width - (this.x - rect.left) - global.draw_scale; // + rect.left

                this.draw_legs_walk(ix, this.y); // GONNA NEED OTHER LEGS
                this.draw_shirt(ix, this.y);
                this.draw_head(ix, this.y);
                this.draw_hands(ix, this.y);
            } else {
                this.draw_legs_walk(this.x, this.y); // GONNA NEED OTHER LEGS
                this.draw_shirt(this.x, this.y);
                this.draw_head(this.x, this.y);
                this.draw_hands(this.x, this.y);
            }
            global.ctx.restore();
        }

        this.tick = function () {
//            this.vx = this.vx.toFixed(4);
            this.move();
            global.ctx.resetTransform();
            this.draw_body();
            this.frame++;
            if (this.frame > 6) {
                this.frame = 4;
            }
        } // tick end.

    }


}
