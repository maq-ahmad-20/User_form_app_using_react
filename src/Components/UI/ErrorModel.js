import React from "react";
import classes from './errormodel.module.css';

import Card from "./Card";
import Button from "./button";

const ErrorModel = (props) => {

    return (
        <div>
            <div className={classes.backdrop} onClick={props.onConfirm}>

            </div>

            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>
                        {props.title}
                    </h2>
                </header>
                <div className={classes.content}>
                    <p>
                        {props.message}
                    </p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={props.onConfirm}>
                        Okay
                    </Button>
                </footer>

            </Card>
        </div>

    )
}

export default ErrorModel;