import Link from "next/link";

function Banner() {
  return (
    <div className="flex flex-col-reverse md:flex-row md:justify-between">
      <div className="flex flex-col mt-[10px] items-start max-lg:mt-[10]">
        <h2 className="border-b-[3px] border-solid border-[#53c60b] w-fit my-5 mx-0 font-bold text-2xl">
          RofaFood
        </h2>
        <p className="font-medium my-4 ">Food Delivery and Takeout!</p>
        <span className="text-gray-500 lg:text-justify">
        RofaFood is an online food ordering and delivery platform launched by
          Uber in 2014. Meals are delivered by couriers using cars, scooters,
          bikes, or on foot.
        </span>
        <Link
          href="/menu"
          className=" bg-[#53c60b] text-white py-[10px] px-[30px] w-fit mt-[30px] rounded-[5px]"
        >
          See All
        </Link>
      </div>
      <div>
        <img className="max-md:w-[350px] max-md:mx-auto w-[1090px]" src="/images/banner.png" alt="Food image" />
      </div>
    </div>
  );
}

export default Banner;
