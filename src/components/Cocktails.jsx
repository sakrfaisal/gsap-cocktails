import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { cocktailLists } from "../../constants/index.js";
import { mockTailLists } from "../../constants/index.js";

const Cocktails = () => {
  useGSAP(() => {
    gsap
      .timeline("#cocktails", {
        scrollTrigger: {
          trigger: "#cocktails",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .from("#c-left-leaf", {
        y: 100,
        x: -100,
      })
      .from(
        "#c-right-leaf",
        {
          y: 100,
          x: 100,
        },
        0
      );
  });

  return (
    <section id="cocktails" className="noisy">
      <img src="/images/cocktail-left-leaf.png" alt="cocktails-left-leaf" id="c-left-leaf" />
      <img src="/images/cocktail-right-leaf.png" alt="cocktails-right-leaf" id="c-right-leaf" />

      <div className="list">
        <ul className="popular">
          <h2>Most Popular Cocktails:</h2>
          {cocktailLists.map((cocktail) => (
            <li key={cocktail.name} className="flex justify-between items-center">
              <div>
                <h3>{cocktail.name}</h3>
                <p>
                  {cocktail.country} | {cocktail.detail}
                </p>
              </div>
              <span>- {cocktail.price}</span>
            </li>
          ))}
        </ul>
        <ul className="loved">
          <h2>Most Loved Mocktails:</h2>
          {mockTailLists.map((mockTail) => (
            <li key={mockTail.name} className="flex justify-between items-center">
              <div>
                <h3>{mockTail.name}</h3>
                <p>
                  {mockTail.country} | {mockTail.detail}
                </p>
              </div>
              <span>- {mockTail.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Cocktails;
