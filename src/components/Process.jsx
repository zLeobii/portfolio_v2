import TimelineDesktop from "../assets/timelines/timeline1.svg";
import TimelineMobile from "../assets/timelines/timeline2.svg";

const Process = () => {
    return (
        <div className="flex justify-center items-center w-[100dvw] h-auto px-[30px] xl:px-[0px] pt-[60px] pb-[100px] xl:py-[150px]">
            <div className="flex flex-col justify-center items-center gap-[40px] xl:gap-[75px] w-[330px] xl:w-[1162px]">
                <div className="flex flex-col items-center gap-[8px] md:gap-[0px] self-stretch">
                    <h1 className="self-stretch text-center font-redhatdisplay font-pb text-p3 text-main3">MY IDEAL PROCESS</h1>
                    <p className="self-stretch text-center font-montserrat font-h1 text-h3 md:text-h2 text-neutral8">Process</p>
                </div>

                <img src={TimelineMobile} alt="timeline" className="w-[330px] h-[1179px] xl:hidden" />
                <img src={TimelineDesktop} alt="timeline" className="w-[1162px] h-[327px] hidden xl:flex" />
            </div>
        </div>
    );
};

export default Process;