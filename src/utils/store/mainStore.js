import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

// store all cart slice inside reducer of mainStore
const mainStore = configureStore({
	reducer: {
		cartSlice,
	},
});
export default mainStore;
