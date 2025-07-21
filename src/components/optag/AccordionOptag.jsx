import Accordion, {AccordionItem} from "../om/Accordion";
import Link from "next/link";

const AccordionOptag = () => {
    return ( 
        <div className="p-10 w-[300] md:w-[550px]">
        <Accordion>
         <AccordionItem title="//HvornÅr er der optagelsesprØve?">
        <div className="flex justify-between  items-center py-2 text-(--foreground)">
            <div>
                 <p>Optagelsesprøven finder som regel sted den første weekend i September på Stenhus Gymnasium. <br/> Ansøgere vil hermed få en skriftlig indkaldelse på mail. </p>
            </div>
        </div>
      </AccordionItem>
        </Accordion>

                <Accordion>
         <AccordionItem title="//Hvordan sØger du ind?">
        <div className="flex justify-between items-center py-2 text-(--foreground)">
            <div>
                 <p>Motiveret ansøgning skal sendes til <a href="mailto:theis@escapeable.dk" className="underline no-break">theis@escapeable.dk</a>.</p>
                 <p>Hold dig opdateret på Talent Holbæks sociale medier med hensyn til ansøgningsportalens åbning.</p>
                 <Link href="#ansogning">
                <p className="yellow hover:scale-103 transition-all duration-300 pl-5 uppercase">
                    //Læs mere om ansøgningen her
                </p>
                </Link>

            </div>
        </div>
      </AccordionItem>
        </Accordion>

                        <Accordion>
         <AccordionItem title="//HvornÅr lukker fristen?">
        <div className="flex justify-between items-center py-2 text-(--foreground)">
            <div>
                 <p>Ansøgningsfristen lukker som udgangspunkt altid 1. september</p>
            </div>
        </div>
      </AccordionItem>
        </Accordion>

                                <Accordion>
         <AccordionItem title="//Hvor mange bliver optaget?">
        <div className="flex justify-between items-center py-2 text-(--foreground)">
            <div>
                 <p>Der er intet fast antal af optagede elever. <br/> Dog inviteres der maksimum 10 ansøgere til optagelsesprøve, som herfra vælges ud.</p>
            </div>
        </div>
      </AccordionItem>
        </Accordion>

          <Accordion>
         <AccordionItem title="//Kan du ikke mØde op til prØven?">
        <div className="flex justify-between items-center py-2 text-(--foreground)">
            <div>
                 <p>Det er klart en fordel at møde op fysisk til optagelsesprøven. <br/> Dog har vi forståelse for, at dette ikke er muligt for alle, og der er derfor mulighed for at få tilsendt opgaverne, som kan løses hjemmefra efter aftale med optagelsesudvalget.</p>
            </div>
        </div>
      </AccordionItem>
        </Accordion>

           <Accordion>
         <AccordionItem title="//hvornÅr fÅr du svar?">
        <div className="flex justify-between items-center py-2 text-(--foreground)">
            <div>
                 <p>Du kan forvente svar på optagelse indenfor et par dage efter optagelsesprøven har fundet sted.</p>
            </div>
        </div>
      </AccordionItem>
        </Accordion>
        </div>
     );
}
 
export default AccordionOptag;