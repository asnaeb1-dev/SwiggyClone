import RestaurantCard from "./RestaurantCard/RestaurantCard";
import restaurantData from "../utils/api.json";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer/Shimmer";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import useConnection from "../hooks/useConnection";

const SWIGGY_API = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.455203&lng=78.3665765&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;

const Body = () => {
  const [originalList, setOriginalList] = useState([]);
  const [resList, setResList] = useState();
  const [currentCity, setCurrentCity] = useState();
  // const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const { data, loading, error } = useFetch(SWIGGY_API);
  const navigate = useNavigate();
  const getTopRated = () => {
    setResList((resList) => resList.filter((res) => res?.info?.avgRating > 4));
  };

  useEffect(() => {
    if (data) {
      setCurrentCity(data?.data?.cards[11]?.card?.card?.citySlug);
      setResList(
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setOriginalList(
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    }

    if (error) {
      console.error("Error fetching data", error);
    }
  }, [data, error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setResList((resList) => {
      const tempResList = [...originalList];
      return tempResList.filter((res) =>
        res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
      );
    });
  };

  const handleRestaurantDetails = (resData) => {
    const restName = resData.info.name.toLowerCase().replaceAll(" ", "-");
    const restLocality = resData.info.locality
      .toLowerCase()
      .replaceAll(" ", "-");
    const restId = resData.info.id;
    const requestId = `${restName}-${restLocality}-rest${restId}`;
    navigate(`/city/${currentCity}/${requestId}`);
  };

  return (
    <div className="main-body">
      <div className="filter-bar" onClick={getTopRated}>
        <button>Top Rated Restaurant</button>
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            type={"text"}
            name="searchBar"
            value={searchText}
            placeholder="Search restaurants..."
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button>Search</button>
        </form>
      </div>
      <div
        style={loading ? { overflow: "hidden" } : {}}
        className="restaurant-container"
      >
        {loading ? (
          <Shimmer />
        ) : (
          resList?.map((restaurant, index) => {
            return (
              <RestaurantCard
                openRestaurantDetails={() =>
                  handleRestaurantDetails(restaurant)
                }
                key={index}
                restaurant={restaurant.info}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

const Loader = ({ loading = false }) => {
  return loading && <Shimmer />;
};

export default Body;
