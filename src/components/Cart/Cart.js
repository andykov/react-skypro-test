import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { default as PhoneFormat } from "react-number-format";
import { clearCart } from "../../features/cartSlice";
import { formatPrice } from "../../utils";
import CartProduct from "./CartProduct";
import { deActiveToCartProduct } from "../../features/productSlice";

export default function Cart() {
  const dispatch = useDispatch();
  const { stateCart } = useSelector((state) => state);
  const { products, totalPrice, isEmpty } = stateCart;

  const onClearCart = () => {
    if (products.length) {
      dispatch(clearCart());
      dispatch(deActiveToCartProduct()); // Тут нужно как-то устанавливать isInCart в false для стейта stateProducts
    }
  };

  return (
    <div className="cart">
      <div className="cart_content">
        <div className="cart_head">
          <span>Товар</span>
          <span>К-во</span>
        </div>
        <div className="cart_products">
          {isEmpty ? (
            <div className="cart_empty">Корзина пуста</div>
          ) : (
            products.map((p) => <CartProduct key={p.id} product={p} />)
          )}
        </div>
        {!isEmpty && (
          <div className="cart_actions">
            <button className="btn" onClick={onClearCart}>
              Очистить корзину
            </button>
            <Link to="/" className="btn btn--black">
              Продолжить покупки
            </Link>
          </div>
        )}
      </div>
      <div className="cart_order">
        <div className="form-order">
          <div className="form-order_title">Оформление заказа</div>
          <div className="form-order_fields">
            <div className="field">
              <label>
                <input type="text" name="fio" placeholder="Имя Фамилия" />
              </label>
            </div>
            <div className="field">
              <label>
                <PhoneFormat format="+7 ### ### ## ##" placeholder="Телефон" />
              </label>
            </div>
            <div className="field">
              <label>
                <input
                  type="text"
                  name="address"
                  placeholder="Адрес доставки"
                />
              </label>
            </div>
          </div>
          <div className="form-order_bottom">
            <div className="form-order_total-price">
              Итого: <span>{formatPrice(totalPrice || 0)} руб.</span>
            </div>
            <button className="btn">Оформить заказ</button>
          </div>
        </div>
      </div>
    </div>
  );
}
