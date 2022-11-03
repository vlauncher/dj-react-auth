import React from 'react'

const Login = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 m-auto">
                <div className="login-container card card-body">
                    <h2 className="login-header text-center my-4"><i className="fas fa-sign-in-alt"></i> Login</h2>
                    <form method="post">
                        <div className="mb-2">
                            <label className="form-label">Email address</label>
                            <input type="email" name="email" className="form-control"/>
                        </div>
                        <div className="mb-2">
                            <label className="form-label">Password</label>
                            <input type="password" name="password" className="form-control"/>
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                    <p className="lead mt-4">Dont have an account? <a className="to_login" href="/register">SignUp</a></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login