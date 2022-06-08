import Head from "next/head";

import { useRouter } from "next/router";

import { API_URL } from "../../utils/urls";

export default function Product({ product }) {
  return (
    <>
      <Head>
        <title>
          {product.attributes?.meta_title
            ? product.attributes?.meta_title
            : "Single Product Page"}
        </title>
        <meta
          name="description"
          content={
            product.attributes?.meta_description
              ? product.attributes?.meta_description
              : "Single Product Page"
          }
        />
        <link rel="icon" href="favicon.png" />
      </Head>
      <div>{product.attributes?.name}</div>
    </>
  );
}

export async function getStaticProps({ params: { slug } }) {
  const query = `?populate=*&slug=${slug}`;
  const product_res = await fetch(API_URL + `products` + query);
  const product = await product_res.json();
  return {
    props: {
      product: product,
    },
  };
}

export async function getStaticPaths() {
  const query = "?populate=*";
  const products_res = await fetch(API_URL + "products/" + query);
  const products = await products_res.json();
  return {
    paths: products.data.map((el) => ({
      params: { slug: String(el.attributes.slug) },
    })),
    fallback: false,
  };
}
