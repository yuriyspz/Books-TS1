import React from 'react';
import {Field, reduxForm} from 'redux-form';
import fieldComponent from "./fieldComponent";
import styled from 'styled-components';
import { connect } from 'http2';
import { IBook } from '../types';
import { createBook } from '../actions';
import { Dispatch } from 'redux';

export interface IFormComponent{
    createBook:()=>any
}

class FormComponent extends React.Component<{}, IFormComponent> {
    render(){
        return(
            <>
            
            </>
        )
    }
}
  const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
      getAllBooks: (book:IBook) => {
        dispatch(createBook(book));
      },
    };
  };
export default connect(null, mapDispatchToProps)(FormComponent)
// const FormComponent = (props:any) => {
//     const { handleSubmit, pristine, reset, submitting } = props;
//         return (
//             <div>
//                 <FormWrapper>
//                     <FormHeading>Form to submit</FormHeading>
//                     <Form onSubmit={handleSubmit}>
//                         <Field
//                             name='firstName'
//                             type='text'
//                             component={fieldComponent}
//                             label='First Name'
//                         />
//                         <Field
//                             name='lastName'
//                             type='text'
//                             component={fieldComponent}
//                             label='Last Name'
//                         />
//                         <Field
//                             name='email'
//                             type='text'
//                             component={fieldComponent}
//                             label='Email'
//                         />
//                         <ButtonSubmit type='submit' disabled={pristine || submitting} onClick={reset}>Submit Form</ButtonSubmit>
//                     </Form>
//                 </FormWrapper>
//             </div>
//         )
// };
// export default FormComponent;
// // export default reduxForm({
// //     form: 'myForm',  // a unique identifier for this form
// //     validate,                // <--- validation function given to redux-form
// //     warn
// // })(FormComponent);

const FormWrapper = styled.div`
    max-width: 360px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 50px;
`;
const FormHeading = styled.div`
    font-size: 30px;
    text-align: center;
    margin-bottom: 25px;
`;
const Form = styled.form`
    width: 100%;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.08);
    background: transparent;
    padding: 25px;
`;
const ButtonSubmit = styled.button`
    width: 100%;
    height: 36px;
    border: none;
    background: green;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
`;
