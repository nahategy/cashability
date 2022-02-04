import {createSlice} from "@reduxjs/toolkit";
import {SpendingResponse, Spending} from "../Types";
import {dateToYYMM, stringToDate} from "../Utils";
import {getLocalSpendingResponse,} from "../Services/Spendings";

type SpendingPayload = {
    payload: Spending
};

type SpendingResponsePayload = {
    payload: SpendingResponse
}

export const SpendingSlice = createSlice({
    name: 'spendings',
    initialState: {
        spendingResponse: getLocalSpendingResponse(),
    },

    reducers: {
        set: (state, action: SpendingResponsePayload) => {
            state.spendingResponse = action.payload
        },
        add: (state, action: SpendingPayload) => {
            // state.spendings.
            if (!action.payload.id) {
                // state.spendingCounter--;
                // action.payload.id = state.spendingCounter + ""
            }
            const spendingDate: string = dateToYYMM(action.payload.date);
            if (!state.spendingResponse[spendingDate])
                state.spendingResponse[spendingDate] = [];
            state.spendingResponse[spendingDate].push(action.payload)
        },
        remove: (state, action: SpendingPayload) => {
            console.log("remove spending reducer")
            const spendingDate: string = dateToYYMM(stringToDate(action.payload.date.toString()));
            // const index = state.spendingResponse[spendingDate].findIndex((sp: Spending) => sp.id === action.payload.id);
            state.spendingResponse[spendingDate] = state.spendingResponse[spendingDate].filter((sp: Spending) => (sp.id !== action.payload.id))
        },
        update: (state, action: SpendingPayload) => {
            // const id = state.spendings.findIndex((spending) => spending.id = action.payload.id);
            // state.spendings[id] = action.payload;
        }
    }
});
export const {set, add, remove, update} = SpendingSlice.actions
export const SpendingReducer = SpendingSlice.reducer