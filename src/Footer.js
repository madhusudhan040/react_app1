import React from "react";
import logo from  '../src/assets/images/logo.svg';
import {Link} from 'react-router-dom';

import facrbook from './assets/images/facebook.svg'
import instagram from './assets/images/instagram.svg'
import twitter from './assets/images/twitter.svg'
import linkedin from './assets/images/linkedin.svg'
import pinterest from './assets/images/pinterest.svg'
import github from './assets/images/github.svg'

const size="backgroundColor:'blue',height:'50px'"

function Footer() {
   return( <>
 
    <footer style={{backgroundColor: '#0d0f1c' }}class="pb-5 mt-5  ">

<div class="container w-75 d-flex ">
    <div class="w-25 mt-5 ">
        <div class=" mt-4 pt-5 ">
            <Link href="index.html"><img src={logo} alt="mainlogo"  /></Link>
        </div>
        <div class="mt-3">
            <Link href="#" class="text-secondary no ">© 2020 Tidy, all rights reserved</Link>
        </div>
    </div>
    <div class="w-25 mt-5  ">
        <div class="mt-4 pt-5 d-flex flex-column ">
            <p class="text-light"> <strong>COMPANY</strong></p>
            <Link href="#" class="no">Dummy text used</Link>
            <Link href="#" class="no">The purpose of lorem</Link>
            <Link href="#" class="no">Filler text can be very useful</Link>
            <Link href="#" class="no">Be on design</Link>
        </div>
    </div>
    <div class="w-25  mt-5 ">
        <div class="mt-4 pt-5 d-flex flex-column ">
            <p class="text-light"> <strong> USES CASES</strong></p>
            <Link href="#" class="no">Consectetur adipiscing</Link>
            <Link href="#" class="no">Lorem Ipsum is place</Link>
            <Link href="#" class="no">Excepteur sint</Link>
            <Link href="#" class="no">Occaecat cupidatat</Link>
        </div>
    </div>
    <div class="w-25 mt-5  ">
        <div class="mt-4 pt-5 d-flex flex-column ">
            <p class="text-light"> <strong> DOCS</strong></p>
            <Link href="#" class="no">The purpose of lorem</Link>
            <Link href="#" class="no">Dummy text used</Link>
            <Link href="#" class="no">Excepteur sint</Link>
            <Link href="#" class="no">Occaecat cupidatat</Link>
        </div>
    </div>
</div>
<div class="container w-75  d-flex ">
    <div class="container w-50  ">
        <div class="mt-5 ">
            <Link href="#" class="no  ">Contact</Link>
            <Link href="#" class="no px-3 ">About us</Link>
            <Link href="#" class="no px-3 ">FAQ's</Link>
            <Link href="#" class="no px-3 ">Support</Link>
        </div>
    </div>
    <div class="container w-50  ">
        <div class="mt-5 text-end ">
            <Link href="#" class="no px-3 text-primary fs-5 "><img style={{size}} src={facrbook} alt="facebook" /></Link>
            <Link href="#" class="no px-3 text-primary fs-5 "><img style={{size}} src={instagram} alt="instagram" /></Link>
            <Link href="#" class="no px-3 text-primary fs-5 "><img style={{size}} src={twitter} alt="twitter" /></Link>
        </div>
        <div class="text-end ">
            <Link href="#" class="no px-3 text-primary fs-5 "><img style={{size}} src={linkedin} alt="linkedin" /></Link>
            <Link href="#" class="no px-3 text-primary fs-5 "><img style={{size}} src={pinterest} alt="pinterest" /></Link>
            <Link href="#" class="no px-3 text-primary fs-5 "><img style={{size}} src={github} alt="github" /></Link>
        </div>
    </div>
</div>
    {/* <div className="container w-75 d-flex justify-content-between ">
            <div className=" mt-4 ">
                <Link href="index.html"><img src={logo} alt="logo" /></Link>
            </div>
            <div className="mt-3 ">
                <Link href="#" className="no px-3 text-primary fs-5 "><i className="bi bi-facebook"></i></Link>
                <Link href="#" className="no px-3 text-primary fs-5 "><i className="bi bi-twitter"></i></Link>
                <Link href="#" className="no px-3 text-primary fs-5 "><i className="bi bi-instagram"></i></Link>
            </div>
        </div> 
        <div className="container w-75 d-flex justify-content-between ">
            <div className=" mt-4 ">
                <Link href="#" className="text-secondary no">© 2020 Tidy, all rights reserved</Link>
            </div>
            <div className="mt-3 ">
                <Link href="#" className="no px-3 text-secondary ">Contact</Link>
                <Link href="#" className="no px-3 text-secondary ">About us</Link>
                <Link href="#" className="no px-3 text-secondary ">FAQ's</Link>
                <Link href="#" className="no px-3 text-secondary ">Support</Link>
            </div>
        </div>  */}
</footer>
</>)
}

export default Footer