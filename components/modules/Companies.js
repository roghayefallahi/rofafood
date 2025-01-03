import Apple from "../icons/Apple";
import Binance from "../icons/Binance";
import SpaceX from "../icons/SpaceX";
import Tesla from "../icons/Tesla";

function Companies() {
  return (
    <div className="flex items-center justify-between  max-md:justify-center">
      <Apple />
      <SpaceX />
      <Binance />
      <Tesla />
    </div>
  );
}

export default Companies;
