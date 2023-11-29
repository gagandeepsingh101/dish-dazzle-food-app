import { useEffect } from "react";
import { RESTAURANTS_MENU_API } from "./constant";
import * as menuListData from "./restaurantMenuListMockData.json";

export default useFetchRestaurantMenuDetail = (
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
			console.log(menuListData);
			setTimeout(() => {
				setMenuPageData(menuListData);
			}, 1000);
		} catch (error) {
			setTimeout(() => {
				setMenuPageData(menuListData);
			}, 1000);
		}
	};
};
