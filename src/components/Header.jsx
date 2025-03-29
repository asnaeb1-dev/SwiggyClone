import { useState } from "react";
import { APP_LOGO_URL, CART_LOGO_URL } from "../utils/util";
import { Link } from "react-router-dom";
import useConnection from "../hooks/useConnection";
import { MdSignalWifiConnectedNoInternet4 as InternetIcon } from "react-icons/md";

const Header = () => {
  const [buttonName, setButtonName] = useState("Login");
  const isConnected = useConnection();
  return (
    <nav className="nav-bar-main">
      <div className="content">
        <img width="30" height="30" src={APP_LOGO_URL} alt="appicon" />
      </div>
      <ul className="content">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About Us</Link>
        <Link to={"/contactus"}>Contact us</Link>
      </ul>
      <div className="content">
        {!isConnected && (
          <span title="No internet connection!">
            <InternetIcon size={25} />
          </span>
        )}
        <button role="cart" className="cart-btn">
          <img
            width="24"
            height="24"
            src={CART_LOGO_URL}
            alt="shopping-cart-loaded--v1"
          />
        </button>
        <button
          onClick={() =>
            setButtonName(buttonName === "Logout" ? "Login" : "Logout")
          }
        >
          {buttonName}
        </button>
      </div>
    </nav>
  );
};

export default Header;
