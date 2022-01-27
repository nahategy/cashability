import {LOCAL_STORAGE} from "../../Constants";
import {Spending, SpendingResponse} from "../../Types";
import {dateToYYMM} from "../../Utils";

const storage = window.localStorage;

function getStorageItemOrDefault(name: string, def: any): typeof def {
    let item = JSON.parse(storage.getItem(name) as string)
    if (item === null) {
        item = def;
    }
    return item;
}

function getLocalSpendingResponse(): SpendingResponse {
    return getStorageItemOrDefault(LOCAL_STORAGE.spendings, {});
}

function recordSpending(spending: Spending) {
    const spendingResponse: SpendingResponse = getLocalSpendingResponse();
    const date = dateToYYMM(spending.date);
    if (!spendingResponse[date])
        spendingResponse[date] = []
    spendingResponse[date].push(spending)
    storage.setItem(LOCAL_STORAGE.spendings, JSON.stringify(spendingResponse))
}

async function recordUnsentSpendingsInAPI() {
    const spendingResponse = getLocalSpendingResponse();
    const keys: string[] = Object.keys(spendingResponse)
    keys.forEach((value) => {
        const spendings: Spending[] = spendingResponse[value];
    })

}

export {recordSpending, recordUnsentSpendingsInAPI, getLocalSpendingResponse};