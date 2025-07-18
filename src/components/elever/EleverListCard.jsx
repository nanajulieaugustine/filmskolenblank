import VideoOnHover from "./VideoOnHover";
import generationer from "@/backend/generationer.json"
import Link from "next/link";

const EleverListCard = () => {

    return ( <ul>
        {generationer.slice()
        .reverse().map((generation)=>(
            <li key={generation.generation_id}>
                <Link href={`/elever/${generation.generation_id}`}>
                <VideoOnHover generation={generation}/>
                </Link>
            </li>
        ))}
    </ul> );
}
 
export default EleverListCard;