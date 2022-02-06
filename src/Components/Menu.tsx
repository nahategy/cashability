import {Link} from "react-router-dom";
import {BottomNavigation, Button, Fab, Paper, Tooltip} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

function Menu() {
    return (
        <Paper sx={{position: 'fixed', bottom: 0, left: 0, right: 0, minHeight: 1.4}} elevation={3}>
            <Button variant={"text"} component={Link} to="/">
                <Tooltip title={"Homepage"}>
                    <HomeIcon/>
                </Tooltip>

            </Button>
            <Button variant={"text"} component={Link} to="/spendings">
                <Tooltip title={"Spendings"}>
                    <AttachMoneyIcon/>
                </Tooltip>
            </Button>
            <Button variant={"text"} component={Link} to="/spendings/add">
                <Fab size="small" color="primary" aria-label="add">
                    <Tooltip title={"Add new Spending"}>
                        <AddIcon/>
                    </Tooltip>
                </Fab>
            </Button>
        </Paper>
    )
}

export default Menu;