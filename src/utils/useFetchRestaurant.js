import { useEffect } from "react";
import { RESTAURANTS_API } from "./constant";
import * as restaurants from "./restaurantCardMockData.json";

// Fetching the restaurant list data from api and set the data in defaultRestaurants state and restaurantsList state after .5 sec
// If the fetching api fails it set local data in defaultRestaurants state and restaurantsList state
export const useFetchRestaurants = (
	setDefaultRestaurants,
	setRestaurantsList
) => {
	useEffect(() => {
		fetchData();
	}, []);
	const fetchData = async () => {
		try {
			const response = await fetch(RESTAURANTS_API);
			const data = await response.json();
			setTimeout(() => {
				setDefaultRestaurants(
					data?.data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
						?.restaurants
				);
				setRestaurantsList(
					data?.data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
						?.restaurants
				);
			}, 500);
		} catch (error) {
			setTimeout(() => {
				setDefaultRestaurants(restaurants);
				setRestaurantsList(restaurants);
			}, 500);
		}
	};
};
