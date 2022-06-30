import img1 from "../assets/img/products/p-1.png";
import img2 from "../assets/img/products/p-2.png";
import img3 from "../assets/img/products/p-3.png";
import img4 from "../assets/img/products/p-4.png";
import img5 from "../assets/img/products/p-5.png";
import img6 from "../assets/img/products/p-6.png";

export const products = [
  {
    id: 1,
    img: img1,
    title: "Кровать TATRAN",
    textShort:
      "Основание из полированной нержавеющей стали, придает оригинальный парящий эффект.",
    price: 120000,
    quantity: {
      min: 1,
      max: 10,
      current: 1,
    },
    isFavorite: false,
    isInCart: false,
  },
  {
    id: 2,
    img: img2,
    title: "Кресло VILORA",
    textShort:
      "Мягкое и уютное, аккуратное и стильное. Упругие подушки сиденья и приятная на ощупь ткань. ",
    price: 21000,
    quantity: {
      min: 1,
      max: 10,
      current: 1,
    },
    isFavorite: false,
    isInCart: false,
  },
  {
    id: 3,
    img: img3,
    title: "Стол MENU",
    textShort:
      "Европейский дуб - отличается особой прочностью и стабильностью.",
    price: 34000,
    quantity: {
      min: 1,
      max: 10,
      current: 1,
    },
    isFavorite: false,
    isInCart: false,
  },
  {
    id: 4,
    img: img4,
    title: "Диван ASKESTA",
    textShort:
      "Благодаря защелкивающемуся механизму диван легко раскладывается в комфортную кровать",
    price: 68000,
    quantity: {
      min: 1,
      max: 10,
      current: 1,
    },
    isFavorite: false,
    isInCart: false,
  },
  {
    id: 5,
    img: img5,
    title: "Кресло LUNAR",
    textShort:
      "Прекрасно переносит солнечные лучи, перепады влажности и любые осадки",
    price: 40000,
    quantity: {
      min: 1,
      max: 10,
      current: 1,
    },
    isFavorite: false,
    isInCart: false,
  },
  {
    id: 6,
    img: img6,
    title: "Шкаф Nastan",
    textShort: "Мебель может быть оснащена разнообразными системами подсветки.",
    price: 80000,
    quantity: {
      min: 1,
      max: 10,
      current: 1,
    },
    isFavorite: false,
    isInCart: false,
  },
];
