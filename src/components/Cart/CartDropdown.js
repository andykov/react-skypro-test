import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeProductFromCart } from "../../features/cartSlice";
import {
  deActiveToCartProduct,
  toggleFavoriteProduct,
} from "../../features/productSlice";
import { formatPrice } from "../../utils";

export default function CartDropdown() {
  const dispatch = useDispatch();
  const { stateCart } = useSelector((state) => state);
  const { products } = stateCart;

  const onRemoveProductCart = (id) => {
    dispatch(removeProductFromCart(id));
    dispatch(deActiveToCartProduct(id));
  };

  const onToggleFavorite = (id) => {
    dispatch(toggleFavoriteProduct(id));
  };

  return (
    <div className="cart-dd">
      {products?.length > 0 &&
        products.map((p) => (
          <div className="cart-dd-product" key={p.id}>
            <div className="cart-dd-product_img">
              <img src={p.img} alt="" />
            </div>
            <div className="cart-dd-product_info">
              <div className="cart-dd-product_text">
                <h2>{p.title}</h2>
                <p>{p.textShort}</p>
              </div>
              <div className="cart-dd-product_price">
                {formatPrice(p.price)} руб.
              </div>
              <div className="cart-dd-product_actions">
                <span onClick={() => onToggleFavorite(p.id)}>Избранные</span>
                <span onClick={() => onRemoveProductCart(p.id)}>Удалить</span>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
