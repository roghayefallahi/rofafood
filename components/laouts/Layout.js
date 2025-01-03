import Link from "next/link";

function Layout({ children }) {
  return (
    <>
      <header className="flex justify-between m-auto items-center py-5 px-0 max-w-[900px] max-sm:p-[15px] max-lg:p-[20px]">
        <div>
          <Link href="/" className="text-[#53c60b] font-semibold text-[1.2rem]">
            RofaFood
          </Link>
        </div>
        <div>
          <Link href="menu" className="ml-[15px] text-[dimgrey] font-medium ">
            Menu
          </Link>
          <Link
            href="categories"
            className="ml-[15px] text-[dimgrey] font-medium "
          >
            Categories
          </Link>
        </div>
      </header>
      <div className="max-w-[900px] m-auto mt-[100px] max-sm:p-[15px] max-lg:p-[20px] min-h-[1000px]">{children}</div>
      <footer className="bg-[#53c60b] text-center text-white py-[10px] mt-8">
        <p className="">Developed by Roghayeh with ❤️</p>
      </footer>
    </>
  );
}

export default Layout;
