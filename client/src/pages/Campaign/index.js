import React, { useEffect, useState } from "react";
import Form from "../../components/Form"

const Campaign = () =>{
    const initialValues = {
        nickname: "",
        numPlayers: "",
        dungeonMaster: ""
    }; 

    const [values, setValues] = useState(initialValues);

    return(
        <>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-3 text-center">New Campaign</h1>
                </div>
            </div>
            <Form />
        </>
    );
};

export default Campaign;