import Illustration1 from "../assets/illustrations/illustration1.svg";
import Illustration2 from "../assets/illustrations/illustration2.svg";

import Html5 from "../assets/skills/HTML5.svg";
import Css3 from "../assets/skills/CSS3.svg";
import Javascript from "../assets/skills/JAVASCRIPT.svg";
import Reactjs from "../assets/skills/REACT.svg";
import Three from "../assets/skills/THREE.svg";
import Tailwind from "../assets/skills/TAILWIND.svg";
import Figma from "../assets/skills/FIGMUND.svg";

import Html5active from "../assets/skills/HTML5active.svg";
import Css3active from "../assets/skills/CSS3active.svg";
import Javascriptactive from "../assets/skills/JAVASCRIPTactive.svg";
import Reactjsactive from "../assets/skills/REACTactive.svg";
import Threeactive from "../assets/skills/THREEactive.svg";
import Tailwindactive from "../assets/skills/TAILWINDactive.svg";
import Figmaactive from "../assets/skills/FIGMUNDactive.svg";

import No from "../assets/illustrations/no.svg";
import Yes from "../assets/illustrations/yes.svg";

const OfferAndSkills = () => {
    return (
        <div className="flex w-[330px] md:w-auto flex-col justify-center items-center gap-[75px]">
            <div className="flex flex-col items-center gap-[30px] xl:gap-[50px]">
                <div className="flex flex-col items-center gap-[10px]">
                    <div className="flex flex-col items-center">
                        <p className="font-redhatdisplay font-pb text-p3 text-main3 text-center">WHAT DO YOU GET FROM ME</p>
                        <h1 className="font-montserrat font-h1 text-h3 md:text-h2 text-neutral8 text-center">What I Offer</h1>
                    </div>
                    <p className="font-redhatdisplay font-pr text-p3 md:text-p2 text-neutral7 text-center">There is a problem many agencies and businesses face.</p>
                </div>
                <div className="flex flex-col xl:flex-row xl:gap-[162px] justify-center items-center gap-[75px]">

                    <div className="flex flex-col justify-center items-start gap-[25px] py-[10px] px-[10px] md:py-[50px] md:px-[50px] bg-main1 rounded-[20px] border-solid border-neutral9 border-[1.5px]">
                        <div className="flex w-[310px] md:w-[400px] flex-col justify-center items-center gap-[28px]">
                            <img src={Illustration1} alt="illustration1" className="w-[175px] h-[175px] md:w-[200px] md:h-[200px]" />
                            <h3 className="font-montserrat font-h1 text-h3 text-neutral8 text-center">Having a Bad Website</h3>
                            <p className="font-redhatdisplay font-pr text-p3 text-neutral7 text-center">This is what having a bad website causes</p>
                        </div>
                        <div className="flex w-[310px] md:w-[312px] items-start gap-[15px] flex-col">
                            <div className="flex items-start gap-[15px]">
                                <img src={No} alt="no" className="w-[25px] h-[25px]" />
                                <p className="font-redhatdisplay font-pr text-p3 text-neutral8 text-center">Getting a Bad Reputation</p>
                            </div>
                            <div className="flex items-start gap-[15px]">
                                <img src={No} alt="no" className="w-[25px] h-[25px]" />
                                <p className="font-redhatdisplay font-pr text-p3 text-neutral8 text-center">Conversions Not Going Up</p>
                            </div>
                            <div className="flex items-start gap-[15px]">
                                <img src={No} alt="no" className="w-[25px] h-[25px]" />
                                <p className="font-redhatdisplay font-pr text-p3 text-neutral8 text-center">Potential Customers Ignoring You</p>
                            </div>
                            <div className="flex items-start gap-[15px]">
                                <img src={No} alt="no" className="w-[25px] h-[25px]" />
                                <p className="font-redhatdisplay font-pr text-p3 text-neutral8 text-center">Not Being Represented Right</p>
                            </div>
                            <div className="flex items-start gap-[15px]">
                                <img src={No} alt="no" className="w-[25px] h-[25px]" />
                                <p className="font-redhatdisplay font-pr text-p3 text-neutral8 text-center">Depending on More Tiring Things</p>
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-col justify-center items-start gap-[25px] py-[10px] px-[10px] md:py-[50px] md:px-[50px] bg-main1 rounded-[20px] border-solid border-neutral9 border-[1.5px]">
                        <div className="flex w-[310px] md:w-[400px] flex-col justify-center items-center gap-[28px]">
                            <img src={Illustration2} alt="illustration2" className="w-[175px] h-[175px] md:w-[200px] md:h-[200px]" />
                            <h3 className="font-montserrat font-h1 text-h3 text-neutral8 text-center">Having a Good Website</h3>
                            <p className="font-redhatdisplay font-pr text-p3 text-neutral7 text-center">This is what having a good website grants</p>
                        </div>
                        <div className="flex w-[310px] md:w-[312px] items-start gap-[15px] flex-col">
                            <div className="flex items-start gap-[15px]">
                                <img src={Yes} alt="Yes" className="w-[25px] h-[25px]" />
                                <p className="font-redhatdisplay font-pr text-p3 text-neutral8 text-center">You Will Become Well-Recognized</p>
                            </div>
                            <div className="flex items-start gap-[15px]">
                                <img src={Yes} alt="Yes" className="w-[25px] h-[25px]" />
                                <p className="font-redhatdisplay font-pr text-p3 text-neutral8 text-center">More and More Conversions</p>
                            </div>
                            <div className="flex items-start gap-[15px]">
                                <img src={Yes} alt="Yes" className="w-[25px] h-[25px]" />
                                <p className="font-redhatdisplay font-pr text-p3 text-neutral8 text-center">Customers Getting Attracted to You</p>
                            </div>
                            <div className="flex items-start gap-[15px]">
                                <img src={Yes} alt="Yes" className="w-[25px] h-[25px]" />
                                <p className="font-redhatdisplay font-pr text-p3 text-neutral8 text-center">Starting to Get More Respected</p>
                            </div>
                            <div className="flex items-start gap-[15px]">
                                <img src={Yes} alt="Yes" className="w-[25px] h-[25px]" />
                                <p className="font-redhatdisplay font-pr text-p3 text-neutral8 text-center">Getting Conversions Tirelessly</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="flex flex-col xl:flex-row justify-center items-center gap-[30px] xl:gap-[79px]">
                <div className="flex flex-col items-start gap-[8px]">
                    <div className="flex flex-col items-center">
                        <p className="font-redhatdisplay font-pb text-p3 text-main3 text-center xl:text-left xl:self-stretch">MY SKILLS</p>
                        <h3 className="font-montserrat font-h1 text-h3 xl:text-h2 text-neutral8 text-center xl:text-left">Current Stack</h3>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center gap-[30px] lg:h-[130px]">
                    <div className="lg:flex justify-center items-center gap-[50px] hidden lg:h-[130px]">
                        <div className="flex justify-center items-center flex-col gap-[5px] group cursor-pointer"><img src={Html5} alt="html" className="w-[65px] h-[65px] group" /><img src={Html5active} alt="html" className="w-[65px] hidden group-hover:flex" /></div>
                        <div className="flex justify-center items-center flex-col gap-[5px] group cursor-pointer"><img src={Css3} alt="css3" className="w-[65px] h-[65px] group" /><img src={Css3active} alt="css3" className="w-[65px] hidden group-hover:flex"/></div>
                        <div className="flex justify-center items-center flex-col gap-[5px] group cursor-pointer"><img src={Javascript} alt="javascript" className="w-[65px] h-[65px] group" /><img src={Javascriptactive} alt="javascript" className="w-[65px] hidden group-hover:flex"/></div>
                        <div className="flex justify-center items-center flex-col gap-[5px] group cursor-pointer"><img src={Reactjs} alt="react" className="w-[65px] h-[65px] group" /><img src={Reactjsactive} alt="react" className="w-[65px] hidden group-hover:flex"/></div>
                        <div className="flex justify-center items-center flex-col gap-[5px] group cursor-pointer"><img src={Three} alt="three" className="w-[65px] h-[65px] group" /><img src={Threeactive} alt="three" className="w-[65px] hidden group-hover:flex"/></div>
                        <div className="flex justify-center items-center flex-col gap-[5px] group cursor-pointer"><img src={Tailwind} alt="tailwind" className="w-[65px] h-[65px] group" /><img src={Tailwindactive} alt="tailwind" className="w-[65px] hidden group-hover:flex"/></div>
                        <div className="flex justify-center items-center flex-col gap-[5px] group cursor-pointer"><img src={Figma} alt="figma" className="w-[65px] h-[65px] group" /><img src={Figmaactive} alt="figma" className="w-[65px] hidden group-hover:flex"/></div>
                    </div>


                    <div className="flex justify-center items-center gap-[50px] lg:hidden">
                        <img src={Html5} alt="html" className="w-[65px] h-[65px]" />
                        <img src={Css3} alt="css3" className="w-[65px] h-[65px]" />
                        <img src={Javascript} alt="javascript" className="w-[65px] h-[65px]" />
                    </div>
                    <div className="flex justify-center items-center gap-[50px] lg:hidden">
                        <img src={Reactjs} alt="react" className="w-[65px] h-[65px]" />
                        <img src={Three} alt="three" className="w-[65px] h-[65px]" />
                    </div>
                    <div className="flex justify-center items-center gap-[50px] lg:hidden">
                        <img src={Tailwind} alt="tailwind" className="w-[65px] h-[65px]" />
                        <img src={Figma} alt="figma" className="w-[65px] h-[65px]" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfferAndSkills;