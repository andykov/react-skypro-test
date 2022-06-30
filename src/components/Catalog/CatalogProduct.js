import React from "react";
import { useDispatch } from "react-redux";
import { setProductToCart } from "../../features/cartSlice";
import {
  toggleFavoriteProduct,
  activeToCartProduct,
} from "../../features/productSlice";
import { formatPrice } from "../../utils";

export default function CatalogProduct({ product }) {
  const dispatch = useDispatch();

  const onAddToCart = (e) => {
    e.stopPropagation();
    dispatch(setProductToCart(product));
    dispatch(activeToCartProduct(product.id));
  };

  const onToggleFavorite = (e) => {
    e.stopPropagation();
    dispatch(toggleFavoriteProduct(product.id));
  };

  // console.log(product.img);

  return (
    <div className="product">
      <div className="product_actions">
        <button className="product_btn" onClick={onAddToCart}>
          <svg
            width="24"
            height="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 8V6c0-1.326.062-3.062 1-4 .938-.938 2.674-1 4-1s3.062.062 4 1c.938.938 1 2.674 1 4v2h3c.265 0 .813-.188 1 0 .188.188 0 .735 0 1v12c0 .265.188.813 0 1-.188.188-.735 0-1 0H4c-.265 0-.812.188-1 0-.188-.188 0-.735 0-1V9c0-.265-.188-.812 0-1 .188-.188.735 0 1 0h3Zm0 2H5v10h14V10h-2v2h-2v-2H9v2H7v-2Zm2-2h6V6c0-.796-.437-1.437-1-2s-1.204-1-2-1-1.437.437-2 1-1 1.204-1 2v2Z"
              fill={`${product.isInCart ? "#FFFFFF" : "#C4C4C4"}`}
            />
          </svg>
        </button>
        <button className="product_btn" onClick={onToggleFavorite}>
          <svg
            width="24"
            height="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 21c-.645-.572-1.374-1.167-2.145-1.8h-.01c-2.715-2.22-5.792-4.732-7.151-7.742-.446-.958-.683-2-.694-3.058A5.39 5.39 0 0 1 7.5 3a6.158 6.158 0 0 1 3.328.983A5.6 5.6 0 0 1 12 5c.344-.39.738-.732 1.173-1.017A6.152 6.152 0 0 1 16.5 3 5.39 5.39 0 0 1 22 8.4a7.422 7.422 0 0 1-.694 3.063c-1.359 3.01-4.435 5.521-7.15 7.737l-.01.008c-.772.629-1.5 1.224-2.145 1.8L12 21ZM7.5 5a3.535 3.535 0 0 0-2.5.992A3.342 3.342 0 0 0 4 8.4c.011.77.186 1.53.512 2.228A12.316 12.316 0 0 0 7.069 14.1c.991 1 2.131 1.968 3.117 2.782.273.225.551.452.829.679l.175.143c.267.218.543.444.81.666l.013-.012.006-.005h.006l.009-.007h.01l.018-.015.041-.033.007-.006.011-.008h.006l.009-.008.664-.545.174-.143c.281-.229.559-.456.832-.681.986-.814 2.127-1.781 3.118-2.786a12.3 12.3 0 0 0 2.557-3.471c.332-.704.51-1.472.519-2.25A3.343 3.343 0 0 0 19 6a3.535 3.535 0 0 0-2.5-1 3.988 3.988 0 0 0-2.99 1.311L12 8.051l-1.51-1.74A3.988 3.988 0 0 0 7.5 5Z"
              fill={`${product.isFavorite ? "#FFFFFF" : "#C4C4C4"}`}
            />
          </svg>
        </button>
      </div>
      <div className="product_img">
        <img src={product.img} alt="" />
      </div>
      <div className="product_desc">
        <h2>{product.title}</h2>
        <p>
          Основание из полированной нержавеющей стали, придает оригинальный
          парящий эффект.
        </p>
      </div>
      <div className="product_price">{formatPrice(product.price)} руб.</div>
    </div>
  );
}
