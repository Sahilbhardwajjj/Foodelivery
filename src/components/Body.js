import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useBody from "../utils/useBody";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  //Custom Hook -> Fetching Data for Body
  // Always use res for filteration and put it in filteredRes and use filteredRes while final mapping
  const { res, setRes, filteredRes, setFilteredRes } = useBody();

  //Custom Hook -> Checking Online Status
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1>Oops!! No Internet . Please Connect to internet </h1>;

  const { loggedInUser, setUserName } = useContext(UserContext);

  //JSX Code
  return res.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex justify space-x-4 my-4 px-2 justify-center">
        {/* Search Text Functionality  */}
        <div className="flex space-x-4 ">
          <div className="w-full max-w-sm min-w-[200px]">
            <div className="relative">
              <input
                className="peer w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
              />
              <label className="absolute cursor-text bg-white px-1 left-2.5 top-2.5 text-slate-400 text-sm transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-slate-400 peer-focus:scale-90">
                Name
              </label>
            </div>
          </div>

          <button
            className="px-8 py-2 rounded-full relative bg-slate-700 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600"
            onClick={() => {
              const updatedRestaurant = res.filter((restaurant) => {
                return restaurant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRes(updatedRestaurant);
            }}
          >
            <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
            <span className="relative z-20">Search</span>
          </button>
        </div>

        {/* Button for Top Rated Restaurant */}
        <button
          className="px-8 py-2 rounded-full relative bg-slate-700 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600"
          onClick={() => {
            const filteredList = res.filter(
              (restaurant) => restaurant.info.avgRating > 4.5
            );
            setFilteredRes(filteredList);
          }}
        >
          <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
          <span className="relative z-20">Top Rated Restaurants</span>
        </button>

        <div className="relative">
          <input
            className="peer w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <label className="absolute cursor-text bg-white px-1 left-2.5 top-2.5 text-slate-400 text-sm transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-slate-400 peer-focus:scale-90">
            UserName
          </label>
        </div>
      </div>

      {/* Filtered List  */}
      <div className="flex flex-wrap justify-center">
        {filteredRes.map((restaurant) => {
          const Card = restaurant.info.promoted
            ? withPromotedLabel(RestaurantCard)
            : RestaurantCard;
          return (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant?.info?.id}
            >
              <Card res={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
