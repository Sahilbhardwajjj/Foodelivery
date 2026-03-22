import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { res } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, time } =
    res?.info;

  return (
    <div className="p-4 m-4 bg-blue-50 rounded-lg w-72 h-[410px]  hover:cursor-pointer">
      <img
        src={CDN_URL + cloudinaryImageId}
        className="rounded-lg w-full h-40 object-cover"
        alt="res-logo"
      />
      <h2 className="text-xl font-extrabold py-2">{name}</h2>
      <h4 className="font-mono py-1">
        {Array.isArray(cuisines) ? cuisines.join(", ") : cuisines}
      </h4>
      <h4 className="font-mono py-1">{avgRating} Stars🌟</h4>
      <h4 className="font-mono">{costForTwo}</h4>
      <h4>{time}</h4>
    </div>
  );
};

//HOC for creating Promoted Label
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
