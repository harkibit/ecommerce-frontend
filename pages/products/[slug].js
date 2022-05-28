import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { API_URL } from "../../utils/urls";

export default function Product({ product }) {
  return <div>{product.attributes?.name}</div>;
}

export async function getStaticProps({ params: { slug } }) {
  const query = `?populate=*&where={"slug":"${slug}"}`;

  const product_res = await fetch(API_URL + "products/" + query);
  const product = await product_res.json();
  return { props: { product: product } };
}

export async function getStaticPaths(id) {
  const products_res = await fetch(API_URL + "products");
  const products = await products_res.json();

  return {
    paths: products.data.map((product) => ({
      params: {
        slug: product.attributes.slug,
      },
    })),
    fallback: false,
  };
}
