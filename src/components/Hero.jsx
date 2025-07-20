import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

const Hero = () => {
  useGSAP(() => {
    const video = document.querySelector("video");

    const heroSplit = new SplitText(".title", { type: "chars, words" });
    const paragraphSplit = new SplitText(".subtitle", { type: "lines" });

    heroSplit.chars.forEach((char) => {
      char.classList.add("text-gradient");
    });

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      opacity: 0,
      ease: "expo.out",
      stagger: 0.07,
    });

    gsap.from(paragraphSplit.lines, {
      delay: 1,
      yPercent: 100,
      duration: 1.8,
      opacity: 0,
      ease: "expo.out",
      stagger: 0.07,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(".right-leaf", { y: 100 }, 0)
      .to(".left-leaf", { y: -100 }, 0);

    gsap.to(video, {
      scrollTrigger: {
        y: 1000,
        trigger: video,
        start: "top top",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const duration = video.duration || 1;
          video.currentTime = progress * duration;
        },
      },
    });
  }, []);

  return (
    <section id="hero" className="noisy">
      <h1 className="title uppercase">Mojito</h1>

      <img src="/images/hero-left-leaf.png" alt="left-leaf" className="left-leaf" />

      <img src="/images/hero-right-leaf.png" alt="right-leaf" className="right-leaf" />

      <div className="body">
        <div className="content">
          <div className="hidden md:block space-y-5">
            <p>Cool. Crisp. Classic.</p>
            <p className="subtitle">
              Sip the Spirit <br /> of Summer
            </p>
          </div>
          <div className="view-cocktails text-center md:text-left">
            <p className="subtitle">
              Every cocktail on our menu is a <br /> blend of premium ingredients, <br /> creative
              flair, and timeless recipes <br />— designed to delight your senses.
            </p>
            <a href="#cocktails" className="duration-300">
              View Cocktails
            </a>
          </div>
        </div>
      </div>
      {/* <video muted className="opacity-30">
        <source src="/videos/input.mp4" type="video/mp4" />
      </video> */}
    </section>
  );
};

export default Hero;
