import elever from "@/backend/elever.json";
import generationer from "@/backend/generationer.json";
import SingleCard from "@/components/elever/singleview/SingleCard";
import EleverVideo from "@/components/elever/singleview/EleverVideo";

export const metadata = {
  title: "Elever | Filmskolen Blank",
  description: "Individuelle elever på de forskellige generationer hos Filmskolen Blank. Hvert enkelt elev har til sin optagelsesprøve formuleret en beskrivelse af, hvad det betyder for dem at skabe og taget et portrætbillede, der på bedst måde repræsenterer hvem de er.",
};


const EleverSingleView = ({ params }) => {
  const { id } = params;

  const generation = generationer.find((generation) => generation.generation_id.toString() === id);

  return (
    <div>
        <EleverVideo generation={generation}/>
      <SingleCard generation={generation} />
    </div>
  );
};

export default EleverSingleView;
