import React from "react";
import {Card, CardContent, Fab, Grid, Paper} from "@mui/material";
import SyncIcon from '@mui/icons-material/Sync';
import CircularProgress from '@mui/material/CircularProgress';

type LoadingBarProp = {
    name?: any,
};


function LoadingFloatButton(props: LoadingBarProp) {
    return (
        <Card sx={{position: 'fixed', top: 10, right: 10, minHeight: 1.4}}>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item>
                        <Fab>{props.name ?? <CircularProgress/>}</Fab>
                    </Grid>
                    <Grid item>
                        Syncing
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default LoadingFloatButton;


