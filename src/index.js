//Import .js here import "./js/";
import fullpage from "fullpage.js";
import { TimelineMax, TweenMax } from "gsap/all";

//Loading animation

window.addEventListener("load", () => {
   const load = document.querySelector(".load");
   const tl = new TimelineMax();

   tl.fromTo(
      load,
      0.5,
      {
         css: { width: "100%" },
         opacity: 1,
      },
      {
         css: { width: "0%" },
         opacity: 0,
      }
   );
});

new fullpage("#fullpage", {
   autoScolling: true,
   navigation: true,
   anchors: ["home", "about", "skills", "banner", "header", "avi", "render", "contact"],
   navigationTooltips: [
      "Home",
      "Über mich",
      "Skills",
      "Banner",
      "Header",
      "AVI",
      "Render",
      "Contact",
   ],
   scrollingSpeed: 600,
   controlArrows: true,
   slidesNavigation: true,
   onLeave: (origin, destination, direction) => {
      const section = destination.item;

      const tl = new TimelineMax({ delay: 0.3 });

      if (destination.index > 1) {
         const title = section.querySelector("h1");
         tl.fromTo(title, 0.5, { y: 100, opacity: 0 }, { y: 0, opacity: 1 });
      }
      if (destination.index === 1) {
         const p1 = section.querySelector(".p1");
         const p2 = section.querySelector(".p2");
         const p3 = section.querySelector(".p3");
         tl.fromTo(p1, 0.5, { y: 100, opacity: 0 }, { y: 0, opacity: 1 });
         tl.fromTo(p2, 0.5, { y: 100, opacity: 0 }, { y: 0, opacity: 1 }, 0.2);
         tl.fromTo(p3, 0.5, { y: 100, opacity: 0 }, { y: 0, opacity: 1 }, 0.4);
      }
      if (destination.index > 2 && destination.index < 7) {
         const slide = section.querySelector(".slide");
         const scale = section.querySelectorAll(".scale");

         tl.fromTo(slide, 0.5, { y: 100, opacity: 0 }, { y: 0, opacity: 1 }, 0.2);
         tl.fromTo(scale, 0.5, { scale: 0.9 }, { scale: 1 }, 0.3);
      }
      if (destination.index === 7) {
         const form = section.querySelector(".contact");
         const img = section.querySelector("img");
         tl.fromTo(form, 0.5, { y: 100, opacity: 0 }, { y: 0, opacity: 1 }, 0.2);
         tl.fromTo(img, 0.5, { y: 100, opacity: 0 }, { y: 0, opacity: 1 }, 0.25);
      }
   },
});
