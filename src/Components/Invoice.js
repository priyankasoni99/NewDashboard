import React from "react";

export default function Invoice() {
  return (
    <div class="col-lg-10 bg-grey">
      <h2 className="Mainheading">
        <strong>Invoice</strong>
      </h2>
      <div className=" row bg-light margin1">
        <div className=" col-md-4  text-center pt-3 pb-3">
          <h6>Invoice From:</h6>
          <h6>prakash soni</h6>
          <h6>rajasthan</h6>
        </div>
        <div className=" col-md-4 text-center pt-3 pb-3">
          <h6>Invoice To:</h6>
          <h6>pradeep soni</h6>
          <h6>bhilwara</h6>
        </div>
        <div className=" col-md-4  text-center pt-3 pb-3">
          <h6>Invoice Date:12 nov 2019</h6>
          <h6>Due Date: 25 dec 2019</h6>
        </div>
        <table className="maintabel">
          <tr>
            <th className="sn">Serial No</th>
            <th className="sn">Description</th>
            <th className="sn">Quantity</th>
            <th className="sn">Basic Cost</th>
            <th className="sn">Total Cost</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Maria Anders</td>
            <td>2</td>
            <td>$14.00</td>
            <td>$3000</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Francisco Chang</td>
            <td>3</td>
            <td> $14.00</td>
            <td>$2900</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Roland Mendel</td>
            <td>4</td>
            <td> $14.00</td>
            <td>$678</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Helen Bennett</td>
            <td>2</td>
            <td>$14.00</td>
            <td>$390</td>
          </tr>
        </table>
        <h6 className="d-flex justify-content-end ">total $3627</h6>
      </div>
    </div>
  );
}
