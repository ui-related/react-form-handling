import {useRef, useState} from "react";

const SimpleInput = (props) => {
    const nameInputRef = useRef();
    const [enteredName, setEnteredName] = useState('');
    const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);


    const nameInputChangeHandler = event => {
        event.preventDefault();
        setEnteredName(event.target.value);
        if (event.target.value.trim() !== '') {
            setEnteredNameIsValid(true);
        }
    }

    const nameInputBlurHandler = (event) => {
        event.preventDefault();
        setEnteredNameTouched(true);
        if (enteredName.trim() === '') {
            setEnteredNameIsValid(false);
        }else {
            setEnteredNameIsValid(true);
        }
    }

    const formSubmissionHandler = (event) => {
        event.preventDefault();
        setEnteredNameTouched(true);
        if (enteredName.trim() === '') {
            setEnteredNameIsValid(false);
            return;
        }
        setEnteredNameIsValid(true);
        console.log(enteredName);
        const enteredNameValue = nameInputRef.current.value;
        console.log(enteredNameValue);

        setEnteredName('');
    }
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
    const nameInputClasses = nameInputIsInvalid ? 'form-control invalid':'form-control';

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input
                    ref={nameInputRef}
                    type='text'
                    id='name'
                    value={enteredName}
                    onBlur={nameInputBlurHandler}
                    onChange={nameInputChangeHandler}/>
                {nameInputIsInvalid && <p className='error-text'>Name must not be empty</p>}
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
