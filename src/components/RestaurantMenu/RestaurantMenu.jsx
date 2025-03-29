import React, { useEffect, useState } from "react";
import Shimmer from "../Shimmer/Shimmer";
import { useParams } from "react-router-dom";
import useGetRestaurantMenu from "../../hooks/useGetRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { restaurantDetails, restaurantMenu, error, loading } =
    useGetRestaurantMenu(resId);
  if (error) return null;
  return loading ? (
    <Shimmer />
  ) : (
    <div className="res-menu-main">
      <h1 className="restaurant-title">{restaurantDetails.name}</h1>
      <div>
        <img
          width={"50%"}
          height={180}
          alt="image-pic"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurantDetails.cloudinaryImageId}`}
        />
      </div>
      <h2>Menu</h2>
      <ul>
        {restaurantMenu?.itemCards?.map((menuItem, index) => {
          const { name, isVeg, description, defaultPrice, imageId } =
            menuItem?.card?.info;
          return (
            <div>
              {name} - Rs. {defaultPrice ? defaultPrice / 100 : 0}
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
