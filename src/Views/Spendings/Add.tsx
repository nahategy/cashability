import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {recordSpending} from "../../Services/Spendings";

function Add() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("0");
    const [date, setDate] = useState("");
    // const [type, setType] = useState();

    const [recording, setRecording] = useState(false);

    const RecordSpending = () => {
        setRecording(true);
        recordSpending({"name": name, "amount": parseFloat(amount), "date": new Date(date)})
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