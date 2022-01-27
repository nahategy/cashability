import SpendingItem from "../../Components/Spending/Spending";
import {useSelector} from "react-redux";
import {RootState} from "../../store";
import {Spending} from "../../Types";
import {useParams} from "react-router-dom";
import {getCurrentYYMM} from "../../Utils";

export type ListUrlParameters = {
    date?: string
}

function List() {
    const spendingResponse = useSelector((state: RootState) => state.spendingResponse.spendingResponse)
    let {date} = useParams<ListUrlParameters>();
    if (!date) {
        date = getCurrentYYMM();
    }
    const spendings: Spending[] = spendingResponse[date] ?? [];

    return (
        <div>
            {spendings && spendings.length > 0 ? spendings.map((value) => (
                <SpendingItem {...value} key={value.id}/>
            )) : `No spending for the date of ${date}`
            }
        </div>
    )
}

export default List;