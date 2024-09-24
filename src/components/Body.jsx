import RestaurantCard from "./RestaurantCard/RestaurantCard";
import restaurantData from "../utils/api.json";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer/Shimmer";

const SWIGGY_API = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.455203&lng=78.3665765&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;

const Body = () => {
	const [originalList, setOriginalList] = useState([]); 
	const [resList, setResList] = useState();
	const [isLoading, setLoading] = useState(false);
	const [searchText, setSearchText] = useState("");

	const getTopRated = () => {
		setResList(resList => resList.filter(res => res?.info?.avgRating > 4))
    }
	
	useEffect(() => {
		setLoading(true);
		(async() => {
			const response = await fetch(SWIGGY_API)
            const data = await response?.json()
            // setResList(data?.data?.cards[4]?.card?.gridElements?.restaurants)
			// console.log(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setResList(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
			setOriginalList(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
			setLoading(false);
		})()
	}, []);

	const handleSubmit = e => {
		e.preventDefault();
		setResList(resList =>{ 
			const tempResList = [...originalList];
			return tempResList.filter(res => res?.info?.name.toLowerCase().includes(searchText.toLowerCase()))
		})
	}

	console.log("body function");

	return (
		<div className='main-body'>
			<div className='filter-bar' onClick={getTopRated}>
				<button>
					Top Rated Restaurant
				</button>
				<form className="search-form" onSubmit={handleSubmit}>
					<input
						type={"text"}
						name="searchBar"
					    value={searchText} 
						placeholder="Search restaurants..."
						onChange={e => setSearchText(e.target.value)}
					/>
					<button>Search</button>
				</form>
			</div>
			<div style={isLoading ? { overflow: "hidden"} : {}} className='restaurant-container'>
				{
					isLoading ? <Shimmer /> :
					resList?.map((restaurant, index) => {
						return (
							<RestaurantCard
								key={restaurant.id}
								restaurant={restaurant.info}
							/>
						)
					})
				}
			</div>
		</div>
	)
}

const Loader = ({ isLoading = false }) => {
	return isLoading && <Shimmer />
}

export default Body;