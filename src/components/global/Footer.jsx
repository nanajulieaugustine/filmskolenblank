import { IoLogoInstagram } from "react-icons/io5";
import { CiFacebook } from "react-icons/ci";
import { SlSocialYoutube } from "react-icons/sl";
import Image from "next/image";

const Footer = () => {
    return ( 
        <div className="bg-linear-to-b from-(--background) to-black h-[200] flex justify-between px-(--content-width) mt-5 pb-15">
            <div className="flex flex-col justify-between">
            <h3 className="white">kontakt</h3>
            <a className="underline no-break" href="mailto:theis@escapable.dk">theis@escapable.dk</a>
            <p>Ahlgade 3F 4300 Holbæk</p>
            <p>CVR (Holbæk Kommune): 29189447</p>
            <Image
            src={"/logo/logo.png"}
            alt={"blanks logo"}
            width={50}
            height={50}
            />
            </div>
            <div className="flex flex-col justify-between">
            <Image
            src={"/logo/talent_holbaek_white.png"}
            alt={"talent holbæk logo"}
            width={50}
            height={50}
            />
            <Image
            src={"/logo/kulturskolen_white.png"}
            alt={"kulturskolen logo"}
            width={50}
            height={50}
            />
            <Image
            src={"/logo/stenhus_gymnasium_white.png"}
            alt={"stenhus gymnasium logo"}
            width={50}
            height={50}
            />
            </div>
            <div className="flex flex-col justify-between">
                <h3 className="white">some</h3>
                <a className="hover:scale-105 transition-all duration-300" href="https://www.instagram.com/filmskolenblank/" target="_blank" title="instagram">
                    <IoLogoInstagram size={30} color="white"/>
                </a>
                <a className="hover:scale-105 transition-all duration-300" href="https://www.facebook.com/people/Filmskolen-Blank-i-Holb%C3%A6k/61552249034273/#" target="_blank" title="facebook">
                    <CiFacebook size={30} color="white"/>
                </a>
                <a className="hover:scale-105 transition-all duration-300" href="https://www.youtube.com/@ungfilmholbaek" target="_blank" title="youtube">
                    <SlSocialYoutube size={30} color="white"/>
                </a>
            </div>
        </div>
     );
}
 
export default Footer;