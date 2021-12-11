import Home from "./Home";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Product from "./Product";
import { Route, Router, Routes } from "react-router";
import Items from "./Items";
import Tabel from "./Tabel";

function Index(props) {
  return (
    <div className="container-fluid">
      <NavBar />

      <div className="row ">
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />

          <Route path="/Items" element={<Items />} />
          <Route path="/Tabel" element={<Tabel />} />
        </Routes>
      </div>
    </div>
  );
}

export default Index;
