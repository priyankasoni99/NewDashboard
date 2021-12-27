import Home from "./Home";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Product from "./Product";
import { Route, Router, Routes } from "react-router";
import Items from "./Items";
import Tabel from "./Tabel";
import Favorite from "./Favorite";
import Inbox from "./Inbox";
import Pricing from "./Pricing";
import Calender from "./calender";
import ToDo from "./To Do";
import Contact from "./contact";
import Invoice from "./Invoice";
import UIelements from "./UIelements";
import Team from "./Team";
import Tabel2 from "./Tabel2";
import Setting from "./Setting";
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
          <Route path="/Favorite" element={<Favorite />} />
          <Route path="/Inbox" element={<Inbox />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/calender" element={<Calender />} />
          <Route path="/To-Do" element={<ToDo />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Invoice" element={<Invoice />} />
          <Route path="/UIelements" element={<UIelements />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Tabel2" element={<Tabel2 />} />
          <Route path="/Setting" element={<Setting />} />
        </Routes>
      </div>
    </div>
  );
}

export default Index;
