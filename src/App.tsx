import React, {useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import Routing from "./Components/Routing";
import LoadingBar from "./Components/LoadingBar";
import Menu from "./Components/Menu";
import {recordUnsentSpendingsInAPI} from "./Services/Spendings";

// import {SpendingRecordContext} from "./Contexts/SpendingRecords";

function App() {
    const [isUnRecordedSendingsSentToAPI, setIsUnRecordedSendingsSentToAPI] = useState(false);

    useEffect(() => {
        if (!isUnRecordedSendingsSentToAPI)
            setTimeout(() => {
                recordUnsentSpendingsInAPI().finally(() => {
                    setIsUnRecordedSendingsSentToAPI(true);
                })
            }, 1500);
    }, []);

    return (
        <div>
            {!isUnRecordedSendingsSentToAPI ? (<LoadingBar/>) : ""}
            <Router>
                <Menu/>
                <div className="page">
                    <Routing/>
                </div>
            </Router>
        </div>
    )
}

export default App;