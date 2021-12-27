import React from "react";

export default function Inbox() {
  return (
    <div className="col-md-10 bg-grey">
      <h1 className="Mainheading">Inbox</h1>
      <div className="row">
        <div className="col-md-2 bg-light sidepart py-3">
          <button type="button" class="btn btn-primary btn-lg w-100">
            compose
          </button>
          <h5 className="myemail">My Email</h5>
          <div className="row">
            <ul className="items">
              <li className="bg-blue padding-bottom">
                <i class="far padding fa-inbox"></i>Inbox{" "}
                <span className="text-left"> 3458 </span>
              </li>
              <li className="padding-bottom">
                <i class="far padding  fa-star"></i>Starred
                <span className="text-left1">58</span>
              </li>
              <li className="padding-bottom">
                <i class="fas padding  fa-paper-plane"></i>Sent
                <span className="text-left2">348</span>
              </li>
              <li className="padding-bottom">
                <i class="fas padding  fa-pencil-alt"></i>Draft
                <span className="text-left3">38</span>
              </li>
              <li className="padding-bottom">
                <i class="far  padding fa-exclamation-circle"></i>Spam
                <span className="text-leftq">3</span>
              </li>
              <li className="padding-bottom">
                <i class="far padding  fa-exclamation-circle"></i>Important
                <span className="text-left6">3812</span>
              </li>
              <li className="padding-bottom">
                <i class="far padding  fa-trash-alt"></i>Bin
                <span className="text-left8">234</span>
              </li>
            </ul>
          </div>
          <h5 className="myemail">Label</h5>
          <div className="row">
            <ul className="items">
              <li className="padding-bottom">
                <i class="far   padding fa-square "></i>primary
              </li>
              <li className="padding-bottom">
                <i class="far   padding  fa-square"></i>social
              </li>
              <li className="padding-bottom">
                <i class="far   padding  fa-square"></i>work
              </li>
              <li className="padding-bottom">
                <i class="far   padding  fa-square"></i>private
              </li>
            </ul>
          </div>
          <p className="label">+ create new label</p>
        </div>
        <div className="col-md-9 bg-light midpart">
          <div className="row d-flex">
            <div className=" col-md-10 search-icon py-3">
              <form id="search-form">
                <div class="search">
                  <input
                    class="search"
                    type="text"
                    placeholder="&#xF002; Search"
                  />
                </div>
              </form>
            </div>
            <div className="col-md-2 py-2 table-bordered boxw">
              <table style={{ width: "20%" }}>
                <tr>
                  <td>
                    {" "}
                    <i class="far padding fa-inbox"></i>
                  </td>
                  <td>
                    {" "}
                    <i class="far padding  fa-exclamation-circle"></i>{" "}
                  </td>
                  <td>
                    {" "}
                    <i class="far padding  fa-trash-alt"></i>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <table className="maintabel">
            <tr>
              <td>
                {" "}
                <i class="far fa-square "></i>
              </td>
              <td>
                {" "}
                <i className="fa fa-star"> </i>{" "}
              </td>
              <td>priyanka soni</td>
              <td>
                {" "}
                <button type="button" class="btn btn-success">
                  Warning btn
                </button>{" "}
              </td>
              <td> i am just trying this is a demo piece here only</td>
              <td> 8:30 am</td>
            </tr>
            <tr>
              <td>
                {" "}
                <i class="far fa-square "></i>
              </td>
              <td>
                {" "}
                <i className="fa fa-star"> </i>{" "}
              </td>
              <td>priyanka soni</td>
              <td>
                {" "}
                <button type="button" class="btn btn-warning">
                  Warning btn
                </button>{" "}
              </td>
              <td> i am just trying this is a demo piece here only</td>
              <td> 8:30 am</td>
            </tr>
            <tr>
              <td>
                {" "}
                <i class="far fa-square "></i>
              </td>
              <td>
                {" "}
                <i className="fa fa-star"> </i>{" "}
              </td>
              <td>priyanka soni</td>
              <td>
                {" "}
                <button type="button" class="btn btn-info">
                  Warning btn
                </button>{" "}
              </td>
              <td> i am just trying this is a demo piece here only</td>
              <td> 8:30 am</td>
            </tr>
            <tr>
              <td>
                {" "}
                <i class="far fa-square "></i>
              </td>
              <td>
                {" "}
                <i className="fa fa-star"> </i>{" "}
              </td>
              <td>priyanka soni</td>
              <td>
                {" "}
                <button type="button" class="btn btn-danger">
                  Warning btn
                </button>{" "}
              </td>
              <td> i am just trying this is a demo piece here only</td>
              <td> 8:30 am</td>
            </tr>
            <tr>
              <td>
                {" "}
                <i class="far fa-square "></i>
              </td>
              <td>
                {" "}
                <i className="fa fa-star"> </i>{" "}
              </td>
              <td>priyanka soni</td>
              <td>
                {" "}
                <button type="button" class="btn btn-warning">
                  Warning btn
                </button>{" "}
              </td>
              <td> i am just trying this is a demo piece here only</td>
              <td> 8:30 am</td>
            </tr>
            <tr>
              <td>
                {" "}
                <i class="far fa-square "></i>
              </td>
              <td>
                {" "}
                <i className="fa fa-star"> </i>{" "}
              </td>
              <td>priyanka soni</td>
              <td>
                {" "}
                <button type="button" class="btn btn-success">
                  Warning btn
                </button>{" "}
              </td>
              <td> i am just trying this is a demo piece here only</td>
              <td> 8:30 am</td>
            </tr>
            <tr>
              <td>
                {" "}
                <i class="far fa-square "></i>
              </td>
              <td>
                {" "}
                <i className="fa fa-star"> </i>{" "}
              </td>
              <td>priyanka soni</td>
              <td>
                {" "}
                <button type="button" class="btn btn-primary">
                  Warning btn
                </button>{" "}
              </td>
              <td> i am just trying this is a demo piece here only</td>
              <td> 8:30 am</td>
            </tr>
            <tr>
              <td>
                {" "}
                <i class="far fa-square "></i>
              </td>
              <td>
                {" "}
                <i className="fa fa-star"> </i>{" "}
              </td>
              <td>priyanka soni</td>
              <td>
                {" "}
                <button type="button" class="btn btn-success">
                  Warning btn
                </button>{" "}
              </td>
              <td> i am just trying this is a demo piece here only</td>
              <td> 8:30 am</td>
            </tr>
            <tr>
              <td>
                {" "}
                <i class="far fa-square "></i>
              </td>
              <td>
                {" "}
                <i className="fa fa-star"> </i>{" "}
              </td>
              <td>priyanka soni</td>
              <td>
                {" "}
                <button type="button" class="btn btn-danger">
                  Warning btn
                </button>{" "}
              </td>
              <td> i am just trying this is a demo piece here only</td>
              <td> 8:30 am</td>
            </tr>
            <tr>
              <td>
                {" "}
                <i class="far fa-square "></i>
              </td>
              <td>
                {" "}
                <i className="fa fa-star"> </i>{" "}
              </td>
              <td>priyanka soni</td>
              <td>
                {" "}
                <button type="button" class="btn btn-warning">
                  Warning btn
                </button>{" "}
              </td>
              <td> i am just trying this is a demo piece here only</td>
              <td> 8:30 am</td>
            </tr>
            <tr>
              <td>
                {" "}
                <i class="far fa-square "></i>
              </td>
              <td>
                {" "}
                <i className="fa fa-star"> </i>{" "}
              </td>
              <td>priyanka soni</td>
              <td>
                {" "}
                <button type="button" class="btn btn-info">
                  Warning btn
                </button>{" "}
              </td>
              <td> i am just trying this is a demo piece here only</td>
              <td> 8:30 am</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
