import { useEffect } from "react";
import { RESTAURANTS_API } from "./constant";
import * as restaurants from "./restaurantCardMockData.json";
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
			console.log();
			setTimeout(() => {
				setDefaultRestaurants(
					data?.data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
						?.restaurants
				);
				setRestaurantsList(
					data?.data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
						?.restaurants
				);
			}, 1000);
		} catch (error) {
			setTimeout(() => {
				setDefaultRestaurants(restaurants);
				setRestaurantsList(restaurants);
			}, 1000);
		}
	};
};
