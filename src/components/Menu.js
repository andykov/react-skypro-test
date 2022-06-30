import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartDropdown from "./Cart/CartDropdown";
import iconGrid from "../assets/img/grid.svg";
import iconBasket from "../assets/img/basket.svg";

export default function Menu() {
  const { stateCart } = useSelector((state) => state);
  const { isEmpty } = stateCart;

  return (
    <nav className="menu">
      <ul className="menu_list">
        <li className="menu_item">
          <Link to="/" className="menu_link">
            <img src={iconGrid} alt="" />
            <span>Каталог</span>
          </Link>
        </li>
        <li className="menu_item">
          <Link to="/cart" className="menu_link">
            <img src={iconBasket} alt="" />
            <span>Корзина</span>
          </Link>
          {!isEmpty && (
            <div className="menu_dropdown">
              <CartDropdown />
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
}
