import React from "react";

// This component is responsible for filtering the list of restaurants according the filter basis
const FilterRestaurants = (props) => {
	const { defaultRestaurants, setRestaurantsList, setNotFiltered ,notFiltered} = props;

	//this is used to get filtered list of restaurants according to filter basis and set the state variable (restaurantsList) with filtered list variable 
	const filterTopRatingRestaurants = (e, filterBasis) => {
		e.preventDefault();
		let filteredRestaurants = [];
		filteredRestaurants = defaultRestaurants.filter((restaurant) => {
			switch (filterBasis) {
				case "rating":
					return restaurant?.info?.avgRating > 4.5;
				case "time":
					return restaurant?.info?.sla?.deliveryTime < 25;
				case "cost":
					return (
						Number(restaurant?.info?.costForTwo.split(" ")[0].split("₹")[1]) <
						250
					);
				case "veg":
					return restaurant?.info?.veg === true;
				default:
					return restaurant;
			}
		});

		if (notFiltered===true && filteredRestaurants.length >0) {
			setNotFiltered(false);
		}
		setRestaurantsList([]);

		setTimeout(() => {
			if (filteredRestaurants.length === 0) {
				setNotFiltered(true);
			} else {
				setNotFiltered(false);
				setRestaurantsList(filteredRestaurants);
			}
		}, 1000);
	};
	return (
		<div className="w-screen h-1/3 flex gap-4 overflow-y-hidden overflow-x-scroll px-5 items-center justify-center scrollbar-hide ">
			<button 
			disabled={notFiltered}
				name="rating"
				onClick={(e) => {
					let filterBasis = "rating";
					filterTopRatingRestaurants(e, filterBasis);
				}}
				className="disabled:opacity-30 transition-all ease-linear duration-300 min-w-max h-fit ml-48  md:w-1/4 px-4 py-2 bg-blue-100 rounded-3xl hover:bg-blue-900 hover:text-white md:ml-0">
				Rating 4.5+.
			</button>
			<button
			disabled={notFiltered}
				name="time"
				onClick={(e) => {
					let filterBasis = "time";
					filterTopRatingRestaurants(e, filterBasis);
				}}
				className="disabled:opacity-30 transition-all ease-linear duration-300 min-w-max h-fit  md:w-1/4 px-4 py-2 bg-blue-100 rounded-3xl hover:bg-blue-900 hover:text-white">
				Fast Delivery
			</button>
			<button
			disabled={notFiltered}
				name="veg"
				onClick={(e) => {
					let filterBasis = "veg";
					filterTopRatingRestaurants(e, filterBasis);
				}}
				className="disabled:opacity-30 transition-all ease-linear duration-300 min-w-max h-fit  md:w-1/4 break-normal py-2 px-4 bg-blue-100 rounded-3xl hover:bg-blue-900 hover:text-white ">
				Veg
			</button>
			<button
			disabled={notFiltered}
				name="cost"
				onClick={(e) => {
					let filterBasis = "cost";
					filterTopRatingRestaurants(e, filterBasis);
				}}
				className="disabled:opacity-30 transition-all ease-linear duration-300 min-w-max h-fit md:w-1/4 px-4 py-2 bg-blue-100 rounded-3xl hover:bg-blue-900 hover:text-white">
				Cost Less Than 250
			</button>
		</div>
	);
};

export default FilterRestaurants;
