import { HiOutlineMenu } from "react-icons/hi";

const SecondaryHeader = () => {
  return (
    <>
      <div
        className="bg-amazon_blue-light h-9 gap-4 flex items-center
       text-white px-4 group-hover:text-black text-sm font-normal
       whitespace-nowrap"
      >
        <p className="flex items-center gap-1 font-medium">
          <HiOutlineMenu className="text-2xl" />
          All
        </p>
        <p className=""> {`Today's Deals`} </p>
        <p className=""> Customer Service </p>
        <p className=""> Gift Cards </p>
        <p className=""> Registry </p>
        <p className=""> Sell </p>
      </div>
    </>
  );
};

export default SecondaryHeader;
