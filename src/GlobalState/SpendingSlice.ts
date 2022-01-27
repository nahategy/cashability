import {createSlice} from "@reduxjs/toolkit";
import {SpendingResponse, Spending} from "../Types";

type SpendingPayload = {
    payload: Spending
};

type SpendingResponsePayload = {
    payload: SpendingResponse
}

export const SpendingSlice = createSlice({
    name: 'spendings',
    initialState: {
        spendings: {} as SpendingResponse
    },

    reducers: {
        set: (state, action: SpendingResponsePayload) => {
            console.log(action.payload)
            state.spendings = action.payload
        },
        add: (state, action: SpendingPayload) => {
            // state.spendings.
            // state.spendings.findIndex((value) => (value.)).push(action.payload)
        },
        remove: (state, action: SpendingPayload) => {
            // state.spendings = state.spendings.filter((spending: Spending) => spending.id !== action.payload.id)
        },
        update: (state, action: SpendingPayload) => {
            // const id = state.spendings.findIndex((spending) => spending.id = action.payload.id);
            // state.spendings[id] = action.payload;
        }
    }
});
export const {set, add, remove, update} = SpendingSlice.actions
export const SpendingReducer = SpendingSlice.reducer