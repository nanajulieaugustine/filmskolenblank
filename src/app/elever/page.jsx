import EleverListCard from "@/components/elever/EleverListCard";

export const metadata = {
  title: "Elever | Filmskolen Blank",
  description: "Samling af elever dimmiteret hos Filmskolen Blank. Blank opstod i 2021 og er et kunstnerisk grundkursus under Talent Holbæk og Holbæk Kulturskole.",
};

const Elever = () => {
    return (<div>
        <EleverListCard/>
    </div>  );
}
 
export default Elever;