import elever from "@/backend/elever.json";
import generationer from "@/backend/generationer.json";
import SingleCard from "@/components/elever/singleview/SingleCard";
import EleverVideo from "@/components/elever/singleview/EleverVideo";

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
