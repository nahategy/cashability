import {Spending} from "../../Types";
import {stringToFormattedDateString} from "../../Utils";


export interface SpendingItemProps {
    spending: Spending;
    remove: { (spending: Spending): void };
}

function SpendingItem(props: SpendingItemProps) {
    const spending = props.spending;
    const remove = props.remove

    const removeSpending = () => {
        remove(spending);
    }

    return (
        <div>
            <div onClick={removeSpending}>Remove</div>
            <span>Name: {spending.name}</span>
            <span>Amount: {spending.amount}</span>
            <span>Date: {spending.date ? stringToFormattedDateString(`${spending.date}`) : ""}</span>
            <span>Synced: {spending.id ? "Y" : "N"}</span>
        </div>
    )
}

export default SpendingItem;