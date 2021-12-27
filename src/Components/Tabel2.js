import React from "react";

export default function Tabel2() {
  return (
    <div className="col-md-10 tabelpage">
      <div>
        <h2 className="Mainheading">
          <strong>Tabel</strong>
        </h2>
        <hr />
        <div className="bg-light member">
          <table className="maintabel">
            <tr>
              <th>S.NO</th>
              <th>NAME</th>
              <th>ADDRESS</th>
              <th>DATE</th>
              <th>TYPE</th>
              <th>STATUS</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Maria Anders</td>
              <td>BHILWARA</td>
              <td> 23-11-2022</td>
              <td>neutral</td>
              <td>
                <button type="button" class="btn btn-success">
                  completed
                </button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
              <td> 23-11-2022</td>
              <td>neutral</td>
              <td>
                <button type="button" class="btn btn-info">
                  processing
                </button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Roland Mendel</td>
              <td>Austria</td>
              <td> 23-11-2022</td>
              <td>neutral</td>
              <td>
                <button type="button" class="btn btn-success">
                  completed
                </button>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Helen Bennett</td>
              <td>UK</td>
              <td> 23-11-2022</td>
              <td>neutral</td>
              <td>
                <button type="button" class="btn btn-danger">
                  uncomplete
                </button>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>Yoshi Tannamuri</td>
              <td>Canada</td>
              <td> 23-11-2022</td>
              <td>neutral</td>
              <td>
                <button type="button" class="btn btn-warning">
                  Warning btn
                </button>
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>Giovanni Rovelli</td>
              <td>Italy</td>
              <td> 23-11-2022</td>
              <td>neutral</td>
              <td>
                <button type="button" class="btn btn-info">
                  Information
                </button>
              </td>
            </tr>
            <tr>
              <td>7</td>
              <td>Giovanni Rovelli</td>
              <td>Italy</td>
              <td> 23-11-2022</td>
              <td>neutral</td>
              <td>
                <button type="button" class="btn btn-success">
                  completed
                </button>
              </td>
            </tr>
            <tr>
              <td>8</td>
              <td>Giovanni Rovelli</td>
              <td>Italy</td>
              <td> 23-11-2022</td>
              <td>neutral</td>
              <td>
                <button type="button" class="btn btn-warning">
                  require btn
                </button>
              </td>
            </tr>
            <tr>
              <td>9</td>
              <td>Giovanni Rovelli</td>
              <td>Italy</td>
              <td> 23-11-2022</td>
              <td>neutral</td>
              <td>
                <button type="button" class="btn btn-success">
                  completed
                </button>
              </td>
            </tr>
          </table>
        </div>
        <hr />
        <div className="bg-light member">
          <table className="maintabel">
            <tr>
              <th style={{ width: "10%" }}>Image</th>
              <th>ProductNAME</th>
              <th>Category</th>
              <th>Price</th>
              <th>Activated color</th>
              <th>Action</th>
            </tr>
            <tr>
              <td>
                <img
                  style={{ width: "70%", height: "70%" }}
                  src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/38-alu-silver-sport-white-nc-s3-1up?wid=1673&hei=1353&fmt=jpeg&qlt=95&.v=1594318675000"
                ></img>
              </td>
              <td>Apple Watch Series</td>
              <td>Digital products</td>
              <td>$234.00</td>
              <td>🔴 🟢 🔵</td>
              <td>
                <i class="fas fa-edit"></i>
                <i class="fas fa-trash-alt"></i>
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <img
                  style={{ width: "50%", height: "50%" }}
                  src="https://n3.sdlcdn.com/imgs/j/s/y/230X258_sharpened/David-Miller-DM-Avengers-PU-SDL796143820-1-e48b9.jpeg"
                ></img>
              </td>
              <td>David Miller Watch</td>
              <td>Digital products</td>
              <td> $566.00</td>
              <td>🔴 🔵 ⚫ 🟡</td>
              <td>
                <i class="fas fa-edit"></i>
                <i class="fas fa-trash-alt "></i>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
