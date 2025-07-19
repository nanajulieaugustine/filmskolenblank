import Image from "next/image";
import ScrollDwon from "../animationer/ScrollDown";
import ScrollUp from "../animationer/ScrollUp";

const ProcesSection = () => {
    return ( 
        <div id="ansogning" className="px-(--content-width-lg)">
            <h2 className="heading2-secondary mb-10">OPTAGELSESPROCESSEN</h2>
            <div>
                <div className="flex flex-col md:flex-row gap-5 relative top-10">
                    <ScrollDwon>
                    <Image
                        src={"/optag/optag1.webp"}
                        width={600}
                        height={600}
                        alt={"18 til 18 et halv 2023"}
                    />
                    </ScrollDwon>
                    <div className="max-w-[300] relative bottom-15 md:bottom-0">
                    <ScrollUp>
                        <h3>ansØgning</h3>
                        <p>Du skal sende en motiveret skriftlig ansøgning til <a href="mailto:theis@escapeable.dk" className="underline">theis@escapeable.dk</a>.
                            Heri skal du forklare hvorfor dét at skabe, betyder noget for dig. Vedhæft evt. kunstneriske værker, du selv har skabt. Formen er fri, og mediet behøver ikke at være film.</p>
                        </ScrollUp>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-5 relative top-10 md:top-20">
                      <div className="md:order-2">
                    <ScrollUp>
                    <Image
                        src={"/optag/optag2.webp"}
                        width={600}
                        height={600}
                        alt={"fiktion årgang 2023-2024"}
                    />
                    </ScrollUp>
                    </div>
                    <div className="max-w-[300] md:order-1 relative bottom-15 md:bottom-0">
                        <ScrollDwon>
                        <h3>optagelsesprØve</h3>
                        <p>Et udvalg af ansøgere vil blive inviteret til optagelsesprøve første weekend i september, afholdt fra 10-17 lørdag og søndag. Her vil du blive stillet en række ukendte opgaver, du har mellem 20 min til 1 time til at færdiggøre hver opgave.</p>
                        </ScrollDwon>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-5 relative top-20 md:top-0">
                    <ScrollDwon>
                    <Image
                        src={"/optag/optag3.webp"}
                        width={600}
                        height={600}
                        alt={"teaterkoncert stenhus gymnasium 2023"}
                    />
                    </ScrollDwon>
                    <div className="max-w-[300] py-10 relative bottom-0 md:top-20">
                        <ScrollUp>
                        <h3>samtale</h3>
                        <p>Under optagelsesprøven, vil der blive afholdt en samtale med hver enkelt ansøger af Blanks undervisere/optagelsesudvalget. Her vil du i en afslappet dialog, snakke om dine opgaveløsninger og dig som person.</p>
                        </ScrollUp>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ProcesSection;
