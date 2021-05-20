/* TweenMax.to('.circle', 0.75, { x: 100 })
TweenMax.to('.square', 0.75, { x: 100, delay: 0.75 })
TweenMax.to('.rectangle', 0.75, { x: 100, delay: 1.5 }) */

/* let tlanimation = new TimelineMax();

tlanimation.to('.circle', 1, { x: 100, ease: Bounce.easeOut })
.to('.square', 1, { x: 100, ease: Bounce.easeOut})
.to('.rectangle', 1, { x: 100, ease: Bounce.easeOut }); */


// staggerTo or staggerFrom allow us to set an animation to an object in an specific position
/* TweenMax.staggerFrom('.triangle', 1, { x: 200, y: 200, opacity: 0, ease:Back.easeOut }, 0.1); */

/* TweenMax.set('.oval', { x: -100 }); */

// Special propierties of a TimelineMax object
/* var tlanimation = new TimelineMax({repeat:-1, repeatDelay:2, });
tlanimation.to('.oval', 1, {x:100}).to('.oval', 1, {x:-100}); */

// Special propierties of a TimelineMax object
/* var tlanimation = new TimelineMax({repeat:-1, yoyo:true});
tlanimation.to('.oval', 1, {x:100}); */

/* const tlshapes = new TimelineMax(); */
//Labels to trigger elements at the same time
/* tlshapes
   .to('.circle', 1, { x: 100 }, 'circleRectangle')
   .to('.square', 1, { x: 100 })
   .to('.rectangle', 1, { x: 100 }, 'circleRectangle')
   ; */

//Labels to trigger elements with specific delay time
/* tlshapes
   .to('.circle', 1, { x: 100 }, 'circleRectangle')
   .to('.square', 1, { x: 100 })
   .to('.rectangle', 1, { x: 100 }, 'circleRectangle-=0.25')
   ; */

// Relative timings
/* tlshapes
   .to('.circle', 1, { x: 100 }, )
   .to('.square', 1, { x: 100 }, '-=0.5')
   .to('.rectangle', 1, { x: 100 },'-=0.5')
   ; */

// Playback controls
/* tlshapes
   .staggerFrom('.shape', 0.5, { x: 50, y: 50, opacity: 0 }, 0.2)
   ;


const pb = document.querySelector('.playButton');
pb.onclick = function () {
   tlshapes.play();
};

const pa = document.querySelector('.pauseButton');
pa.onclick = function () {
   tlshapes.pause();
};

const re = document.querySelector('.resumeButton');
re.onclick = function () {
   tlshapes.resume();
};

const rev = document.querySelector('.reverseButton');
rev.onclick = function () {
   tlshapes.reverse();
};

const slow = document.querySelector('.slowButton');
slow.onclick = function () {
   tlshapes.timeScale(0.5);
};

const fast = document.querySelector('.fastButton');
fast.onclick = function () {
   tlshapes.timeScale(5);
};

const seek = document.querySelector('.seekButton');
seek.onclick = function () {
   tlshapes.seek(2);
};

const progress = document.querySelector('.progressButton');
progress.onclick = function () {
   tlshapes.progress(0.8);
}; */

// fromTo and staggerFromTo
/* TweenMax.fromTo('.circle', 1, { x: -100, scale: 0 }, { x: 100, scale: 1.5 }); */

TweenMax.staggerFromTo('.triangle', 1, { y: 200, x: 200 }, { y: -50, x: -50 }, 0.2);


