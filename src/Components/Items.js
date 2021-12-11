export default function Items() {
  return (
    <div className="main">
      <div className="col-md-10">
        <h1>Products</h1>

        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-md-6 g">
                  <h4 className="sep">september 12-22</h4>
                  <h1 className="sum">
                    <strong>
                      Enjoy free home <br />
                      delivery in this summer
                    </strong>
                  </h1>
                  <h4 className="pick">
                    designer dressess- pick from ready designer dress
                  </h4>
                  <button className="btn1 btn-lg">get started</button>
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

        {/* <!-- nextsection --> */}
        <div className="row at-items">
          {/* <div className="card col-md-4">
            <div className="card-body">
              <img className="fullwidth" src="images/image-3__01.png" alt="" />
              <h5 className="card-title">Apple Watch Series 4</h5>{" "}
              <i className="far fa-heart"></i>
              <p className="card-text">$ 120.00</p>
              <button>edit product</button>
            </div>
          </div> */}
          <div class="card col-md-4">
            <img
              class="card-img-top"
              src="images/image-3__01.png"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div className="card col-md-4">
            <div className="card-body">
              <img src="images/image-3__02.png" alt="" />
              <h5 className="card-title">
                Girl Handy Bag Girl Handy Bag Girl Handy Bag
              </h5>

              <i className="far fa-heart"></i>
              <p className="card-text">$120.00</p>
              <button>edit product</button>
            </div>
          </div>
          <div className="card col-md-4">
            <div className="card-body">
              <img src="images/image-3__03.png" alt="" />
              <h5 className="card-title">Beats Headphone</h5>

              <i className="far fa-heart"></i>
              <p className="card-text">$ 59.00</p>
              <button>edit product</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
