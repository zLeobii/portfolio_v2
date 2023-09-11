import Logo from "../assets/important/logo.svg";

import X from "../assets/links/x2.svg";
import Linkedin from "../assets/links/linkedin2.svg";
import Github from "../assets/links/github2.svg";

import Xactive from "../assets/links/x2active.svg";
import Linkedinactive from "../assets/links/linkedin2active.svg";
import Githubactive from "../assets/links/github2active.svg";

import "./css/Navbar.css";
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <div className="h-auto w-[100dvw] flex py-[50px] px-[10px] justify-center items-center bg-blackk bg-cover">
            <div className="flex w-[330px] md:w-[500px] xl:w-[1162px] flex-col items-center gap-[70px]">
                <div className="flex gap-[30px] flex-col items-center self-stretch">
                    <a href="https://leobaratieri.com" rel="noreferrer"><img src={Logo} alt="logo" className="w-[60px] h-[60px]" /></a>
                    <div className="flex justify-center items-center gap-[45px]">
                        <Link to="home" spy={true} offset={0} duration={1500}>
                            <h3 className="font-redhatdisplay font-pb text-p3 text-neutral8 text-center" class="link">Home</h3>
                        </Link>
                        <Link to="about" spy={true} offset={-200} duration={1500}>
                            <h3 className="font-redhatdisplay font-pb text-p3 text-neutral8 text-center" class="link">About</h3>
                        </Link>
                        <Link to="projects" spy={true} offset={-70} duration={1000}>
                            <h3 className="font-redhatdisplay font-pb text-p3 text-neutral8 text-center" class="link">Projects</h3>
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center gap-[27px] self-stretch">
                    <div className="flex justify-center items-center gap-[30px]">
                        <a href="https://twitter.com/leobaratieri" rel="noreferrer" target="_blank" className="group">
                            <img src={X} alt="x" className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] transition duration-250 ease-out sm:group-hover:hidden"/>
                            <img src={Xactive} alt="x" className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] transition duration-250 ease-out hidden sm:group-hover:flex"/>
                        </a>

                        <a href="https://www.linkedin.com/in/leobaratieri/" rel="noreferrer" target="_blank" className="group">
                            <img src={Linkedin} alt="linkedin" className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] transition duration-250 ease-out sm:group-hover:hidden"/>
                            <img src={Linkedinactive} alt="linkedin" className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] transition duration-250 ease-out hidden sm:group-hover:flex"/>
                        </a>

                        <a href="https://github.com/zLeobii" rel="noreferrer" target="_blank" className="group">
                            <img src={Github} alt="github" className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] transition duration-250 ease-out sm:group-hover:hidden"/>
                            <img src={Githubactive} alt="github" className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] transition duration-250 ease-out hidden sm:group-hover:flex"/>
                        </a>
                    </div>
                    <p className="font-redhatdisplay font-pr text-p3 text-main3 text-center">Handcrafted by me</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;