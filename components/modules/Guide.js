import Link from "next/link";

function Guide() {
  return (
    <div className="flex justify-between mb-[100px]">
      <Link href="/menu" className="shadow-custom py-[15px] px-[50px] rounded-[10px] cursor-pointer max-md:py-[10px]  max-md:px-[20px]">Menu</Link>
      <Link href="/categories" className="shadow-custom py-[15px] px-[50px] rounded-[10px] cursor-pointer max-md:py-[10px]  max-md:px-[20px]">Categories</Link>
      <Link href="/" className="shadow-custom py-[15px] px-[50px] rounded-[10px] cursor-pointer max-md:py-[10px]  max-md:px-[20px]">Discount</Link>
    </div>
  );
}

export default Guide;
