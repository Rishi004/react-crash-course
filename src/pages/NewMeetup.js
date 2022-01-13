import React from "react";
import { NewMeetupForm } from "../components";
import { useHistory } from "react-router-dom";

function NewMeetup() {
    const history = useHistory();
    function handleAddMeetup(meetupData) {
        fetch(
            "https://react-academind-2a01b-default-rtdb.firebaseio.com/meetups.json",
            {
                method: "POST",
                body: JSON.stringify(meetupData),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        ).then(() => {
            history.replace("/");
        });
    }
    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={handleAddMeetup} />
        </section>
    );
}

export default NewMeetup;
