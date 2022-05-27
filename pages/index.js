import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Products from "../components/Products";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import HeaderCarousel from "../components/HeaderCarousel";

import { API_URL } from "../utils/urls";

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>E-commerce</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/public/images/favicon.png" />
      </Head>
      <HeaderCarousel />
      <Layout>
        <Products products={products} />
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const query = "?populate=*";
  const products_res = await fetch(API_URL + "products/" + query);
  const products = await products_res.json();
  return { props: { products: products } };
}
