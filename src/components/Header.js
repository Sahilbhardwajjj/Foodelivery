import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="flex justify-between m-1.5  bg-blue-200 rounded-xl px-3">
      <div>
        <Link to="/">
          <img className="w-20 p-1 rounded-full " src={LOGO_URL} />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex justify-between space-x-4 ">
          <li>OnlineStatus: {onlineStatus ? "🟢" : "🔴"} </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className=""
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="pr-3 font-bold ">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
