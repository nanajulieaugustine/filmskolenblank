import AccordionCard from "./AccordionCard";
import ScrollUp from "../animationer/ScrollUp";
import ScrollDwon from "../animationer/ScrollDown";

const InfoSection = () => {
    return (
         <div className="ml-5 flex flex-col md:flex-row justify-between relative bottom-55 md:bottom-25">
            <ScrollUp>
        <div className="max-w-xl">
        <div className="mt-5">
            <h2>undervisning</h2>
            <p>Filmskolen Blank er et forløb hvor man lærer sig selv at kende som
            filmfortæller. Her arbejder vi med os selv som skabere og undersøger, hvad vi har lyst til at fortælle gennem filmmediet.
            Vi arbejder med film "af os, til os": Det er muligt at udgive store produktioner, men målet er at arbejde med fortællinger, der er os nære.
            Ønsker man at arbejde med teknikken, kan man gennem Blank blive
            henvist til de højeste og dygtigste filmskabere i Danmark, men det
            er ikke en del af undervsiningen.</p>
            <p>På Blank lyttes der til elevernes lyster, der baner vej for
            undervisningen. Du lærer at arbejde selvstændigt med film og
            udvikler et sprog, der er helt unikt.
            Her tages der udgangspunkt i Den Danske Filmskoles
            undervisning, der afprøves direkte på unge mennesker med lysten
            til at skabe.</p>
        </div>
        <div className="mt-5">
            <h2>talent holbÆk</h2>
            <p>Filmskolen Blank er et tilbud, der ligger under Talent Holbæk, hvilket er en parably for forskellige kunstneriske undervisningstilbud under Kulturskolen og er yderligere et samarbejde med Stenhus Gymnasium.</p>
            <p>Talent Holbæk er sat i verden for at guide unge kunstneriske talenter frem mod en levevej inden for kunsten. Vi arbejder målrettet for at styrke det kreative fællesskab i Holbæk Kommune og sikre, at du gennem arrangementer, aktiviteter og målrettede undervisningstilbud kan møde andre unge, der brænder for kunsten.</p>
        </div>
        </div>
        </ScrollUp>

        <ScrollDwon>
        <div className="relative top-20 md:top-0">
            <AccordionCard/>
        </div>
        </ScrollDwon>
        </div>
      );
}
 
export default InfoSection;