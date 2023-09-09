import { HeroCanva } from "../canvas/Index";

const About = () => {
    return (
        <div id="about" className="flex xl:w-[1162px] flex-col xl:flex-row justify-center items-center gap-[80px] xl:gap-[285px] overflow-hidden">
            <div className="flex w-[330px] md:w-[400px] flex-col justify-center items-center xl:items-start gap-[8px]">
                <div className="h-auto w-auto">
                    <p className="font-redhatdisplay font-pb text-p3 text-main3 text-center xl:text-left">A LITTLE ABOUT ME</p>
                    <h2 className="font-montserrat font-h1 text-h3 md:text-h2 text-neutral8 text-center xl:text-left">Hi, I'm Leonardo</h2>
                </div>

                <p className="font-redhatdisplay font-pr text-p3 md:text-p2 text-neutral7 text-center xl:text-left">I’m a young and blooming Website Designer & Developer from Italy.<br /><br />
                    I use my passion and skills to create outstanding websites for the best users’ experiences.<br /><br />
                    For UI/UX design, Front-End Development, or making a website all by myself, agencies and businesses around the world rely on me.<br /><br />
                    My vision is to help as many businesses and agencies as I can to become well-recognized.
                </p>
            </div>

            <section className="relative w-[330px] h-[330px] md:w-[478px] md:h-[478px] mx-auto overflow-hidden">
                <HeroCanva />
            </section>
        </div>
    );
};

export default About;