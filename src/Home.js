import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import './home.css'
import './timeline.css'

import videoimage from '../src/assets/images/video-placeholder.jpg'
import icon01 from '../src/assets/images/feature-tile-icon-01.svg'
import icon02 from '../src/assets/images/feature-tile-icon-02.svg'
import icon03 from '../src/assets/images/feature-tile-icon-03.svg'
import icon04 from '../src/assets/images/feature-tile-icon-04.svg'
import icon05 from '../src/assets/images/feature-tile-icon-05.svg'
import icon06 from '../src/assets/images/feature-tile-icon-06.svg'

import tabsicon01 from '../src/assets/images/features-tabs-icon-01.svg'
import tabsicon02 from '../src/assets/images/features-tabs-icon-02.svg'
import tabsicon03 from '../src/assets/images/features-tabs-icon-03.svg'
import tabsicon04 from '../src/assets/images/features-tabs-icon-04.svg'

import tabsimage from '../src/assets/images/features-tabs-image.png'
import cardImage01 from '../src/assets/images/news-image-01.jpg'
import cardImage02 from '../src/assets/images/news-image-02.jpg'
import cardImage03 from '../src/assets/images/news-image-03.jpg'

import success from '../src/assets/images/correct.svg'


function Home() {
    return (<>

        <div style={{ backgroundColor: '#02021e', height: '700px', borderBottomRightRadius: '100% 99px' }}>

            <div className="bgimg container w-75 d-flex mb-5 " >
                <div className="w-50 mt-5 pt-5 pe-5">
                    <p className="fonnt text-white " style={{ fontSize: '50px' }}>Leading Template For Startup</p>
                    <p className="fs-4  text-secondary pe-5">Our landing page template works on all devices, so you only have to
                        set it up once, and get beautiful results forever.</p>

                    <div className="w-75 d-flex ">
                        <button type="button" className="btn btn-primary text-light fs-5">Pricing and plan</button>
                        <button type="button" className="btn btn-secondary fs-5 mx-3    ">Learn more</button>
                    </div>
                </div>
                <div className="w-50 mt-5">
                    <img src={videoimage} className=" me-5 mb-5"
                        style={{ height: '400px', width: '500px' }} alt="videoimage" />
                </div>
            </div>
        </div>
        <section>
            <div className=" container w-75  d-flex flex-wrap justify-content-between mt-5">
                <div className="w mt-5  px-3 ">
                    <img src={icon01} alt="icon01"
                        className="bg-primary rounded-circle my-3" />
                    <h2 className="fonnt fs-3">Robust Workflow</h2>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat.</p>
                </div>
                <div className="w mt-5  px-3 " >
                    <img src={icon02} alt="icon02"
                        className="bg-primary rounded-circle my-3" />
                    <h2 className="fonnt fs-3">Robust Workflow</h2>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat.</p>
                </div>
                <div className="w mt-5 px-3 ">
                    <img src={icon03} alt="icon03"
                        className="bg-primary rounded-circle my-3" />
                    <h2 className="fonnt fs-3">Robust Workflow</h2 >
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat.</p>
                </div>
                <div className="w mt-5 px-3 ">
                    <img src={icon04} alt="icon04"
                        className="bg-primary rounded-circle my-3" />
                    <h2 className="fonnt fs-3">Robust Workflow</h2>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat.</p>
                </div>
                <div className="w mt-5 px-3 ">
                    <img src={icon05} alt="icon05"
                        className="bg-primary rounded-circle my-3" />
                    <h2 className="fonnt fs-3">Robust Workflow</h2>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat.</p>
                </div>
                <div className="w mt-5 px-3 ">
                    <img src={icon06} alt="icon06"
                        className="bg-primary rounded-circle my-3" />
                    <h2 className="fonnt fs-3">Robust Workflow</h2>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat.</p>
                </div>
            </div>
        </section>
        <div className="container mt-5 w-75 text-center ">
            <hr />
            <h2 className="fonnt  mt-5 mb-3 pt-5" style={{ fontSize: '50px' }}>Built exclusively for you</h2>
            <div className="px-5 mx-5">
                <p className="fs-4 px-5 mx-5">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.

                </p>
            </div>
            <div className=" w-75 container d-flex justify-content-center ">
                <div className="w-25">
                    <img src={tabsicon01} alt="feature-tabs-icon-01"
                        className="img-thumbnail rounded-circle mt-3 mb-2" />
                    <p className="fs-5 text-dark"> Internal Feedback</p>
                </div>
                <div className="w-25">
                    <img src={tabsicon02} alt="feature-tile-icon-02"
                        className="img-thumbnail rounded-circle mt-3 mb-2" />
                    <p className="fs-5 text-dark"> Internal Feedback</p>
                </div>
                <div className="w-25">
                    <img src={tabsicon03} alt="feature-tile-icon-03"
                        className="img-thumbnail rounded-circle mt-3 mb-2" />
                    <p className="fs-5 text-dark"> Internal Feedback</p>
                </div>
                <div className="w-25 ">
                    <img src={tabsicon04} alt="feature-tile-icon-04"
                        className="img-thumbnail rounded-circle mt-3 mb-2" />
                    <p className="fs-5 text-dark"> Internal Feedback</p>
                </div>
            </div>
            <div className="container px-5 pb-5">
                <img src={tabsimage} alt="tabs"
                    className="w-100 img-thumbnail" />
            </div>
        </div>
        <div style={{ backgroundColor: '#eef7fa' }} className="pb-5 bgimg2" >
            <hr />
            <div className="container mt-5 w-75 text-center ">
                <h2 className="fonnt  mt-5 mb-3 " style={{ fontSize: '50px' }}>Product news and updates</h2>
                <div className="px-5 mx-5 bb-5">
                    <p className="fs-4 px-5 mx-5 pb-5">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt
                        mollit anim id est laborum consequat.
                    </p>
                </div>
                <div className="container mt-3 d-flex justify-content-around ">

                    <div className="card  " style={{ width: '30%' }}>
                        <img className="card-img-top" src={cardImage01} alt="Card"
                            style={{ width: '100%' }} />
                        <div className="card-body text-start">
                            <h4 className="card-title fs-3">How to build anything</h4>
                            <p className="card-text fs-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex</p>
                            <Link href="#" className=" no ps-0  ">Read more<i
                                className="bi bi-arrow-right-square text-primary fs-5 m-2"></i></Link>
                        </div>
                    </div>
                    <div className="card  " style={{ width: '30%' }}>
                        <img className="card-img-top" src={cardImage02} alt="Card"
                            style={{ width: '100%' }} />
                        <div className="card-body text-start">
                            <h4 className="card-title fs-3">How to build anything</h4>
                            <p className="card-text fs-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex</p>
                            <Link href="#" className=" no ps-0  ">Read more<i
                                className="bi bi-arrow-right-square text-primary fs-5 m-2"></i></Link>
                        </div>
                    </div>
                    <div className="card" style={{ width: '30%' }}>
                        <img className="card-img-top" src={cardImage03} alt="Card"
                            style={{ width: '100%' }} />
                        <div className="card-body text-start">
                            <h4 className="card-title fs-3">How to build anything</h4>
                            <p className="card-text fs-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex</p>
                            <Link href="#" className=" no  ps-0  ">Read more<i
                                className="bi bi-arrow-right-square text-primary fs-5 m-2"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container mt-5 w-75 text-center ">
            <h2 className="fonnt  mt-5  " style={{ fontSize: '50px' }}>Product roadmap</h2>
            <div className="px-5 mx-5 ">
                <p className="fs-4 px-5 mx-5 ">Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis
                    lectus nulla at volutpat diam ut venenatis tellus in ornare.
                </p>
            </div>
            <section className="timeline-section">
                <div className="timeline-items">
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <h3>November 2019</h3>
                            <h2>Deployed a high-quality first release and conducted a market validation test</h2>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <h3>December 2019</h3>
                            <h2>Deployed a high-quality first release and conducted a market validation test</h2>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <h3>January 2019</h3>
                            <h2>Deployed a high-quality first release and conducted a market validation test</h2>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <h3>Feburary 2019</h3>
                            <h2>Deployed a high-quality first release and conducted a market validation test</h2>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <h3>March 2019</h3>
                            <h2>Deployed a high-quality first release and conducted a market validation test</h2>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <footer style={{ backgroundColor: '#0d0f1c' }} >
            <div className="container w-75 text-white">
                <h2 className="fonnt  pt-5 text-center " style={{ fontSize: '50px' }}>Simple, transparent pricing</h2>
                <div className="px-5 mx-5 ">
                    <p className="fs-4 px-5  mx-5 ">Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper
                        quis
                        lectus nulla at volutpat diam ut venenatis tellus in ornare.
                    </p>
                    <div className="align-center">

                        <p className="fs-5 text-light text-center"> How many users do you have ?</p>
                        <div className="range w-50 mx-auto">
                            <div className="sliderValue">
                                <span>100</span>
                            </div>
                            <div className="field ">
                                <div className="value left"> 0</div>
                                <input type="range" min="10" max="200" value="100" steps="1" />
                                <div className="value right">200</div>
                            </div>
                        </div>
                        <script src="./slider.js"></script>
                    </div>
                </div>
                <div className="d-flex justify-content-between w-100 my-5">
                    <div className=" bg-light pt-3 w p-4">
                        <p className="fs-4 "><span className="fs-1 text-dark"><i className="bi bi-currency-rupee"></i>49</span>/m</p>
                        <p className="fs-6  ">Lorem ipsum is a common text</p>
                        <hr className="w-25 text-dark" />
                        <h2 className="text-dark fs-6 p-2">What’s included</h2>
                        <hr className=" text-dark" />
                        <p className="fs-6"><img src={success} alt="success" /> Excepteur sint
                            occaecat velit</p>
                        <hr className=" text-dark" />
                        <p className="fs-6"><img src={success} alt="success" /> Excepteur sint
                            occaecat velit</p>
                        <hr className=" text-dark" />
                        <p className="fs-6"><img src={success} alt="success" /> Excepteur sint
                            occaecat velit</p>
                        <hr className=" text-dark" />
                        <p className="fs-6"><img src={success} alt="success" /> Excepteur sint
                            occaecat velit</p>
                        <hr className=" text-dark" />
                        <p className="fs-6"><img src={success} alt="success" /> Excepteur sint
                            occaecat velit</p>
                        <hr className=" text-dark" />
                        <Link href="#" className="btn btn-primary p-2 w-100">Start free trile </Link>
                    </div>
                    <div className=" bg-light pt-3 w p-4">
                        <p className="fs-4 "><span className="fs-1 text-dark"><i className="bi bi-currency-rupee"></i>99</span>/m</p>
                        <p className="fs-6  ">Lorem ipsum is a common text</p>
                        <hr className="w-25 text-dark" />
                        <h2 className="text-dark fs-6 p-2">What’s included</h2>
                        <hr className=" text-dark" />
                        <p className="fs-6"><img src={success} alt="success" /> Excepteur sint
                            occaecat velit</p>
                        <hr className=" text-dark" />
                        <p className="fs-6"><img src={success} alt="success" /> Excepteur sint
                            occaecat velit</p>
                        <hr className=" text-dark" />
                        <p className="fs-6"><img src={success} alt="success" /> Excepteur sint
                            occaecat velit</p>
                        <hr className=" text-dark" />
                        <p className="fs-6"><img src={success} alt="success" /> Excepteur sint
                            occaecat velit</p>
                        <hr className=" text-dark" />
                        <p className="fs-6"><img src={success} alt="success" /> Excepteur sint
                            occaecat velit</p>
                        <hr className=" text-dark" />
                        <Link href="#" className="btn btn-primary p-2 w-100">Start free trile </Link>
                    </div>
                    <div className=" bg-light pt-3 w p-4">
                        <p className="fs-4 "><span className="fs-1 text-dark"><i className="bi bi-currency-rupee"></i>149</span>/m</p>
                        <p className="fs-6  ">Lorem ipsum is a common text</p>
                        <hr className="w-25 text-dark" />
                        <h2 className="text-dark fs-6 p-2">What’s included</h2>
                        <hr className=" text-dark" />
                        <p className="fs-6"><img src={success} alt="success" /> Excepteur sint
                            occaecat velit</p>
                        <hr className=" text-dark" />
                        <p className="fs-6"><img src={success} alt="success" /> Excepteur sint
                            occaecat velit</p>
                        <hr className=" text-dark" />
                        <p className="fs-6"><img src={success} alt="success" /> Excepteur sint
                            occaecat velit</p>
                        <hr className=" text-dark" />
                        <p className="fs-6"><img src={success} alt="success" /> Excepteur sint
                            occaecat velit</p>
                        <hr className=" text-dark" />
                        <p className="fs-6"><img src={success} alt="success" /> Excepteur sint
                            occaecat velit</p>
                        <hr className=" text-dark" />
                        <Link href="#" className="btn btn-primary p-2 w-100">Start free trile </Link>
                    </div>
                </div>
            </div>
            <div className="container w-75  mt-5 ">
                <div className="p-5  d-flex justify-content-between" style={{ backgroundColor: '#0000b7' }}>
                    <h2 className="fs-2 text-light w-75 ">For previewing layouts and visual?</h2> <div className="w-25 bg-light d-flex"><input type="search" placeholder="Your best email" className="border-0 fs-6 ps-2" /><i className="bi bi-arrow-right-square fs-4 m-auto  "></i></div>
                </div>
            </div>

        </footer>


    </>)
}

export default Home