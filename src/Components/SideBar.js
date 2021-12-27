import { Link } from "react-router-dom";

export default function SideBar(props) {
  return (
    <div className="col-sm-2">
      <nav className="navbar navbar-expand-lg">
        <ul className="items">
          <li className="bluebox">
            <i className="fa d fa-clock-o" aria-hidden="true"></i>
            <Link to="/">dashboard</Link>
          </li>

          <br />

          <li>
            <i className="fas d fa-border-all"></i>
            <Link to="/product">Product</Link>
          </li>
          <br />

          <li className="list-item">
            <i className="far d fa-heart"></i>
            <Link to="/items">Items</Link>
          </li>
          <br />

          <li className="list-item">
            <i className="far d fa-comments-alt"></i>
            <Link to="/Tabel">Tabel</Link>
          </li>
          <br />

          <li className="list-item">
            <i className="fas d fa-tasks"></i>
            <Link to="/Favorite">Favorite</Link>
          </li>
          <br />
          <li className="list-item">
            <i className="fas d fa-border-all"></i>
            <Link to="/Inbox">Inbox</Link>
          </li>
          <br />

          <hr />
          <h5>pages</h5>
          <li className="list-item">
            <i className="fas d fa-gift"></i>
            <Link to="/Pricing">Pricing</Link>
          </li>
          <br />
          <li className="list-item">
            <i className="fas d fa-calendar-alt"></i>
            <Link to="/calender">calender</Link>
          </li>
          <br />
          <li className="list-item">
            <i className="far d fa-clipboard-list"></i>
            <Link to="/TO-Do">ToDo</Link>
          </li>
          <br />
          <li className="list-item">
            <i className="far d fa-id-badge"></i>
            <Link to="/contact">contact</Link>
          </li>
          <br />
          <li className="list-item">
            <i className="fas d fa-table"></i>
            <Link to="/Invoice">Invoice</Link>
          </li>
          <br />
          <li className="list-item">
            <i className="far d fa-signal-alt-3"></i>
            <Link to="/UIelements">UIelements</Link>
          </li>
          <br />
          <li className="list-item">
            <i className="fas  d fa-user-plus"></i>
            <Link to="/Team">Team</Link>
          </li>
          <br />
          <li className="list-item">
            <i className="fas d fa-table"></i>
            <Link to="/Tabel2">Tabel2</Link>
          </li>
          <br />
          <hr />
          <li className="list-item">
            <i className="fas d fa-cog"></i>
            <Link to="/Setting">Setting</Link>
          </li>
          <br />
        </ul>
      </nav>
    </div>
  );
}
