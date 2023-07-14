import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'

import testimonialimage01 from './assets/images/testimonial-image-01.jpg'
import testimonialimage02 from './assets/images/testimonial-image-02.jpg'
import testimonialimage03 from './assets/images/testimonial-image-03.jpg'

import clients01 from './assets/images/clients-01.svg'
import clients02 from './assets/images/clients-02.svg'
import clients03 from './assets/images/clients-03.svg'
import clients04 from './assets/images/clients-04.svg'
import clients05 from './assets/images/clients-05.svg'

import team_member01 from './assets/images/team-member-01.jpg'
import team_member02 from './assets/images/team-member-02.jpg'
import team_member03 from './assets/images/team-member-03.jpg'
import team_member04 from './assets/images/team-member-04.jpg'
import team_member05 from './assets/images/team-member-05.jpg'
import team_member06 from './assets/images/team-member-06.jpg'

import split_image01 from './assets/images/features-split-image-01.png'
import split_image02 from './assets/images/features-split-image-02.png'
import split_image03 from './assets/images/features-split-image-03.png'

import image_placeholder from './assets/images/image-placeholder.jpg'


function About() {
    return (<>
            <div style={{ background: '#02021e', height: '700px', borderBottomRightRadius: '100% 99px' }} >
                <div class="bgimg3">
                    <div class=" container w-75 d-flex flex-column mb-5 ">
                        <div class="container w-75 text-center p-5">
                            <h2 style={{ fontSize: '50px' }} class="fonnt text-light">Engage Your Visitors with a beautiful
                                template
                            </h2>
                        </div>
                        <div class="d-flex  justify-content-around p-2 mb-5 ">
                            <div class="p-4 w  bg-light shadow  mb-3 bg-body rounded">
                                <img src={testimonialimage01}
                                    class=" rounded-circle w-25 px-2 my-2" alt="testimonial" />
                                <p class="ps-2 mt-2">
                                    — Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                    nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt
                                    mollit anim id est laborum cillum dolore eu fugiat culpa qui officia deserunt mollit
                                    anim id est
                                    laborum.
                                </p>
                                <hr />
                                <p class="ps-1">Kendra Kinson / <Link href="#" class="text-primary no ">AppName</Link></p>
                            </div>
                            <div class="p-4 w  bg-light shadow  mb-3 bg-body rounded">
                                <img src={testimonialimage02}
                                    class=" rounded-circle w-25 px-2 my-2" alt="testimonial" />
                                <p class="ps-2 mt-2">
                                    — Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                    nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt
                                    mollit anim id est laborum cillum dolore eu fugiat culpa qui officia deserunt mollit
                                    anim id est
                                    laborum.
                                </p>
                                <hr />
                                <p class="ps-1">Emilia Jovic / <Link href="#" class="text-primary no ">AppName</Link></p>
                            </div>
                            <div class="p-4 w  bg-light shadow  mb-3 bg-body rounded">
                                <img src={testimonialimage03}
                                    class=" rounded-circle w-25 px-2 my-2" alt="testimonial" />
                                <p class="ps-2 mt-2">
                                    — Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                    nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt
                                    mollit anim id est laborum cillum dolore eu fugiat culpa qui officia deserunt mollit
                                    anim id est
                                    laborum.
                                </p>
                                <hr />
                                <p class="ps-1">Mark Walker / <Link href="#" class="text-primary no ">AppName</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        <div class="container w-75 px-5 mt-5">
            <hr />
            <div class="text-center">
                <img src={clients01} class="m-4" alt="clients-01" />
                <img src={clients02} class="m-4" alt="clients-02" />
                <img src={clients03} class="m-4" alt="clients-03" />
                <img src={clients04} class="m-4" alt="clients-04" />
                <img src={clients05} class="m-4" alt="clients-05" />
            </div>
            <hr />
        </div>
        <div class="container mt-5 w-75 text-center ">

            <h2 class="fonnt  mt-5 mb-3 pt-5" style={{ fontSize: '50px' }}>Get to know us</h2>
            <div class="px-5 mx-5">
                <p class="fs-5 px-5 mx-5">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.
                </p>
            </div>
            <div class=" container d-flex flex-wrap justify-content-around ">
                <div class="w text-center mt-2 p-2">
                    <img src={team_member01} alt="team-member-01.jpg"
                        class="w-75 my-3 p-4" />
                    <p class="text-dark fs-4 m-0">Markus Hasinika</p>
                    <p class="text-primary fs-5 p-0"> Founder & CEO</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                </div>
                <div class="w text-center mt-2 p-2">
                    <img src={team_member02} alt="team-member-02.jpg"
                        class="w-75 my-3 p-4" />
                    <p class="text-dark fs-4 m-0">Markus Hasinika</p>
                    <p class="text-primary fs-5 p-0"> Founder & CEO</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                </div>
                <div class="w text-center mt-2 p-2">
                    <img src={team_member03} alt="team-member-03.jpg"
                        class="w-75 my-3 p-4" />
                    <p class="text-dark fs-4 m-0">Markus Hasinika</p>
                    <p class="text-primary fs-5 p-0"> Founder & CEO</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                </div>
                <div class="w text-center mt-2 p-2">
                    <img src={team_member04} alt="team-member-04.jpg"
                        class="w-75 my-2 p-4" />
                    <p class="text-dark fs-4 m-0">Markus Hasinika</p>
                    <p class="text-primary fs-5 p-0"> Founder & CEO</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                </div>
                <div class="w text-center mt-2 p-2">
                    <img src={team_member05} alt="team-member-05.jpg"
                        class="w-75 my-2 p-4" />
                    <p class="text-dark fs-4 m-0">Markus Hasinika</p>
                    <p class="text-primary fs-5 p-0"> Founder & CEO</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                </div>
                <div class="w text-center mt-2 p-2">
                    <img src={team_member06} alt="team-member-06.jpg"
                        class="w-75 my-2 p-4" />
                    <p class="text-dark fs-4 m-0">Markus Hasinika</p>
                    <p class="text-primary fs-5 p-0"> Founder & CEO</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                </div>
            </div>
        </div>
        <div class="pb-5 container w-75 ">
            <hr />
            <div class="mt-5  text-center ">
                <h2 class="fonnt  mt-5 mb-3 " style={{ fontSize: '50px' }}>Wirkflow that just work</h2>
                <div class="px-5 mx-5 bb-5">
                    <p class="fs-5 pb-5">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                        mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.
                    </p>
                </div>
                <div class="w-100 d-flex">
                    <div class="w-50 text-start p-5">
                        <h2 class="fonnt  mt-5 mb-3 fonnt  ">Data-driven insights</h2>
                        <p class="fs-5 pb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    <div class="w-50 p-3">
                        <img src={split_image01}
                            class="w-100 shadow p-3 mb-5 bg-body rounded" alt="split" />
                    </div>
                </div>
                <div class="w-100 d-flex">
                    <div class="w-50 p-3">
                        <img src={split_image02}
                            class="w-100 shadow p-3 mb-5 bg-body rounded" alt="split" />
                    </div>
                    <div class="w-50 text-start p-5">
                        <h2 class="fonnt  mt-5 mb-3 fonnt  ">Data-driven insights</h2>
                        <p class="fs-5 pb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>
                <div class="w-100 d-flex">
                    <div class="w-50 text-start p-5">
                        <h2 class="fonnt  mt-5 mb-3 fonnt  ">Data-driven insights</h2>
                        <p class="fs-5 pb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    <div class="w-50 p-3">
                        <img src={split_image03}
                            class="w-100 shadow p-3 mb-5 bg-body rounded" alt="split" />
                    </div>
                </div>
            </div>
        </div>
        <div class="container mt-5 w-75  ">
            <hr />
            <div class="px-5 mx-5  ">
                <h2 class="fonnt mt-5 p-5 mx-5 " style={{ fontSize: '45px' }}>Lorem ipsum is placeholder text commonly used in
                    the graphic.
                </h2>

                <p class="fs-5 px-5 mx-5 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p class="fs-5 px-5 mx-5 ">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </p>
                <div class="px-5 py-0">
                    <img src={image_placeholder} class="w-100 p-5 pb-0"
                        alt="/placeholde" />
                    <p class="ps-5 ms-5">A super-nice image &#128512;</p>
                    <div class="px-5">
                        <div class="p-5 fs-5">
                            <h2 class="mb-4">Flexibility</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat sint occaecat cupidatat non proident, sunt
                                in
                                culpa qui officia deserunt mollit anim id est laborum.</p>
                            <ul class="p p-3 ">
                                <li>Lorem ipsum dolor sit amet, consectetur.</li>
                                <li>Lorem ipsum dolor sit amet, consectetur.</li>
                                <li>Lorem ipsum dolor sit amet, consectetur.</li>
                            </ul>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="px-5 mx-5 text-center  ">
                <h2 class="fonnt mt-5 p-5 mx-5 " style={{ fontSize: '45px' }}>Newsletter modal is a component commonly used
                </h2>
                <div>
                    <Link href="#" class="btn btn-success btn-lg w-25 m-5 ">open model</Link>
                </div>
            </div>
            <hr />
            <div class="px-5 mx-5 text-center  mb-5 ">
                <h2 class="fonnt mt-5 p-5 mx-5 " style={{ fontSize: '45px' }}> Button is a component commonly used
                </h2>
                <div class="d-flex flex-wrap justify-content-center mb-5">
                    <Link href="#" class="btn btn-primary btn-lg w-25 mx-5 my-3 ">Get started now</Link>
                    <Link href="#" class="btn btn-success btn-lg w-25 mx-5 my-3 ">Get started now</Link>
                    <Link href="#" class="btn btn-dark btn-lg w-25 mx-5 my-3 ">Get started now</Link>
                    <Link href="#" class="btn btn-secondary btn-lg w-25 mx-5 my-3 ">Get started now</Link>
                </div>
            </div>

            <hr />
            <div class="px-5 mx-5 text-center   ">
                <h2 class="fonnt mt-5 p-5 mx-5 " style={{ fontSize: '45px' }}> Input form is a component commonly used </h2>
                <div class=" d-flex justify-content-center mt-5">
                    <input type="search" placeholder="Your best email" class=" fs-6 ps-2 me-3 w-50" /> <button
                        class="btn btn-lg bg-primary text-light fs-6 ">Early access</button>
                </div>
                <div class=" d-flex justify-content-center mt-4">
                    <input type="search" value="hello@Madhusudhan.com" class=" fs-6 ps-2 me-3 w-50" /> <button
                        class="btn btn-lg bg-primary text-light fs-6 ">Early access</button>
                </div>
                <div class=" d-flex justify-content-center mt-4">
                    <input type="search" placeholder="Your best email"
                        class=" fs-6 ps-2 me-3 w-50 border border-danger " /> <button
                            class="btn btn-lg bg-primary text-light fs-6 ">Early access</button>
                </div>
                <p class="text-danger fs-6 text-start pd">
                    something is wrong
                </p>
                <div class=" d-flex justify-content-center mt-4">
                    <input type="search" placeholder="Your best email"
                        class=" fs-6 ps-2 me-3 w-50 border border-success" /> <button
                            class="btn btn-lg bg-primary text-light fs-6 ">Early access</button>
                </div>
                <p class="text-success fs-6 text-start pd">
                    You've done it.
                </p>
            </div>
            <div id="accordion ">
                <div class="card w-75  mx-auto">
                    <div class="card-header">
                        <Link class="btn" data-bs- my-2toggle="collapse" href="#collapseOne">
                            Nisi porta lorem mollis aliquam ut.
                        </Link>
                    </div>
                    <div id="collapseOne" class="collapse show" data-bs-parent="#accordion">
                        <div class="card-body">
                            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries
                            for previewing layouts and visual mockups. </div>
                    </div>
                </div>
                <div class="card w-75  mx-auto">
                    <div class="card-header">
                        <Link class="collapsed btn my-2" data-bs-toggle="collapse" href="#collapseTwo">
                            Nisi porta lorem mollis aliquam ut.
                        </Link>
                    </div>
                    <div id="collapseTwo" class="collapse" data-bs-parent="#accordion">
                        <div class="card-body">
                            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries
                            for previewing layouts and visual mockups. </div>
                    </div>
                </div>
            </div>
            <div class="card w-75 mx-auto">
                <div class="card-header">
                    <Link class="collapsed btn my-2" data-bs-toggle="collapse" href="#collapseThree">
                        Nisi porta lorem mollis aliquam ut.
                    </Link>
                </div>
                <div id="collapseThree" class="collapse" data-bs-parent="#accordion">
                    <div class="card-body">
                        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for
                        previewing layouts and visual mockups. </div>
                </div>
            </div>
            <div class="card w-75 mx-auto">
                <div class="card-header">
                    <Link class="collapsed btn my-2" data-bs-toggle="collapse" href="#collapsefour">
                        Nisi porta lorem mollis aliquam ut.
                    </Link>
                </div>
                <div id="collapsefour" class="collapse" data-bs-parent="#accordion">
                    <div class="card-body">
                        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for
                        previewing layouts and visual mockups. </div>
                </div>
            </div>
            <div class="card w-75 mx-auto ">
                <div class="card-header">
                    <Link class="collapsed btn my-2" data-bs-toggle="collapse" href="#collapsefive">
                        Nisi porta lorem mollis aliquam ut.
                    </Link>
                </div>
                <div id="collapsefive" class="collapse mb-5" data-bs-parent="#accordion">
                    <div class="card-body">
                        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for
                        previewing layouts and visual mockups. </div>
                </div>
            </div>
        </div>
        <div >
            <div class="container w-75  enquiry ">
                <div class="p-5  d-flex justify-content-between" style={{ backgroundColor: '#0000b7' }}>
                    <h2 class="fs-2 text-light w-75 ">For previewing layouts and visual?</h2>
                    <div class="w-25 bg-light d-flex"><input type="search" placeholder="Your best email"
                        class="border-0 fs-6 ps-2" /><i class="bi bi-arrow-right-square fs-4 m-auto  "></i></div>
                </div>
            </div>
        </div>

    </>)
}
export default About
