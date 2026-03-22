import { useState, useEffect } from "react";
import { BODY_URL } from "./constants";

const useBody = () => {
  //UseState Hook declaration
  const [res, setRes] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);

  // Fetching Data
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(BODY_URL);
    const json = await data.json();
    setRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return { res, filteredRes, setFilteredRes, setRes };
};

export default useBody;
