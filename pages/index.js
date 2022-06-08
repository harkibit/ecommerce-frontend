import Head from "next/head";

import { Divider } from "antd";
import Products from "../components/Products";
import Layout from "../components/Layout";
import HeaderCarousel from "../components/HeaderCarousel";

import { API_URL } from "../utils/urls";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>E-commerce</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="favicon.png" />
      </Head>
      <Navbar />
      <HeaderCarousel />
      <Testimonials />
      <Divider />
      <Layout>
        <Products products={products} maxArray={8} />
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const query = "?populate=*";
  const products_res = await fetch(API_URL + "products/" + query);
  const products = await products_res.json();
  return { props: { products } };
}
