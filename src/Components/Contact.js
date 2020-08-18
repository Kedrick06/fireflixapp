import React from 'react';


class Contact extends React.Component {
    render(){
     
            const {handleSubmit} = props;
            const onSubmit = values => {
                alert(JSON.stringify(values))
            }
            
            
            ContactForm = reduxForm({
                form:'contact',
                onSubmit,
            
            })(ContactForm)
            
            return (
            <form onSubmit={handleSubmit}>
                <label> Name:
                <Field name="inputName" component="input" type="text" />
                </label>
                <button type="submit">Submit</button>
                </form>
            )
        } 
        
    }

export default Contact;
    