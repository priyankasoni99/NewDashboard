export default function Home() {
  return (
    <div className="col-md-10 at-home">
      <div className="main-contentarea container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="Mainheading">Dashboard</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card">
              <div className="card-body">
                <div className="row display">
                  <div className="col-6 marginleft">
                    <h5 className="card-title">Total User</h5>
                    <h3 className="numbers">40,689</h3>
                    <p className="card-text">
                      <span>8.5%</span> up from yesterday
                    </p>
                  </div>
                  <div className="col-6 marginleft">
                    <i className="fas totalusericon fa-user-friends"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card">
              <div className="card-body">
                <div className="row display">
                  <div className="col-6 marginleft">
                    <h5 className="card-title">Total Order</h5>
                    <h3 className="numbers">10293</h3>
                    <p className="card-text">
                      <span>1.3%</span> up from past week
                    </p>
                  </div>

                  <div className="col-6 marginleft">
                    <i className="far totalordericon fa-cube"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card">
              <div className="card-body">
                <div className="row display">
                  <div className="col-6 marginleft">
                    <h5 className="card-title">Total Sales</h5>
                    <h3 className="numbers">$89,000</h3>
                    <p className="card-text">
                      <span>4.3%</span> down from yesterday
                    </p>
                  </div>

                  <div className="col-6 marginleft">
                    <i className="fas totalsalesicon fa-chart-line"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card">
              <div className="card-body">
                <div className="row display">
                  <div className="col-6 marginleft">
                    <h5 className="card-title">Total Pending</h5>
                    <h3 className="numbers">2040</h3>
                    <p className="card-text">
                      <span>1.8%</span> up from yesterday
                    </p>
                  </div>

                  <div className="col-6 marginleft">
                    <i className="fas totalpendingicon fa-history"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row padding-right">
        <div className="col-md-12 sale">
          <div className="row">
            <div className="col-md-10">
              <h1>sales details</h1>
            </div>
            <div className="col-md-2 october">
              <select name="cars" id="cars">
                <option value="october">october</option>
              </select>
            </div>
          </div>
          <div className="">
            <img
              src="images/image-1__01.png"
              width="100%"
              className="img-responsive"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
