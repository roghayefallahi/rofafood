import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Card from "../modules/Card";

function Categories({ data }) {
  const router = useRouter();

  const [query, setQuery] = useState({
    difficulty: "",
    time: "",
  });
  useEffect(() => {
    const { difficulty, time } = router.query;
    if (query.difficulty !== difficulty || query.time !== time) {
      setQuery({ difficulty, time });
    }
  }, []);

  const changeHandler = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };
  const searchHandler = () => {
    router.push({
      pathname: "/categories",
      query,
    });
  };

  return (
    <div>
      <h2 className="border-b-[5px] border-solid border-[#53c60b] w-fit mb-[50px] text-3xl">
        Categories
      </h2>
      <div>
        <div className="max-sm:flex max-sm:flex-col ">
          <select
            value={query.difficulty}
            name="difficulty"
            onChange={changeHandler}
            className="border-none w-[150px] h-10 rounded-[10px] mr-[10px] p-[10px] text-[#48ac0a] shadow-custom max-sm:w-full max-sm:mt-0  max-sm:mx-0 max-sm:mb-5"
          >
            <option value="">Difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
          <select
            value={query.time}
            name="time"
            onChange={changeHandler}
            className="border-none w-[150px] h-10 rounded-[10px] mr-[10px] p-[10px] text-[#48ac0a] shadow-custom max-sm:w-full max-sm:mt-0  max-sm:mx-0 max-sm:mb-5"
          >
            <option value="">Cooking Time</option>
            <option value="more">More than 30 min</option>
            <option value="less">Less than 30 min</option>
          </select>
          <button
            onClick={searchHandler}
            className="border-none bg-[#53c60b] text-white h-[35px] py-0 px-5 rounded-lg cursor-pointer"
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-between mt-20">
        {!data.length ? (
          <img className="m-auto" src="/images/search.png" alt="category" />
        ) : null}
        {data.map((food) => (
          <Card key={food.id} {...food} />
        ))}
      </div>
    </div>
  );
}

export default Categories;
