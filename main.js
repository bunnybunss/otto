window.onload = () => {
    const tl = gsap.timeline();
  
    tl.to(".portal", {
      duration: 1.5,
      scale: 8,
      opacity: 1,
      ease: "power2.out"
    });
  
    tl.to(".title", {
      duration: 1.5,
      opacity: 1,
      scale: 1.1,
      ease: "power1.out"
    }, "-=1");
  
    tl.to(".otto-card", {
      duration: 1.2,
      opacity: 1,
      y: 0,
      stagger: 0.3,
      ease: "power2.out"
    });
  };
  