import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const About = () => {
  useGSAP(() => {
    const title = new SplitText("h2", { type: "lines" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top 50%",
        end: "bottom bottom",
      },
    });

    tl.from(title.lines, {
      yPercent: 100,
      duration: 1.5,
      opacity: 0,
      ease: "expo.out",
      stagger: 0.07,
    });

    tl.from(".img-con", {
      scale: 0.8,
      opacity: 0,
      delay: -1,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.07,
    });
  }, []);

  return (
    <section id="about" className="bg-black">
      <div className="mb-16 mx-5 md:px-0">
        <div className="content flex flex-col lg:flex-row justify-between gap-10 mb-10">
          <div className="flex flex-col gap-4 items-start">
            <span className="inline-block rounded-full bg-white text-black px-4 py-2 text-sm font-medium">
              Best Cocktails
            </span>
            <h2 className="text-5xl md:text-6xl font-modern-negra max-w-lg">
              Where every detail <br /> matters -from muddle <br /> to garnish
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <p className="paragraph">
              Every cocktail we serve is a reflection of our <br /> obsession with detail — from the
              first muddle to <br /> the final garnish. That care is what turns a <br /> simple
              drink into something truly memorable.
            </p>
            <p className="text-3xl font-bold">
              <span className="text-yellow font-bold text-5xl">4.5</span>/5
            </p>
            <p>More than +12000 customers</p>
          </div>
        </div>
        <div className="top-grid">
          <div className="img-con col-span-3">
            <img src="/images/abt1.png" alt="about-1" />
          </div>
          <div className="img-con col-span-6">
            <img src="/images/abt2.png" alt="about-2" />
          </div>
          <div className="img-con col-span-3">
            <img src="/images/abt5.png" alt="about-3" />
          </div>
        </div>
        <div className="bottom-grid">
          <div className="img-con col-span-8">
            <img src="/images/abt3.png" alt="about-4" />
          </div>
          <div className="img-con col-span-4">
            <img src="/images/abt4.png" alt="about-5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
