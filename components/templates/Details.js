import Dollar from "../icons/Dollar";
import Location from "../icons/Location";

function Details(props) {
  const {
    id,
    name,
    price,
    details,
    introduction,
    discount,
    ingredients,
    recipe,
  } = props;

  return (
    <div>
      <h2 className="border-b-[5px] border-solid border-[#53c60b] w-fit mb-[50px]  text-3xl">
        Details
      </h2>
      <div>
        <div className="flex max-sm:flex-col">
          <img
            src={`/images/${id}.jpeg`}
            alt={name}
            className="w-[300px] max-sm:w-full max-sm:mb-5 rounded-[10px]"
          />
          <div className="ml-[30px] max-sm:m-0">
            <h3 className="text-[1.3rem] text-[#53c60b]">{name}</h3>
            <div className="flex justify-start items-center text-gray-500 mt-5 mx-0 mb-5">
              <Location />
              <span>{details[0].Cuisine}</span>
            </div>
            <div className="flex justify-start items-center ">
              <Dollar />
              {discount ? (
                <span className="text-[#ed4133]">
                  {(price * (100 - discount)) / 100} $
                </span>
              ) : (
                <span>{price} $</span>
              )}
            </div>
            {discount ? (
              <div className="bg-[#ed4133] text-white py-3 px-0 flex justify-center rounded-[5px] mt-5">
                {discount} % OFF
              </div>
            ) : null}
          </div>
        </div>
        <div className="my-[60px] mx-0 leading-6 text-justify">
          <p>{introduction}</p>
        </div>
        <div className="mb-[60px]">
          <h4 className="text-2xl text-[#53c60b] my-6 mx-0">Details</h4>
          <ul className="list-none">
            {details.map((detail, index) => (
              <li key={index} className="flex items-center">
                <p className="before:content-['•_']  before:text-[#53c60b] text-[1.1rem] font-medium leading-[30px]">
                  {Object.keys(detail)[0]}:{" "}
                </p>
                <span className="text-gray-500 px-1">
                  {Object.values(detail)[0]}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-[60px]">
          <h4 className="text-2xl text-[#53c60b] my-6 mx-0">Ingredients</h4>
          <ul className="list-none">
            {ingredients.map((item, index) => (
              <li key={index} className="flex items-center">
                <p className="text-[1.1rem] font-medium leading-[30px] before:content-['•_']  before:text-[#53c60b]">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-[100px]">
          <h4 className="text-2xl text-[#53c60b] my-6 mx-0">Recipe</h4>
          {recipe.map((item, index) => (
            <div
              className={`flex items-center text-justify py-5 px-[10px] ${
                index % 2 ? "bg-[#e8ffdb]" : "bg-[#bcff93]"
              }`}
              key={index}
            >
              <span className="text-[2rem] my-0 mr-[15px] ml-[5px]">
                {index + 1}
              </span>
              <p>{item}</p>
            </div>
          ))}
        </div>
        <button className="w-full border-none bg-[#53c60b] text-white p-[15px] text-[1.3rem] rounded-[10px] cursor-pointer mb-[100px]">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Details;
