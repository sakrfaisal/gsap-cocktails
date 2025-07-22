import { sliderLists } from "../../constants/index";
import { useState } from "react";

const Menu = () => {
  const [activeTab, setActiveTab] = useState(2);

  function handleArrowClick(direction) {
    if (direction === "left") {
      setActiveTab((prev) => (prev === 0 ? 3 : prev - 1));
    } else {
      setActiveTab((prev) => (prev === 3 ? 0 : prev + 1));
    }
  }

  return (
    <section id="menu">
      <img src="/images/slider-left-leaf.png" alt="menu-left-leaf" id="m-left-leaf" />
      <img src="/images/slider-right-leaf.png" alt="menu-right-leaf" id="m-right-leaf" />

      <h2 className="sr-only">Menu</h2>

      <div className="cocktail-tabs">
        {sliderLists.map((item) => (
          <button
            key={Math.random()}
            id={item.id}
            className={`${activeTab === item.id ? "active" : ""}`}
            onClick={() => setActiveTab(item.id)}>
            {item.name}
          </button>
        ))}
      </div>
      <div className="content">
        <div className="arrows">
          <button onClick={() => handleArrowClick("left")}>
            <span>
              {sliderLists.find((item) => item.id === (activeTab === 0 ? 3 : activeTab - 1)).name}
            </span>
            <img src="/images/right-arrow.png" alt="arrow-left" />
          </button>
          <button onClick={() => handleArrowClick("right")}>
            <span>{sliderLists.find((item) => item.id === (activeTab + 1) % 4).name}</span>
            <img src="/images/left-arrow.png" alt="arrow-right" />
          </button>
        </div>
        <div className="cocktail">
          <img src={`/images/drink${activeTab + 1}.png`} alt="cocktail" />
        </div>
        <div className="recipe">
          <div className="info">
            <div>
              Recipes for:
              <span id="title">{sliderLists.find((item) => item.id === activeTab).name}</span>
            </div>
          </div>
          <div className="details">
            <h2 className="title">{sliderLists.find((item) => item.id === activeTab).title}</h2>
            <p className="description">
              {sliderLists.find((item) => item.id === activeTab).description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
