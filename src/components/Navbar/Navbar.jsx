import React, { Component } from 'react';
import logo from "../../assets/images/logo.png";
import search from "../../assets/images/search-icon.png";
import Logo from '../Logo/Logo';
import NavbarButton from '../NavbarButton/NavbarButton';
import "./style.css";
class Navbar extends Component {
    render() {
        return ( 
            <>
                <div className='navbarWrapper'>
                    <Logo logo={logo}/>
                    <ul className='navbarList'>
                        <li className='navbarItem'>
                            <a className='navbarLink' href='/#'>Home</a>
                        </li>
                        <li className='navbarItem'>
                            <a className='navbarLink' href='/#'>About</a>
                        </li>
                        <li className='navbarItem'>
                            <a className='navbarLink' href='/#'>Special</a>
                        </li>
                        <li className='navbarItem'>
                            <a className='navbarLink' href='/#'>Menu</a>
                        </li>
                        <li className='navbarItem'>
                            <a className='navbarLink' href='/#'>Blogs</a>
                        </li>
                        <li className='navbarItem'>
                            <img className='navbarSearch' src={search} alt='search'/>
                        </li>
                    </ul>
                    <NavbarButton/>
                </div>
            </>
        );
    }
}
export default Navbar;
