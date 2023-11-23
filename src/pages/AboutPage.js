import React from "react";

const AboutPage = () => {
	return (
		<div className="h-5/6 overflow-y-scroll p-2 flex items-center">
			<div className="md:w-8/12 flex flex-col gap-10 px-4">
				<h4 className="md:text-xl lg:text-5xl font-bold text-blue-950 text-center">DishDazzle Delights</h4>
				<p className="md:tex lg:text-lg">
					✨ Welcome to DishDazzle, where every bite is a celebration and every
					dish is a star! 🌟 Immerse yourself in a world of culinary
					enchantment, where flavors dance and ingredients shine. 🍽✨ Our
					kitchen is a symphony of tastes, a spectacle of ingredients, and a
					feast for the senses. Join us on this gastronomic journey, where each
					dish is not just a meal but a moment of pure delight. 🎉 Let your
					taste buds sparkle with joy as we bring you the finest in food and the
					magic of memorable dining experiences. ✨✨ DishDazzle - where every
					dish is a showstopper and every meal is a masterpiece! 🌈🍷
					#DishDazzleDelights #CulinaryMagic #FlavorfulFeasts
				</p>
			</div>
			<div className="flex md:w-4/12 lg:flex-col lg:items-center lg:gap-4">
				<img
					src="https://economictimes.indiatimes.com/photo/71229479.cms"
					className="w-full h-full rounded-xl border-4 border-blue-200 p-1"
					alt=""
				/>
			</div>
		</div>
	);
};

export default AboutPage;
