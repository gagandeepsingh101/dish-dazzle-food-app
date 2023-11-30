import React, { useState } from "react";
import RestaurantsCards from "../components/RestaurantsCards";
import SearchRestaurants from "../components/SearchRestaurants";
import ShimmerUI from "../components/ShimmerUI";
import { useFetchRestaurants } from "../utils/useFetchRestaurant";
import FilterRestaurants from "../components/FilterRestaurants";

// Render Homepage Page Component
const HomePage = () => {
	// create three state variable one for actual restaurants list,  for default restaurants list and at last third for finding if restaurant is filtered or not
	const [defaultRestaurants, setDefaultRestaurants] = useState([]);
	const [restaurantsList, setRestaurantsList] = useState([]);
	const [notFiltered, setNotFiltered] = useState(false);

	// fetch restaurants data and set it in defaultRestaurants state and restaurantsList state
	useFetchRestaurants(setDefaultRestaurants, setRestaurantsList);
	return (
		<div className="h-[80vh]">
			<div className="h-1/6 pt-2 ">
				{
					// Render Filter and render search component
				}
				<SearchRestaurants
					notSearchFiltered={notFiltered}
					setSearchNotFiltered={setNotFiltered}
					defaultRestaurants={defaultRestaurants}
					setRestaurantsList={setRestaurantsList}></SearchRestaurants>
				<FilterRestaurants
					defaultRestaurants={defaultRestaurants}
					setRestaurantsList={setRestaurantsList}
					notFiltered={notFiltered}
					setNotFiltered={setNotFiltered}></FilterRestaurants>
			</div>

			<div className=" h-5/6 overflow-y-scroll overflow-x-hidden flex flex-wrap md:pb-6 scrollbar-hide">

				{
					// show shimmer Ui while fetching data is not completing 
					restaurantsList?.length === 0 && notFiltered === false && (
						<ShimmerUI uiType={"ResturantCardList"} />
					)
				}
				{
					// show no result found if filtered list is empty
					restaurantsList?.length === 0 && notFiltered === true && (
					<div className="w-full h-full flex flex-col item-center gap-4 pt-4">
						<h1 className="text-xl text-center md:text-3xl">
							No Resturants Found
						</h1>
						<button
							className="text-lg py-1 px-2  bg-white border border-blue-900 text-blue-900 transition-all ease-in-out duration-300 hover:bg-blue-900 hover:text-white  rounded-xl md:w-4/12 mx-auto md:p-2 md:text-2xl"
							onClick={() => {
								setNotFiltered(false);
								setTimeout(() => {
									setRestaurantsList(defaultRestaurants);
								}, 1000);
							}}>
							Go To Restaurant List
						</button>
					</div>
				)}
				{
					// show resturant card list
					restaurantsList?.length > 0 &&
					notFiltered === false &&
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
