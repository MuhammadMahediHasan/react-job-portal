const EmployerRegister = () => {
    return (
        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Register </h1>
                    <div className="row g-4">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <div className="wow fadeInUp" data-wow-delay="0.5s">
                                <form>
                                    <div className="row mt-2">
                                        <div className="col-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="company-name"
                                                       placeholder="Company Name"/>
                                                <label htmlFor="company-name">Company Name</label>
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
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <select className="form-control" id="company-name"
                                                        placeholder="Company Type">
                                                    <option>Select</option>
                                                </select>
                                                <label htmlFor="company-name">Company Type</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row mt-2">
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea className="form-control" id="company-name"
                                                          placeholder="Company Description">
                                                </textarea>
                                                <label htmlFor="company-name">Company Description</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="company-name"
                                                       placeholder="Business/ Trade License No"/>
                                                <label htmlFor="company-name">Business/ Trade License No</label>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="company-name"
                                                       placeholder="Business BIN/ TIN No"/>
                                                <label htmlFor="company-name">Business BIN/ TIN No</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="company-name"
                                                       placeholder="RL No (Only for Recruiting Agency)"/>
                                                <label htmlFor="company-name">RL No (Only for Recruiting Agency)</label>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="company-name"
                                                       placeholder="Company's Website"/>
                                                <label htmlFor="company-name">Company's Website</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="company-name"
                                                       placeholder="Company's facebook profile"/>
                                                <label htmlFor="company-name">Company's facebook profile</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="company-name"
                                                       placeholder="Company's linkedin profile"/>
                                                <label htmlFor="company-name">Company's linkedin profile</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="company-name"
                                                       placeholder="Company's youtube channel"/>
                                                <label htmlFor="company-name">Company's youtube channel</label>
                                            </div>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="row mt-2">
                                        <div className="col-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="company-name"
                                                       placeholder="Contact person’s Name"/>
                                                <label htmlFor="company-name">Contact person’s Name</label>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="company-name"
                                                       placeholder="Contact person’s Designation"/>
                                                <label htmlFor="company-name">Contact person’s Designation</label>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EmployerRegister;