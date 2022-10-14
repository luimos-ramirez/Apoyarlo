import React from "react";

class PersonCard extends React.Component {

    render() {

        const {firstName, lastName, age, hairColor} = this.props;

        return(
            <div className="container m-3">
                <h3>{firstName} {lastName}</h3>
                <p><b>Age:</b> {age}</p>
                <p><b>Hair Color:</b> {hairColor}</p>
            </div>
        )
    }

}

export default PersonCard;