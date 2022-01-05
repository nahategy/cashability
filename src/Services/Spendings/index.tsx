import {LOCAL_STORAGE} from "../../Constants";
import {Spending} from "../../Types";

const storage = window.localStorage;

function getStorageItemOrDefault(name: string, def: any): any {
    let item = JSON.parse(storage.getItem(name) as string)
    if (item === null) {
        item = [];
    }
    return item;
}

function getLocalSpendings(): Spending[] {
    return getStorageItemOrDefault(LOCAL_STORAGE.spendings, []) as Spending[];
}

function recordSpending(spending: Spending) {
    const spendings = getLocalSpendings();
    if (!spending.date) {
        spending.date = new Date();
    }

    storage.setItem(LOCAL_STORAGE.spendings, JSON.stringify([...spendings, spending]))
}

async function recordUnsentSpendingsInAPI() {
    const spendings = getLocalSpendings();
    spendings.forEach((currentSpending) => {
        if (currentSpending.id != null)
            return;
        console.log("TODO: record spending in API")
    });
}

export {recordSpending, recordUnsentSpendingsInAPI, getLocalSpendings};