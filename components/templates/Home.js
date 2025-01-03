import Atributes from "../modules/Atributes";
import Banner from "../modules/Banner";
import Companies from "../modules/Companies";
import Definition from "../modules/Definition";
import Guide from "../modules/Guide";
import Instruction from "../modules/Instruction";
import Restrictions from "../modules/Restrictions";

function Home() {
  return (
    <>
      <Banner />
      <Atributes />
      <Definition />
      <Companies />
      <Instruction />
      <Guide />
      <Restrictions />
    </>
  );
}

export default Home;
