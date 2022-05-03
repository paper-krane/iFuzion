class BP {
	constructor() {
		this.init();
		this.cursorFollow();
		this.cursorExpand();
	}

	init() {
		console.log(`Website by Paper Krane (https://paperkrane.io)`);
        console.log(`Paper Krane boiler plate scripts initialized... Beep boop bop beep boop!`);
		
		this.navToggleInit();
		this.mobileHeadroom();
        this.desktopHeadroom();
		this.parallaxScroll();
		this.parallaxMouseListener();
		this.trustBar();
        this.heroReveal();
	}

	// Nav toggle
    navToggleInit() {
        const toggles = document.querySelectorAll('.bp__toggle, #hg__nav-filter');
        const navElements = document.querySelectorAll('[data-nav]');

        for (let toggle of toggles) {
            this.navToggle(toggle, navElements, 'click');
            this.navToggle(toggle, navElements, 'keyup');
        }
    }

    navToggle(el, controledElements, eType) {
        el.addEventListener(eType, (e) => {
            if (e.keyCode === 13 || e.type === "click") {
                e.preventDefault();
                e.stopPropagation();
                
                for (let element of controledElements) {
                    element.classList.toggle("bp__active");
                }
              
            }
        }, false);
    }

	// Mobile navbar headroom 
    mobileHeadroom() {
        ScrollTrigger.create({
            start:  'top -54',
            end: 9999999,
            toggleClass: {className: 'bp__background', targets: '#bp__mobile-navbar'}
        });
    }

    // Mobile navbar headroom 
    desktopHeadroom() {
		const showAnim = gsap.from('#bp__navbar', { 
            yPercent: -100,
            paused: true,
            duration: 0.4
        }).progress(1);

        ScrollTrigger.create({
            start: () => {
                if (window.innerWidth >= 992) {
                    return 'top -78';
                } else {
                    return 'top -99999';
                }
            },
            end: 9999999,
            toggleClass: {className: 'bp__background', targets: '#bp__navbar'},
			onUpdate: (self) => {
                self.direction === -1 ? showAnim.play() : showAnim.reverse()
            }
        });
    }

    // Cursor functions
	cursorFollow() {
        const cursor = document.querySelector('.cursor.stylus');

        document.addEventListener('mousemove', (e) => {
            if (window.innerWidth > 1280) {
                var x = e.clientX;
                var y = e.clientY;

                const cursorMove = gsap.to(cursor, {
                	duration: 1,
                    x: x,
                    y: y,
                    opacity: 1,
                    ease: Expo.easeOut
                });
            } else {
                cursor.style.opacity = 0;
            }
        }, false);
    }
  
    cursorExpand() {
        const hoverable = document.querySelectorAll('a, [data-toggle], button, input, textarea, select, .bp__checkbox');
        const cursor = document.querySelector('#bp__cursor');
        
        for (var i = 0; i < hoverable.length; i++) {
            hoverable[i].addEventListener('mouseover', (e) => {
                const cursorMove = gsap.to(cursor, .5, {
                    width: '108px',
                    height: '108px',
                    marginLeft: '-54px',
                    marginTop: '-54px',
                    opacity: .35,
                    background: 'transparent',
                    ease: Expo.easeOut
                });
            }, false);
            hoverable[i].addEventListener('mouseout', (e) => {
                const cursorMove = gsap.to(cursor, .5, {
                    width: '12px',
                    height: '12px',
                    marginLeft: '-6px',
                    marginTop: '-6px',
                    opacity: .75,
                    background: '#00dba4',
                    ease: Expo.easeOut
                });
            }, false);
        }
    }

    heroReveal() {
        const header = document.querySelectorAll('[data-js] #bp__index #bp__mobile-navbar > *, [data-js] #bp__index #bp__navbar > *');
        const background = document.querySelector('[data-js] #bp__hero-video-container')
        const heading = document.querySelectorAll('[data-js] #bp__hero-banner h1 span');
        const content = document.querySelectorAll('[data-js] #bp__hero-banner .bp__written-content > *')
        const scrollWheel = document.querySelector('[data-js] #bp__scroll');

        if (heading.length > 0 && content.length > 0) {
            ScrollTrigger.batch(background, {
                onEnter: (batch) => {
                    gsap.to(batch, {
                        opacity: 1,
                        ease: "power3",
                        duration: 2,
                    }
                )}
            });

            ScrollTrigger.batch(heading, {
                onEnter: (batch) => {
                    gsap.to(batch, {
                        y: 0,
                        rotate: 0,
                        opacity: 1,
                        ease: "power3",
                        duration: 2,
                        stagger: .15,
                        delay: .75
                    }
                )}
            });
    
            ScrollTrigger.batch(content, {
                onEnter: (batch) => {
                    gsap.to(batch, {
                        y: 0,
                        rotate: 0,
                        opacity: 1,
                        ease: "power3",
                        duration: 2,
                        stagger: .25,
                        delay: 1.5
                    }
                )}
            });

            ScrollTrigger.batch(header, {
                onEnter: (batch) => {
                    gsap.to(batch, {
                        opacity: 1,
                        ease: "power3",
                        duration: 2,
                        delay: 2.5
                    }
                )}
            });

            ScrollTrigger.batch(scrollWheel, {
                onEnter: (batch) => {
                    gsap.to(batch, {
                        opacity: .3,
                        ease: "power3",
                        duration: 2,
                        delay: 2.75
                    }
                )}
            });
        }
    }

	// Parallax on scroll
    parallaxScroll() {
        const heroImgs = document.querySelectorAll('[data-parallax-scroll-container]');

        if (heroImgs.length > 0) {
            gsap.utils.toArray("[data-parallax-scroll-container] [data-parallax-background]").forEach((section, i) => {
                const heightDiff = section.offsetHeight - section.parentElement.offsetHeight;

                gsap.fromTo(section,{ 
                  y: -heightDiff * parseFloat(section.dataset.parallaxScrollSpeed),
                  scale: 1
                }, {
                  scrollTrigger: {
                    trigger: section,
                    scrub: 2
                  },
                  y: 0,
                  scale: 1,
                  ease: "none"
                });
            });
        }
    }

	// Parallax Functions
    parallaxMouseListener() {
        const parallaxParents = document.querySelectorAll("[data-parallax-mouse-container]");
        const parallaxElements = document.querySelectorAll('[data-mouse-parallax]');
        const mouse = {x: 0, y: 0, moved: false};

        for (let parallaxContainer of parallaxParents) {
            const rect = parallaxContainer.getBoundingClientRect();

            parallaxContainer.addEventListener('mousemove', function(e) {
                mouse.moved = true;
                mouse.x = e.clientX - rect.left;
                mouse.y = e.clientY - rect.top;
            });

            gsap.ticker.add(() => {
                if (mouse.moved){  
                    for (let el of parallaxElements) { 
                        this.parallaxMove(mouse, rect, el, parseInt(`-${el.dataset.parallaxSpeed}`));
                    }
                }
                mouse.moved = false;
            });
        }

        window.addEventListener('resize', function(){
            if (window.innerWidth < 992) {
                for (let el of parallaxElements) {
                    el.removeAttribute('style');
                }
            }
        }, false);
    }

    parallaxMove(mouse, rect, target, movement) {
        if (window.innerWidth >= 992) {
            gsap.to(target, 0.5, {
                x: (mouse.x - rect.width / 2) / rect.width * movement,
                y: (mouse.y - rect.height / 2) / rect.height * movement,
				scrub: 2
            });
        } else {
            target.removeAttribute('style');
        }
    }

	// Trustbar Slider
	trustBar() {
		const trustBar = document.querySelector('#bp__trustbar');

		if (trustBar) {
			trustBar.style.display = 'block';
			trustBar.style.margin = '0';

			const slider = tns({
				container: trustBar,
				items: 1,
				draggable: true,
				autoplay: true,
				controls: false,
				nav: false,
				autoplayButtonOutput: false,
				preventScrollOnTouch: 'force',
                speed: 800,
				responsive: {
					260: {
					  	items: 1 
					},
					360: {
					  	items: 3
					},
					600: {
					  	items: 4
					},
					992: {
						items: 5
				  	},
					1280: {
						items: 6
				  	},
					1600: {
						items: 7
				  	},
					2000: {
						items: 8
				  	}
				}
			}); 
		}
	}
}

window.onload = () => {
	const bp = new BP();
};