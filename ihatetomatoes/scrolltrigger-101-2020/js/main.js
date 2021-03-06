
gsap.registerPlugin(ScrollTrigger);

function init() {

    /* // A simple tween
    gsap.to('#intro img', {
        opacity: 0,
        scrollTrigger: {
            trigger: '#intro',
            start: 'top top',
            end: 'bottom center',
            scrub: true, 
            markers:true,         
        }
    }); */

    /* // toggleClass    
    gsap.set('#project02',
        {
            scrollTrigger: {
                trigger: '#project02',
                start: 'top bottom-=10%',
                end: 'bottom center-=10%',
                toggleClass: 'active',
                markers: true,
            }

        }
    ) */

    // Parallax Effect
    /* const parallaxTl = gsap.timeline({
        ease: 'none',
        scrollTrigger: {
            trigger: '.bcg-parallax',
            start: 'top bottom',
            scrub: true,
        }
    });

    parallaxTl
        .from('.content-wrapper', { duration: 0.4, autoAlpha: 0 }, 0.4)
        .from('.bcg', { duration: 2, y: '-30%' }, 0)
        ; */

        /* // Pin effect
        gsap.to(
        [
            '#intro h1',
            '#intro p'
        ],
        {
            autoAlpha: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: '#intro .content',
                pin: true,
                start: 'top top+=5%',
                scrub: true,
                markers: true
            }
        }) */

        //Triggering multiples sections
        const projects = document.querySelectorAll('.project');

        projects.forEach(project => {
            gsap.from(
                project,
                {
                opacity:0,
                yPercent:5,
                scrollTrigger: {
                    trigger: project.querySelector('img'),
                    start: 'top bottom-=300',
                    end: 'top center',
                    toggleActions:'play none none reverse',
                    scrub: true,
                    /* onUpdate: ({ progress, direction, isActive, getVelocity}) => console.log(progress, direction, isActive, getVelocity()), */
                    onToggle: () => { console.log('toggle')},
                    onEnter: () => { console.log('onEnter')},
                    onLeave: () => { console.log('onLeave')},
                    onEnterBack: () => { console.log('onEnterBack')},
                    onLeaveBack: () => { console.log('onLeaveBack')},
                    markers: true,

                }
            })
        })

        // Callback functions        
        


}

window.addEventListener('load', function () {
    init();
});
