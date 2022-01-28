import {configureStore} from "@reduxjs/toolkit";
import {SpendingReducer} from "./GlobalState/SpendingSlice";
import {SpendingTypeReducer} from "./GlobalState/SpendingTypeSlice";
import {storeItem} from "./Services/LocalStorage";

const store = configureStore({
    reducer: {
        spendingResponse: SpendingReducer,
        spendingTypeResponse: SpendingTypeReducer
    },
    middleware: (getDefaultMiddleware => getDefaultMiddleware({serializableCheck: false}))
});

store.subscribe(() => {
    const currentState: any = store.getState();
    const keys: any[] = Object.keys(currentState);
    keys.forEach((key) => {
        const value: any = currentState[key][key];
        storeItem(key, value)
    })
})

export {store};
export type RootState = ReturnType<typeof store.getState>;
export type SpendingDispatch = typeof store.dispatch;