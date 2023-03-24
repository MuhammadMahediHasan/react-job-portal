const Login = () => {
    return (
        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Login </h1>
                    <div className="row g-4">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <div className="wow fadeInUp" data-wow-delay="0.5s">
                                <p className="mb-4">The contact form is currently inactive..</p>
                                <form>
                                    <div className="row g-3">
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="email" className="form-control" id="email"
                                                       placeholder="Your Email"/>
                                                <label htmlFor="email">Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="password" className="form-control" id="password"
                                                       placeholder="Your Password"/>
                                                <label htmlFor="password">Your Password</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3" type="submit">Login
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;