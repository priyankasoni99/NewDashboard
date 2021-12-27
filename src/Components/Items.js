export default function Items() {
  return (
    <div className="col-md-10 bg-grey">
      <h1 className="Mainheading">Products</h1>

      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-md-6 text-box">
                <h5 className="sep">september 12-22</h5>
                <h6 className="sum">
                  Enjoy free home <br />
                  delivery in this summer
                </h6>
                <p>designer dressess- pick from ready designer dress</p>
                <button className="btn orangebtn btn-lg">get started</button>
              </div>
              <div className="col-md-6 cam">
                <img
                  className="c0"
                  src="/images/kisspng-canon-eos-m50-canon-ef-lens-mount-mirrorless-inter-5b1fe6f9dfc934.0281771815288174019166.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>

        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <div className="row at-items">
        <div class="card col-md-4">
          <img
            class="card-img-top"
            src="images/image-3__01.png"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Apple Watch Series 4</h5>
            <h6 class="card-text">
              <i className="far fa-heart float-end"></i>
              <p className="card-text no">$120.00</p>
              <i className="fa fa-star"> </i>
              <i className="fa fa-star"> </i>
              <i className="fa fa-star"> </i>
              <i className="fa fa-star"> </i>
              <i className="fa fa-star"> </i>
            </h6>
            <a href="#" class="btn greybtn">
              edit product
            </a>
          </div>
        </div>

        <div class="card col-md-4">
          <img
            class="card-img-top"
            src="images/image-3__02.png"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Girl Handy Bag</h5>
            <h6 class="card-text">
              <i className="far fa-heart float-end"></i>
              <p className="card-text no">$45.50</p>
              <i className="fa fa-star"> </i>
              <i className="fa fa-star"> </i>
              <i className="fa fa-star"> </i>
              <i className="fa fa-star"> </i>
              <i className="fa fa-star"> </i>
            </h6>
            <a href="#" class="btn greybtn">
              edit product
            </a>
          </div>
        </div>

        <div class="card col-md-4">
          <img
            class="card-img-top"
            src="images/image-3__03.png"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Beats Headphone</h5>
            <h6 class="card-text">
              <i className="far fa-heart float-end"></i>
              <p className="card-text no">$ 59.00</p>
              <i className="fa fa-star"> </i>
              <i className="fa fa-star"> </i>
              <i className="fa fa-star"> </i>
              <i className="fa fa-star"> </i>
              <i className="fa fa-star"> </i>
            </h6>
            <a href="#" class="btn greybtn">
              edit product
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
