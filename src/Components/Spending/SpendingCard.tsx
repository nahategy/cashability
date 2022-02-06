import {Card, CardContent, Typography} from "@mui/material";
import {Spending} from "../../Types";

interface SpendingCardProps {
    spending: Spending
}

function SpendingCard(props: SpendingCardProps) {
    const {spending} = props;

    return <Card sx={{mb: 1.5}}>
        <CardContent>
            <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                {spending.date}
            </Typography>
            <Typography sx={{fontSize: 14}} variant="h5" component="div">
                {spending.name}
            </Typography>
            <Typography color="text.secondary">
                {spending.amount}
            </Typography>
        </CardContent>
    </Card>
}

export default SpendingCard;