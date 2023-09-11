import React, { useState } from "react";
import Logo from "../assets/important/logo.svg";
import Hamburger from "../assets/links/Hamburger.svg";
import "./css/Navbar.css";
import { Link } from 'react-scroll';

const Navbar = () => {

    let [open,setOpen]=useState(false);

    return (
        <div className={`z-10 flex items-center justify-between bg-main2 bg-opacity-80 bg-clip-padding overflow-hidden w-[100dvw] fixed top-0 left-0 h-[78px] ${open ? 'max-md:h-[400px] ':'h-[78px]'}`}>
            <div className={`flex pl-[50px] md:pl-[100px] items-center justify-start ${open ? 'max-md:hidden ':'h-[78px]'}`}>
                <a href="https://leobaratieri.com" rel="noreferrer">
                    <img src={Logo} alt="logo" className="object-contain md:w-[60px] md:h-[60px] w-[50px] h-[50px]" />
                </a>
            </div>

            <div onClick={()=>setOpen(!open)} className='overflow-hidden w-[40px] h-[40px] absolute right-12 top-6 cursor-pointer md:hidden'>
                <img className="w-[40px] h-[40px]" name={open ? 'close':'menu'} src={Hamburger} alt="burger"/>
            </div>

            <div className={`md:pr-[100px] md:flex md:items-center gap-[25px] md:gap-[45px] absolute md:static md:bg-transparent left-0 w-[100dvw] md:w-auto max-md:bg-main1 max-md:bg-opacity-0 max-md:transition-all max-md:duration-400 max-md:ease-in flex justify-center items-center flex-col md:flex-row py-[20px] md:py-[0px] ${open ? 'top-20 ':'top-[-490px]'}`}>
                <Link to="home" spy={true} offset={0} duration={1000}>
                    <h3 className="font-redhatdisplay font-pb text-p2 text-neutral8 text-center" class="link">Home</h3>
                </Link>
                <Link to="about" spy={true} offset={-200} duration={1000}>
                    <h3 className="font-redhatdisplay font-pb text-p2 text-neutral8 text-center" class="link">About</h3>
                </Link>
                <Link to="projects" spy={true} offset={-70} duration={1000}>
                    <h3 className="font-redhatdisplay font-pb text-p2 text-neutral8 text-center" class="link">Projects</h3>
                </Link>
                <Link to="contact" spy={true} offset={-100} duration={1500} className="group">
                    <div className="w-[143px] transition duration-250 ease-out md:group-hover:bg-main3 group-hover:border-main3 flex py-[11px] px-[15px] items-center rounded-[10px] border-[0.5px] border-solid border-neutral8 bg-main1 cursor-pointer justify-center">
                        <h3 className="text-center transition duration-250 ease-out md:group-hover:text-neutral1 font-redhatdisplay font-pb text-p2 text-neutral8">Contact Me</h3>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;