import { openingHours, socials } from "../../constants/index";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Contact = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    tl.from("#f-left-leaf", {
      y: 200,
      duration: 1,
      ease: "power2.inOut",
    });
  });

  return (
    <section id="contact">
      <img src="/images/footer-left-leaf.png" alt="footer-left-leaf" id="f-left-leaf" />
      <img src="/images/footer-right-leaf.png" alt="footer-right-leaf" id="f-right-leaf" />

      <div className="content">
        <h2>Where to Find Us</h2>
        <div>
          <h3>Visit our store</h3>
          <p>456, Rag Blvd. #404, Los Angeles, CA 90210</p>
        </div>
        <div>
          <h3>Contact us</h3>
          <p>(555) 987-6543</p>
          <p>hello@jsmcocktails.com</p>
        </div>
        <div>
          <h3>Open every day</h3>
          {openingHours.map((item) => (
            <p key={Math.random()}>
              {item.day}: {item.time}
            </p>
          ))}
        </div>
        <div>
          <h3>socials</h3>
          <ul className="flex gap-2 items-center justify-center">
            {socials.map((item, index) => (
              <li key={index}>
                <a href={item.url}>
                  <img className="w-8 h-8" src={item.icon} alt={item.name} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
