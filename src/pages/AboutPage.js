import React from "react";
import "remixicon/fonts/remixicon.css";

const AboutPage = () => {
	return (
		<div className="h-5/6 md:h-5/6 bg-blue-50 px-2 gap-2 flex flex-col-reverse justify-center md:py-5 md:gap-5 md:items-center  lg:gap-10 lg:flex-row">
			<div className="lg:w-8/12 h-1/2 flex flex-col md:gap-5 lg:gap-10 text-center">
				<h4 className="text-2xl md:text-4xl lg:text-5xl font-bold text-blue-950 ">
					DishDazzle: A Culinary Extravaganza
				</h4>
				<p className="text-md md:text-lg">
					Step into the enchanting world of DishDazzle, where every dish is a
					culinary masterpiece. Our menu is a symphony of flavors, a dance of
					spices, and a celebration of exquisite tastes. Join us in savoring the
					extraordinary, as DishDazzle transforms dining into an unforgettable
					experience.
				</p>
			</div>
			<img
				src="https://www.dealsshutter.com/blog/wp-content/uploads/2020/01/food-577222_1280.jpg"
				className="w-full md:w-2/3 md:h-1/2 lg:w-4/12 lg:h-5/6 rounded-full border-4 border-blue-200 p-2"
				alt=""
			/>
		</div>
	);
};

export default AboutPage;
