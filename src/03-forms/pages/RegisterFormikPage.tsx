import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';

import '../styles/styles.css';

export const RegisterFormikPage = () => {

    return (
        <div>
            <h1>Register Formik Page</h1>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: '',
                }}
                onSubmit={((values) => {
                    console.log(values)
                })}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .required('Required')
                        .min(2, 'Name must be 2 characters min')
                        .max(15, 'Name must be 2 characters max'),
                    email: Yup.string()
                        .required('Required')
                        .email('Invalid email format'),
                    password1: Yup.string()
                        .required('Required')
                        .min(6, 'Password must be 6 characters min'),
                    password2: Yup.string()
                        .required('Required')
                        .oneOf([Yup.ref('password1')], 'Must match "password" field value'),
                })}>
                {({handleReset}) => (
                    <Form>

                        <MyTextInput
                            type="text"
                            name="name"
                            label="Name"
                            placeholder="Write name"
                        />

                        <MyTextInput
                            type="text"
                            name="email"
                            label="Email"
                            placeholder="Write email"
                        />

                        <MyTextInput
                            type="password"
                            name="password1"
                            label="Password"
                            placeholder="Write password"
                        />

                        <MyTextInput
                            type="password"
                            name="password2"
                            label="Password"
                            placeholder="Repeat password"
                        />

                        <button type="submit">Submit</button>
                        <button type="button" onClick={handleReset}>Reset form</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
