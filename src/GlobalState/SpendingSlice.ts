import {createSlice} from "@reduxjs/toolkit";
import {SpendingResponse, Spending} from "../Types";
import {dateToYYMM} from "../Utils";

type SpendingPayload = {
    payload: Spending
};

type SpendingResponsePayload = {
    payload: SpendingResponse
}

export const SpendingSlice = createSlice({
    name: 'spendings',
    initialState: {
        spendingResponse: {} as SpendingResponse
    },

    reducers: {
        set: (state, action: SpendingResponsePayload) => {
            state.spendingResponse = action.payload
        },
        add: (state, action: SpendingPayload) => {
            // state.spendings.
            const spendingDate: string = dateToYYMM(action.payload.date);
            if (!state.spendingResponse[spendingDate])
                state.spendingResponse[spendingDate] = [];
            state.spendingResponse[spendingDate].push(action.payload)
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