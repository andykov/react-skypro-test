import React from "react";
import { useDispatch } from "react-redux";
import { removeProductFromCart } from "../../features/cartSlice";
import {
  deActiveToCartProduct,
  toggleFavoriteProduct,
} from "../../features/productSlice";
import { formatPrice } from "../../utils";
import Counter from "../Counter";

export default function CartProduct({ product }) {
  const dispatch = useDispatch();

  const onRemoveProductCart = () => {
    dispatch(removeProductFromCart(product.id));
    dispatch(deActiveToCartProduct(product.id));
  };

  const onToggleFavorite = () => {
    dispatch(toggleFavoriteProduct(product.id));
  };

  return (
    <div className="cart-product">
      <div className="cart-product_img">
        <img src={product.img} alt="" />
      </div>
      <div className="cart-product_info">
        <div className="cart-product_text">
          <h2>{product.title}</h2>
          <p>{product.textShort}</p>
        </div>
        <div className="cart-product_price">
          {formatPrice(product.price)} руб.
        </div>
        <div className="cart-product_actions">
          <span onClick={onToggleFavorite}>Избранные</span>
          <span onClick={onRemoveProductCart}>Удалить</span>
        </div>
        <div className="cart-product_counter">
          <Counter
            min={product.quantity.min}
            max={product.quantity.max}
            current={product.quantity.current}
            product={product}
          />
        </div>
      </div>
    </div>
  );
}
