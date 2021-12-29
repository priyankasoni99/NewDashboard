import { Link } from "react-router-dom";

export default function SideBar(props) {
  return (
    <div className="col-sm-2">
      <nav className="navbar navbar-expand-lg">
        <ul className="items">
          <li className="bluebox">
            <i className="fa d fa-clock-o" aria-hidden="true"></i>
            <Link style={{ color: "white", textDecoration: "none" }} to="/">
              Dashboard
            </Link>
          </li>

          <li>
            <i className="fas d fa-border-all"></i>
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to="/product"
            >
              Product
            </Link>
          </li>

          <li className="list-item">
            <i className="far d fa-heart"></i>
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to="/items"
            >
              Items
            </Link>
          </li>

          <li className="list-item">
            <i className="far d fa-comments-alt"></i>
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to="/Tabel"
            >
              Tabel
            </Link>
          </li>

          <li className="list-item">
            <i className="fas d fa-tasks"></i>
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to="/Favorite"
            >
              Favorite
            </Link>
          </li>
          <li className="list-item">
            <i className="fas d fa-border-all"></i>
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to="/Inbox"
            >
              Inbox
            </Link>
          </li>

          <hr />
          <h5>pages</h5>
          <li className="list-item">
            <i className="fas d fa-gift"></i>
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to="/Pricing"
            >
              Pricing
            </Link>
          </li>
          <li className="list-item">
            <i className="fas d fa-calendar-alt"></i>
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to="/calender"
            >
              calender
            </Link>
          </li>
          <li className="list-item">
            <i className="far d fa-clipboard-list"></i>
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to="/TO-Do"
            >
              ToDo
            </Link>
          </li>
          <li className="list-item">
            <i className="far d fa-id-badge"></i>
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to="/contact"
            >
              contact
            </Link>
          </li>
          <li className="list-item">
            <i className="fas d fa-table"></i>
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to="/Invoice"
            >
              Invoice
            </Link>
          </li>
          <li className="list-item">
            <i className="far d fa-signal-alt-3"></i>
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to="/UIelements"
            >
              UIelements
            </Link>
          </li>
          <li className="list-item">
            <i className="fas  d fa-user-plus"></i>
            <Link style={{ color: "black", textDecoration: "none" }} to="/Team">
              Team
            </Link>
          </li>
          <li className="list-item">
            <i className="fas d fa-table"></i>
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to="/Tabel2"
            >
              Tabel2
            </Link>
          </li>
          <hr />
          <li className="list-item">
            <i className="fas d fa-cog"></i>
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to="/Setting"
            >
              Setting
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
