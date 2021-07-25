import Image from "next/image";
import amazon_logo from "../../public/amazon_logo.png";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import SecondaryHeader from "./SecondaryHeader";

const Header = () => {
  return (
    <>
      {/* top nav bar */}
      <div className="flex items-center bg-amazon_blue px-1 py-2 flex-grow  ">
        {/* logo section */}
        <div className="pt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            alt="amazon logo"
            src={amazon_logo}
            objectFit="contain"
            width={150}
            height={40}
            className="cursor-pointer"
          />
        </div>
        {/* search */}

        <div
          className=" whitespace-nowrap
          flex-grow cursor-pointer h-10 items-center rounded-md flex
          bg-yellow-400 bg-opacity-95
          focus-within:ring focus-within:ring-yellow-400
           "
        >
          <input
            className="px-3 h-full p-2 flex-grow flex-shrink rounded-l-md 
              focus:outline-none"
          />
          <FaSearch className="h-full box-content p-3   " />
        </div>
        {/* Right side */}
        <div className="text-white flex whitespace-nowrap space-x-6 mx-6 items-center text-sm">
          <div className="cursor-pointer active:cursor-grabbing">
            <p>hello, user name</p>
            <strong>
              <p>Account & and Lists</p>
            </strong>
          </div>
          <div className="cursor-pointer active:cursor-grabbing">
            <p>returns</p>
            <strong>
              <p>& Orders</p>
            </strong>
          </div>
          <div className="flex items-end relative gap-1 cursor-pointer active:cursor-grabbing">
            <span
              className="absolute top-0 h-4 w-4 text-center  text-black leading-4
              font-bold rounded-lg bg-yellow-400  left-6"
            >
              2
            </span>

            <HiOutlineShoppingCart className="h-10 text-3xl" />
            <strong>
              <p className="hidden md:inline-block">Cart</p>
            </strong>
          </div>
        </div>
        {/* secondary navbar */}
      </div>
    </>
  );
};

export default Header;
