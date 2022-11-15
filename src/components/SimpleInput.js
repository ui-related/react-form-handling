import {useRef, useState} from "react";

const SimpleInput = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const nameInputRef = useRef();
    const nameInputChangeHandler = event => {
        event.preventDefault();
        setEnteredName(event.target.value);
    }

    const formSubmissionHandler = (event) => {
        event.preventDefault();
        console.log(enteredName);
        const enteredNameValue = nameInputRef.current.value;
        console.log(enteredNameValue);

        setEnteredName('');
    }


    return (
        <form onSubmit={formSubmissionHandler}>
            <div className='form-control'>
                <label htmlFor='name'>Your Name</label>
                <input
                    ref={nameInputRef}
                    type='text'
                    id='name'
                    value={enteredName}
                    onChange={nameInputChangeHandler}/>
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
