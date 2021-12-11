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
            <strong>order lists</strong>
          </li>
          <br />
          <li className="list-item">
            <i className="fas d fa-border-all"></i>
            <a>product stock</a>
          </li>
          <br />

          <hr />
          <h5>pages</h5>
          <li className="list-item">
            <i className="fas d fa-gift"></i>
            <strong>pricing</strong>
          </li>
          <br />
          <li className="list-item">
            <i className="fas d fa-calendar-alt"></i>
            <strong>calender</strong>
          </li>
          <br />
          <li className="list-item">
            <i className="far d fa-clipboard-list"></i>
            <strong>to do</strong>
          </li>
          <br />
          <li className="list-item">
            <i className="far d fa-id-badge"></i>
            <strong>contact</strong>
          </li>
          <br />
          <li className="list-item">
            <i className="fas d fa-table"></i>
            <strong>invoice</strong>
          </li>
          <br />
          <li className="list-item">
            <i className="far d fa-signal-alt-3"></i>
            <strong>ui elements</strong>
          </li>
          <br />
          <li className="list-item">
            <i className="fas  d fa-user-plus"></i>
            <strong>team</strong>
          </li>
          <br />
          <li className="list-item">
            <i className="fas d fa-table"></i>
            <strong>tabel</strong>
          </li>
          <br />
          <hr />
          <li className="list-item">
            <i className="fas d fa-cog"></i>
            <strong>settings</strong>
          </li>
          <br />
        </ul>
      </nav>
    </div>
  );
}
