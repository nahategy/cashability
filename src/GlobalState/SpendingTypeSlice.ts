import {createSlice} from "@reduxjs/toolkit";
import {SpendingResponse, Spending, SpendingTypeResponse} from "../Types";
import {dateToYYMM} from "../Utils";

type SpendingTypePayload = {
    payload: Spending
};

type SpendingTypeResponsePayload = {
    payload: SpendingTypeResponse
}

export const SpendingTypeSlice = createSlice({
    name: 'spendingsType',
    initialState: {
        spendingTypeResponse: {} as SpendingTypeResponse
    },

    reducers: {
        set: (state, action: SpendingTypeResponsePayload) => {
            state.spendingTypeResponse = action.payload
        },
        add: (state, action: SpendingTypePayload) => {
            // state.spendings.
        },
        remove: (state, action: SpendingTypePayload) => {
            // state.spendings = state.spendings.filter((spending: Spending) => spending.id !== action.payload.id)
        },
        update: (state, action: SpendingTypePayload) => {
            // const id = state.spendings.findIndex((spending) => spending.id = action.payload.id);
            // state.spendings[id] = action.payload;
        }
    }
});
export const {set, add, remove, update} = SpendingTypeSlice.actions
export const SpendingTypeReducer = SpendingTypeSlice.reducer