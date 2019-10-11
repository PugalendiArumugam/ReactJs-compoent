import React from 'react';
import validate from './validate';


const ReactTextinput = props => {
    const { passedprops } = props;

    // console.log(passedprops)

    const [value, setValue] = React.useState(passedprops.value)
    const [name, setName] = React.useState(passedprops.name)
    const [touched, setTouched] = React.useState(true)
    const [valid, setValid] = React.useState(true)


    const OnChangeHandler = event => {
        // console.log("onchangehandler component")
        event.preventDefault();
        setValue(event.target.value);
        setName(event.target.name);

        let updatedControls = passedprops;

        let updatedFormElement = updatedControls

        updatedFormElement.value = value;
        updatedFormElement.touched = true;
        updatedFormElement.valid = validate(value, updatedFormElement.validationRules);

        console.log(value, name, updatedFormElement.valid);
        console.log(updatedFormElement);

        setTouched(updatedFormElement.touched);
        setValid(updatedFormElement.valid);

        let formIsValid = true;

        for (let inputIdentifier in updatedControls) {
            formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
        }
    }

    var inputControl = "input-control";
    var validationError = null;

    if (touched && !valid) {
        inputControl = 'input-control input-error';
        validationError = <p className='input-error-msg'>Please enter a valid value!</p>;
    }

    return (
        <div className="form-group">
            <input className={inputControl}
                name={name}
                placeholder={passedprops.placeholder}
                type={passedprops.type}
                value={value}
                onChange={OnChangeHandler}
            />
            {validationError}
        </div>
    );
}

export default ReactTextinput;
