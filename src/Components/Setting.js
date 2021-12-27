import React from "react";

export default function Setting() {
  return (
    <div className="col-md-10 tabelpage">
      <div>
        <h2 className="Mainheading">
          <strong>General Setting</strong>
        </h2>
      </div>
      <div className="bg-light maindiv">
        <i className="fas fa-camera "></i>

        <p className="mt-2 login" style={{ color: "blue" }}>
          Update Login
        </p>
        <div className="row formrow d-flex">
          <div className="col-md-6">
            <form className="formmargin" action="/action_page.php">
              <label className="labelsize" for="fname">
                Site Name
              </label>
              <br />
              <input
                className="textarea1"
                type="text"
                id="fname"
                name="fname"
                placeholder="bright web"
              />
              <br />
              <label className="labelsize" for="lname">
                SEO title
              </label>
              <br />
              <input
                className="textarea1"
                type="text"
                id="lname"
                name="lname"
                placeholder="Bright with hybrid dashboard"
              />
              <br />
              <label className="labelsize" for="fname">
                SEO Keywords
              </label>
              <br />
              <input
                className="textarea1"
                type="text"
                id="fname"
                name="fname"
                placeholder="CEO"
              />

              <br />
            </form>
          </div>
          <div className="col-md-6">
            <form className="formleft" action="/action_page.php">
              <label className="labelsize" for="fname">
                copy right
              </label>
              <br />
              <input
                className="textarea1"
                type="text"
                id="fname"
                name="fname"
                placeholder="all rights reserved"
              />
              <br />
              <label className="labelsize" for="fname">
                SEO Description
              </label>
              <br />
              <textarea className="textarea">
                Bright with hybrid dashboard
              </textarea>
            </form>
          </div>
        </div>
        <button className="btn-primary btn-lg center">save</button>
      </div>
    </div>
  );
}
