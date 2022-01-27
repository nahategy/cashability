import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {recordSpending} from "../../Services/Spendings";
import {useDispatch} from "react-redux";
import {add} from "../../GlobalState/SpendingSlice";
import {Spending as SpendingType} from "../../Types";

function Add() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("0");
    const [date, setDate] = useState(undefined as any);

    const dispatch = useDispatch();

    const [recording, setRecording] = useState(false);

    const RecordSpending = () => {
        setRecording(true);

        var spendingDate = date;
        if (spendingDate === undefined) {
            console.log("setting default date");
            spendingDate = new Date();
        }

        const sp: SpendingType = {
            "name": name, "amount": parseFloat(amount), "date": spendingDate
        };
        console.log(sp);

        recordSpending(sp)
        dispatch(add(sp))

        navigate("/");
    };

    return (
        <form action="">
            <label>
                Name
                <input type="text" placeholder={"name"} value={name} onChange={function (ev) {
                    setName(ev.target.value)
                }} required/>
            </label>
            <label>
                Amount
                <input type="number" min={0} placeholder={"name"} value={amount} onChange={function (ev) {
                    setAmount(ev.target.value)
                }} required/>
            </label>
            <label>
                Date
                <input type="date" placeholder={"date"} value={date} onChange={function (ev) {
                    setDate(ev.target.value)
                }} required/>
            </label>
            <button disabled={recording || name.trim() == '' || amount.trim() == '' || parseFloat(amount) == 0}
                    type={"button"}
                    onClick={RecordSpending}
            >
                Record
            </button>
        </form>
    )
}

export default Add;