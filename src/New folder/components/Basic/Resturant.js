import React, { useState } from 'react';
import Menu from '../../menuApi';
import MenuCard from '../MenuCard';
import "../../../style.css";



const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);


      const filterItem = (category) => {
        const updatedList = Menu.filter((curElem) => {
          return curElem.category === category;
        });
        setMenuData(updatedList);
      };

  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          <button
            className="btn-group__item"
            onClick={() => filterItem("machine learning")}
          >
            machine learning
          </button>

          <button
            className="btn-group__item"
            onClick={() => filterItem("Artificial Intelligence")}
          >
            Artificial Intelligence
          </button>

          <button
            className="btn-group__item"
            onClick={() => filterItem("Robotics")}
          >
            Robotics
          </button>
          <button
            className="btn-group__item"
            onClick={() => filterItem("Blockchain")}
          >
            Blockchain
          </button>

          <button className="btn-group__item" onClick={() => setMenuData(Menu)}>
            All
          </button>
        </div>
      </nav>

      <MenuCard menuData={menuData} />
    </>
  );
}

export default Resturant