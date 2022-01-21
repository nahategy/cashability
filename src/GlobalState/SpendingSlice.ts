import {createSlice} from "@reduxjs/toolkit";
import {Spending} from "../Types";

type SpendingPayload = {
    payload: Spending
};

type SpendingArrayPayload = {
    payload: Spending[]
}

export const SpendingSlice = createSlice({
    name: 'spendings',
    initialState: {
        spendings: [] as Spending[]
    },
    reducers: {
        set: (state, action: SpendingArrayPayload) => {
            state.spendings = action.payload
        },
        add: (state, action: SpendingPayload) => {
            state.spendings.push(action.payload)
        },
        remove: (state, action: SpendingPayload) => {
            state.spendings = state.spendings.filter((spending: Spending) => spending.id !== action.payload.id)
        },
        update: (state, action: SpendingPayload) => {
            const id = state.spendings.findIndex((spending) => spending.id = action.payload.id);
            state.spendings[id] = action.payload;
        }
    }
});
export const {set, add, remove, update} = SpendingSlice.actions
export const SpendingReducer = SpendingSlice.reducer