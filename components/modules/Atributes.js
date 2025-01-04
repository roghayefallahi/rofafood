import Choice from "../icons/Choice";
import Clock from "../icons/Clock";
import Fast from "../icons/Fast";
import Food from "../icons/Food";

function Atributes() {
  return (
    <div className="mt-[100px]">
      <h3 className="text-2xl text-[#53c60b] my-[24px] mx-0">Why us?</h3>
      <div className="flex justify-between max-md:justify-around max-md:gap-4 max-md:flex-wrap">
        <div className="w-[150px] rounded-[10px] flex flex-col items-center justify-center mt-5 p-5 text-center shadow-custom">
          <Fast />
          <p className="font-semibold mt-5">Fast</p>
        </div>
        <div className="w-[150px] rounded-[10px] flex flex-col items-center justify-center mt-5 p-5 text-center shadow-custom">
          <Food />
          <p className="font-semibold mt-5">Best Restaurant</p>
        </div>
        <div className="w-[150px] rounded-[10px] flex flex-col items-center justify-center mt-5 p-5 text-center shadow-custom">
          <Choice />
          <p className="font-semibold mt-5">Your Choice</p>
        </div>
        <div className="w-[150px] rounded-[10px] flex flex-col items-center justify-center mt-5 p-5 text-center shadow-custom">
          <Clock />
          <p className="font-semibold mt-5">24-7</p>
        </div>
      </div>
    </div>
  );
}

export default Atributes;
