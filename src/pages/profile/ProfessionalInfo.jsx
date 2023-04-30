import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const ProfessionalInfo = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div>
                <div className="row">
                    <div className="col-lg-6">
                        <h5 className="mb-4 text-uppercase text-left">
                            <i className="fa fa-briefcase"></i> &nbsp; Experience
                        </h5>
                    </div>
                    <div className="col-lg-6">
                        <i type="button" className="fa fa-edit" onClick={handleShow}
                           style={{float: 'right'}}></i>
                    </div>
                </div>

                <div className="row text-left">
                    <div className="col-lg-10">
                        <h5>Company Name</h5>
                        <strong>Designation</strong> <br/>
                        <small>Jan 2020 - Dec 2023 | Dhaka Bangladesh</small>
                        <p>Write something about experience.</p>
                    </div>
                    <div className="col-lg-2">
                        <i className="fa fa-edit"></i> &nbsp;
                        <i className="fa fa-trash"></i>
                    </div>
                </div>
                <div className="row text-left">
                    <div className="col-lg-10">
                        <h5>Company Name</h5>
                        <strong>Designation</strong> <br/>
                        <small>Jan 2020 - Dec 2023 | Dhaka Bangladesh</small>
                        <p>Write something about experience.</p>
                    </div>
                    <div className="col-lg-2">
                        <i className="fa fa-edit" data-toggle="modal" data-target="#exampleModalCenter"></i> &nbsp;
                        <i className="fa fa-trash"></i>
                    </div>
                </div>


                <Modal show={show} onHide={handleClose} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row mt-2">
                            <div className="col-lg-12 mt-2">
                                <div className="form-group text-left">
                                    <label htmlFor="company_name">Company Name</label>
                                    <input type="text" className="form-control" id="company_name"/>
                                </div>
                            </div>
                            <div className="col-lg-12 mt-2">
                                <div className="form-group text-left">
                                    <label htmlFor="designation">Designation</label>
                                    <input type="text" className="form-control" id="designation"/>
                                </div>
                            </div>
                            <div className="col-lg-6 mt-2">
                                <div className="form-group text-left">
                                    <label htmlFor="from">From</label>
                                    <input type="date" className="form-control" id="from"/>
                                </div>
                            </div>
                            <div className="col-lg-6 mt-2">
                                <div className="form-group text-left">
                                    <label htmlFor="from">To</label>
                                    <input type="date" className="form-control" id="from"/>
                                </div>
                            </div>
                            <div className="col-lg-12 mt-2">
                                <div className="form-group text-left">
                                    <label htmlFor="address">Address</label>
                                    <input type="text" className="form-control" id="address"/>
                                </div>
                            </div>
                            <div className="col-lg-12 mt-2">
                                <div className="form-group text-left">
                                    <label htmlFor="summary">Summary</label>
                                    <textarea rows="2" className="form-control" id="summary"/>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    )
}