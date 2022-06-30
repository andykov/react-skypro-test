import React from "react";
import { useDispatch } from "react-redux";
import {
  cartProductIncrement,
  cartProductDecrement,
} from "../features/cartSlice";

export default function Counter({ min, max, product, current }) {
  const dispatch = useDispatch();
  const onCountIncrement = () => {
    if (current < max) {
      dispatch(cartProductIncrement({ id: product.id }));
    }
  };

  const onCountDecrement = () => {
    if (current > min) {
      dispatch(cartProductDecrement({ id: product.id }));
    }
  };

  return (
    <div className="counter">
      <span className="counter_quantity">{current}</span>
      <span className="counter_btn counter_btn--up" onClick={onCountIncrement}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M6 9L8 7L10 9"
            stroke="#CACDD8"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span
        className="counter_btn counter_btn--down"
        onClick={onCountDecrement}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M10 7L8 9L6 7"
            stroke="#CACDD8"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </span>
    </div>
  );
}
