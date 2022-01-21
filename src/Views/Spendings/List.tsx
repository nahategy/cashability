import SpendingItem from "../../Components/Spending/Spending";
import {useSelector} from "react-redux";
import {RootState} from "../../store";

function List() {
    const spendings = useSelector((state: RootState) => state.spendings.spendings)
    return (
        <div>
            {spendings.map((value) => (
                <SpendingItem {...value} key={value.id}/>
            ))}
        </div>
    )
}

export default List;