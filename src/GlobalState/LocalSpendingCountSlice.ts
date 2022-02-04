import {createSlice} from "@reduxjs/toolkit";
import {SpendingResponse, Spending} from "../Types";
import {dateToYYMM, stringToDate, stringToFormattedDateString} from "../Utils";
import {getLocalSpendingResponse, getSpendingCounter} from "../Services/Spendings";

export const LocalSpendingCountSlice = createSlice({
    name: 'spendingcounts',
    initialState: {
        localSpendingCount: getSpendingCounter() ?? 0,
    },

    reducers: {
        getNew: (state) => {
            state.localSpendingCount--;
        }
    }
});
export const {getNew} = LocalSpendingCountSlice.actions
export const LocalSpendingCountReducer = LocalSpendingCountSlice.reducer