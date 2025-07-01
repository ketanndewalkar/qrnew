import React, { useEffect, useRef } from 'react'
import gsap from "gsap"
const HeroNew = () => {
  const ulRef = useRef(null);

  // useEffect(() => {
  //   const ul = ulRef.current;

  //   const totalWidth = ul.scrollWidth;
  //   const containerWidth = ul.parentElement.offsetWidth;

  //   // Animate from x = 0 to x = -(totalWidth - containerWidth)
  //   const distance = totalWidth - containerWidth;

  //   if (distance > 0) {
  //     gsap.to(ul, {
  //       x: -distance,
  //       duration: 15, // adjust speed
  //       ease: "linear",
  //       repeat: -1,   // infinite
  //       yoyo: true,   // bounce back to original position
  //     });
  //   }
  // });

  useEffect(() => {
  const ul = ulRef.current;
  const images = ul.querySelectorAll('li img');
  let loaded = 0;

  images.forEach(img => {
    if (img.complete) {
      loaded++;
    } else {
      img.onload = () => {
        loaded++;
        if (loaded === images.length) startAnimation();
      };
    }
  });

  if (loaded === images.length) startAnimation();

  function startAnimation() {
    const totalWidth = ul.scrollWidth;
    const containerWidth = ul.parentElement.offsetWidth;
    const distance = totalWidth - containerWidth;

    if (distance > 0) {
      gsap.to(ul, {
        x: -distance,
        duration: 15,
        ease: "linear",
        repeat: -1,
        yoyo: true,
      });
    }
  }
}, []);

  return (
    <div className="w-full h-[10vw] px-[10.2vw] py-[2vw] my-[5vw] heronew">
      <div className="size-full overflow-hidden heronew1">
        <ul
          ref={ulRef}
          className="h-full w-fit flex gap-[10vw]"
        >
          <li className="h-full shrink-0"><img src="car.png" className="object-center object-cover size-full" /></li>
          <li className="h-full shrink-0"><img src="eatclub.png" className="object-center object-cover size-full" /></li>
          <li className="h-full shrink-0"><img src="eatzze.png" className="object-center object-cover size-full" /></li>
          <li className="h-full shrink-0"><img src="internzze.png" className="object-center object-cover size-full" /></li>
          <li className="h-full shrink-0"><img src="mikava.png" className="object-center object-cover size-full" /></li>
          <li className="h-full shrink-0"><img src="meesho.png" className="object-center object-cover size-full" /></li>
        </ul>
      </div>
    </div>
  );
}

export default HeroNew