import {LOCAL_STORAGE} from "../../Constants";
import {Spending, SpendingResponse} from "../../Types";
import {dateToYYMM} from "../../Utils";
import {getStorageItemOrDefault, storeItem} from "../LocalStorage";

function getLocalSpendingResponse(): SpendingResponse {
    return getStorageItemOrDefault(LOCAL_STORAGE.spendingResponse, {});
}

function getSpendingCounter(): number {
    return getStorageItemOrDefault(LOCAL_STORAGE.localSpendingCount, {spendingCount: 0});
}

function recordSpending(spending: Spending) {
    const spendingResponse: SpendingResponse = getLocalSpendingResponse();
    const date = dateToYYMM(spending.date);
    if (!spendingResponse[date])
        spendingResponse[date] = []
    spendingResponse[date].push(spending)
    storeItem(LOCAL_STORAGE.spendingResponse, spendingResponse)
}

async function recordUnsentSpendingsInAPI() {
    const spendingResponse = getLocalSpendingResponse();
    const keys: string[] = Object.keys(spendingResponse)
    keys.forEach((value) => {
        const spendings: Spending[] = spendingResponse[value];
    })

}

export {recordSpending, recordUnsentSpendingsInAPI, getLocalSpendingResponse, getSpendingCounter};