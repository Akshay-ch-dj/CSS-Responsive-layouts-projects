"use strict";

const sceneNight1 = document.querySelector('.scene-night1');

// const mediaQ1 = window.matchMedia("(min-width: 700px)");
// const mediaQ2 = window.matchMedia("(min-width: 1200px)");
// const mediaQ3 = window.matchMedia("(min-width: 1800px)");

const stars = (count) => {
    let i = 0;
    while (i < count) {
        let star = document.createElement("i");
        let x = Math.floor(Math.random() * window.innerWidth);
        let y = Math.floor(Math.random() * window.innerHeight);
        let duration = Math.random() * 2;
        let size = Math.random() * 2;

        star.style.left = x + 'px';
        star.style.top = y + 'px';
        star.style.width = 1 + size + 'px';
        star.style.height = 1 + size + 'px';

        star.style.animationDuration = `${5 + duration}s`;
        star.style.animationDelay = duration + 's'

        sceneNight1.appendChild(star);
        i++;
    }
}


stars(300);

// const starChange = (count, mq) => {
//     if (mq.matches) {
//         stars(count);
//     } else {
//         stars(100);
//     }
// }

// starChange(300, mediaQ1);
// starChange(400, mediaQ2);
// starChange(600, mediaQ3);