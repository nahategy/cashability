import {useSelector} from "react-redux";
import {RootState} from "../store";
import {Spending, SpendingResponse, SpendingType, SpendingTypeResponse} from "../Types";
import {getCurrentYYMM} from "../Utils";
import {Box, Card, CardContent, Grid, Paper, Typography} from "@mui/material";
import SpendingCard from "../Components/Spending/SpendingCard";

function Overview() {
    const spendingResponse: SpendingResponse = useSelector((state: RootState) => state.spendingResponse.spendingResponse)
    const spendingTypes: SpendingTypeResponse = useSelector((state: RootState) => state.spendingTypeResponse.spendingTypeResponse)
    const date = getCurrentYYMM();
    const spendings: Spending[] = spendingResponse[date] ?? [];
    let sortedSpendings: Spending[] = [...spendings];
    sortedSpendings.sort((a: Spending, b: Spending) => {
        if (a.date < b.date)
            return 1;
        if (a.date > b.date)
            return -1;
        return 0;
    })

    const sumSpendingsByType = (type: string, spendings: Spending[]): number => {
        let sum = 0;
        spendings.forEach((spending: Spending) => {
            if (spending.type === type)
                sum += spending.amount;
        })
        return sum;
    }
    const sumSpendings = (spendings: Spending[]): number => {
        let sum = 0;
        spendings.forEach((spending: Spending) => {
            sum += spending.amount;
        })
        return sum;
    }
    let spendingTypeSum = 0;
    return (
        <>
            <Card sx={{mb: 1.5}}>
                <CardContent>
                    <Grid display="grid" container spacing={1}>
                        {spendingTypes.map((spendingType: SpendingType, index: number) => (
                            (spendingTypeSum = sumSpendingsByType(spendingType.name, sortedSpendings)) > 0 ?
                                <Grid item key={index}>
                                    {spendingType.name}:
                                    {spendingTypeSum}
                                </Grid>
                                : null

                        ))}
                        <Grid item>
                            <hr/>
                            Sum: {sumSpendings(sortedSpendings)}
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

            {sortedSpendings.slice(0, 3).map(spending => (
                <SpendingCard key={spending.id} spending={spending}/>
            ))}

        </>
    )

}

export default Overview