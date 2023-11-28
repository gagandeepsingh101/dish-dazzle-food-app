import React, { useState } from "react";
import CategoryItemList from "./CategoryItemList";

const CategoryList = (props) => {
	let {
		categoryList,
		showItem,
		visibleCategoryIndex,
		index,
		openCategoryIndex,
	} = props;
	const categoryItemList = categoryList?.itemCards;
	function handleShowItems(index, e) {
		if (openCategoryIndex === index) {
			visibleCategoryIndex(null);
		} else {
			visibleCategoryIndex(index);
		}
	}

	return (
		<div className=" bg-blue-100 rounded-xl w-11/12 mx-auto  p-2 my-2">
			<div
				onClick={(e) => handleShowItems(index, e)}
				className="flex justify-between p-4 rounded-xl bg-blue-300">
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
