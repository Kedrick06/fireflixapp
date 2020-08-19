import React from 'react';
import {Field, reduxForm} from 'redux-form';

class Contact extends React.Component{
  render(){
        const handleSubmit = this.props
    return (
        <div>
        <div className="form-style">
        <form onSubmit={handleSubmit}>
        <label> User Name:
        <Field name="inputName" component="input" type="text" />
        </label>
        <label> Email:
        <Field name="userEmail" component="input" type="text" />
        </label>
        <button type="submit">Submit</button>
        </form>
    </div>
    </div>
    )
} }

const onSubmit = values => {
    alert(JSON.stringify(values))
}


Contact = reduxForm({
    form:'contact',
    onSubmit,

})(Contact)

export default Contact;