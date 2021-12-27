export default function Product() {
  return (
    <div class="col-lg-10 bg-grey">
      <h2 className="Mainheading">
        <strong>Dashboard</strong>
      </h2>

      <div class="graph">
        <div class="demo">
          <h4>
            <strong>Revenue</strong>
          </h4>
          <select name="cars" class="october" id="cars">
            <option value="october">october</option>
          </select>
        </div>

        <img class="img" src="images/image-2__02__01.png" alt="" />
      </div>

      <div class="row padding-top">
        <div class="col-md-4">
          <div class="card">
            <div class="card-body text-center">
              <h5 class="card-title customer">
                <strong>Customers</strong>
              </h5>
              <img class="circle" src="images/image-2__03.png" alt="" />

              <div class="demo1">
                <h3 class="card-text">34,249</h3>
                <h3 class="card-text new">1420</h3>
              </div>

              <div class="demo1">
                <p class="card-text w ">
                  <i class="fas fa-circle"></i>New customers
                </p>
                <p class="card-text  w new">
                  <i class="fas x fa-circle"></i>repeated
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card productcard">
            <div class="card-body text-center">
              <h5 class="card-title products ">
                <bold>Featured Product</bold>
              </h5>
              <i class="far fa-chevron-circle-left"></i>
              <img class=" circle1" src="images/image-2__01.png" alt="" />{" "}
              <i class="far fa-chevron-circle-right"></i>
              <h5 class="card-text">
                <strong>Beats Headphones 2019</strong>
              </h5>
              <p class="card-text Z">$89.00</p>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div
            class="card  productcard Q"
            style={{ backgroundcolor: "#f6f6f6" }}
          >
            <div class="card-body">
              <h5 class="card-title analytics">Sales Analytics</h5>
              <img
                src="data:image/jpeg;base64,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"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
