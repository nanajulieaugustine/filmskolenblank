import TilbudSection from "@/components/om/TilbudSection";
import ForloebSection from "@/components/om/FoeloebSection";
import InfoSection from "@/components/om/InfoSection";
import HeroSection from "@/components/om/HeroSection";
import BaredygtighedSection from "@/components/om/BaeredygtighedSection";
import Sponsorater from "@/components/om/Sponsorater";

const Om = () => {
    return ( <div>
        <HeroSection/>
        <div className="px-(--content-width) flex flex-col gap-5">
        <InfoSection/>
        </div>
            <TilbudSection/>
            <ForloebSection/>
            <BaredygtighedSection/>
            <Sponsorater/>
    </div> );
}
 
export default Om;