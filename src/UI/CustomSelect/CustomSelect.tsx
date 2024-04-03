import React from "react";
import cl from "./CustomSelect.module.css";

const CustomSelect = () => {
    return (
        <select className={cl.select}>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
            <option value="Option 4">Option 4</option>
        </select>
    )
}

export default CustomSelect;