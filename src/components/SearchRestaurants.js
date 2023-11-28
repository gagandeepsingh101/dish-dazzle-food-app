import React, { useState } from "react";

const SearchRestaurants = (props) => {
	const { defaultRestaurants, setRestaurantsList } = props;
	const [searchValue, setSearchValue] = useState(" ");
	const [notSearchFiltered, setSearchNotFiltered] = useState(false);
	const handleSearchButton = (e) => {
		e.preventDefault();
		const searchValueLower = searchValue.toLowerCase();
		const filteredRestaurants = defaultRestaurants.filter((restaurant) => {
			return restaurant?.info?.name?.toLowerCase()?.includes(searchValueLower);
		});

		setRestaurantsList([]);
		setTimeout(() => {
			if (filteredRestaurants.length === 0) {
				setSearchNotFiltered(true);
				alert("Not Found");
				setRestaurantsList(defaultRestaurants);
			} else {
				setRestaurantsList(filteredRestaurants);
				setSearchNotFiltered(false);
			}
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
				type="button"
				onClick={(e) => handleSearchButton(e)}
				className=" rounded-xl w-20 h-full border-2 border-blue-300  hover:bg-blue-900 hover:text-white">
				Search
			</button>
		</div>
	);
};

export default SearchRestaurants;
