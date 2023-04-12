import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikComponents = () => {

    return (
        <div>
            <h1>Formik Components</h1>

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
                        <label htmlFor="firstName">First Name</label>
                        <Field type="text" name="firstName" />
                        <ErrorMessage name="firstName" component="span" />

                        <label htmlFor="lastName">Last Name</label>
                        <Field type="text" name="lastName" />
                        <ErrorMessage name="lastName" component="span" />

                        <label htmlFor="email">Email Address</label>
                        <Field type="text" name="email" />
                        <ErrorMessage name="email" component="span" />

                        <label htmlFor="jobType">Job type</label>
                        <Field as="select" name="jobType">
                            <option value="">Select an option</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="it-senior">IT Senior</option>
                            <option value="it-junior">IT Junior</option>
                        </Field>
                        <ErrorMessage name="jobType" component="span" />

                        <label>
                            <Field type="checkbox" name="terms" />
                            Terms and conditions
                        </label>
                        <ErrorMessage name="terms" component="span" />

                        <button type="submit">Submit</button>
                    </Form>
                )
                }
            </Formik>


        </div>
    )
}
