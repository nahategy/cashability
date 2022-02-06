import {Spending} from "../../Types";
import {stringToFormattedDateString} from "../../Utils";
import {TableCell, TableRow} from "@mui/material";


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
        <TableRow>
            <TableCell>
                <div onClick={removeSpending}>Remove</div>
            </TableCell>
            <TableCell>{spending.id}</TableCell>
            <TableCell>{spending.name}</TableCell>
            <TableCell align={"right"}>{spending.amount}</TableCell>
            <TableCell>{spending.date ? stringToFormattedDateString(`${spending.date}`) : ""}</TableCell>
            <TableCell>{isSynced(spending) ? "Y" : "N"}</TableCell>
        </TableRow>
    )
}

export default SpendingItem;