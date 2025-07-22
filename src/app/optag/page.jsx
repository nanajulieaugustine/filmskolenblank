import OptagHero from "@/components/optag/OptagHero";
import KravSection from "@/components/optag/KravSection";
import ProcesSection from "@/components/optag/ProcesSection";

export const metadata = {
  title: "Optag | Filmskolen Blank",
  description: "Optagelsesprocessen på Filmskolen Blank. Optaget kigger efter unge, der har en kreativ vilje og har lysten til at skabe. Der lægges ingen vægt på tekniske kundskaber eller erfaring indenfor filmmediet. Blank leder efter dig, der har en fortæller gemt i dig og er interesseret i at lære at bruge film som medie til at udtrykke dig selv. ",
};

const Optag = () => {
    return ( <div>
        <OptagHero/>
        <KravSection/>
        <ProcesSection/>
    </div> );
}
 
export default Optag;