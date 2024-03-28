"use client";
import React, { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import Navbar from "../navbar/page";
import CustomizableBar from "../CustomizableBar/page";
import Footer from "../Footer/page";
import "./page.css";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isTrue, setIsTrue] = useState(false);
  const [heartStates, setHeartStates] = useState({});
  console.log(isVisible);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        const initialHeartStates = data.reduce((acc, product) => {
          acc[product.id] = false;
          return acc;
        }, {});
        setProducts(data);
        setHeartStates(initialHeartStates);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  const onClickHideFilter = () => {
    setIsVisible(!isVisible);
  };
  const onClickMobileFilterButton = () => {
    setIsVisible(!isVisible);
  };
  const onClickHeart = (id) => {
    setHeartStates((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };
  const onClickDropBox = () => {
    setIsTrue(!isTrue);
  };

  console.log(products);
  const countProducts = products.length;
  const customCardClassName = isVisible ? "visible-card" : "card-hidden";
  return (
    <>
      <Navbar />
      <hr />
      <div>
        <div className="description-card">
          <h1 className="app-main-heading">DISCOVER OUR PRODUCTS</h1>
          <p
            className="app-main-description"
            style={{
              padding: "10px",
              paddingRight: "15px",
              textAlign: "center",
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
            dolor.
          </p>
        </div>
        <div className="main-container">
          <hr />
          <div className="mobile-filter-card">
            <button
              onClick={onClickMobileFilterButton}
              className="filter-button"
              type="button"
            >
              Filter
            </button>
            <button className="mobile-recomended-dropbox">
              Recomended <MdKeyboardArrowDown />
            </button>
          </div>
          <div className="full-screen-filter-card">
            <div className="count-filter-btn-card">
              <p className="product-count">{countProducts} Items</p>
              {isVisible ? (
                <button className="hide-button" onClick={onClickHideFilter}>
                  <IoIosArrowBack style={{ marginRight: "5px" }} />
                  HIDE FILTER
                </button>
              ) : (
                <button className="hide-button" onClick={onClickHideFilter}>
                  <IoIosArrowForward style={{ marginRight: "5px" }} />
                  SHOW FILTER
                </button>
              )}
            </div>
            <div className="dropbox-card">
              <button className="dropbox-button" onClick={onClickDropBox}>
                RECOMENDED <MdKeyboardArrowDown />
              </button>
              {isTrue ? (
                <ul className="filter-dropbox">
                  <li className="dropbox-item recomended">
                    <IoMdCheckmark style={{ marginRight: "25px" }} />
                    RECOMENDED
                  </li>
                  <li className="dropbox-item">NEWEST FIRST</li>
                  <li className="dropbox-item">POPULAR</li>
                  <li className="dropbox-item">PRICE: HIGH TO LOW</li>
                  <li className="dropbox-item">PRICE: LOW TO HIGH</li>
                </ul>
              ) : (
                ""
              )}
            </div>
          </div>
          <hr />
          <div className="product-container">
            <div
              className="custom-card"
              style={{ display: isVisible ? "block" : "none" }}
            >
              <CustomizableBar />
            </div>
            <div className="product-list">
              {products.map((product) => (
                <div key={product.id} className="product-item">
                  <img
                    className="product-image"
                    src={product.image}
                    alt={product.title}
                  />
                  <div className="name-button-card">
                    <h2 className="product-name">{product.title}</h2>
                    <button
                      type="button"
                      className="heart-btn"
                      onClick={() => onClickHeart(product.id)}
                    >
                      <CiHeart
                        size={36}
                        className={heartStates[product.id] ? "red-heart" : ""}
                      />
                    </button>
                  </div>
                  <p className="price-info">
                    Sign in or Create an account to see pricing
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
