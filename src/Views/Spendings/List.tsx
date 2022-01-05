import {getLocalSpendings} from "../../Services/Spendings";
import {useEffect, useState} from "react";
import {Spending} from "../../Types";
import SpendingItem from "../../Components/Spending/Spending";

function List() {
    const [spendings, setSpendings] = useState([] as Spending[]);

    useEffect(() => {
        setSpendings(getLocalSpendings());
    }, []);

    return (
        <div>
            {spendings.map((value) => (
                <SpendingItem {...value} />
            ))}
        </div>
    )
}

export default List;