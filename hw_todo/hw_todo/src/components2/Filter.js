import React from "react";

const Filter = ({placeholder}) => {
    return  (
        <div>
            <input className="form-control" type="text" placeholder={placeholder} aria-label="default input example"/>
        </div>

    )
}

export default Filter 