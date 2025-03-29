import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import { getRestaurantMenuLink } from "../utils/util";

const useGetRestaurantMenu = (restaurantId) => {
  const restId = restaurantId?.split("-");
  const id = String(restId[restId.length - 1]);

  const [restaurantMenu, setRestaurantMenu] = useState([]);
  const [restaurantDetails, setRestaurantDetails] = useState({});
  const { data, error, loading } = useFetch(getRestaurantMenuLink(id));

  useEffect(() => {
    if (loading || error || !data) return;
    setRestaurantDetails(data?.data?.cards[2]?.card?.card?.info);
    setRestaurantMenu(
      data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card
    );
  }, [data, error, loading]);
  return { restaurantMenu, restaurantDetails, error, loading };
};

export default useGetRestaurantMenu;
