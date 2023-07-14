import React from "react"
import logo from '../src/assets/images/logo.svg'
import { Link, NavLink } from "react-router-dom"



function Header() {
    const MainMenu = ['Home', 'About', 'Restapi']
    return (
        <>
            {/* <div className="container w-75 d-flex justify-content-between ">
                <div className=" mt-4 ">
                    <Link href="index.html"><img src={logo} alt="mainlogo" /></Link>
                </div>
                <div className="mt-3 ">
                    <Link href="./second.html" className="no text-secondary fs-4 mx-5">secondary page</Link>
                    <Link href="./signin.html" className="btn btn-primary fs-5 text-light ">sign up</Link>
                </div>
            </div> */}
            <div className="container-fluide"  style={{ backgroundColor: '#02021e' }}>
                <div className=" container w-75 d-flex justify-content-between " >
                    <div className=" m-5  ms-0" >
                        <img src={logo} alt="mainlogo" />
                    </div>

                    <div >
                        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
                        <nav className="navbar navbar-expand-sm mt-3  navbar-secondary  ">
                            <div className="container-fluid d-flex justify-content-center ">

                                <ul className="navbar-nav fs-4 ">
                                    {
                                        MainMenu.map((data, id) => <li key={id} className="nav-item active px-3  ">
                                            <NavLink className="nav-link" activeClassName="bg-light text-secondary" to={`/${data.toLowerCase()}`} >{data}</NavLink>
                                        </li>)
                                    }
                                </ul>
                                <Link href="./signin.html" className="btn btn-primary fs-5 text-light ">sign up</Link>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

        </>
    )

}
export default Header
