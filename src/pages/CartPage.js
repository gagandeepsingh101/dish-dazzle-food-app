import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearAllItem } from "../utils/store/cartSlice";
import CartItemList from "../components/CartItemList";
import { Link } from "react-router-dom";
import CartSummary from "../components/CartSummary";
import { showToast } from "../utils/notification";

// this component show cart page with cart item list and cart summary component
const CartPage = () => {
	const cartItems = useSelector((state) => state.cartSlice.cartItems);
	const dispatch = useDispatch();

	return (
		<div className="h-[80vh] flex flex-col md:gap-4 lg:gap-10">
			<h1 className="h-[7%] text-2xl font-bold md:text-3xl text-center text-blue-900 md:pt-1 lg:text-5xl lg:pt-3">
				Cart
			</h1>
			{!cartItems.length && (
				<div className=" w-11/12 px-3 mx-auto gap-3 bg-blue-100 h-[30%] flex flex-col justify-center items-center md:text-xl font-bold lg:gap-4 lg:h-[90%]">
					<p className="text-center">
						Turn an empty cart into a culinary canvas with Dish Dazzel—where
						every cart is a chance to create a delicious masterpiece.
					</p>
					<Link to={"/"} className="text-blue-900 font-bold ">
						Explore our irresistible food now!
					</Link>
				</div>
			)}
			{cartItems.length > 0 && (
				<div className="h-[93%] w-full flex flex-col md:flex-row">
					<div className="h-[56%] bg-blue-50 rounded-3xl py-2 w-full mx-auto  md:h-[90%] md:w-7/12 flex flex-col justify-center">
						<div className="h-full overflow-y-scroll overflow-x-hidden scrollbar-hide m-2">
							{cartItems.map((items) => (
								<CartItemList key={items.itemDetail.info.id} cartItem={items} />
							))}
						</div>
						<button
							onClick={() => {
								dispatch(clearAllItem());
								showToast("Cart Cleared");
							}}
							className="h-8 rounded-xl border border-blue-900 bg-white text-blue-900 transition duration-500 ease-linear hover:bg-blue-900 hover:text-white w-3/12 mx-auto md:text-xl md:h-10 md:w-1/5 ">
							Clear All
						</button>
					</div>
					<CartSummary />
				</div>
			)}
		</div>
	);
};
export default CartPage;
