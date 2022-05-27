import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Product() {
  const BASE_URL = "http://localhost:1337/api/";
  const router = useRouter();
  const { pid } = router.query;

  const [product, setProduct] = useState({});
  useEffect(() => {
    const query = "?populate=*";
    fetch(BASE_URL + "products/" + pid + query)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.data);
      });
  }, [pid]);

  return <div>{product.attributes?.name}</div>;
}
