import React from "react";
import CategoryItemList from "./CategoryItemList";

// this is show the category list in the menu list page with toggle item list of a particular category
const CategoryList = (props) => {
	let {
		categoryList,
		showItem,
		visibleCategoryIndex,
		index,
		openCategoryIndex,
	} = props;
	const categoryItemList = categoryList?.itemCards;

	// this function is used to hide item list of a category which is visible
	function handleShowItems(index) {
		if (openCategoryIndex === index) {
			visibleCategoryIndex(null);
		} else {
			visibleCategoryIndex(index);
		}
	}

	return (
		<div className=" bg-blue-100 rounded-xl w-11/12 mx-auto  p-2 my-2">
			<div
				onClick={() => handleShowItems(index)}
				className="flex justify-between p-4 rounded-xl bg-blue-300 cursor-pointer">
				<h1 className=" truncate font-bold text-blue-900 text-sm md:text-lg">{categoryList?.title}</h1>
				<i className="ri-triangle-fill text-blue-900 rotate-180"></i>
			</div>

			<div className="w-full h-full ">
				{showItem &&
					categoryItemList?.map((items) => (
						<CategoryItemList
							categoryItemList={items?.card}
							key={items?.card?.info?.id}></CategoryItemList>
					))}
			</div>
		</div>
	);
};

export default CategoryList;
