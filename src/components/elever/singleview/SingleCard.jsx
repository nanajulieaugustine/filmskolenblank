import elever from "@/backend/elever.json"
import Image from "next/image";
import ScrollDwon from "@/components/animationer/ScrollDown";
import ScrollUp from "@/components/animationer/ScrollUp";
import StillsRulle from "./StillsRulle";

const SingleCard = ({generation}) => {

    const elevKort = elever.filter((elev)=> elev.generation === generation.generation)

    return ( 
        <section className="px-(--content-width)">
            <div className="w-fit mb-5">
            <h1>{generation.generation}</h1>
            <div className="flex justify-between">
            <h3 className="red">{`(${generation.start}`}</h3>
            <h3 className="red">-</h3>
            <h3 className="red">{`${generation.slut})`}</h3>
            </div>
            </div>
           <ul>
            {elevKort.map((elev) => (
                <li
                key={elev.id}
                className="flex flex-col md:flex-row even:md:flex-row-reverse"
                >
                <ScrollUp>
                    <Image
                    src={`/elever/singleview/${elev.profil}`}
                    alt={elev.navn}
                    width={500}
                    height={500}
                    className="relative z-100"
                    />
                </ScrollUp>

                <ScrollDwon className="relative bottom-10 md:top-20">
                    <div className="p-5">
                    <h3>{elev.navn}</h3>
                    <p className="max-w-lg">{elev.beskrivelse}</p>
                    </div>
                    <StillsRulle elev={elev}/>
                </ScrollDwon>
                </li>
            ))}
            </ul>
        </section>
     );
}
 
export default SingleCard;