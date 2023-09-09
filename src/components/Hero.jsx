import "./css/Hero.css";
import Pfp from "../assets/important/pfp.png";
import X from "../assets/links/x.svg";
import Linkedin from "../assets/links/linkedin.svg";
import Github from "../assets/links/github.svg";
import Mail from "../assets/links/mail.svg";
import Xactive from "../assets/links/xactive.svg";
import Linkedinactive from "../assets/links/linkedinactive.svg";
import Githubactive from "../assets/links/githubactive.svg";
import Mailactive from "../assets/links/mailactive.svg";
import Line from "../assets/illustrations/line.svg";

const Hero = () => {
    return (
        <div id="home" className="flex w-[100dvw] pt-[125px] md:pt-[200px] items-center flex-col overflow-hidden">
            <div className="flex xl:w-[1162px] flex-col justify-center items-center gap-[30px] md:flex-row lg:gap-[96px] md:pt-[50px] overflow-hidden">
                <div className="md:hidden flex w-[250px] h-[250px] md:h-[344px] md:w-[344px] justify-center items-center overflow-hidden">
                    <img className='hero-img' src={Pfp} alt="pfp" />
                </div>

                <div className="gap-[14px] flex justify-center items-center h-auto w-auto xl:w-[720px]">
                    <img src={Line} alt="line" className="hidden md:flex max-xl:w-[15px] max-xl:h-[348px]"/>
                    <div className="flex flex-col justify-center items-center md:items-start gap-[20px] xl:gap-[40px] overflow-hidden">
                        <div className="flex flex-col justify-center items-center self-stretch gap-[24px] md:items-start overflow-hidden">
                            <h1 className="w-[330px] xl:w-[691px] font-montserrat font-h1 text-h3 xl:text-h1 text-neutral9 text-center md:text-left">Front-End <span className="text-main3">Developer</span> & Web <span className="text-main3">Designer</span></h1>
                            <p className="w-[330px] xl:w-[528px] font-redhatdisplay font-pr text-p2 xl:text-p1 text-neutral7 text-center md:text-left">I design and code beautifully simple things, and I love what I do.</p>
                        </div>

                        <div className="flex justify-center items-center gap-[24px] overflow-hidden">
                            <a href="https://twitter.com/leobaratieri" rel="noreferrer" target="_blank" className="group">
                                <img src={X} alt="x" className="w-[30px] h-[30px] lg:w-[37px] lg:h-[37px] transition duration-250 ease-out sm:group-hover:hidden"/>
                                <img src={Xactive} alt="x" className="w-[30px] h-[30px] lg:w-[37px] lg:h-[37px] transition duration-250 ease-out hidden sm:group-hover:flex"/>
                            </a>

                            <a href="https://www.linkedin.com/in/leobaratieri/" rel="noreferrer" target="_blank" className="group">
                                <img src={Linkedin} alt="linkedin" className="w-[30px] h-[30px] lg:w-[37px] lg:h-[37px] transition duration-250 ease-out sm:group-hover:hidden"/>
                                <img src={Linkedinactive} alt="linkedin" className="w-[30px] h-[30px] lg:w-[37px] lg:h-[37px] transition duration-250 ease-out hidden sm:group-hover:flex"/>
                            </a>

                            <a href="https://github.com/zLeobii" rel="noreferrer" target="_blank" className="group">
                                <img src={Github} alt="github" className="w-[30px] h-[30px] lg:w-[37px] lg:h-[37px] transition duration-250 ease-out sm:group-hover:hidden"/>
                                <img src={Githubactive} alt="github" className="w-[30px] h-[30px] lg:w-[37px] lg:h-[37px] transition duration-250 ease-out hidden sm:group-hover:flex"/>
                            </a>

                            <a href="mailto:leob0372@gmail.com" rel="noreferrer" target="_blank" className="group">
                                <img src={Mail} alt="mail" className="w-[30px] h-[30px] lg:w-[37px] lg:h-[37px] transition duration-250 ease-out sm:group-hover:hidden"/>
                                <img src={Mailactive} alt="mail" className="w-[30px] h-[30px] lg:w-[37px] lg:h-[37px] transition duration-250 ease-out hidden sm:group-hover:flex"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="hidden md:flex w-[250px] h-[250px] md:h-[330px] md:w-[330px] xl:h-[362px] xl:w-[362px] justify-end items-start overflow-hidden">
                    <img className='hero-img' src={Pfp} alt="pfp" />
                </div>
            </div>
        </div>
    );
};

export default Hero;