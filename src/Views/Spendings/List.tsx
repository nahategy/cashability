import SpendingItem from "../../Components/Spending/Spending";
import {useSelector} from "react-redux";
import {RootState} from "../../store";
import {Spending} from "../../Types";

export type ListProps = {
    month: string
}

function List(props: ListProps) {
    const spendingResponse = useSelector((state: RootState) => state.spendingResponse.spendingResponse)
    const spendings: Spending[] = spendingResponse[props.month] ?? [];

    return (
        <div>
            {spendings.map((value) => (
                <SpendingItem {...value} key={value.id}/>
            ))}
        </div>
    )
}

export default List;