import { useEffect } from "react";
import { RESTAURANTS_MENU_API } from "./constant";

export default useFetchRestaurantMenuDetail = (
	resturantId,
	setMenuPageData
) => {
	useEffect(() => {
		fetchData();
	}, []);
	const fetchData = async () => {
		try {
			// setTimeout(async() => {
			const menuListApi = await fetch(RESTAURANTS_MENU_API + resturantId);
			const menuListResponse = await menuListApi.json();
			const menuListData = menuListResponse.data.cards;
			setMenuPageData(menuListData);
			// }, 1000);
		} catch (error) {
			console.log(error);
		}
	};
};
