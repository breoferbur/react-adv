import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyTextInput, MySelect, MyCheckbox } from '../components';

import '../styles/styles.css';

export const FormikAbstraction = () => {

    return (
        <div>
            <h1>Formik Abstraction</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    jobType: '',
                    terms: false,
                }}
                onSubmit={((values) => {
                    console.log(values)
                })}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Must have 15 characters or less')
                        .required('Required'),
                    lastName: Yup.string()
                        .max(10, 'Must have 10 characters or less')
                        .required('Required'),
                    email: Yup.string()
                        .required('Required')
                        .email('Invalid email format'),
                    jobType: Yup.string()
                        .required('Required')
                        .notOneOf(['it-junior'], 'Option not valid'),
                    terms: Yup.boolean()
                        .oneOf([true], 'Please accept the terms')
                })}>
                {(formik) => (
                    <Form>

                        <MyTextInput
                            type="text"
                            name="firstName"
                            label="First Name"
                            placeholder="Write name"
                        />

                        <MyTextInput
                            type="text"
                            name="lastName"
                            label="Last Name"
                            placeholder="Write last name"
                        />

                        <MyTextInput
                            type="text"
                            name="email"
                            label="Email Address"
                            placeholder="Write email"
                        />
                        
                        <MySelect name="jobType" label="Job type" >
                            <option value="">Select an option</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="it-senior">IT Senior</option>
                            <option value="it-junior">IT Junior</option>
                        </MySelect>

                        <MyCheckbox label="Terms and conditions" name="terms"/>

                        <button type="submit">Submit</button>
                    </Form>
                )
                }
            </Formik>


        </div>
    )
}
