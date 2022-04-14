import React, { useState } from "react";
import Render from "react-dom";
import { BrowserRouter, Routes, Route, Link, useMatch, useResolvedPath, NavLink } from "react-router-dom";

import Home from "../Pages/Home";
import Pengajar from "../Pages/Pengajar";
import Kegiatan from "../Pages/Kegiatan";
import Tentangkami from "../Pages/Tentangkami";

import Logo from "../Images/Logo-outline.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className=" bg-blue-900">
        <div className="flex flex-col md:flex-row justify-between py-4 text-gray-300 px-4 md:px-12 lg:px-16">
          <div className=" justify-between flex items-center Logo md:text-md font-medium text-white">
            <div className="flex items-center">
              <img src={Logo} class="w-10 md:w-12" />
              <p className="ml-2 font-DM small-bold md:base-bold">Naatiq Institute Arrabiyah</p>
            </div>
            <button onClick={() => setOpen(!open)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 md:hidden cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path className={`${open ? "hidden" : "block"}`} stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                <path className={`${!open ? "hidden" : "block"}`} stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className={`${open ? "block" : "hidden"} md:block md:static absolute top-[69px] left-0 w-full md:w-fit z-10`}>
            <nav className="flex flex-col md:flex-row bg-blue-900 pl-4 font-DM  ">
              <NavLink activeClassName="active" to="/" className="py-2 small-regular lg:base-regular md:mx-2 hover:text-yellow-400 cursor-pointer">
                Home
              </NavLink>
              <NavLink to="pengajar" className="py-2 small-regular lg:base-regular md:mx-2 hover:text-yellow-400 cursor-pointer">
                Pengajar
              </NavLink>
              <NavLink to="kegiatan" className="py-2 small-regular lg:base-regular md:mx-2 hover:text-yellow-400 cursor-pointer">
                Kegiatan
              </NavLink>
              <NavLink to="tentang-kami" className="py-2 small-regular lg:base-regular md:mx-2 hover:text-yellow-400 cursor-pointer">
                Tentang Kami
              </NavLink>
            </nav>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="pengajar" element={<Pengajar />}></Route>
        <Route path="kegiatan" element={<Kegiatan />}></Route>
        <Route path="tentang-kami" element={<Tentangkami />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Navbar;
