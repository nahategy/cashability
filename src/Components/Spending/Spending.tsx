import {Spending} from "../../Types";
import {stringToFormattedDateString} from "../../Utils";

function SpendingItem(spending: Spending) {
    return (
        <div>
            <span>Name: {spending.name}</span>
            <span>Amount: {spending.amount}</span>
            <span>Date: {spending.date ? stringToFormattedDateString(`${spending.date}`)  : ""}</span>
            <span>Synced: {spending.id ? "Y" : "N"}</span>
        </div>
    )
}

export default SpendingItem;