import React, { Component } from 'react';
import './App.css';
import './AppInputField.css';
import ReactTextInput from './components/React_TextInput';

class App extends Component {


  constructor() {
    super();

    this.state = {
      formIsValid: false,
      formControls: {
        name: {
          name:'name',
          type:'text',
          value: '',
          placeholder: 'Enter name',
          valid: false,
          validationRules: {
            minLength: 4,
            isRequired: true
          },
          touched: false
        },
        my_email: {
          name:'my_email',
          type:'email',
          value: '',
          placeholder: 'Enter email',  
          valid: false,
          validationRules: {
            isRequired: true,
            isEmail: true
          },
          touched: false
        },
        my_password: {
          name:'my_password',
          type:'password',
          value: '',
          placeholder: 'Enter password',  
          valid: false,
          validationRules: {
            isRequired: true,
            minLength: 8,
          },
          touched: false
        }

      }
    }
  }

  formSubmitHandler = () => {
    const formData = {};
    for (let formElementId in this.state.formControls) {
      formData[formElementId] = this.state.formControls[formElementId].value
    }
    console.log("Submitted...........")
    console.dir(formData);
  }


  render() {
    return (
      <div className="App" >
        {/* First input element 'name' */}
        <ReactTextInput 
          passedprops={this.state.formControls.name}
        />
        {/* Second input element 'my_email' */}
        <ReactTextInput 
          passedprops={this.state.formControls.my_email}
        />
        {/* Third input element 'my_password' */}
        <ReactTextInput 
          passedprops={this.state.formControls.my_password}
        />
        <button onClick={this.formSubmitHandler}
          disabled={!this.state.formIsValid}
          className="submit-class"
        >
        Submit
        </button>
      </div>
    );

  }
}

export default App;
