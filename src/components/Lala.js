var tl = gsap.timeline(), 
mySplitText = new SplitText("#menu-items", {type:"words,chars"}), 
chars = mySplitText.chars; //an array of all the divs that wrap each character
gsap.set("#menu-items", {perspective: 400});
tl.from(chars, {duration: 0.8, opacity:0, scale:0, y:80, rotationX:180, transformOrigin:"0% 50% -50",  ease:"back", stagger: 0.01}, "+=0");
