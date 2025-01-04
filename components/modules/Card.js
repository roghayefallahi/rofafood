import Link from "next/link";
import Dollar from "../icons/Dollar";
import Location from "../icons/Location";

function Card(props) {
  const { id, name, price, details, discount } = props;
  return (
    <div className="flex flex-col w-[270px] shadow-custom p-[10px] rounded-[10px] relative">
      <img src={`/images/${id}.jpeg`} alt={name} className="w-full rounded-[5px]" />
      <div className="flex items-baseline justify-between text-gray-500 text-[0.85rem] my-[22px] mx-0">
        <h4 className="text-[#53c60b] font-medium text-[1rem]">{name}</h4>
        <div className="flex justify-start items-center">
          <Location />
          <span>{details[0].Cuisine}</span>
        </div>
      </div>
      <div className="flex justify-start items-center">
        <Dollar />
        {discount ? (
          <span className="text-[#ed4133]">{(price * (100 - discount)) / 100} $</span>
        ) : (
          <span>{price} $</span>
        )}

        {discount ? <div className="bg-[#ed4133] text-white p-1 rounded-[5px] border-[3px] border-solid border-white absolute top-[15px] left-[15px]">{discount} %</div> : null}
      </div>
      <Link href={`/menu/${id}`} className="bg-[#53c60b] text-white block w-full text-center mt-5 py-[5px] px-0 rounded-[5px]">See Details</Link>
    </div>
  );
}

export default Card;
