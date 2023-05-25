import React, { useState } from "react";
import profileImag from "../../images/profile-user.png";
import tuteDude from "../../images/sds.png";
import dropDown from "../../images/down-arrow-of-angle.png";
import "./Header.css";
export function Buttons({
  title,
  profileImage,
  fontSize,
  color,
  id,
  dropDownImage,
}) {
  const [showDropDownList, setShowDropDownList] = useState(false);

  const handleButtonClick = () => {
    showDropDownList ? setShowDropDownList(false) : setShowDropDownList(true);
  };
  return (
    <div>
      <button
        id={id}
        className="buttons"
        style={{ fontSize: fontSize, color: color }}
      >
        {profileImage ? (
          <img className="profileImage" src={profileImage} />
        ) : null}
        {title}
        {dropDownImage ? (
          <img
            className="dropDownImage"
            src={dropDownImage}
            onClick={() => handleButtonClick()}
          />
        ) : null}
      </button>
      {showDropDownList ? (
        <div className="buttonClick">
          <button>My Assigment</button>
          <button>Chat with Mentor</button>
        </div>
      ) : null}
    </div>
  );
}

export function Header() {
  return (
    <div>
      <div className="header">
        <img className="logImage" src={tuteDude} alt="" />
        <div className="headerButtons">
          <Buttons
            id="headerButton-1"
            title="My Assignment"
            color="#800080"
            fontSize={15}
          />
          <Buttons
            id="headerButton-2"
            title="Chat with Mentor"
            color="#800080"
            fontSize={15}
          />
          <Buttons
            id="headerButton-3"
            profileImage={profileImag}
            dropDownImage={dropDown}
            title="ProfileName"
            color="#800080"
            fontSize={15}
          />
        </div>
      </div>
      <div className="referAndEarn">UI/Ux {">"} Refer & Earn</div>
    </div>
  );
}
