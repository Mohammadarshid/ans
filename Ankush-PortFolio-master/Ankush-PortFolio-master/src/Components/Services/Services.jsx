import React,{useEffect} from 'react'

export const Services = () => {
    useEffect(()=>{
        document.getElementById('header').classList.add('header-top')

    },[])
    return (
        <div>
            <section id="services" className="services">
                <div className="container">

                    <div className="section-title">
                        <h2>Projects</h2>
                        <p>My Projects</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <a href="https://github.com/ankushsss/DragProj" className='w-100'><div className="icon-box w-100">
                                    <div className="icon"><i className="fab fa-github"></i></div>
                                    <h4><a href="">Facebook Clone</a></h4>
                                    <p>Based on MERN App</p>
                                </div></a>
                           
                        </div>

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                            <a href="https://github.com/ankushsss/DragProj" className='w-100'>
                                <div className="icon-box w-100">
                                    <div className="icon"><i className="fab fa-github"></i></div>
                                    <h4><a href="">Drag App</a></h4>
                                    <p>Based on React App</p>
                                </div>
                            </a>
                        </div>

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                            <a href="https://github.com/ankushsss/ReactFront" className='w-100'>
                                    <div className="icon-box w-100">
                                    <div className="icon"><i className="fab fa-github"></i></div>
                                    <h4><a href="">React Test App</a></h4>
                                    <p>React App</p>
                                </div>
                            </a>
                        </div>

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                             <a href="https://github.com/ankushsss/GroupChat" className='w-100'>
                                <div className="icon-box w-100">
                                    <div className="icon"><i className="fab fa-github"></i></div>
                                    <h4><a href="">Group Chat</a></h4>
                                    <p>MERN App</p>
                                </div>
                            </a>
                        </div>

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                            <a href="https://github.com/ankushsss/MusicApp-" className='w-100'>
                                <div className="icon-box w-100">
                                    <div className="icon "><i className="fab fa-github"></i></div>
                                    <h4><a href="">Music App</a></h4>
                                    <p>Based on music App in Html,Css,Php</p>
                                </div>
                            </a>
                        </div>

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                            <a href="https://github.com/ankushsss/DragProj" className='w-100'>
                                <div className="icon-box w-100">
                                    <div className="icon"><i className="fab fa-github"></i></div>
                                    <h4><a href="">DeepInterview</a></h4>
                                    <p>Based on Django App</p>
                                </div>
                            </a>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    )
}
