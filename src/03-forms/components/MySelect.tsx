import { ErrorMessage, useField } from 'formik';

interface TextInputProps {
    label: string;
    name: string;
    placeHolder?: string;
    [x: string]: any;
}

export const MySelect = ({ label, ...props }: TextInputProps) => {

    const [field, meta] = useField(props);

    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select {...field} {...props} />
            <ErrorMessage name={props.name} component="span" className="error-class" />
            {/* {
                meta.touched && meta.error && (
                    <span className="error">{meta.error}</span>
                )
            } */}
        </>
    )
}
