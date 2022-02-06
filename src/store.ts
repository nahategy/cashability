import {configureStore} from "@reduxjs/toolkit";
import {SpendingReducer} from "./GlobalState/SpendingSlice";
import {SpendingTypeReducer} from "./GlobalState/SpendingTypeSlice";
import {LocalSpendingCountReducer} from "./GlobalState/LocalSpendingCountSlice";
import {storeItem} from "./Services/LocalStorage";

const store = configureStore({
    reducer: {
        spendingResponse: SpendingReducer,
        spendingTypeResponse: SpendingTypeReducer,
        localSpendingCount: LocalSpendingCountReducer,
    },
    middleware: (getDefaultMiddleware => getDefaultMiddleware({serializableCheck: false}))
});

store.subscribe(() => {
    const currentState: any = store.getState();
    const keys: any[] = Object.keys(currentState);
    keys.forEach((key) => {
        console.log(key)
        console.log(currentState[key])
        const value: any = currentState[key][key];
        storeItem(key, value)
    })
})

export {store};
export type RootState = ReturnType<typeof store.getState>;
export type SpendingDispatch = typeof store.dispatch;