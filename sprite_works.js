let global = {};
const sw = global;




let setupDisplay = function () {
    // create, id, apprend canvas, etc :
    let display = document.createElement('canvas');
    display.id = 'sprite_works';
    document.body.appendChild(display);

    let style = document.getElementById('sprite_works').style;
    style.position = 'absolute';
    style.display = 'block';
    style.height = '128px';
    style.width = '128px';
    style.background = 'green';
    style.border = '2px solid gold';
    style.margin = 'auto';
    style.left = '0';
    style.right = '0';
    style.top = '100px';

    return document.getElementById('sprite_works').getContext('2d');
};

sw.ctx = setupDisplay();
setupDisplay = null;


console.log(sw);
