import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
    return (
        <div className="d-flex">
            <div style={{ flexGrow: 1 }}>
                <p>Storefrunttttt</p>
                <Link to="/add-item">add an item to your storefrunt!</Link>
            </div>
        </div>
    );
};

export default Welcome;
