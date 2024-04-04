import React from "react";
import cl from "./CustomButton.module.css";

const CustomButton = ({children, ...props}: React.ComponentPropsWithoutRef<"button">) => {
    return (
        <button {...props}>
            {children}
        </button>
    )
}

export default CustomButton;