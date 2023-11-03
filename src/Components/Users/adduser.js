
import React from 'react';
import Card from '../UI/Card';
import Classes from './adduser.module.css'
import Button from '../UI/button';
import { useState } from 'react';
import ErrorModel from '../UI/ErrorModel';
const AddUser = (props) => {

    const [enteredUserName, setUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const handleUserNameChange = (val) => {
        setUserName(val);
    }

    const myErrorHandler = () => {
        setError(null);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {

            setError({
                title: "Invalid Input",
                message: "please enter valid age and name non empty values"
            })
            return;
        }

        if (+enteredAge < 1) {
            setError({
                title: "Invalid age",
                message: "please enter valid age more than 0 "
            })


            return;
        }
        const obj = {
            name: enteredUserName,
            age: enteredAge,
            id: Math.random().toString()
        }
        props.getSubmitedDetails(obj);
        setUserName('');
        setEnteredAge('');

    }

    const handleAgeChange = (val) => {
        setEnteredAge(val);
    }

    return (
        <div>
            {error && <ErrorModel title={error.title} message={error.message} onConfirm={myErrorHandler} />}
            <Card className={Classes.input}>
                <form onSubmit={(e) => { handleOnSubmit(e) }}>
                    <label htmlFor='username'>UserName</label>
                    <input type='text' id='username' value={enteredUserName} onChange={(e) => { handleUserNameChange(e.target.value) }}></input>
                    <label htmlFor='age'>Age</label>
                    <input type='number' id='age' value={enteredAge}
                        onChange={(e) => { handleAgeChange(e.target.value) }}></input>
                    <Button type="submit">AddUser</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser;