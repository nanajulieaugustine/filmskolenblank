import AccordionOptag from "./AccordionOptag";
import ScrollUp from "../animationer/ScrollUp";
import ScrollDwon from "../animationer/ScrollDown";

const KravSection = () => {
    return (
         <div className="ml-5 flex flex-col md:flex-row justify-between px-(--content-width)">
            <ScrollUp>
        <div className="max-w-xl">
        <div className="mt-5">
            <h2>optagelseskrav</h2>
            <p>De eneste optagelseskrav til at blive optaget på Filmskolen Blank er, at du er mellem 15-25 år.</p>
            <p>Optagelsesudvalget består af underviserene på Blank.</p>
            <p>Optaget kigger efter unge, der har en kreativ vilje og har lysten til at skabe. Der lægges ingen vægt på tekniske kundskaber eller erfaring indenfor filmmediet. <br/>Blank leder efter dig, der har en fortæller gemt i dig og er interesseret i at lære at bruge film som medie til at udtrykke dig selv. </p>
        </div>
        </div>
        </ScrollUp>

        <ScrollDwon>
        <div className="relative top-20 md:top-0">
            <AccordionOptag/>
        </div>
        </ScrollDwon>
        </div>
      );
}
 
export default KravSection;