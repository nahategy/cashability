import {useSelector} from "react-redux";
import {RootState} from "../store";
import {Spending, SpendingResponse, SpendingType, SpendingTypeResponse} from "../Types";
import {getCurrentYYMM} from "../Utils";

function Overview() {
    const spendingResponse: SpendingResponse = useSelector((state: RootState) => state.spendingResponse.spendingResponse)
    const spendingTypes: SpendingTypeResponse = useSelector((state: RootState) => state.spendingTypeResponse.spendingTypeResponse)
    const date = getCurrentYYMM();
    const spendings: Spending[] = spendingResponse[date] ?? [];
    let sortedSpendings: Spending[] = [...spendings];
    sortedSpendings.sort((a: Spending, b: Spending) => {
        if (a.date < b.date)
            return -1;
        if (a.date > b.date)
            return 1;
        return 0;
    })

    return (
        <div>
            <div>
                {spendingTypes.map((spendingType: SpendingType) => (
                    <div>
                        {spendingType.name}
                    </div>
                ))}
            </div>
            <ul>
                {sortedSpendings.slice(0, 3).map(spending => (
                    <li key={spending.id}>
                        <b>{spending.type}</b> {spending.name}: {spending.amount}
                    </li>
                ))}
            </ul>

        </div>
    )

}

export default Overview