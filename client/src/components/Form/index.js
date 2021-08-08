import React from "react";

function Form() {
    return(
        <>
            <form autoComplete="off">
                <div className="row mb-3">
                    <div className="col-md-8 offset-md-2">
                        <div className="text-center">
                            <label for="campaignName">Campaign Nickname</label>
                        </div>
                        <input type="text" className="form-control" id="campaignName" aria-describedby="Campaign Nickname" placeholder="The Best Adventuring Crew"></input>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-8 offset-md-2">
                        <div className="text-center">
                            <label for="numPlayers">Number of Players</label>
                        </div>
                        <input type="text" className="form-control" id="numPlayers" aria-describedby="Number of Players" placeholder="3"></input>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-8 offset-md-2">
                        <div className="text-center">
                            <label for="dungeonMaster">Dungeon Master</label>
                        </div>
                        <input type="text" className="form-control" id="dungeonMaster" aria-describedby="Dungeon Master" placeholder="The Wise One"></input>
                    </div>
                </div>
                <div className="row mb-3">
                    <button className="btn btn-primary offset-5" type="submit">Submit</button>
                </div>
            </form>
        </>
    )
};

export default Form;