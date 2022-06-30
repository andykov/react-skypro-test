import Menu from "./Menu";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header_inner">
          <Link to="/" className="link-logo">
            Интерьер.
          </Link>
          <Menu />
        </div>
      </div>
    </header>
  );
}
