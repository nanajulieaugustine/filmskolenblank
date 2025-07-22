import TilbudSection from "@/components/om/TilbudSection";
import ForloebSection from "@/components/om/FoeloebSection";
import InfoSection from "@/components/om/InfoSection";
import HeroSection from "@/components/om/HeroSection";
import BaredygtighedSection from "@/components/om/BaeredygtighedSection";
import Sponsorater from "@/components/om/Sponsorater";

export const metadata = {
  title: "Om | Filmskolen Blank",
  description: "Filmskolen Blank er et forløb hvor man lærer sig selv at kende som filmfortæller. Her arbejder vi med os selv som skabere og undersøger, hvad vi har lyst til at fortælle gennem filmmediet. Vi arbejder med film af os, til os: Det er muligt at udgive store produktioner, men målet er at arbejde med fortællinger, der er os nære. Ønsker man at arbejde med teknikken, kan man gennem Blank blive henvist til de højeste og dygtigste filmskabere i Danmark, men det er ikke en del af undervsiningen.",
};

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