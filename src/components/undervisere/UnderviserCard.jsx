import undervisere from "@/backend/undervisere.json"
import Image from "next/image";
import ScrollDwon from "@/components/animationer/ScrollDown";
import ScrollUp from "@/components/animationer/ScrollUp";
import StillsRulle from "./StillsRulle";

const UnderviserCard = () => {

    return ( 
        <div className="px-(--content-width)">
           <ul>
            {undervisere.map((underviser) => (
                <li
                key={underviser.id}
                className="flex flex-col md:flex-row even:md:flex-row-reverse"
                >
                <ScrollUp>
                    <Image
                    src={`/undervisere/${underviser.profil}`}
                    alt={underviser.navn}
                    width={500}
                    height={500}
                    className="relative z-100"
                    />
                </ScrollUp>

                <ScrollDwon className="relative bottom-10 md:top-20">
                    <div className="p-5">
                        <div className="flex items-baseline gap-2">
                            <p className="uppercase yellow">{underviser.stilling}</p>
                            <h3>{underviser.navn}</h3>
                        </div>
                    
                    <p className="max-w-lg">{underviser.beskrivelse}</p>
                    </div>
                    <StillsRulle underviser={underviser}/>
                </ScrollDwon>
                </li>
            ))}
            </ul>
        </div>
     );
}
 
export default UnderviserCard;