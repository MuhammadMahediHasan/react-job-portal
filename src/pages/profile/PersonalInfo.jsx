export const PersonalInfo = () => {
    return (
        <>
            <div>
                <h5 className="mb-4 text-uppercase text-left">
                    <i className="fa fa-briefcase"></i> &nbsp; Personal Info
                </h5>

                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group text-left">
                            <label htmlFor="first_name">First Name</label>
                            <input type="text" className="form-control" id="first_name"/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group text-left">
                            <label htmlFor="last_name">Last Name</label>
                            <input type="text" className="form-control" id="first_name"/>
                        </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-lg-6">
                        <div className="form-group text-left">
                            <label htmlFor="email">Email</label>
                            <input type="text" className="form-control" id="email"/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group text-left">
                            <label htmlFor="contact_number">Contact Number</label>
                            <input type="text" className="form-control" id="contact_number"/>
                        </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-lg-6">
                        <div className="form-group text-left">
                            <label htmlFor="present_address">Present Address</label>
                            <input type="text" className="form-control" id="present_address"/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group text-left">
                            <label htmlFor="permanent_address">Permanent Address</label>
                            <input type="text" className="form-control" id="permanent_address"/>
                        </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-lg-12">
                        <div className="form-group text-left">
                            <label htmlFor="bio">Bio</label>
                            <input type="text" className="form-control" id="bio"/>
                        </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-lg-12">
                        <div className="form-group text-left">
                            <label htmlFor="title">Title</label>
                            <input type="text" className="form-control" id="title"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}