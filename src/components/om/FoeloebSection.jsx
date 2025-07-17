import Image from "next/image";
import ScrollDwon from "../animationer/ScrollDown";
import ScrollUp from "../animationer/ScrollUp";

const ForloebSection = () => {
    return ( 
        <div className="px-(--content-width-lg)">
            <h2 className="heading2-secondary">forlØb</h2>
            <div>
                <div className="flex flex-col md:flex-row gap-5 relative top-10">
                    <ScrollDwon>
                    <Image
                        src={"/om/portraetter_fotos.webp"}
                        width={600}
                        height={600}
                        alt={"18 til 18 et halv 2023"}
                    />
                    </ScrollDwon>
                    <div className="max-w-[300] relative bottom-15 md:bottom-10">
                    <ScrollUp>
                        <h3>portrÆtter</h3>
                        <p>Vi starter altid ud med små øvelser á to minutters uafbrudte
                            videoer, der har til formål at indfange et øjeblik med et eller
                            flere mennesker. I dette forløb, lærer vi at udvikle et sprog, og
                            hvad vigtigheden af "rum" omfanger. Vi ser i fællesskab portrætterne, og snakker frit om hvad vi kan koble til det.</p>
                        </ScrollUp>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-5 relative top-10 md:top-20">
                      <div className="md:order-2">
                    <ScrollUp>
                    <Image
                        src={"/om/fiktion_fotos.webp"}
                        width={600}
                        height={600}
                        alt={"fiktion årgang 2023-2024"}
                    />
                    </ScrollUp>
                    </div>
                    <div className="max-w-[300] md:order-1 relative bottom-15 md:bottom-0">
                        <ScrollDwon>
                        <h3>fiktion</h3>
                        <p>I vores fiktionsforløb, trækker vi altid fat i Holbæk Drama
                            Colleges skuespillere i deres fritid. Her har vi smæk på med
                            manuskriptskrivning, instruering og produktion. Som altid, tager
                            vi uddgangspunkt i personlige oplevelser.</p>
                        </ScrollDwon>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-5 relative top-20 md:top-30">
                    <ScrollDwon>
                    <Image
                        src={"/om/teaterkoncert_fotos.webp"}
                        width={600}
                        height={600}
                        alt={"teaterkoncert stenhus gymnasium 2023"}
                    />
                    </ScrollDwon>
                    <div className="max-w-[300] py-10 relative bottom-20 md:bottom-10">
                        <ScrollUp>
                        <h3>teaterkoncert</h3>
                        <p>I forbindelse med Stenhus Gymnasiums årlige teaterkoncert, samarbejder Filmskolen Blank med eventuelle frivillige
                            mediefagselever om at skabe en flerkameraproduktion. Her får eleverne kendskab til et dybere samarbejde og mere hektisk part af live-tv.</p>
                        </ScrollUp>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-5 relative bottom-10 md:top-40">
                    <div className="md:order-2 py-20">
                    <ScrollUp>
                    <Image

                        src={"/om/teknik_fotos.webp"}
                        width={600}
                        height={600}
                        alt={"årgang 2023-2024"}
                    />
                    </ScrollUp>    
                    </div>   
                    <div className="max-w-[300] md:order-1 relative bottom-50 md:bottom-0 md:top-10">
                        <ScrollDwon>
                        <h3>teknik</h3>
                        <p>Vi er ikke helt foruden teknisk arbejde - vi får her et kendskab
                            til DaVinci Resolve i vores klippeforløb og lærer dele af hvad lyd, lys, osv. kan. Der undervises i hvordan man kan fremme en fortælling gennem de forskellige tekniske komponenter.</p>
                        </ScrollDwon>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-5 relative bottom-50 md:top-20">
                    <ScrollDwon>
                    <Image
                        src={"/om/langeprojekt_fotos.webp"}
                        width={600}
                        height={600}
                        alt={"legehuset 2023"}
                    />                    
                    </ScrollDwon>
                    <div className="max-w-[300] py-25 relative bottom-20 md:bottom-10">
                        <ScrollUp>
                        <h3>afslutningsprojekt</h3>
                        <p>Eleverne arbejder slutligt af året på deres lange afgangsprojekt (oftest dokumentar). Der er ingen formelle regler for projektet andet end, at det skal være noget, du kan mærke og kender til. Her bliver man vejledt af underviserne til at finde ud af hvordan den næste scene skal kommme til live.</p>
                    </ScrollUp>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ForloebSection;
