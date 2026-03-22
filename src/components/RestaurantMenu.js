import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const { resID } = useParams();
  const resMenu = useRestaurantMenu(resID);

  const { name, costForTwoMessage, avgRating, sla, cuisines } =
    resMenu?.data?.cards[2]?.card?.card?.info || {};
  const { itemCards, categories } =
    resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || {};

  let OnlyCatergories =
    resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
        c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );

  if (!categories && !itemCards) {
    return <Shimmer />;
  }

  return (
    <div className="res-menu-wrapper">
      <div className="p-4 m-4 flex flex-col justify-center items-center  bg-blue-100 rounded-2xl">
        <h1 className="p-2 text-4xl font-extrabold text-blue-700 tracking-wide drop-shadow-lg text-center">
          {name}
        </h1>
        <div className="flex flex-col justify-start items-center">
          <div className="font-mono text-green-600 font-extrabold">
            ★ {avgRating} Stars
          </div>

          <div className="font-mono">{costForTwoMessage}</div>

          <div className="font-mono">{cuisines ? cuisines.join(", ") : ""}</div>

          <div className="font-mono">{sla?.deliveryTime / 100} minutes</div>
        </div>
      </div>

      <div className="flex flex-col justify-between items-center w-[1000px] mx-auto p-3 my-2">
        {OnlyCatergories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.categoryId}
            data={category?.card?.card}
            showItems={index === showIndex}
            setShowIndex={() => {
              setShowIndex(index === showIndex ? null : index);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
