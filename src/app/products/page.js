"use client";
import React, { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import Navbar from "../navbar/page";
import CustomizableBar from "../CustomizableBar/page";
import "./page.css";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  //   const [isTrue, setIsTrue] = useState(false);
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

  console.log(products);
  const countProducts = products.length;
  const customCardClassName = isVisible ? "visible-card" : "card-hidden";
  //   const isTrueHeart = isTrue ? "red-heart" : "";
  return (
    <>
      <Navbar />
      <hr />
      <div>
        <div className="description-card">
          <h1>DISCOVER OUR PRODUCTS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
            dolor.
          </p>
        </div>
        <div className="mobile-filter-card">
          <button
            onClick={onClickMobileFilterButton}
            className="filter-button"
            type="button"
          >
            Filter
          </button>
          <p>Recomended</p>
        </div>
        <div className="full-screen-filter-card">
          <div>
            <p>{countProducts} Items</p>
            <button className="hide-button" onClick={onClickHideFilter}>
              HIDE FILTER
            </button>
          </div>
          <p>Recomended</p>
        </div>
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
    </>
  );
};

export default Product;
