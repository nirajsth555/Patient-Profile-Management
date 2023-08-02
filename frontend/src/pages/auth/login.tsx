import { Link } from 'react-router-dom';
import { PUBLIC_ROUTES } from '../../constants/routes';
import { useLoginForm } from '../../hooks/form/auth/useLoginForm';

export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useLoginForm({
        defaultValues: {
            email: '',
            password: ''
        },
        onSuccess: () => {
            console.log('success')
        },
        onError: () => {
            console.log('error')
        }
    })

    return (
        <>
            <div className="title"><span>Login Form</span></div>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <i className="fas fa-user" />
                    <input type="text" placeholder="Email" {...register("email")} name='email' />
                    {errors.email && <p className="error">{errors.email.message}</p>}
                </div>
                <div className="row">
                    <i className="fas fa-lock" />
                    <input type="password" placeholder="Password" {...register("password")} name='password' />
                    {errors.password && <p className="error">{errors.password.message}</p>}
                </div>
                <div className="row button">
                    <input type="submit" value="Login" />
                </div>
                <div className="signup-link">
                    Not a member?
                    <Link to={PUBLIC_ROUTES.SIGNUP}>Signup</Link>
                </div>
            </form>
        </>
    )
}