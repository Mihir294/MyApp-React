import React from 'react'
import './NavBar.css'
import logo from './burger.ico'   
import { Link } from 'react-router-dom'                                                


export default function NavBar() {

  return (
    <div>
           <nav>
        <div className="main container flex">
            <div className="main-logo flex">
                <Link  href="#" className="companylogo">
                    <img src={logo} alt="companylogo" width="30px"/>
                </Link>
                    <span className="heading">Burger's Point</span>
            </div>

            <div className="top flex">
                <ul className="main-list flex">
                    <li><Link className="hover fav-list1"  to="/home" >HOME</Link></li>
                   {/* <i class="fa-solid fa-house"></i> */}
                   <li>  <Link  className="hover fav-list2" to="/menu">MENU</Link></li>
                    <li><Link  className="hover fav-list3" to="/booking">BOOKINGS</Link></li>
                    <li><Link  className="hover fav-list4" to="/faq">FAQS</Link></li>
                </ul>
            </div>

            <div className="searchbar flex">
                <button className="button1 flex">
                        <i class="fa-solid fa-user"></i> <a href="/login" className="btnn">Login </a> 
                </button>
            </div>
        </div>
    </nav>
    </div>
  )
}
