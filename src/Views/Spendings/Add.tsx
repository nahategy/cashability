import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {add} from "../../GlobalState/SpendingSlice";
import {Spending as SpendingType} from "../../Types";
import {RootState} from "../../store";
import {getNew} from "../../GlobalState/LocalSpendingCountSlice";
import {Box, Button, TextField} from "@mui/material";
import {dateToFormattedDateString} from "../../Utils";

function Add() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("0");
    const [date, setDate] = useState("");

    const dispatch = useDispatch();
    const localSpendingCount = useSelector((state: RootState) => state.localSpendingCount.localSpendingCount)

    const [recording, setRecording] = useState(false);

    const RecordSpending = () => {
        setRecording(true);

        var spendingDate = date;
        if (!spendingDate) {
            console.log("setting default date");
            spendingDate = dateToFormattedDateString(new Date());
        }

        const sp: SpendingType = {
            "name": name,
            "amount": parseFloat(amount),
            "date": spendingDate,
            "id": localSpendingCount.spendingCount + ""
        };

        dispatch(add(sp))
        dispatch(getNew())

        navigate("/");
    };

    return (
        <form action="">
            <Box sx={{display: "grid", gridTemplateRows: 'repeat(3, 2fr)', gap: 2}}>
                <TextField
                    color="primary"
                    label="Name"
                    value={name}
                    helperText={"Enter the name of the Spending"}
                    onChange={(ev) => setName(ev.target.value)}
                >
                </TextField>
                <TextField
                    label="Amount"
                    value={amount}
                    type={"number"}
                    helperText={"Enter the amount of the Spending"}
                    onChange={(ev) => setAmount(ev.target.value)}
                >
                </TextField>
                <TextField
                    value={date}
                    helperText={"Enter the date of the Spending ( If left empty, it will be the current date ) "}
                    onChange={(ev) => setDate(ev.target.value)}
                    type={"date"}
                >
                </TextField>

                <Button
                    disabled={recording || name.trim() == '' || amount.trim() == '' || parseFloat(amount) == 0}
                    variant={"outlined"}
                    onClick={RecordSpending}
                >
                    Record
                </Button>
            </Box>

        </form>
    )
}

export default Add;