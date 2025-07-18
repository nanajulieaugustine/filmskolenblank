import UnderviserCard from "@/components/undervisere/UnderviserCard";

const Undervisere = () => {
    return (<section>
        <div className="px-(--content-width-lg) mb-15">
            <h1>undervisere</h1>
            <p>Blank består af tre undervisere. Heriblandt Theis, uddannet fra Den Danske Filmskole med afgang i 2013 fra flerkameraproduktionsuddannelsen, og Joakim Åreson og Erik Borring, uddannede i film og medievidenskab fra Københavns Universitet, og underviser på Stenhus Gymnasium i mediefag. Udover undervisere er Theis Blanks stifter og Joachim koordinator.</p>
        </div>
        <UnderviserCard/>
    </section>  );
}
 
export default Undervisere;