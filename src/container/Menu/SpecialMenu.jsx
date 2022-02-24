import React from "react";

import { SubHeading, MenuItem } from "../../components";
import { images, data } from "../../constants";
import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext__cormorant">Todays Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_drinks  flex__center">
        <p className="app__specialMenu-menu_heading">Drinks</p>
        <div className="app__specialMenu_menu_items">
          {data.drinks.map((drinks, index) => (
            <MenuItem
              key={drinks.title + index}
              title={drinks.title}
              price={drinks.price}
              tags={drinks.tags}
            />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_shakess  flex__center">
        <p className="app__specialMenu-menu_heading">Shakes</p>
        <div className="app__specialMenu_menu_items">
          {data.shakes.map((shakes, index) => (
            <MenuItem
              key={shakes.title + index}
              title={shakes.title}
              price={shakes.price}
              tags={shakes.tags}
            />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
