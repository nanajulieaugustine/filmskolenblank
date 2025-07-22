import ListFilm from "@/components/film/ListFilm";
import FilmHero from "@/components/film/FilmHero";

export const metadata = {
  title: "Udgivede film | Filmskolen Blank",
  description: "Udgivede Film af elever fra Filmskolen Blank. På Blank er det ikke at krav at udgive dine produktioner. Vi arbejder med film af dig, til dig. Dog er der mulighed for at tage filmen videre til næste skridt gennem Blanks vejledning.",
};

const Film = () => {
    return ( <div>
        <FilmHero/>
        <ListFilm/>
    </div> );
}
 
export default Film;