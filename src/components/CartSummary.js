import React from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearAllItem } from "../utils/store/cartSlice";
import { showToast } from "../utils/notification";

// this component is show the total item ,saved money and total amount paid by user in cart page section at the bottom in mobile view and at the right in tablet view and laptop view
const CartSummary = () => {
	const cartItems = useSelector((state) => state.cartSlice.cartItems);
	const dispatch = useDispatch();

	const totalAmountPaid = cartItems.reduce(
		(acc, item) => acc + item.totalAmountOfAllItem,
		0
	);
	const discountedAmount = (totalAmountPaid * 10) / 100;
	const deliveryCharge = (totalAmountPaid * 5) / 100;
	const totalActualAmountPaid =
		totalAmountPaid - discountedAmount + deliveryCharge;
	const savedAmount = totalAmountPaid - totalActualAmountPaid;
	return (
		<div className="h-[30%] w-full mx-auto md:h-full md:w-6/12 md:flex md:flex-col md:gap-3 md:py-4">
			<h1 className=" px-2 font-bold text-xl text-center text-blue-900 border-b-2 mx-2 border-blue-100 md:text-3xl py-2 lg:text-4xl">
				Order Summary
			</h1>
			<div className=" py-1 mt-1 w-11/12 bg-blue-100 px-1 mx-auto flex flex-col gap-1 md:gap-4 md:py-5 rounded-xl lg:px-3">
				<p className="flex justify-between">
					<span className="md:text-lg lg:text-2xl">
						{" "}
						Price ({cartItems.length} items)
					</span>
					<span className="md:text-lg font-bold text-blue-900 lg:text-2xl">
						₹ {(totalAmountPaid - 0).toFixed(2)}
					</span>
				</p>
				<p className="flex justify-between">
					<span className="md:text-lg lg:text-2xl">Discount (10%)</span>
					<span className="md:text-lg font-bold text-blue-900 lg:text-2xl">
						- ₹ {(discountedAmount - 0).toFixed(2)}
					</span>
				</p>
				<p className="flex justify-between">
					<span className="md:text-lg lg:text-2xl">Delivery Charge (5%)</span>
					<span className="md:text-lg font-bold text-blue-900 lg:text-2xl">
						+ ₹ {(deliveryCharge - 0).toFixed(2)}
					</span>
				</p>
				<p className="border-y-2 border-blue-900 text-blue-900 py-1 :text-md md:py-3 text-center lg:text-2xl">
					You'll save {(savedAmount - 0).toFixed(2)} on this order 🎉
				</p>
				<div className="flex justify-between md:flex-col gap-3 items-center lg:gap-6">
					<p className="">
						<span className="md:text-xl lg:text-2xl"> Total Amount </span>
						<span className="text-blue-100 rounded  md:rounded-md font-bold md:text-xl lg:text-2xl md:px-1 bg-blue-900 lg:px-3 lg:py-1 lg:rounded-xl">
							₹{(totalActualAmountPaid - 0).toFixed(2)}
						</span>
					</p>
					<button
						onClick={() => {
							dispatch(clearAllItem());
							showToast("Place Order Successfully");
						}}
						className="bg-white border border-blue-900 text-blue-900 transition duration-500 ease-linear hover:bg-blue-900 hover:text-white font-bold rounded-lg px-2 md:text-lg lg:text-2xl lg:px-5 lg:py-3">
						Place Order
					</button>
				</div>
			</div>
		</div>
	);
};

export default CartSummary;
