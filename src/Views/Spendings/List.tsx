import SpendingItem from "../../Components/Spending/Spending";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {Spending} from "../../Types";
import {useParams} from "react-router-dom";
import {getCurrentYYMM} from "../../Utils";
import {remove} from "../../GlobalState/SpendingSlice";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

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
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Actions</TableCell>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell align={"right"}>Amount</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Synced</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            spendings && spendings.length > 0 ? spendings.map((value) => (
                                <SpendingItem spending={value} remove={removeSpending} key={value.id}/>
                            )) : `No spending for the date of ${date}`
                        }
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
}

export default List;