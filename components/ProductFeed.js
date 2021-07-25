import Product from "./Product";
import CenterImg from "../public/amazon_center_img.jpg";
import Image from "next/image";

const ProductFeed = ({ products }) => {
  return (
    <div
      className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 
    xl:grid-cols-4 md:-mt-52 m-x"
    >
      {products.slice(0, 4).map((product) => {
        return <Product key={product.id} product={product} />;
      })}
      <div className="relative md:col-span-full">
        <Image
          className=""
          src={CenterImg}
          objectFit="contain"
          alt="center product"
          layout="responsive"
        />
      </div>

      {products.slice(4, 6).map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ProductFeed;
