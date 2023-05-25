import "./UpperContainer.css";
function Earning({ className, title, earning }) {
  return (
    <div className={className}>
      <h6 className="earningTitle">{title}</h6>
      <h2 className="earningReferrals">{earning}</h2>
    </div>
  );
}

const UpperContainer = () => {
  return (
    <div className="container">
      <div className="checkBalance">
        <Earning
          className="referralsEarning"
          title="Referral Earning"
          earning="₹ 2,500"
        />
        <Earning
          className="totalReferral"
          title="Total Referrals"
          earning="7"
        />
        <Earning
          className="walletBalance"
          title="Wallet Balance"
          earning="₹ 500"
        />
        <div className="withDrawBalance">
          <button>Withdraw Balance</button>
        </div>
      </div>
      <div className="referralCode">
        <h2>Your Referral Code</h2>
        <div>
          <h3>EDCH54</h3>{" "}
        </div>
      </div>
    </div>
  );
};

export default UpperContainer;
