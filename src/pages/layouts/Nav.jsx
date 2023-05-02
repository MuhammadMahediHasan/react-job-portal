import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
                <Link to="/" className="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5">
                    <h1 className="m-0 text-default">e</h1>
                    <h1 className="m-0 text-primary">Jobs</h1>
                </Link>
                <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <Link to="/" className="nav-item nav-link active"> Home </Link>
                        <Link to="/about" className="nav-item nav-link"> About </Link>

                        <div className="nav-item dropdown">
                            <Link to="/jobs" className="nav-link dropdown-toggle"
                                  data-bs-toggle="dropdown"> Jobs </Link>

                            <div className="dropdown-menu rounded-0 m-0">
                                <Link to="/job-list" className="dropdown-item"> Job List </Link>
                                <Link to="/job-details" className="dropdown-item"> Job Detail </Link>
                            </div>
                        </div>
                        <div className="nav-item dropdown">
                            <Link to="/jobs" className="nav-link dropdown-toggle"
                                  data-bs-toggle="dropdown"> Pages </Link>

                            <div className="dropdown-menu rounded-0 m-0">
                                <Link to="/job-category" className="dropdown-item"> Job Category </Link>
                                <Link to="/testimonial" className="dropdown-item"> Testimonial </Link>
                                <Link to="/profile" className="dropdown-item"> Profile </Link>
                                <Link to="/404" className="dropdown-item"> 404 </Link>
                            </div>
                        </div>
                        <Link to="/contact" className="nav-item nav-link"> Contact </Link>
                        <div className="nav-item dropdown">
                            <Link to="#"
                                  className="nav-link dropdown-toggle"
                                  data-bs-toggle="dropdown">
                                Sign Up | Sign In
                            </Link>
                            <ul className="dropdown-menu rounded-0 m-0 sub-menu auth">
                                <li>
                                    <div className="image">
                                        <img src="/img/manager.png" alt="employer"/>
                                    </div>
                                    <div>
                                        <h3>Employer</h3>
                                        <p>Login or Register to find the best candidate</p>
                                        <ul className="buttons">
                                            <Link to="/login">Login</Link>
                                            <Link to="/employer/register">Register</Link>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div className="image">
                                        <img src="/img/contract.png" alt="candidate"/>
                                    </div>
                                    <div>
                                        <h3>Job seeker</h3>
                                        <p>Login or Register to grab the best opportunity</p>
                                        <div className="buttons">
                                            <Link to="/login">Login</Link>
                                            <Link to="/job-seeker/register">Register</Link>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Nav;