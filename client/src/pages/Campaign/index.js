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
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-3 text-center">New Campaign</h1>
                </div>
            </div>
            <Form />
        </>
    );
};

export default Campaign;