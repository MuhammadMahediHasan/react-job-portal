const EmploymentRegister = () => {
    return (
        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Register </h1>
                    <div className="row g-4">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <div className="wow fadeInUp" data-wow-delay="0.5s">
                                <form>
                                    <form>
                                        <div className="row mt-2">
                                            <div className="col-6">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control" id="company-name"
                                                           placeholder="Full Name"/>
                                                    <label htmlFor="company-name">Full Name</label>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control" id="company-location"
                                                           placeholder="Your Email"/>
                                                    <label htmlFor="company-location">Company Location</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mt-2">
                                            <div className="col-6">
                                                <div className="form-floating">
                                                    <input type="date" className="form-control" id="company-location"
                                                           placeholder="Your Email"/>
                                                    <label htmlFor="company-location">Date of birth</label>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="form-floating">
                                                    <select className="form-control" id="company-name"
                                                            placeholder="Country">
                                                        <option>Select</option>
                                                    </select>
                                                    <label htmlFor="company-name">Country</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mt-2">
                                            <div className="col-6">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control" id="company-name"
                                                           placeholder="Contact person’s Phone"/>
                                                    <label htmlFor="company-name">Contact person’s Phone</label>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control" id="company-name"
                                                           placeholder="Email Address"/>
                                                    <label htmlFor="company-name">Email Address</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-2">
                                            <div className="col-6">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control" id="company-name"
                                                           placeholder="Password"/>
                                                    <label htmlFor="company-name">Password</label>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control" id="company-name"
                                                           placeholder="Retype Password"/>
                                                    <label htmlFor="company-name">Retype Password</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-5">
                                            <div className="col-12">
                                                <button className="btn btn-primary w-100 py-3" type="submit">Register
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EmploymentRegister;