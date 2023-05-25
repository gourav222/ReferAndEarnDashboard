import React from "react";
import inviteFrnd from "../../images/inviteFrnd.png";
import rupee from "../../images/rupee.png";
import cover from "../../images/cover.png";
import tag from "../../images/tag.png";
import percent from "../../images/percent.png";
import "./LowerContainer.css"
function HowDoesItWork({ image, title, description }) {
  return (
    <div className="description">
      <img src={image} alt="" />
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

function LowerContainer() {
  return (
    <div className="lowerContainer">
      <h2>How does it work?</h2>
      <div className="howDoesItWork">
        <HowDoesItWork
          image={inviteFrnd}
          title="Invite your Friends"
          description="Share the link tutedude.com with your friends"
        />
        <HowDoesItWork
          image={rupee}
          title="You get ₹ 200 as referral money"
          description="On total purchase the friend makes, into your wallet"
        />
        <HowDoesItWork
          image={cover}
          title="Transfer money from wallet"
          description="When the wallet balance reaches ₹200 or more, you can withdraw it"
        />
        <HowDoesItWork
          image={tag}
          title="Friend purchases any course"
          description="Using your REFERRAL CODE in the payments page"
        />
        <HowDoesItWork
          image={percent}
          title="Your Friendgets ₹ 200 Off"
          description="On his overall fee on successful purchase using your referral code"
        />
      </div>
    </div>
  );
}

export default LowerContainer;
