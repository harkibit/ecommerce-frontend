import React, { useState } from "react";
import Head from "next/head";

import { useRouter } from "next/router";

import { API_URL } from "../../utils/urls";

export default function Product() {
  const [product, setProduct] = useState({});
  const router = useRouter();
  const { id } = router.query;

  React.useEffect(() => {
    id &&
      fetch(API_URL + "products/" + id)
        .then((res) => res.json())
        .then((data) => {
          setProduct(data.data);
        });
  }, [id]);

  return (
    <>
      <Head>
        <title>
          {product?.attributes?.meta_title
            ? product?.attributes?.meta_title
            : "Single Product Page"}
        </title>
        <meta
          name="description"
          content={
            product?.attributes?.meta_description
              ? product?.attributes?.meta_description
              : "Single Product Page"
          }
        />
        <link rel="icon" href="favicon.png" />
      </Head>
      <div>{product?.attributes?.title}</div>
    </>
  );
}
