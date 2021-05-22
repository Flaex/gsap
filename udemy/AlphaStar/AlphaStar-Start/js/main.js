/* Navigation */
// Selected elements in the UI
const bi = document.querySelector('.burgerIcon');
const cb = document.querySelector('.closeButton');

// Create timeline for navigation animation
const tlmenu = new TimelineMax({ paused: true });
tlmenu.to('nav', 0.3, { autoAlpha: 1 }).staggerFromTo('nav li', 0.5, { y: 100, opacity: 0 }, { y: 0, opacity: 1 }, 0.1);

// Burguer icon mouseover and mouseout animations
bi.onmouseover = () => {
   TweenMax.to('.burgerLine:first-child', 0.2, { x: -10 });
   TweenMax.to('.burgerLine:last-child', 0.2, { x: 10 });
};
bi.onmouseout = () => {
   TweenMax.to('.burgerLine:first-child', 0.2, { x: 0 });
   TweenMax.to('.burgerLine:last-child', 0.2, { x: 0 });
};

// Navigation menu Timeline control

//Play timeline for navigation animation
bi.onclick = () => {
   tlmenu.play(0);
};

//Reverse timeline for navigation animation
cb.onclick = () => {
   tlmenu.reverse(0);
};

/* Hero section */
TweenMax.fromTo('#hero h1', 0.6, { y: 80, opacity: 0 }, { y: 0, opacity: 1, delay: 1 });

TweenMax.fromTo(
   '#hero .learnMoreButton',
   0.6,
   { y: 80, opacity: 0 },
   { y: 0, opacity: 1, delay: 1.6, ease: Back.easeOut }
);

/* Our experiencie */

const fc1 = document.querySelector('.fourColItem:nth-child(n)');
const fc2 = document.querySelector('.fourColItem:nth-child(2)');
const fc3 = document.querySelector('.fourColItem:nth-child(3)');
const fc4 = document.querySelector('.fourColItem:nth-child(4)');

const fcArray = [fc1, fc2, fc3, fc4];

fcArray.forEach((element) => {
   element.addEventListener('mouseover', function () {
      TweenMax.to(this, 0.5, { y: -10, scale: 1.03 });
      TweenMax.to(this, 0.5, { boxShadow: '0 0 20px rgba(0,0,0,0.36)' })
   });
   element.addEventListener('mouseout', function () {
      TweenMax.to(this, 0.5, { y: 10, scale: 1 });
      TweenMax.to(this, 0.5, { boxShadow: '0 0 20px rgba(0,0,0,0.06)' })
   });
});

// Services section
TweenMax.set('.serviceBoxInner', { y: 200, opacity: 0 })

const sb1 = document.querySelector('.serviceBox:nth-child(1)');
sb1.onmouseover = function () {
   TweenMax.to('.serviceBox:nth-child(1) .serviceBoxInner', 0.5, { y: 0, opacity: 1, ease: Power2.easeOut });
};
sb1.onmouseout = function () {
   TweenMax.to('.serviceBox:nth-child(1) .serviceBoxInner', 0.5, { y: 200, opacity: 0 });
};

const sb2 = document.querySelector('.serviceBox:nth-child(2)');
sb2.onmouseover = function () {
   TweenMax.to('.serviceBox:nth-child(2) .serviceBoxInner', 0.5, { y: 0, opacity: 1, ease: Power2.easeOut });
};
sb2.onmouseout = function () {
   TweenMax.to('.serviceBox:nth-child(2) .serviceBoxInner', 0.5, { y: 200, opacity: 0 });
};

const sb3 = document.querySelector('.serviceBox:nth-child(3)');
sb3.onmouseover = function () {
   TweenMax.to('.serviceBox:nth-child(3) .serviceBoxInner', 0.5, { y: 0, opacity: 1, ease: Power2.easeOut });
};
sb3.onmouseout = function () {
   TweenMax.to('.serviceBox:nth-child(3) .serviceBoxInner', 0.5, { y: 200, opacity: 0 });
};

//Cogs section
TweenMax.to('.cogLeft', 7, { rotation: 360, repeat: -1, ease: Linear.easeNone });
TweenMax.to('.cogRight', 7, { rotation: -360, repeat: -1, ease: Linear.easeNone });

