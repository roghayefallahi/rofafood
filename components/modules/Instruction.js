function Instruction() {
  return (
    <div className="mb-[100px]">
      <h3 className="text-2xl text-[#53c60b] my-[24px] mx-0">How to Order?</h3>
      <ul className="p-0">
        <li className="text-[1.1rem] font-medium leading-[30px] list-none before:content-['•_']  before:text-[#53c60b]">
          Sign in (or create an account) and set your delivery address.
        </li>
        <li className="text-[1.1rem] font-medium leading-[30px] list-none before:content-['•_']  before:text-[#53c60b]">
          Choose the restaurant you want to order from.
        </li>
        <li className="text-[1.1rem] font-medium leading-[30px] list-none before:content-['•_']  before:text-[#53c60b]">
          Select your items and tap “Add to Cart”.
        </li>
        <li className="text-[1.1rem] font-medium leading-[30px] list-none before:content-['•_']  before:text-[#53c60b]">
          To place your order, select “View cart” or “Checkout”.
        </li>
        <li className="text-[1.1rem] font-medium leading-[30px] list-none before:content-['•_']  before:text-[#53c60b]">
          Review your order and tap “Place Order”...
        </li>
        <li className="text-[1.1rem] font-medium leading-[30px] list-none before:content-['•_']  before:text-[#53c60b]">
          Track your order progress.
        </li>
      </ul>
    </div>
  );
}

export default Instruction;
