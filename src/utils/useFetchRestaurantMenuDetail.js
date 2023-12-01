import { useEffect } from "react";
import { RESTAURANTS_MENU_API } from "./constant";
import * as menuListData from "./restaurantMenuListMockData.json";
// fetching the menu list data from api for particular restaurant with id defined by resturantId and set the data in menuPageData state and menuPageData state after .5 sec
// If the fetching api fails it set local data in menuPageData

export const useFetchRestaurantMenuDetail = (
	resturantId,
	setMenuPageData
) => {
	useEffect(() => {
		fetchData();
	}, []);
	const fetchData = async () => {
		try {
			const menuListApi = await fetch(RESTAURANTS_MENU_API + resturantId);
			const menuListResponse = await menuListApi.json();
			const menuListData = menuListResponse?.data?.data?.cards;
			setTimeout(() => {
				setMenuPageData(menuListData);
			}, 500);
		} catch (error) {
			setTimeout(() => {
				setMenuPageData(menuListData);
			}, 500);
		}
	};
};
