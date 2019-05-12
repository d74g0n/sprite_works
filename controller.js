let debugging = false;

class web_controls {
    constructor(char) {
        function jump() {
            if (!char.isJumping) {
                char.vy = char.vy - char.jumppwr;
            }
            char.isJumping = true;
            console.log('Jump was pressed space')
        }

        document.addEventListener('keydown', function (event) {
            if (event.keyCode == 65) {
                console.log('Left was pressed A');
                char.vx = char.vx - char.speed;
                char.isLeft = true;
            } else if (event.keyCode == 83) {
                console.log('Down was pressed S');
                char.y = char.y + 2;
            } else if (event.keyCode == 87) {
                console.log('Up was pressed W');
                jump();
            } else if (event.keyCode == 68) {
                console.log('Right was pressed D');
                char.vx = char.vx + char.speed;
                char.isLeft = false;
            } else if (event.keyCode == 32 && !event.shiftKey) {
                jump();
            } else if (event.keyCode == 32 && event.shiftKey) {
                global.draw_scale = global.draw_scale * 1.01;
                console.log('Jump was pressed space')
            }

            if (debugging) {
                console.log(JSON.stringify(event.keyCode));
                console.log(JSON.stringify(event));
                console.log(char.y);
            }
        });


    }




}
