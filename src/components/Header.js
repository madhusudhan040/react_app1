import React from "react"
import logo from '../assets/images/logo.svg'
import { NavLink } from "react-router-dom"



function Header() {
    const MainMenu = ['secondary page']
    return (
        <>
            <div className="container-fluid align-items-center p-1  bg-light">
                <div className=" d-flex  justify-content-center  justify-content-around     " >
                    <div className=" d-flex flex-row  " style={{ height: '70px' }}>
                        <img src={logo} className="img-thumbnail " style={{ height: '75px', width: '200px' }} alt="mainlogo " />
                    </div>
                    <div >
                        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
                        <nav className="navbar navbar-expand-sm bg-warning navbar-light   ">
                            <div className="container-fluid d-flex justify-content-center ">

                                <ul className="navbar-nav fs-4 ">
                                    {
                                        MainMenu.map((data, id) => <li key={id} className="nav-item active px-3  ">
                                            <NavLink className="nav-link" activeClassName="bg-light text-danger" to={`/${data.toLowerCase()}`} >{data}</NavLink>
                                        </li>)
                                    }
                                </ul>



                            </div>
                        </nav>

                    </div>
                </div>
            </div>

        </>
    )

}
export default Header

