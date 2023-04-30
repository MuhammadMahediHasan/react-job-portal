import React, {useState} from 'react';
import {PersonalInfo} from "./PersonalInfo";
import {ProfessionalInfo} from "./ProfessionalInfo";

export function Profile() {
    const [tab, setTab] = useState('personal-info');

    const handleTab = (tab) => {
        setTab(tab);
    }

    return (
        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-4 col-xl-4">
                            <div className="card-box text-center">
                                <img src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                     className="rounded-circle avatar-xl img-thumbnail" alt="profile-image"/>

                                <h4 className="mb-0">Nik G. Patel</h4>
                                <p className="text-muted">@webdesigner</p>

                                {/*<button type="button"*/}
                                {/*        className="btn btn-success btn-xs waves-effect mb-2 waves-light">Follow*/}
                                {/*</button>*/}
                                {/*<button type="button"*/}
                                {/*        className="btn btn-danger btn-xs waves-effect mb-2 waves-light">Message*/}
                                {/*</button>*/}

                                <div className="mt-3">
                                    {/*<h4 className="font-13 text-uppercase">About Me :</h4>*/}
                                    <p className="text-muted font-13 mb-3">
                                        Hi I'm Johnathn Deo,has been the industry's standard dummy text ever since
                                        the
                                        1500s, when an unknown printer took a galley of type.
                                    </p>

                                </div>

                                <div>
                                    <button type="button"
                                            className="mb-1 btn btn-block btn-outline-secondary"
                                            onClick={() => handleTab('personal-info')}>
                                        Personal Information
                                    </button>
                                    <button type="button"
                                            className="mb-1 btn btn-block btn-outline-secondary"
                                            onClick={() => handleTab('professional-info')}>
                                        Professional Information
                                    </button>
                                    <button type="button"
                                            className="mb-1 btn btn-block btn-outline-secondary"
                                            onClick={() => handleTab('educational-info')}>
                                        Educational Information
                                    </button>
                                    <br/>
                                    <button type="button"
                                            className="mb-1 btn btn-block btn-outline-secondary"
                                            onClick={() => handleTab('skills')}>
                                        Skills
                                    </button>
                                    <button type="button"
                                            className="btn btn-block btn-outline-secondary"
                                            onClick={() => handleTab('upload-resume')}>
                                        Upload Resume
                                    </button>
                                </div>
                            </div>

                            {/*<div className="card-box">*/}
                            {/*<h4 className="header-title">Skills</h4>*/}
                            {/*<p className="mb-3">Everyone realizes why a new common language would be desirable</p>*/}

                            {/*<div className="mt-2 pt-1">*/}
                            {/*    <h6 className="text-uppercase">ReactJs <span className="float-right">72%</span></h6>*/}
                            {/*    <div className="progress progress-sm m-0">*/}
                            {/*        <div className="progress-bar bg-purple" role="progressbar" aria-valuenow="72"*/}
                            {/*             aria-valuemin="0" aria-valuemax="100" style={{width: "72%"}}>*/}
                            {/*            <span className="sr-only">72% Complete</span>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            {/*</div>*/}

                        </div>

                        <div className="col-lg-8 col-xl-8">
                            <div className="card-box">

                                {tab === 'personal-info' &&
                                    <PersonalInfo/>
                                }
                                {tab === 'professional-info' &&
                                    <ProfessionalInfo/>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}