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
        <div style={{ marginTop: "15px" }}>
          <GiHamburgerMenu size={30} />
          <TbBrandNextjs size={30} style={{ marginLeft: "15px" }} />
        </div>
        <h1>LOGO</h1>
        <div style={{ marginTop: "15px" }}>
          <CiSearch size={30} style={{ marginLeft: "15px" }} />
          <FaRegHeart size={30} style={{ marginLeft: "15px" }} />
          <HiOutlineShoppingBag size={30} style={{ marginLeft: "15px" }} />
        </div>
      </div>
      <div className="fullscreen-navbar">
        <TbBrandNextjs size={34} style={{ marginTop: "20px" }} />
        <h1>LOGO</h1>
        <div>
          <CiSearch size={24} style={{ marginTop: "20px" }} />
          <FaRegHeart
            size={24}
            style={{ marginTop: "20px", marginLeft: "15px" }}
          />
          <HiOutlineShoppingBag
            size={24}
            style={{ marginTop: "20px", marginLeft: "15px" }}
          />
          <CgProfile
            size={24}
            style={{ marginTop: "20px", marginLeft: "15px" }}
          />
          <select
            style={{ marginLeft: "15px", marginTop: "10px" }}
            className="language-dropbox"
          >
            <option>ENG</option>
            <option>HIN</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
