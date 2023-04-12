import { ErrorMessage, useField } from 'formik';

interface TextInputProps {
    label: string;
    name: string;
    [x: string]: any;
}

export const MyCheckbox = ({ label, ...props }: TextInputProps) => {

    const [field, meta] = useField({ ...props, type: 'checkbox' });

    return (
        <>
            <label>
                <input type="checkbox" {...field} {...props} />
                {label}
            </label>
            <ErrorMessage name={props.name} component="span" className="error-class" />
            {/* {
                meta.touched && meta.error && (
                    <span className="error">{meta.error}</span>
                )
            } */}
        </>
    )
}
