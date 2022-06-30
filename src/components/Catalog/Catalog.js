import { useSelector } from "react-redux";
import { useSort } from "../../hooks/useSort";
import CatalogProduct from "./CatalogProduct";

export default function Catalog() {
  const { stateProducts } = useSelector((state) => state);
  const { products } = stateProducts;

  const { sortType, sortedData, setSortType } = useSort(products || []);

  return (
    <div className="catalog">
      <div className="catalog_bar">
        <div className="select">
          <span className="select_placeholder">Порядок:</span>
          <select
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="sortPriceAsc">сперва дешевле</option>
            <option value="sortPriceDesc">сперва дороже</option>
          </select>
        </div>
      </div>
      <div className="catalog_items">
        {sortedData.map((p) => (
          <CatalogProduct key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
