import React from "react";

export default function ToDo() {
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
          <button className="btn-primary task mt-3 ">add new task</button>
        </div>
      </div>
      <div class="d-flex margin bg-light mb-3">
        <div class=" p-2 bd-highlight">
          {" "}
          <i class="far   padding  fa-square" style={{ color: "#efefef" }}></i>
        </div>
        <div class="me-auto p-2 bd-highlight">meeting with ceo</div>
        <div class="p-2 ">
          {" "}
          <i className="fa fa-star" style={{ color: "#efefef" }}>
            {" "}
          </i>
        </div>
        <div class="p-2 ">
          {" "}
          <i class="fal fa-times-circle"></i>
        </div>
      </div>
      <div class="d-flex margin bg-light mb-3">
        <div class=" p-2 bd-highlight">
          {" "}
          <i class="far   padding  fa-square" style={{ color: "#efefef" }}></i>
        </div>
        <div class="me-auto p-2 bd-highlight">pick up kids from school</div>
        <div class="p-2">
          {" "}
          <i className="fa fa-star"> </i>
        </div>
        <div class="p-2 ">
          {" "}
          <i class="fal fa-times-circle"></i>
        </div>
      </div>

      <div class="d-flex margin  bg-primary mb-3" style={{ color: "#fff" }}>
        <div class=" p-2">
          {" "}
          <i class="far  padding fa-check-square" style={{ color: "#fff" }}></i>
        </div>
        <div class="me-auto p-2">shopping with brother</div>
        <div class="p-2">
          {" "}
          <i class="far padding  fa-trash-alt" style={{ color: "#fff" }}></i>
        </div>
      </div>

      <div class="d-flex margin  bg-light mb-3">
        <div class=" p-2 bd-highlight">
          {" "}
          <i class="far   padding  fa-square" style={{ color: "#efefef" }}></i>
        </div>
        <div class="me-auto p-2 bd-highlight">update file</div>
        <div class="p-2 ">
          {" "}
          <i className="fa fa-star" style={{ color: "#efefef" }}>
            {" "}
          </i>
        </div>
        <div class="p-2 ">
          {" "}
          <i class="fal fa-times-circle"></i>
        </div>
      </div>

      <div class="d-flex margin  bg-light mb-3">
        <div class=" p-2 bd-highlight">
          {" "}
          <i class="far   padding  fa-square" style={{ color: "#efefef" }}></i>
        </div>
        <div class="me-auto p-2 bd-highlight">go for movie</div>
        <div class="p-2 bg-light">
          {" "}
          <i className="fa fa-star" style={{ color: "#efefef" }}>
            {" "}
          </i>
        </div>
        <div class="p-2 ">
          {" "}
          <i class="fal fa-times-circle"></i>
        </div>
      </div>

      <div class="d-flex margin bg-light mb-3">
        <div class=" p-2 bd-highlight">
          {" "}
          <i class="far   padding  fa-square" style={{ color: "#efefef" }}></i>
        </div>
        <div class="me-auto p-2 bd-highlight">dinner date</div>
        <div class="p-2">
          {" "}
          <i className="fa fa-star"> </i>
        </div>
        <div class="p-2">
          {" "}
          <i class="fal fa-times-circle"></i>
        </div>
      </div>
      <div class="d-flex margin bg-light mb-3">
        <div class=" p-2 bd-highlight">
          {" "}
          <i class="far   padding  fa-square" style={{ color: "#efefef" }}></i>
        </div>
        <div class="me-auto p-2 bd-highlight">dinner date</div>
        <div class="p-2">
          {" "}
          <i className="fa fa-star" style={{ color: "#efefef" }}>
            {" "}
          </i>
        </div>
        <div class="p-2">
          {" "}
          <i class="fal fa-times-circle"></i>
        </div>
      </div>
    </div>
  );
}
