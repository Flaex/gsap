/* TweenMax.to('.circle', 0.75, { x: 100 })
TweenMax.to('.square', 0.75, { x: 100, delay: 0.75 })
TweenMax.to('.rectangle', 0.75, { x: 100, delay: 1.5 }) */

let tlanimation = new TimelineMax();

tlanimation.to('.circle', 2, { x: 100 })
.to('.square', 0.5, { x: 100 })
.to('.rectangle', 1, { x: 100 });