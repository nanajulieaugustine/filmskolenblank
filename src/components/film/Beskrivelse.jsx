import Image from "next/image";
import ScrollDwon from "../animationer/ScrollDown";
import ScrollUp from "../animationer/ScrollUp";
import FilmRulleStills from "./FilmRulleStills";

const Beskrivelse = ({film}) => {
    return ( 
        <div className="flex flex-col md:flex-row odd:md:flex-row-reverse odd:lg:flex-row">
        <ScrollUp className="flex justify-center md:justify-start">
                        <Image
                        src={`/film/${film.plakat}`}
                        alt={film.titel}
                        width={400}
                        height={400}
                        />
                    </ScrollUp>
                    
                    <ScrollDwon className="relative top-0 md:top-20">
                            <div className="flex items-baseline gap-2 px-5">
                            <p className="uppercase orange">{film.generation}</p>
                            <h3 className="orange">{film.elev}</h3>
                        </div>
                            <p className="max-w-lg px-5">{film.beskrivelse}</p>
                            <FilmRulleStills film={film}/>
                </ScrollDwon>
            </div>
     );
}
 
export default Beskrivelse;