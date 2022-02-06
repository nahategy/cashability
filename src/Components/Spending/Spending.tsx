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

    const isSynced = (spending: Spending): boolean => {
        try {
            return parseInt(spending.id) < 0
        } catch (e) {
            return (spending.id.match(/-/g) || []).length === 4
        }
        return false;
    }
    return (
        <div>
            <div onClick={removeSpending}>Remove</div>
            <span>ID: {spending.id},</span>
            <span>Name: {spending.name},</span>
            <span>Amount: {spending.amount},</span>
            <span>Date: {spending.date ? stringToFormattedDateString(`${spending.date}`) : ""},</span>
            <span>Synced: {isSynced(spending) ? "Y" : "N"}</span>
        </div>
    )
}

export default SpendingItem;