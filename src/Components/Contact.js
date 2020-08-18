import React from 'react';
import {Field, reduxForm} from 'redux-form';

class Contact extends React.Component{
  render(){
        const handleSubmit = this.props
    return (
        <div>
        <form onSubmit={handleSubmit}>
        <label> Name:
        <Field name="inputName" component="input" type="text" />
        </label>
        <button type="submit">Submit</button>
        </form>
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