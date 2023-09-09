import Demo from "../assets/links/democode.svg";
import Github from "../assets/links/githubcode.svg";

import DemoActive from "../assets/links/democodeactive.svg";
import GithubActive from "../assets/links/githubcodeactive.svg";

import summereth from "../assets/bg/summereth.png";

const Projects = () => {
    return (
        <div id="projects" className="bg-bluee h-[1250px] pt-[50px] pb-[100px] px-[30px] flex flex-col justify-center items-center w-[100dvw]">
            <div className="flex gap-[70px] flex-col items-center justify-center w-[330px]">
                <div className="flex flex-col items-center justify-center gap-[8px]">
                    <div className="flex flex-col items-center">
                        <h3 className="self-stretch text-center text-redhatdisplay font-pb text-p3 text-main3">MY LATEST PROJECTS</h3>
                        <h1 className="self-stretch text-center text-montserrat font-h1 text-h3 text-neutral8">Projects</h1>
                    </div>
                    <p className="self-stretch text-center text-redhatdisplay font-pr text-p3 text-neutral7">Take a look at my case studies and what I’ve built for my clients.</p>
                </div>

                <div className="flex flex-col items-start gap-[150px]">
                    <div className="flex flex-col justify-center items-center gap-[30px]">
                        <div className="flex flex-col items-center gap-[30px]">
                            <h1 className="self-stretch text-center text-montserrat font-h text-h5 text-neutral8">SUMMERETH</h1>
                            <p className="self-stretch text-center text-redhatdisplay font-pr text-p3 text-neutral7">This is a website I created for a Lead Gen Agency all solo: the UI/UX design and also the developing part. Thanks to this project I've learned Tailwindcss, and how to make a website even more responsive.</p>
                        </div>

                        <div className="w-[330px] h-[167px] overflow-hidden"><img src={summereth} alt="summereth" className="bg-top object-contain" /></div>

                        <div className="flex justify-center items-center gap-[30px]">
                            <a className="flex justify-center items-center gap-[10px]" rel="noreferrer" href="https://github.com/zLeobii/summereth" target="_blank">
                                <p className="self-stretch text-center text-montserrat font-h text-h5 text-neutral8">Code</p>
                                <img src={Github} alt="github" className="w-[30px] h-[30px]" />
                            </a>
                            <a className="flex justify-center items-center gap-[10px]" rel="noreferrer" href="https://summereth.com" target="_blank">
                                <p className="self-stretch text-center text-montserrat font-h text-h5 text-neutral8">Live Demo</p>
                                <img src={Demo} alt="demo" className="w-[30px] h-[30px]" />
                            </a>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Projects;