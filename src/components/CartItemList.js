import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	addItem,
	removeItem,
	clearAllItem,
	incrementInItem,
	decrementInItem,
} from "../utils/store/cartSlice";
import { IMG_CDN_URL } from "../utils/constant";
const CartItemList = ( props) => {
    const {cartItem}=props;
	const dispatch = useDispatch();
	return (
		<div
			className="text-sm flex w-full mx-auto h-[52%] my-3 p-2 bg-blue-300 rounded-xl justify-between items-center md:w-11/12 md:text-base md:h-1/3">
			<img
				className=" rounded-xl h-full w-4/12 md:w-3/12"
				src={IMG_CDN_URL + cartItem?.itemDetail?.info?.imageId}
				alt=""
			/>
			<div className="w-6/12 h-full flex flex-col gap-1 md:w-7/12">
				<h1 className="truncate font-bold text-blue-950">
					{cartItem?.itemDetail?.info?.name}
				</h1>
				<p className="truncate">{cartItem.itemDetail?.info?.description}</p>
				<p className="truncate flex gap-2">
					<span className="font-bold">₹{cartItem?.totalAmountOfAllItem}</span>
					<span>
						({cartItem?.itemDetail?.info?.price / 100}×{cartItem?.totalNumberOfItem})
					</span>
				</p>
				<div className="flex gap-2 bg-blue-900 text-white w-fit px-2 py-1">
					<button
						onClick={() => dispatch(decrementInItem(cartItem?.itemDetail?.info?.id))}
						className="disabled:text-blue-500 hover:scale-150 transition-all ease-in-out duration-300"
						disabled={cartItem.totalNumberOfItem <= 1}>
						<i className="ri-subtract-line"></i>
					</button>
					<p>{cartItem?.totalNumberOfItem}</p>
					<button
						className="hover:scale-150 transition-all ease-in-out duration-300"
						onClick={() => dispatch(incrementInItem(cartItem?.itemDetail?.info?.id))}>
						<i className="ri-add-line "></i>
					</button>
				</div>
			</div>
			<button
				onClick={() => dispatch(removeItem(cartItem?.itemDetail?.info?.id))}
				className="w-1/12 mr-2 text-blue-900 hover:scale-150 transition-all ease-in-out duration-300">
				<i className="ri-close-circle-fill text-4xl"></i>
			</button>
		</div>
	);
};
export default CartItemList;
