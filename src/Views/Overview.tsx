import {useSelector} from "react-redux";
import {RootState} from "../store";
import {Spending, SpendingResponse} from "../Types";
import {getCurrentYYMM} from "../Utils";

function Overview() {
    const spendingResponse: SpendingResponse = useSelector((state: RootState) => state.spendings.spendings)
    const date = getCurrentYYMM();
    const spendings: Spending[] = spendingResponse[date] ?? [];
    return (
        <ul>
            {spendings.map(spending => (
                <li key={spending.id ?? `${spending.name}.${spending.amount}.${spending.date}`}>
                    <b>{spending.type}</b> {spending.name}: {spending.amount}
                </li>
            ))}
        </ul>
    )

}

export default Overview