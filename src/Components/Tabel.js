export default function tabel() {
  return (
    <div className=" tabelpage">
      <div className="col-md-10">
        <div>
          <h2>
            <strong>Order List</strong>
          </h2>
          <div>
            <table className="onerow">
              <tr>
                <td>1</td>
                <td>filterby</td>
                <td>
                  xyz <i class="fas fa-chevron-down"></i>
                </td>
                <td>
                  india<i class="fas fa-chevron-down"></i>
                </td>
                <td>
                  neutral<i class="fas fa-chevron-down"></i>
                </td>
                <td className="pending">
                  <i class="fas fa-history"></i>pending
                </td>
              </tr>
            </table>
          </div>
          <div className="border-radius ">
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
                    required btn
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
        </div>
      </div>
    </div>
  );
}
