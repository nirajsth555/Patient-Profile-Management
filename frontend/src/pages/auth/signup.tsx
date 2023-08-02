export default function Login() {
    return (
        <>
            <div className="title"><span>Login Form</span></div>
            <form>
                <div className="row">
                    <i className="fas fa-user" />
                    <input type="text" placeholder="Email" name='email' />
                </div>
                <div className="row">
                    <i className="fas fa-lock" />
                    <input type="password" placeholder="Password" name='password' />
                </div>
                <div className="row button">
                    <input type="submit" value="Login" />
                </div>
                <div className="signup-link">
                    Not a member?
                </div>
            </form>
        </>
    )
}