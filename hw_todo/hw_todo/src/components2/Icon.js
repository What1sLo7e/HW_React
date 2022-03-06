import React from "react";

const Icon = ({ name, color }) => {
        const classNames = [`bi-${name}`]

        if (color) {
            classNames.push(`text-${color}`)
        }
        return !name ? null : <i className={classNames.join(' ')}/>
}

export default Icon