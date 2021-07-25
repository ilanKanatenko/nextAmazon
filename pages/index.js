import Head from "next/head";
import Header from "../components/Header/Header";
import SecondaryHeader from "../components/Header/SecondaryHeader";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";

import styles from "../styles/Home.module.css";
// import dbConnect from "../utils/dbConnect";
// import User from "../models/User";

export default function Home({ products }) {
  // await dbConnect();

  // const user = new User({ name: "ilan" });
  // await user.save();

  return (
    <div className="bg-gray-100">
      <Header />
      <SecondaryHeader />
      {/* <main className="max-w-screen-2xl mx-auto"> */}
      <Banner />
      {/* </main> */}
      <ProductFeed products={products} />
    </div>
  );
}
export async function getServerSideProps() {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (response) => response.json()
  );

  return {
    props: { products: products },
  };
}

// export async function getServerSideProps() {
//   /* find all the data in our database */
//   await dbConnect();

//   const user = new User({ name: "ilan" });
//   await user.save();

//   return { props: { user: user.name } };
// }
