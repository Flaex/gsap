/* TweenMax.to('.circle', 0.75, { x: 100 })
TweenMax.to('.square', 0.75, { x: 100, delay: 0.75 })
TweenMax.to('.rectangle', 0.75, { x: 100, delay: 1.5 }) */

/* let tlanimation = new TimelineMax();

tlanimation.to('.circle', 1, { x: 100, ease: Bounce.easeOut })
.to('.square', 1, { x: 100, ease: Bounce.easeOut})
.to('.rectangle', 1, { x: 100, ease: Bounce.easeOut }); */

TweenMax.staggerFrom('.triangle', 1, { x: 200, y: 200, opacity: 0, ease:Back.easeOut }, 0.1);