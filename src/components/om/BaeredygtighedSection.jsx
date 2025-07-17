import ScrollDwon from "../animationer/ScrollDown";
import ScrollUp from "../animationer/ScrollUp";

const BaredygtighedSection = () => {
    return ( <div className="px-(--content-width) mt-40 flex flex-col md:flex-row gap-5 relative bottom-80 md:bottom-0">
        <ScrollDwon>
                    <blockquote className="yellow">"Lokale skabere er en bæredygtig fortælling"</blockquote>
        </ScrollDwon>
            <ScrollUp>
                <div className="relative top-20">
            <p>Filmskolen Blanks mål er at undervise sine elever i hvordan filmskabning kan gøres bæredygtigt. 
            et gør vi bl.a. ved at købe genbrugte kameraer og udstyr.</p>
            <p>Blank underviser i hvordan filmskabning kan gøres simpelt uden behov for et stort budget, stort team eller kæmpe produktioner. Eleverne får oftest et kamera i hånden, og går ud og skyder. </p>
            <p>Filmskolen Blank er den første filmskole placeret i Holbæk. De fleste tilbud for unge filmskabere er lokaliseret i storbyer og er ofte dyre, men Blank arbejder på at bringe filmskabning ud lokalt. Dette gør ikke mindst, at unge slipper for at pendle til storbyerne, men i og med tilbuddet er gratis, gør det, at alle kan være med uanset indkomst. </p>
                </div>
            </ScrollUp>
    </div> );
}
 
export default BaredygtighedSection;