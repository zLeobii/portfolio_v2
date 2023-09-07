import React, { useState } from 'react';
import Logo from "../assets/important/logo.svg";
import "./css/Navbar.css";
import { Link } from 'react-scroll';

const Navbar = () => {
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [mobile_link, setLinkClass] = useState("mobile-link unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burger menu change
    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked") || setLinkClass("mobile-link clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked") || setLinkClass("mobile-link unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)


    }

    return (
        <div className="flex w-[100dvw] h-[78px] justify-between items-center fixed">
            <div className="flex pl-[100px] items-center justify-start">
                <a href="https://leobaratieri.com" rel="noreferrer">
                    <img src={Logo} alt="logo" className="object-contain md:w-[60px] md:h-[60px] w-[50px] h-[50px]" />
                </a>
            </div>

            <div className="md:flex pr-[100px] gap-[45px] items-center hidden justify-end pt-[0.4em]">
                <Link to="home" spy={true} offset={0} duration={1000}>
                    <h3 className="font-redhatdisplay font-pb text-p2 text-neutral8" class="link">Home</h3>
                </Link>
                <Link to="about" spy={true} offset={0} duration={1000}>
                    <h3 className="font-redhatdisplay font-pb text-p2 text-neutral8" class="link">About</h3>
                </Link>
                <Link to="projects" spy={true} offset={0} duration={1000}>
                    <h3 className="font-redhatdisplay font-pb text-p2 text-neutral8" class="link">Projects</h3>
                </Link>
                <Link to="contact" spy={true} offset={0} duration={1000} className="group">
                    <div className="transition duration-250 ease-out group-hover:bg-main3 group-hover:border-main3 flex py-[11px] px-[15px] items-center rounded-[10px] border-[0.5px] border-solid border-neutral8 bg-main1 cursor-pointer">
                        <h3 className="transition duration-250 ease-out group-hover:text-neutral1 font-redhatdisplay font-pb text-p2 text-neutral8">Contact Me</h3>
                    </div>
                </Link>
            </div>

            <div class="burger-menu" onClick={updateMenu}>
                <div className={burger_class} ></div>
                <div className={burger_class} ></div>
                <div className={burger_class} ></div>
            </div>
            <div className={menu_class}>
                <h3 className={mobile_link} onClick={updateMenu} >Home</h3>
            </div>
        </div>
    );
};

export default Navbar;