import Card from "../modules/Card";

function Menu({ data }) {
  return (
    <div>
      <h2 className="border-b-[5px] border-solid border-[#53c60b] w-fit mb-[50px]  font-bold text-3xl">Menu</h2>
      <div className="flex flex-wrap justify-between max-lg:justify-center gap-10">
        {data.map((food) => (
          <Card key={food.id} {...food} />
        ))}
      </div>
    </div>
  );
}

export default Menu;
