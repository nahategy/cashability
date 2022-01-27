import {configureStore} from "@reduxjs/toolkit";
import {SpendingReducer} from "./GlobalState/SpendingSlice";
import {SpendingTypeReducer} from "./GlobalState/SpendingTypeSlice";

const store = configureStore({
    reducer: {
        spendingResponse: SpendingReducer,
        spendingTypeResponse: SpendingTypeReducer
    },
    middleware: (getDefaultMiddleware => getDefaultMiddleware({serializableCheck: false}))
});


export {store};
export type RootState = ReturnType<typeof store.getState>;
export type SpendingDispatch = typeof store.dispatch;