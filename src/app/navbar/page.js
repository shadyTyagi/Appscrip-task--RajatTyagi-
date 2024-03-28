import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import "./page.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-mobile">
        <div>
          <GiHamburgerMenu />
          <TbBrandNextjs />
        </div>
        <h1>LOGO</h1>
        <div>
          <CiSearch />
          <FaRegHeart />
          <HiOutlineShoppingBag />
        </div>
      </div>
      <div className="fullscreen-navbar">
        <TbBrandNextjs />
        <h1>LOGO</h1>
        <div>
          <CiSearch />
          <FaRegHeart />
          <HiOutlineShoppingBag />
          <CgProfile />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
