import Mail from "../assets/links/mail.svg";
import MailActive from "../assets/links/mailactive.svg";
import { InlineWidget } from "react-calendly";

const Contact = () => {
    return (
        <div id="contact" className="bg-bluee bg-cover h-auto w-[100dvw] pt-[70px] pb-[35px] xl:py-[100px] flex flex-col justify-center items-center">
            <div className="flex flex-col items-center justify-center gap-[15px] md:gap-[30px] w-[330px] md:w-[500px] xl:w-[1162px]">
                <div className="flex flex-col justify-center items-center gap-[75px]">
                    <div className="flex flex-col items-center gap-[8px]">
                        <div className="flex flex-col items-center">
                            <p className="font-redhatdisplay font-pb text-p3 text-main3 text-center">BOOK A CALL</p>
                            <p className="font-montserrat font-h1 text-h3 md:text-h2 text-neutral8 text-center">Let’s Work Together</p>
                        </div>
                        <p className="font-redhatdisplay font-pr text-p3 md:text-p2 text-neutral7 text-center">Find a time that works for you and let’s chat about making <br className="hidden xl:flex"/>your dream website a reality.</p>
                    </div>

                    <InlineWidget url="https://calendly.com/leobi/leobaratieri"/>

                </div>

                <div className="flex flex-col items-center justify-center gap-[5px]">
                    <p className="font-redhatdisplay font-pb text-p3 text-main3 text-center">OR</p>
                    <a className="group flex justify-center items-center self-stretch gap-[10px]" href="mailto:leob0372@gmail.com" rel="noreferrer" target="_blank">
                        <p className="font-redhatdisplay font-pb text-p3 md:text-p2 text-neutral8 lg:group-hover:text-main3 text-center">Mail me</p>
                        <img src={Mail} alt="mail" className="w-[27px] h-[27px] xl:w-[37px] xl:h-[37px] flex lg:group-hover:hidden"/><img src={MailActive} alt="mail" className="hidden lg:group-hover:flex w-[37px] h-[37px]"/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;