import { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantCategory = (props) => {
  const { data, showItems, setShowIndex } = props;

  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="w-full max-w-7xl mx-auto bg-blue-50 p-4 my-6 shadow-xl rounded-2xl flex flex-col">
      <div
        className="flex items-center justify-between mb-2 cursor-pointer"
        onClick={handleClick}
      >
        <span className="text-xl font-bold text-blue-800">
          {data.title}{" "}
          <span className="text-base text-gray-500">
            ({data?.itemCards?.length || data?.categories?.length})
          </span>
        </span>
        <span className="text-3xl text-blue-400">˅</span>
      </div>

      <div className="w-full">{showItems && <ItemsList items={data} />}</div>
    </div>
  );
};

export default RestaurantCategory;
