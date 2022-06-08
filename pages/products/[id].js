import React, { useState } from "react";
import Head from "next/head";
import Image from "next/Image";
import { useRouter } from "next/router";

import { BsCartPlus } from "react-icons/bs";
import { HiMinus, HiPlus } from "react-icons/hi";

import Navbar from "../../components/Navbar";
import Layout from "../../components/Layout";

import styles from "../../styles/Home.module.css";
import { API_URL, fromImageToURL } from "../../utils/urls";
import { formatDecimals } from "../../utils/format";

export default function Product() {
  const [counter, setCounter] = useState(1);
  const [product, setProduct] = useState({});
  const router = useRouter();
  const { id } = router.query;

  const decreaseCounter = () => {
    counter > 1 && setCounter(counter - 1);
  };
  const increaseCounter = () => setCounter(counter + 1);

  React.useEffect(() => {
    id &&
      fetch(API_URL + "products/" + id + "?populate=*")
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
      <Navbar />
      <Layout>
        <div className={styles.productContainer}>
          <div>
            <Image
              src={fromImageToURL(product?.attributes?.image.data?.attributes)}
              alt={product?.attributes?.title}
              width={600}
              height={600}
              className={styles.productImage}
              style={{ borderRadius: "10px" }}
            />
          </div>
          <div className={styles.productContent}>
            <span className={styles.productGenre}>
              {product?.attributes?.genre}
            </span>
            <h1>{product?.attributes?.title}</h1>
            <p>{product?.attributes?.description}</p>
            <span className={styles.productPrice}>
              ${formatDecimals(product?.attributes?.price, 2)}
            </span>
            <div className={styles.productFooter}>
              <div className={styles.productCounterContainer}>
                <button className={styles.iconBtn} onClick={decreaseCounter}>
                  <HiMinus />
                </button>
                <span className={styles.counter}>{counter}</span>
                <button className={styles.iconBtn} onClick={increaseCounter}>
                  <HiPlus />
                </button>
              </div>
              <button className={`${styles.btn} ${styles.btnPrimary}`}>
                <BsCartPlus /> &nbsp; Add to Cart
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
