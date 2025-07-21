import film from "@/backend/film.json"
import Button from "../global/Button";
import Beskrivelse from "./Beskrivelse";

const FilmCard = ({activeCategory, activeGenre}) => {

  const filteredFilm = film.filter(film => {
  const matchCategory =
    activeCategory === "vis alle" ||
    film.generation.toLowerCase() === activeCategory.toLowerCase();

      const matchGenre =
        !activeGenre ||
        film.genre
          .split(",")
          .map(g => g.trim().toLowerCase())
          .includes(activeGenre);

      return matchCategory && matchGenre;
    });

    return ( <ul>
        {filteredFilm.length > 0 ? (
        filteredFilm.map((film) => (
            <li key={film.id} className="flex flex-col mb-25 md:mb-20 lg:flex-row even:lg:flex-row-reverse">
            <Beskrivelse film={film}/>
                <div className="px-5">
                    <iframe
                    src={film.trailer}
                    className="h-[200] w-[300] md:h-[200] md:w-[500]"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    ></iframe>
                    <div className="flex gap-2 items-baseline">
                    <p className="pt-2 yellow uppercase">{`//${film.genre}`}</p>
                    <h3 className="italic">{`(${film.år})`}</h3>
                    </div>
                    <p className="max-w-lg">{film.udgivelser}</p>
                    <a href={film.film} target="_blank">
                        <Button>se film</Button>
                    </a>
                </div>
            </li>
              ))
      ) : (
        <div className="min-h-screen">
          <p className="uppercase flex items-center justify-center">
            Der er i Øjeblikket ingen udgivede film fra denne generation.
          </p>
        </div>
      )}
    </ul> );
}
 
export default FilmCard;