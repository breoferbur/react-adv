import { Formik, Form } from "formik";
import * as Yup from 'yup';
import { MySelect, MyTextInput } from "../components";
import formJson from "../data/customForm.json";

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
    initialValues[input.name] = input.value;
    if (!input.validations) continue;
    let schema = Yup.string();
    for (const rule of input.validations) {
        if (rule.type === 'required') {
            schema = schema.required('Required');
        }
        if (rule.type === 'minLength') {
            schema = schema.min((rule as any).value || 2, `Name must be ${(rule as any).value || 2} characters or more`);
        }
        if (rule.type === 'email') {
            schema = schema.email('Wrong email format')
        }
        // ... Other rules
    }

    requiredFields[input.name] = schema;
};

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicForm = () => {
    return (
        <div>
            <h1>Dynamic Form</h1>

            <Formik
                initialValues={initialValues}
                onSubmit={(data) => {
                    console.log(data)
                }}
                validationSchema={validationSchema}
            >
                {(formik) => (
                    <Form noValidate>
                        {formJson.map(({ label, name, options, placeholder, type }) => {

                            if (type === 'email' || type === 'input' || type === 'password') {
                                return <MyTextInput
                                    key={name}
                                    type={(type as any)}
                                    name={name}
                                    placeholder={placeholder}
                                    label={label}
                                />
                            } else if (type === 'select') {
                                return (
                                    <MySelect
                                        key={name}
                                        name={name}
                                        label={label}
                                    >
                                        <option value="">Select an option</option>
                                        {
                                            options?.map(({ id, label }) => (
                                                <option key={id} value={id}>{label}</option>
                                            ))
                                        }
                                    </MySelect>
                                )
                            }
                            throw new Error(`Not suported type: ${type} `)
                        })}
                        <button type="submit">Submit</button>
                    </ Form>
                )}
            </Formik>
        </div>
    )
}
