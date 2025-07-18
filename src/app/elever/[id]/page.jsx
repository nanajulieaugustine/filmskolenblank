import elever from "@/backend/elever.json";
import generationer from "@/backend/generationer.json";
import SingleCard from "@/components/elever/singleview/SingleCard";

const EleverSingleView = ({ params }) => {
  const { id } = params;

  const generation = generationer.find((generation) => generation.generation_id.toString() === id);

  return (
    <div>
      <SingleCard generation={generation} />
    </div>
  );
};

export default EleverSingleView;
