import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Campaign from "./pages/Campaign";
import "./index.css";

function App() {
    return (
        <div className="col-md-8 offset-md-2">
            <Campaign />
        </div>
    );
};

export default App;