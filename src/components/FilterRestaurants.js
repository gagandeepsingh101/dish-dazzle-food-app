import React from "react";

const FilterRestaurants = (props) => {
	const { defaultRestaurants, setRestaurantsList, setNotFiltered ,notFiltered} = props;
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
						200
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
				name="rating"
				onClick={(e) => {
					let filterBasis = "rating";
					filterTopRatingRestaurants(e, filterBasis);
				}}
				className="min-w-max h-fit ml-48  md:w-1/4 px-4 py-2 bg-blue-100 rounded-3xl hover:bg-blue-900 hover:text-white md:ml-0">
				Rating 4.5+.
			</button>
			<button
				name="time"
				onClick={(e) => {
					let filterBasis = "time";
					filterTopRatingRestaurants(e, filterBasis);
				}}
				className="min-w-max h-fit  md:w-1/4 px-4 py-2 bg-blue-100 rounded-3xl hover:bg-blue-900 hover:text-white">
				Fast Delivery
			</button>
			<button
				name="veg"
				onClick={(e) => {
					let filterBasis = "veg";
					filterTopRatingRestaurants(e, filterBasis);
				}}
				className="min-w-max h-fit  md:w-1/4 break-normal py-2 px-4 bg-blue-100 rounded-3xl hover:bg-blue-900 hover:text-white ">
				Veg
			</button>
			<button
				name="cost"
				onClick={(e) => {
					let filterBasis = "cost";
					filterTopRatingRestaurants(e, filterBasis);
				}}
				className="min-w-max h-fit md:w-1/4 px-4 py-2 bg-blue-100 rounded-3xl hover:bg-blue-900 hover:text-white">
				Cost Less Than 250
			</button>
		</div>
	);
};

export default FilterRestaurants;
