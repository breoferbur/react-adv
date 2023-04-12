import { useForm } from '../hooks/useForm';
import '../styles/styles.css';

export const RegisterPage = () => {

    const { name, email, password1, password2, formData, isValidEmail, onChange, onSubmit, onReset } = useForm({
        name: '',
        email: '',
        password1: '',
        password2: '',
    });

    return (
        <div>
            <h1>Register Page</h1>
            <form noValidate onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={onChange}
                    className={`${name.trim().length <= 0 && 'has-error'}`} />
                {name.trim().length <= 0 && <span>Este campo es necesario</span>}
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    className={`${!isValidEmail(email) && 'has-error'}`} />
                {!isValidEmail(email) && <span>Email no es válido</span>}
                <input
                    type="password"
                    placeholder="Password"
                    name="password1"
                    value={password1}
                    onChange={onChange}
                    className={`${password1.trim().length <= 0 && 'has-error'}`} />
                {password1.trim().length <= 0 && <span>Este campo es necesario</span>}
                {password1.trim().length > 0 && password1.trim().length < 6 && <span>El tamaño mínimo del password son 6 caracteres</span>}
                <input
                    type="password"
                    placeholder="Repeat password"
                    name="password2"
                    value={password2}
                    onChange={onChange}
                    className={`${password2.trim().length <= 0 && 'has-error'}`} />
                {password2.trim().length <= 0 && <span>Este campo es necesario</span>}
                {password2.trim().length >= 0 && password2 !== password1 && <span>Las contraseñas deben ser idénticas</span>}
                <button
                    type="submit">Create</button>
                <button
                    type="button"
                    onClick={onReset}>Reset</button>
            </form>
        </div>
    )
}
