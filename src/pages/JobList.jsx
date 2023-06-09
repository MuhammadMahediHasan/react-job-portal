const JobList = () => {
    return (
        <>
            <div>
                <div className="page-header">
                    <div className="overlay">
                        <div className="container">
                            <h3>Search for a Job</h3>
                            <div className="row sm-gutters">
                                <div className="col-sm-12">
                                    <form>
                                        <div className="form-group">
                                            <input type="text" name="title" placeholder="Job title, skills, keywords etc..."
                                                   className="form-control" autoComplete="off"/>
                                            <button type="submit" className="search-button">
                                                <i className="fa fa-search"></i>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="row sm-gutters mt-3">
                                <div className="col-sm-4">
                                    <div className="form-group select">
                                        <select name="industry" placeholder="Industry" className="form-control">
                                            <option>Category</option>
                                            <option>Education</option>
                                            <option>Real State/Developers</option>
                                            <option>Information Technology</option>
                                            <option>Garments/Textile</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="form-group select">
                                        <select name="industry" placeholder="Industry" className="form-control">
                                            <option>Job Package</option>
                                            <option>Classic</option>
                                            <option>Premium</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="form-group select">
                                        <select name="industry" placeholder="Industry" className="form-control">
                                            <option>Select Skill</option>
                                            <option>General</option>
                                            <option>Special Skilled</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-5">
                    <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Job Listing</h1>
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="sidebar">
                                <div className="sidebar-item">
                                    <h4 className="title">Industry</h4>
                                    <ul>
                                        <li>
                                            <input type="checkbox"/>
                                            IT/Telecommunication <span>40</span>
                                        </li>
                                        <li>
                                            <input type="checkbox"/>
                                            Education <span>24</span>
                                        </li>
                                        <li>
                                            <input type="checkbox"/>
                                            Real State <span>30</span>
                                        </li>
                                        <li>
                                            <input type="checkbox"/>
                                            Garments/Textile <span>15</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="sidebar">
                                <div className="sidebar-item">
                                    <h4 className="title">Qualification</h4>
                                    <ul>
                                        <li>Masters <span>40</span></li>
                                        <li>Honors <span>24</span></li>
                                        <li>Diploma <span>30</span></li>
                                        <li>HSC/SSC <span>15</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="sidebar">
                                <div className="sidebar-item">
                                    <h4 className="title">Experience</h4>
                                    <ul>
                                        <li>More Then 5 Years <span>40</span></li>
                                        <li>4 to 5 Years <span>24</span></li>
                                        <li>3 to 4 Years <span>30</span></li>
                                        <li>2 to 3 Years <span>15</span></li>
                                        <li>1 to 2 Years <span>5</span></li>
                                        <li>Less Then 1 Years <span>0</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-9">
                            <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.3s">

                                <div className="job-item p-4 mb-4">
                                    <div className="row g-4">
                                        <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid border rounded"
                                                 src="/img/com-logo-1.jpg" alt="" style={{width: '80px', height: '80px'}}/>
                                            <div className="text-start ps-4">
                                                <h5 className="mb-3">Software Engineer</h5>
                                                <span className="text-truncate me-3"><i
                                                    className="fa fa-map-marker-alt text-primary me-2"></i>New York, USA</span>
                                                <span className="text-truncate me-3"><i
                                                    className="far fa-clock text-primary me-2"></i>Full Time</span>
                                                <span className="text-truncate me-0"><i
                                                    className="far fa-money-bill-alt text-primary me-2"></i>$123 - $456</span>
                                            </div>
                                        </div>
                                        <div
                                            className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                            <div className="d-flex mb-3">
                                                <a className="btn btn-light btn-square me-3" href=""><i
                                                    className="far fa-heart text-primary"></i></a>
                                                <a className="btn btn-primary" href="">Apply Now</a>
                                            </div>
                                            <small className="text-truncate"><i
                                                className="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan,
                                                2045</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="job-item p-4 mb-4">
                                    <div className="row g-4">
                                        <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid border rounded"
                                                 src="/img/com-logo-2.jpg" alt="" style={{width: '80px', height: '80px'}}/>
                                            <div className="text-start ps-4">
                                                <h5 className="mb-3">Marketing Manager</h5>
                                                <span className="text-truncate me-3"><i
                                                    className="fa fa-map-marker-alt text-primary me-2"></i>New York, USA</span>
                                                <span className="text-truncate me-3"><i
                                                    className="far fa-clock text-primary me-2"></i>Full Time</span>
                                                <span className="text-truncate me-0"><i
                                                    className="far fa-money-bill-alt text-primary me-2"></i>$123 - $456</span>
                                            </div>
                                        </div>
                                        <div
                                            className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                            <div className="d-flex mb-3">
                                                <a className="btn btn-light btn-square me-3" href=""><i
                                                    className="far fa-heart text-primary"></i></a>
                                                <a className="btn btn-primary" href="">Apply Now</a>
                                            </div>
                                            <small className="text-truncate"><i
                                                className="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan,
                                                2045</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="job-item p-4 mb-4">
                                    <div className="row g-4">
                                        <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid border rounded"
                                                 src="/img/com-logo-3.jpg" alt="" style={{width: '80px', height: '80px'}}/>
                                            <div className="text-start ps-4">
                                                <h5 className="mb-3">Product Designer</h5>
                                                <span className="text-truncate me-3"><i
                                                    className="fa fa-map-marker-alt text-primary me-2"></i>New York, USA</span>
                                                <span className="text-truncate me-3"><i
                                                    className="far fa-clock text-primary me-2"></i>Full Time</span>
                                                <span className="text-truncate me-0"><i
                                                    className="far fa-money-bill-alt text-primary me-2"></i>$123 - $456</span>
                                            </div>
                                        </div>
                                        <div
                                            className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                            <div className="d-flex mb-3">
                                                <a className="btn btn-light btn-square me-3" href=""><i
                                                    className="far fa-heart text-primary"></i></a>
                                                <a className="btn btn-primary" href="">Apply Now</a>
                                            </div>
                                            <small className="text-truncate"><i
                                                className="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan,
                                                2045</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="job-item p-4 mb-4">
                                    <div className="row g-4">
                                        <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid border rounded"
                                                 src="/img/com-logo-4.jpg" alt="" style={{width: '80px', height: '80px'}}/>
                                            <div className="text-start ps-4">
                                                <h5 className="mb-3">Creative Director</h5>
                                                <span className="text-truncate me-3"><i
                                                    className="fa fa-map-marker-alt text-primary me-2"></i>New York, USA</span>
                                                <span className="text-truncate me-3"><i
                                                    className="far fa-clock text-primary me-2"></i>Full Time</span>
                                                <span className="text-truncate me-0"><i
                                                    className="far fa-money-bill-alt text-primary me-2"></i>$123 - $456</span>
                                            </div>
                                        </div>
                                        <div
                                            className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                            <div className="d-flex mb-3">
                                                <a className="btn btn-light btn-square me-3" href=""><i
                                                    className="far fa-heart text-primary"></i></a>
                                                <a className="btn btn-primary" href="">Apply Now</a>
                                            </div>
                                            <small className="text-truncate"><i
                                                className="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan,
                                                2045</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="job-item p-4 mb-4">
                                    <div className="row g-4">
                                        <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid border rounded"
                                                 src="/img/com-logo-5.jpg" alt="" style={{width: '80px', height: '80px'}}/>
                                            <div className="text-start ps-4">
                                                <h5 className="mb-3">Wordpress Developer</h5>
                                                <span className="text-truncate me-3"><i
                                                    className="fa fa-map-marker-alt text-primary me-2"></i>New York, USA</span>
                                                <span className="text-truncate me-3"><i
                                                    className="far fa-clock text-primary me-2"></i>Full Time</span>
                                                <span className="text-truncate me-0"><i
                                                    className="far fa-money-bill-alt text-primary me-2"></i>$123 - $456</span>
                                            </div>
                                        </div>
                                        <div
                                            className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                            <div className="d-flex mb-3">
                                                <a className="btn btn-light btn-square me-3" href=""><i
                                                    className="far fa-heart text-primary"></i></a>
                                                <a className="btn btn-primary" href="">Apply Now</a>
                                            </div>
                                            <small className="text-truncate"><i
                                                className="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan,
                                                2045</small>
                                        </div>
                                    </div>
                                </div>
                                <a className="btn btn-primary py-3 px-5" href="">Browse More Jobs</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default JobList;