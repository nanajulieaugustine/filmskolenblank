import generationer from "@/backend/generationer.json";

const Kategorier = ({ activeCategory, setActiveCategory }) => {

  const førsteRække = generationer.slice(0, 3);
  const andenRække = generationer.slice(3);

  return (
    <div className="flex flex-col gap-5 yellow uppercase font-bold mt-15 mb-5 px-(--content-width-lg) italic">
      <ul className="flex gap-5 justify-between w-full">
        {førsteRække.map((generation) => (
          <li
            key={generation.generation_id}
            className="hover:scale-105 transition-all duration-300"
          >
            <button
              className="cursor-pointer"
              aria-label="vælg generation"
              onClick={() => setActiveCategory(generation.generation)}
            >
              <h3
                className={
                  activeCategory === generation.generation
                    ? "orange"
                    : "yellow"
                }
              >
                {`//${generation.generation}`}
              </h3>
            </button>
          </li>
        ))}
      </ul>
      <ul className="flex gap-5 justify-between w-full indent-5 md:indent-15 pr-15">
        {andenRække.map((generation) => (
          <li
            key={generation.generation_id}
            className="hover:scale-105 transition-all duration-300"
          >
            <button
              className="cursor-pointer"
              aria-label="vælg generation"
              onClick={() => setActiveCategory(generation.generation)}
            >
              <h3
                className={
                  activeCategory === generation.generation
                    ? "orange"
                    : "yellow"
                }
              >
                {`//${generation.generation}`}
              </h3>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Kategorier;
