// const popmotion = require('popmotion');

// import * as popmotion from 'popmotion';


const ball = document.querySelector(".ball");

popmotion.animate({
    from: "0px",
    to: "200px",
    repeat: Infinity,
    repeatType: "mirror",
    type: "spring",
    onUpdate(update) {
        ball.style.top = update;
    }
});

