import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import "./page.css";
const CustomizableBar = (visible) => {
  const [isIdealForOpen, setIsIdealForOpen] = useState(false);
  const [isFabricOpen, setIsFabricOpen] = useState(false);
  const [isWorkOpen, setIsWorkOpen] = useState(false);
  const [isOccasionOpen, setIsOccasionOpen] = useState(false);
  const [isSegmentOpen, setIsSegmentOpen] = useState(false);
  const [isRawMaterialOpen, setIsRawMaterialOpen] = useState(false);
  const onClickButton = () => {
    setIsIdealForOpen(!isIdealForOpen);
  };
  const onClickFabricButton = () => {
    setIsFabricOpen(!isFabricOpen);
  };
  const onClickWorkButton = () => {
    setIsWorkOpen(!isWorkOpen);
  };

  const onClickOccasionButton = () => {
    setIsOccasionOpen(!isOccasionOpen);
  };
  const onClickSegmentButton = () => {
    setIsSegmentOpen(!isSegmentOpen);
  };
  const onClickRawMaterialButton = () => {
    setIsRawMaterialOpen(!isRawMaterialOpen);
  };
  return (
    <div className="customizble-container">
      <div>
        <input type="checkbox" id="customizble" />
        <label htmlFor="customizble">CUSTOMIZBLE</label>
      </div>
      <div>
        <div className="filter-category-options">
          <div onClick={onClickButton} className="category-button">
            IDEAL FOR{" "}
            {isIdealForOpen ? (
              <MdOutlineKeyboardArrowUp />
            ) : (
              <MdKeyboardArrowDown />
            )}
          </div>
          <p>All</p>
          {isIdealForOpen ? (
            <div>
              <div>
                <input type="checkbox" />
                <label>Men</label>
              </div>
              <div>
                <input id="silk" type="checkbox" />
                <label htmlFor="silk">Women</label>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="filter-category-options">
        <div className="category-button" onClick={onClickFabricButton}>
          Fabric{" "}
          {isFabricOpen ? (
            <MdOutlineKeyboardArrowUp />
          ) : (
            <MdKeyboardArrowDown />
          )}
        </div>
        <p>All</p>
        {isFabricOpen ? (
          <div>
            <div>
              <input type="checkbox" />
              <label>Cutton</label>
            </div>
            <div>
              <input id="silk" type="checkbox" />
              <label htmlFor="silk">Silk</label>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="filter-category-options">
        <div className="category-button" onClick={onClickWorkButton}>
          WORK{" "}
          {isWorkOpen ? <MdOutlineKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </div>
        <p>All</p>
        {isWorkOpen ? (
          <div>
            <div>
              <input type="checkbox" />
              <label>Embroidery</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Printed</label>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="filter-category-options">
        <div className="category-button" onClick={onClickOccasionButton}>
          OCCASION{" "}
          {isOccasionOpen ? (
            <MdOutlineKeyboardArrowUp />
          ) : (
            <MdKeyboardArrowDown />
          )}
        </div>
        <p>All</p>
        {isOccasionOpen ? (
          <div>
            <div>
              <input type="checkbox" />
              <label>Embroidery</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Printed</label>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="filter-category-options">
        <div className="category-button" onClick={onClickSegmentButton}>
          SEGMENT{" "}
          {isSegmentOpen ? (
            <MdOutlineKeyboardArrowUp />
          ) : (
            <MdKeyboardArrowDown />
          )}
        </div>
        <p>All</p>
        {isSegmentOpen ? (
          <div>
            <div>
              <input type="checkbox" />
              <label>Embroidery</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Printed</label>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="filter-category-options material-card">
        <div className="category-button" onClick={onClickRawMaterialButton}>
          RAW MATERIAL{" "}
          {isRawMaterialOpen ? (
            <MdOutlineKeyboardArrowUp />
          ) : (
            <MdKeyboardArrowDown />
          )}
        </div>
        <p>All</p>
        {isRawMaterialOpen ? (
          <div>
            <div>
              <input type="checkbox" />
              <label>Natural</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Synthetic</label>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CustomizableBar;
