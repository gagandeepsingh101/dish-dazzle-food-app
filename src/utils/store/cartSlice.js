import { createSlice } from "@reduxjs/toolkit";
import { showToast } from "../notification";

const cartSlice = createSlice({
	name: "cartSlice",
	initialState: {
		cartItems: [],
	},
	reducers: {
		// Add an item to cart in cartSlice state variable with checking if the item is already in cart or not
		addItem: (state, item) => {
			if (
				state.cartItems.some(
					(items) => items.itemDetail.info.id === item.payload.info.id
				)
			) {
				showToast("Item already in cart");
			} else {
				state.cartItems.push({
					itemDetail: item.payload,
					totalNumberOfItem: 1,
					totalAmountOfAllItem:
						(item.payload.info.price || item.payload.info.defaultPrice) / 100,
				});
				showToast("Added Item in cart");
			}
		},

		// Clear all items from cartSlice state variable
		clearAllItem: (state) => {
			state.cartItems.length = 0;
		},

		// remove the particular item from cartSlice state variable
		removeItem: (state, itemId) => {
			showToast("Item removed from cart");
			state.cartItems = state.cartItems.filter(
				(items) => items.itemDetail.info.id !== itemId.payload
			);
		},

		incrementInItem: (state, itemId) => {
			// find the item which id is equal to itemId and then increment the totalNumberOfItem.After that
			// update the totalAmountOfAllItem
			state.cartItems.filter((item) => {
				if (item.itemDetail.info.id === itemId.payload) {
					item.totalNumberOfItem++;
					item.totalAmountOfAllItem =
						((item.itemDetail.info.price || item.itemDetail.info.defaultPrice) *
							item.totalNumberOfItem) /
						100;
				}
			});
		},
		decrementInItem: (state, itemId) => {
			// find the item which id is equal to itemId and then decrement the totalNumberOfItem.After that
			// update the totalAmountOfAllItem
			state.cartItems.filter((item) => {
				if (item.itemDetail.info.id === itemId.payload) {
					item.totalNumberOfItem--;
					item.totalAmountOfAllItem =
						((item.itemDetail.info.price || item.itemDetail.info.defaultPrice) *
							item.totalNumberOfItem) /
						100;
				}
			});
		},
	},
});
export const {
	addItem,
	clearAllItem,
	removeItem,
	incrementInItem,
	decrementInItem,
} = cartSlice.actions;
export default cartSlice.reducer;
