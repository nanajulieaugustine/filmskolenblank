import Accordion, {AccordionItem} from "./Accordion";
import Link from "next/link";

const AccordionCard = () => {
    return ( 
        <div className="p-10 md:w-[300px] lg:w-[550]">
        <Accordion>
         <AccordionItem title="//Lokation">
        <div className="flex justify-between items-center py-2 text-(--foreground)">
            <div>
                 <p>Undervisningen foregår primært i Blanks egne lokaler under Ungehuset Lucerna på adressen Ahlgade 3F 4300 Holbæk. </p>
                <p> Det kan andre gange forekomme at undervisningen finder sted på Stenhus Gymnasium i B-området på adressen Stenhusvej 20, 4300 Holbæk</p>
            </div>
        </div>
      </AccordionItem>
        </Accordion>

                <Accordion>
         <AccordionItem title="//Pris">
        <div className="flex justify-between items-center py-2 text-(--foreground)">
            <div>
                 <p>Undervisningen er helt gratis inklusiv faciliteret udstyr.</p>
            </div>
        </div>
      </AccordionItem>
        </Accordion>

                        <Accordion>
         <AccordionItem title="//MØdetider">
        <div className="flex justify-between items-center py-2 text-(--foreground)">
            <div>
                 <p>Undervisning foregår hver onsdag mellem 15.00 - 19.00.</p>
            </div>
        </div>
      </AccordionItem>
        </Accordion>

                                <Accordion>
         <AccordionItem title="//Adgangskrav">
        <div className="flex justify-between items-center py-2 text-(--foreground)">
            <div>
                 <p>Filmskolen Blank henvender sig til alle unge i alderen 15-25, uanset bopæl eller uddannelse. Dog skal alle ansøgere igennem en optagelsesprøve</p>
                 <Link href="/optag"><p className="yellow hover:scale-103 tranistion-all duration-300 pl-5 uppercase">// Læs mere om optagelse her</p></Link>
            </div>
        </div>
      </AccordionItem>
        </Accordion>

          <Accordion>
         <AccordionItem title="//Varighed">
        <div className="flex justify-between items-center py-2 text-(--foreground)">
            <div>
                 <p>Et forløb varer 9 måneder fra den 2. onsdag i september til slutningen af maj.</p>
            </div>
        </div>
      </AccordionItem>
        </Accordion>
        </div>
     );
}
 
export default AccordionCard;