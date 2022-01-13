import React from "react";
import { Route, Switch } from "react-router-dom";
import { AllMeetups, Favorites, NewMeetup } from "../pages";

function Index() {
    return (
        <>
            <Switch>
                <Route path="/" exact component={AllMeetups} />
                <Route path="/new" exact component={NewMeetup} />
                <Route path="/favorites" exact component={Favorites} />
            </Switch>
        </>
    );
}

export default Index;
