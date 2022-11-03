import React from 'react'

const Register = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 m-auto">
                <div className="signup-container card card-body">
                    <h2 className="signup-header text-center my-4"><i className="fa fa-user-plus"></i> SignUp</h2>
                    <form method="post">
                        <div className="mb-2">
                            <label className="form-label">First Name</label>
                            <input type="text" name="first_name" className="form-control" />
                        </div>
                        <div className="mb-2">
                            <label className="form-label">Last Name</label>
                            <input type="text" name="last_name" className="form-control"/>
                        </div>
                        <div className="mb-2">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" name="email" />
                        </div>
                        <div className="mb-2">
                            <label className="form-label">Password</label>
                            <input type="password" name="password" className="form-control"/>
                        </div>
                        <div className="mb-2">
                            <label className="form-label">Confirm Password</label>
                            <input type="password" name="re_password" className="form-control"/>
                        </div>
                        <button type="submit" className="btn btn-primary">Register</button>
                    </form>
                    <p className="lead mt-4">Have An Account <a className="to_login" href="/login">Login</a></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register