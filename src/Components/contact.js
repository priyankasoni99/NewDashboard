import React from "react";

export default function Contact() {
  return (
    <div className="col-md-10 tabelpage">
      <div class="d-flex  ">
        <div class=" me-auto p-2 bd-highlight">
          <h2 className="Mainheading">
            {" "}
            <strong>To-Do-List</strong>
          </h2>
        </div>
        <div class=" p-2  Mainheading ">
          <button className="btn-primary task mt-3 ">add new contact</button>
        </div>
      </div>
      <div class="row row-cols-1 row-cols-md-3 g-4 mb-3">
        <div class="col">
          <div class="card">
            <img
              src="images/Screenshot_20211216-152929__01.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title text-center">arpit sharma</h5>
              <p class="card-text text-center" style={{ color: "grey" }}>
                this is a demo ,please check it
              </p>
              <button className=" btn-outline btn-left ">message</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src="images/Screenshot_20211216-152929__02.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title text-center">sumit pal</h5>
              <p class="card-text text-center" style={{ color: "grey" }}>
                this is a demo ,please check it
              </p>
              <button className=" btn-outline btn-left ">message</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src="images/Screenshot_20211216-152929__03.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title text-center">aman sharma</h5>
              <p class="card-text text-center" style={{ color: "grey" }}>
                this is a demo ,please check it
              </p>
              <button className=" btn-outline btn-left ">message</button>
            </div>
          </div>
        </div>
      </div>

      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card">
            <img
              src="images/Screenshot_20211216-152929__04.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title text-center">ayush soni</h5>
              <p class="card-text text-center" style={{ color: "grey" }}>
                this is a demo ,please check it
              </p>
              <button className=" btn-outline btn-left ">message</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src="images/Screenshot_20211216-152929__05.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title text-center">vineet sharma</h5>
              <p class="card-text text-center" style={{ color: "grey" }}>
                this is a demo ,please check it
              </p>
              <button className=" btn-outline btn-left ">message</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src="images/Screenshot_20211216-152929__06.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title text-center">priyanshu pareek</h5>
              <p class="card-text text-center" style={{ color: "grey" }}>
                this is a demo ,please check it
              </p>
              <button className="  btn-outline btn-left ">message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
