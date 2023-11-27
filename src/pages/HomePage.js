import React, { useState } from "react";
import RestaurantsCards from "../components/RestaurantsCards";
import SearchRestaurants from "../components/SearchRestaurants";
import ShimmerUI from "../components/ShimmerUI";
import { useFetchRestaurants } from "../utils/useFetchRestaurant";
import FilterRestaurants from "../components/FilterRestaurants";
const HomePage = () => {
	const [defaultRestaurants, setDefaultRestaurants] = useState([]);
	const [restaurantsList, setRestaurantsList] = useState([]);
	const [notFiltered, setNotFiltered] = useState(false);
	useFetchRestaurants(setDefaultRestaurants, setRestaurantsList);
	return (
		<div className="h-5/6 md:h-5/6">
			<div className="h-1/6 pt-2 ">
				<SearchRestaurants
					defaultRestaurants={defaultRestaurants}
					setRestaurantsList={setRestaurantsList}></SearchRestaurants>
				<FilterRestaurants
					defaultRestaurants={defaultRestaurants}
					setRestaurantsList={setRestaurantsList}
					setNotFiltered={setNotFiltered}></FilterRestaurants>
			</div>
			<div className=" h-5/6 overflow-y-scroll overflow-x-hidden flex flex-wrap md:pb-6 ">
				{restaurantsList?.length === 0 && notFiltered === false && (
					<ShimmerUI />
				)}
				{restaurantsList.length > 0 && notFiltered===true && (
					<div className="w-full h-1/2 flex justify-center items-center">
						<h1 className="text-3xl font-bold">No Results Found</h1>
					</div>
				)}
				{restaurantsList?.length > 0 && notFiltered === false &&
					restaurantsList?.map((restaurant) => (
						<RestaurantsCards
							key={restaurant?.info?.id}
							restaurant={restaurant?.info}></RestaurantsCards>
					))}
			</div>
		</div>
	);
};
export default HomePage;
