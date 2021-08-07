import React from "react";

function Form() {

    return(
        <>
            <form autoComplete="off">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <div className="text-center">
                            <label for="campaignName">Campaign Nickname</label>
                        </div>
                        <input type="text" className="form-control" id="campaignName" aria-describedby="campaign nickname" placeholder="The Best Adventuring Crew"></input>
                    </div>
                </div>
            </form>
        </>
    )
};

export default Form;