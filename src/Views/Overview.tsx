import {useSelector} from "react-redux";
import {RootState} from "../store";
import {Spending} from "../Types";

function Overview() {
    const spendings: Spending[] = useSelector((state: RootState) => state.spendings.spendings)
    let types = [...new Set(spendings.map(item => (item.type)))];

    const typeValues: number[] = [];
    types.forEach((type_name: string, idx) => {
        const v: Spending[] = spendings.filter((spending) => (spending.type === type_name));
        typeValues[idx] = v.reduce((previousValue, spending) => (previousValue + spending.amount), 0)
    })

    return (
        <div>
            {types.map((value: any, idx) => (
                <div key={idx}>
                    {value} {typeValues[idx]}
                </div>
            ))}
        </div>
    )

}

export default Overview