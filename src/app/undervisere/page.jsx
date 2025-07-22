import UnderviserCard from "@/components/undervisere/UnderviserCard";
import UndervisereVideo from "@/components/undervisere/UndervisereVideo";

export const metadata = {
  title: "Undervisere | Filmskolen Blank",
  description: "Undervisere på Blank. Blank består af tre undervisere. Heriblandt Theis, uddannet fra Den Danske Filmskole med afgang i 2013 fra flerkameraproduktionsuddannelsen, og Joakim Åreson og Erik Borring, uddannede i film og medievidenskab fra Københavns Universitet, og underviser på Stenhus Gymnasium i mediefag. Udover undervisere er Theis Blanks stifter og Joachim koordinator.",
};

const Undervisere = () => {
    return (<div>
        <UndervisereVideo/>
        <UnderviserCard/>
    </div>  );
}
 
export default Undervisere;