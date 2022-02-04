import SpendingItem from "../../Components/Spending/Spending";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {Spending} from "../../Types";
import {useParams} from "react-router-dom";
import {getCurrentYYMM} from "../../Utils";
import {remove} from "../../GlobalState/SpendingSlice";

export type ListUrlParameters = {
    date?: string
}

function List() {
    const spendingResponse = useSelector((state: RootState) => state.spendingResponse.spendingResponse)
    const dispatch = useDispatch();
    let {date} = useParams<ListUrlParameters>();
    if (!date) {
        date = getCurrentYYMM();
    }
    const spendings: Spending[] = spendingResponse[date] ?? [];
    const removeSpending = (spending: Spending): void => {
        dispatch(remove(spending))
    }

    return (
        <div>
            {spendings && spendings.length > 0 ? spendings.map((value) => (
                <SpendingItem spending={value} remove={removeSpending} key={value.id}/>
            )) : `No spending for the date of ${date}`
            }
        </div>
    )
}

export default List;