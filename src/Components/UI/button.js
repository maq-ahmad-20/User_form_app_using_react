import React from "react";
import Classes from './button.module.css'

const Button = (props) => {

    return (
        <button className={Classes.button} type={props.type || 'button'}
            onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default Button