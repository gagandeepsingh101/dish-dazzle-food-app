import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
const mainStore = configureStore({
	reducer: {
		cartSlice,
	},
});
export default mainStore;
