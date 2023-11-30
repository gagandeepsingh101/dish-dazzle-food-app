import React, { useState } from "react";
import toast from "react-hot-toast";

// This component is responsible for searching functionality on homepage
const SearchRestaurants = (props) => {
	const {
		defaultRestaurants,
		setRestaurantsList,
		notSearchFiltered,
		setSearchNotFiltered,
	} = props;
	const [searchValue, setSearchValue] = useState(" ");

	// inside handler Search Button we are filtering the list of restaurants according to search value
	const handleSearchButton = (e) => {
		e.preventDefault();
		const searchValueLower = searchValue.toLowerCase();
		const filteredRestaurants = defaultRestaurants.filter((restaurant) => {
			return restaurant?.info?.name?.toLowerCase()?.includes(searchValueLower);
		});

		setRestaurantsList([]);
		setTimeout(() => {

			// if filteredRestaurants is empty then set notSearchFiltered to true
			// else set notSearchFiltered to false
			if (filteredRestaurants.length === 0) {
				setSearchNotFiltered(true);
			} else {
				setSearchNotFiltered(false);
			}
			setRestaurantsList(filteredRestaurants);
			setSearchValue("");
		}, 1000);
	};
	return (
		<div className="w-screen h-1/2 mb-2 mx-auto flex justify-center gap-2">
			<input
				type="search"
				name="search"
				value={searchValue}
				onChange={(e) => {
					setSearchValue(e.target.value);
				}}
				className=" rounded-xl h-full px-3 w-44 focus:outline-none border-2 border-blue-300 md:w-1/3 lg:w-1/4"
			/>
			<button
				disabled={notSearchFiltered}
				type="button"
				onClick={(e) => handleSearchButton(e)}
				className="  disabled:opacity-30 transition-all ease-in-out duration-300 rounded-xl w-20 h-full border-2 border-blue-300  hover:bg-blue-900 hover:text-white">
				Search
			</button>
		</div>
	);
};

export default SearchRestaurants;
