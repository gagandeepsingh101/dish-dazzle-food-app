import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cartSlice",
	initialState: {
		cartItems: [],
	},
	reducers: {
		addItem: (state, item) => {
			state.cartItems.push({
				itemDetail: item.payload,
				totalNumberOfItem: 1,
				totalAmountOfAllItem:
					(item.payload.info.price || item.payload.info.defaultPrice) / 100,
			});
		},
		clearAllItem: (state) => {
			state.cartItems.length = 0;
		},
		removeItem: (state, itemId) => {
			state.cartItems = state.cartItems.filter(
				(items) => items.itemDetail.info.id !== itemId.payload
			);
		},
		incrementInItem: (state, itemId) => {
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
