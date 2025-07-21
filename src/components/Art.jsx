import { featureLists } from "../../constants/index";
import { goodLists } from "../../constants/index";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";

const Art = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  useGSAP(() => {
    const startValue = isMobile ? "top 20%" : "top top";
    const tm = gsap.timeline({
      scrollTrigger: {
        trigger: "#art",
        start: startValue,
        end: "bottom top",
        scrub: true,
        pin: true,
      },
    });

    tm.to(".will-fade", {
      opacity: 0,
      duration: 1.8,
      stagger: 1.8,
      ease: "power2.inOut",
    });

    tm.to(".masked-img", {
      maskSize: "400%",
      duration: 1.8,
      ease: "power2.inOut",
    });

    tm.to(".masked-content", {
      opacity: 1,
    });
  });
  return (
    <div id="art">
      <div className="container mx-auto pt-20 min-h-[calc(100dvh-40px)]">
        <h2 className="will-fade">The ART</h2>

        <div className="content">
          <ul className="space-y-4 will-fade">
            {featureLists.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <img src="/images/check.png" alt="check" />
                {item}
              </li>
            ))}
          </ul>

          <div className="cocktail-img">
            <img
              src="/images/under-img.jpg"
              alt="cocktail"
              className="abs-center masked-img size-full object-contain"
            />
          </div>

          <ul className="space-y-4 will-fade ml-auto md:ml-0">
            {goodLists.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <img src="/images/check.png" alt="check" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="masked-container">
          <h2 className="will-fade text-white">Sip-Worthy Perfection</h2>
          <div className="masked-content">
            <h3>Made with Craft, Poured with Passion</h3>
            <p>This isn’t just a drink. It’s a carefully crafted moment made just for you.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Art;
