import Demo from "../assets/links/democode.svg";
import Github from "../assets/links/githubcode.svg";

import DemoActive from "../assets/links/democodeactive.svg";
import GithubActive from "../assets/links/githubcodeactive.svg";

import summereth from "../assets/bg/summereth.png";

const Projects = () => {
    return (
        <div id="projects" className="bg-bluee h-auto pt-[50px] pb-[100px] px-[30px] flex flex-col justify-center items-center w-[100dvw]">
            <div className="flex gap-[70px] flex-col items-center justify-center w-[330px] md:w-[500px] xl:w-[1162px]">
                <div className="flex flex-col items-center justify-center gap-[8px]">
                    <div className="flex flex-col items-center">
                        <h3 className="self-stretch text-center font-redhatdisplay font-pb text-p3 text-main3">MY LATEST PROJECTS</h3>
                        <h1 className="self-stretch text-center font-montserrat font-h1 text-h3 md:text-h2 text-neutral8">Projects</h1>
                    </div>
                    <p className="self-stretch text-center font-redhatdisplay font-pr text-p3 md:text-p2 text-neutral7">Take a look at my case studies and what I’ve built for my clients.</p>
                </div>

                <div className="flex flex-col items-start gap-[150px]">
                    <div className="flex flex-col xl:flex-row justify-center items-center gap-[30px] xl:gap-[197px] group">
                        <div className="flex flex-col items-center gap-[10px] xl:gap-[50px] xl:w-[447px]">
                            <h1 className="self-stretch text-center xl:text-left font-montserrat font-h text-h5 md:text-h4 text-neutral8">SUMMERETH</h1>
                            <p className="self-stretch text-center xl:text-left font-redhatdisplay font-pr text-p3 md:text-p2 text-neutral7">This is a website I created for a Lead Gen Agency all solo: the UI/UX design and also the developing part. Thanks to this project I've learned Tailwindcss, and how to make a website even more responsive.</p>
                            
                            <div className="items-center gap-[30px] hidden xl:flex self-stretch">
                                <a className="flex justify-center items-center gap-[10px] group" rel="noreferrer" href="https://github.com/zLeobii/summereth" target="_blank">
                                    <p className="self-stretch text-center font-montserrat font-h text-h5 text-neutral8 group-hover:text-main3">Code</p>
                                    <img src={Github} alt="github" className="w-[30px] h-[30px] flex group-hover:hidden " /><img src={GithubActive} alt="github" className="hidden group-hover:flex w-[30px] h-[30px]" />
                                </a>
                                <a className="flex justify-center items-center gap-[10px] group" rel="noreferrer" href="https://summereth.com" target="_blank">
                                    <p className="self-stretch text-center font-montserrat font-h text-h5 text-neutral8 group-hover:text-main3">Live Demo</p>
                                    <img src={Demo} alt="demo" className="w-[30px] h-[30px] flex group-hover:hidden" /><img src={DemoActive} alt="demo" className="w-[30px] h-[30px] hidden group-hover:flex" />
                                </a>
                            </div>
                        </div>

                        <div className="w-[330px] h-[167px] md:w-[500px] md:h-[273px] xl:w-[515px] xl:h-[300px] overflow-hidden border-neutral1 border-[2.5px]"><img src={summereth} alt="summereth" className="bg-top object-contain xl:transition ease-in duration-300 transform xl:group-hover:scale-110 xl:group-hover:translate-y-20" /></div>

                        <div className="flex justify-center items-center gap-[30px] xl:hidden">
                            <a className="flex justify-center items-center gap-[10px] group" rel="noreferrer" href="https://github.com/zLeobii/summereth" target="_blank">
                                <p className="self-stretch text-center font-montserrat font-h text-h5 text-neutral8 group-hover:text-main3">Code</p>
                                <img src={Github} alt="github" className="w-[30px] h-[30px] flex group-hover:hidden " /><img src={GithubActive} alt="github" className="hidden group-hover:flex w-[30px] h-[30px]" />
                            </a>
                            <a className="flex justify-center items-center gap-[10px] group" rel="noreferrer" href="https://summereth.com" target="_blank">
                                <p className="self-stretch text-center font-montserrat font-h text-h5 text-neutral8 group-hover:text-main3">Live Demo</p>
                                <img src={Demo} alt="demo" className="w-[30px] h-[30px] flex group-hover:hidden" /><img src={DemoActive} alt="demo" className="w-[30px] h-[30px] hidden group-hover:flex" />
                            </a>
                        </div>
                    </div>
                </div>



                {/* <div className="flex flex-col items-start gap-[150px]">
                    <div className="flex flex-col xl:flex-row justify-center items-center gap-[30px] xl:gap-[197px] group">
                        <div className="xl:grid hidden w-[330px] h-[167px] md:w-[500px] md:h-[273px] xl:w-[515px] xl:h-[300px] overflow-hidden border-neutral1 border-[2.5px]"><img src={summereth} alt="summereth" className="bg-top object-contain xl:transition ease-in duration-300 transform xl:group-hover:scale-110 xl:group-hover:translate-y-20" /></div>
                        <div className="flex flex-col items-center gap-[10px] xl:gap-[50px] xl:w-[447px]">
                            <h1 className="self-stretch text-center xl:text-left font-montserrat font-h text-h5 md:text-h4 text-neutral8">SUMMERETH</h1>
                            <p className="self-stretch text-center xl:text-left font-redhatdisplay font-pr text-p3 md:text-p2 text-neutral7">This is a website I created for a Lead Gen Agency all solo: the UI/UX design and also the developing part. Thanks to this project I've learned Tailwindcss, and how to make a website even more responsive.</p>
                            
                            <div className="items-center gap-[30px] hidden xl:flex self-stretch">
                                <a className="flex justify-center items-center gap-[10px] group" rel="noreferrer" href="https://github.com/zLeobii/summereth" target="_blank">
                                    <p className="self-stretch text-center font-montserrat font-h text-h5 text-neutral8 group-hover:text-main3">Code</p>
                                    <img src={Github} alt="github" className="w-[30px] h-[30px] flex group-hover:hidden " /><img src={GithubActive} alt="github" className="hidden group-hover:flex w-[30px] h-[30px]" />
                                </a>
                                <a className="flex justify-center items-center gap-[10px] group" rel="noreferrer" href="https://summereth.com" target="_blank">
                                    <p className="self-stretch text-center font-montserrat font-h text-h5 text-neutral8 group-hover:text-main3">Live Demo</p>
                                    <img src={Demo} alt="demo" className="w-[30px] h-[30px] flex group-hover:hidden" /><img src={DemoActive} alt="demo" className="w-[30px] h-[30px] hidden group-hover:flex" />
                                </a>
                            </div>
                        </div>

                        <div className="xl:hidden w-[330px] h-[167px] md:w-[500px] md:h-[273px] xl:w-[515px] xl:h-[300px] overflow-hidden border-neutral1 border-[2.5px]"><img src={summereth} alt="summereth" className="bg-top object-contain xl:transition ease-in duration-300 transform xl:group-hover:scale-110 xl:group-hover:translate-y-20" /></div>

                        <div className="flex justify-center items-center gap-[30px] xl:hidden">
                            <a className="flex justify-center items-center gap-[10px] group" rel="noreferrer" href="https://github.com/zLeobii/summereth" target="_blank">
                                <p className="self-stretch text-center font-montserrat font-h text-h5 text-neutral8 group-hover:text-main3">Code</p>
                                <img src={Github} alt="github" className="w-[30px] h-[30px] flex group-hover:hidden " /><img src={GithubActive} alt="github" className="hidden group-hover:flex w-[30px] h-[30px]" />
                            </a>
                            <a className="flex justify-center items-center gap-[10px] group" rel="noreferrer" href="https://summereth.com" target="_blank">
                                <p className="self-stretch text-center font-montserrat font-h text-h5 text-neutral8 group-hover:text-main3">Live Demo</p>
                                <img src={Demo} alt="demo" className="w-[30px] h-[30px] flex group-hover:hidden" /><img src={DemoActive} alt="demo" className="w-[30px] h-[30px] hidden group-hover:flex" />
                            </a>
                        </div>
                    </div>
                </div> */}




            </div>
        </div>
    );
};

export default Projects;