function Login() {
  return (
    <div className="login_container">
        
        <form action="login_form">

            <input type="text" placeholder="ingrese su usuario" />
            <input type="password" placeholder="Ingrese su password" />

            <button>Login</button>

        </form>

    </div>
  )
}

export default Login