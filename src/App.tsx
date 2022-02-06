import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import Routing from "./Components/Routing";
import {useDispatch} from "react-redux";
import '@fontsource/roboto/300.css';

import './App.css';
import LoadinglFloatButton from "./Components/LoadingBar";
import Menu from "./Components/Menu";
import {getLocalSpendingResponse, recordUnsentSpendingsInAPI} from "./Services/Spendings";
import {set} from "./GlobalState/SpendingSlice";

// import {SpendingRecordContext} from "./Contexts/SpendingRecords";

function App() {
    const [isUnRecordedSpendingsSentToAPI, setIsUnRecordedSpendingsSentToAPI] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(set(getLocalSpendingResponse()));
    }, []);

    useEffect(() => {
        if (!isUnRecordedSpendingsSentToAPI)
            setTimeout(() => {
                recordUnsentSpendingsInAPI().finally(() => {
                    setIsUnRecordedSpendingsSentToAPI(true);
                })
            }, 1500);
    }, []);

    return (
        <div>
            {!isUnRecordedSpendingsSentToAPI ? (<LoadinglFloatButton/>) : ""}
            <Router>
                <div className="page">
                    <Routing/>
                </div>
                <Menu/>
            </Router>
        </div>
    )
}

export default App;