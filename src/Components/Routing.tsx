import {Route, Routes} from "react-router-dom";
import Overview from "../Views/Overview";
import Error404 from "../Views/Error404";
import React from "react";
import Add from "../Views/Spendings/Add";
import List from "../Views/Spendings/List";

function Routing() {
    return (
        <Routes>
            <Route path="/" element={<Overview/>}/>
            <Route path="/spendings/add" element={<Add/>}/>
            <Route path="/spendings/" element={<List/>}/>
            <Route path="/spendings/:date" element={<List/>}/>
            <Route path="*" element={<Error404/>}/>
        </Routes>
    )
}

export default Routing;