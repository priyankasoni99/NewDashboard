export default function Home() {
  return (
    <div className="col-md-10 at-home">
      <div className="main-contentarea container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="Mainheading">Dashboard</h1>
          </div>
        </div>

        <div class="row row-cols-1 row-cols-md-4 g-4">
          <div class="col">
            <div class="card">
              <div class="card-body">
                <div className="row">
                  <div className="col-sm-6 user">
                    <h6 class="card-title">Total User</h6>
                    <h5 className="card-title">40,689</h5>
                  </div>
                  <div className="col-sm-6 user">
                    <i className="fas totalusericon fa-user-friends"></i>
                  </div>
                </div>
                <div className="row mt-3">
                  <p className="card-text">
                    <span>8.5%</span> up from yesterday
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <div className="row ">
                  <div className="col-sm-6 user">
                    <h6 class="card-title">Total Order</h6>
                    <h5 className="card-title">10293</h5>
                  </div>
                  <div className="col-sm-6 user">
                    <i className="far totalordericon fa-cube"></i>
                  </div>
                </div>
                <div className="row mt-3">
                  <p className="card-text">
                    <span>1.3%</span> up from past week
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <div className="row ">
                  <div className="col-sm-6 user">
                    <h6 class="card-title">Total Sales</h6>
                    <h5 className="card-title">$89,000</h5>
                  </div>
                  <div className="col-sm-6 user">
                    <i className="fas totalsalesicon fa-chart-line"></i>
                  </div>
                </div>
                <div className="row mt-3">
                  <p className="card-text">
                    <span>4.3%</span> down from yesterday
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card">
              <div class="card-body">
                <div className="row">
                  <div className="col-sm-7 user">
                    <h6 class="card-title">Total Pending</h6>
                    <h5 className="card-title">2040</h5>
                  </div>
                  <div className="col-sm-5 user">
                    <i className="fas totalpendingicon fa-user-friends"></i>
                  </div>
                </div>
                <div className="row mt-3">
                  <p className="card-text">
                    <span>4.3%</span> up from yesterday
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
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
    </div>
  );
}
