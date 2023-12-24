import React, { useEffect } from 'react'


export const About = () => {
    useEffect(() => {
        document.getElementById('header').classList.add('header-top')

    }, [])
    return (
        <div>
            <section className="about">


                <div id="data" className="about-me container">

                    <div className="section-title">
                        <h2>About</h2>
                        <p>Learn more about me</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4" data-aos="fade-right">
                            <img src="assets/img/ankush3.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                            <h3>MERN Stack || Frontend Developer at Neurodynamic AI || React || Next || UI/UX Design || Photoshop</h3>
                            <p className="fst-italic">
                                I am  MERN-stack web developer and UI/UX javascript specialist.
                                Check out my Projects, React components at the code laboratory.
                                Feel free to take a look at my latest projects on the web portfolio page.

                            </p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>14 Jan 2000</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+917974829419</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Indore</span></li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>22</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Intregated Mca (10th SEM)</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>ankushsss99@gmail.com</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="interests container">

                                <div className="section-title">
                                    <h2>Skills</h2>
                                </div>

                                <div className="row">
                                    <div className="col-lg-3 col-md-4">
                                        <div className="icon-box" style={{ color: "#47aeff" }}>
                                            <i className="fab fa-node-js"></i>
                                            <h3>Node</h3>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                                        <div className="icon-box" style={{ color: "#47aeff" }}>
                                            <i className="fab fa-react"></i>
                                            <h3>React</h3>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                                        <div className="icon-box">
                                            <i className="fab fa-node-js"></i>
                                            <h3>Express</h3>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
                                        <div className="icon-box">
                                            <i className="fab fa-node-js"></i>
                                            <h3>Typescript</h3>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 mt-4">
                                        <div className="icon-box">
                                            <i className="fab fa-node-js"></i>
                                            <h3>Javascript</h3>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 mt-4">
                                        <div className="icon-box" style={{ color: "#47aeff" }}>
                                            <i className="fab fa-python"></i>

                                            <h3>Python </h3>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 mt-4">
                                        <div className="icon-box" style={{ color: "#47aeff" }}>
                                            <i className="fab fa-python"></i>
                                            <h3>Django</h3>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 mt-4">
                                        <div className="icon-box" style={{ color: "#47aeff" }}>
                                            <i className="fab fa-html5"></i>
                                            <h3>Html</h3>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 mt-4">
                                        <div className="icon-box" style={{ color: "#b2904f" }}>

                                            <i className="fab fa-css3-alt"></i>
                                            <h3>Css</h3>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 mt-4">
                                        <div className="icon-box">
                                            <i className="far fa-clipboard"></i>
                                            <h3>Bootstrap</h3>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 mt-4">
                                        <div className="icon-box" >
                                            <i className="far fa-clipboard"></i>
                                            <h3>PhotoShop</h3>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 mt-4">
                                        <div className="icon-box">
                                            <i className="fab fa-node-js"></i>
                                            <h3>Next.js</h3>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>

                {/* <div className="skills container">

                    <div className="section-title">
                        <h2>Skills</h2>
                    </div>

                    <div className="row skills-content">

                        <div className="col-lg-6">
                        <div className="progress">
                                <span className="skill">React <i className="val">70%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar bg-success " style={{width:"75%"}} role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="progress">
                                <span className="skill">Express <i className="val">80%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar bg-success " style={{width:"60%"}} role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">JavaScript <i className="val">75%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar bg-success" style={{width:"70%"}} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="progress">
                                <span className="skill">Material UI <i className="val">50%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar bg-success" style={{width:"50%"}} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-6">

                         
                            <div className="progress">
                                <span className="skill">HTML <i className="val">100%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar bg-success " style={{width:"65%"}} role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">CSS <i className="val">90%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar bg-success " style={{width:"65%"}} role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">Photoshop <i className="val">55%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar bg-success " style={{width:"55%"}} role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div> */}

            </section>
        </div>
    )
}
