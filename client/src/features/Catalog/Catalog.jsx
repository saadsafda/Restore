import { useEffect, useState } from "react";
import agent from "../../app/api/agent";
import ProductList from "./ProductList";

export default function Catalog() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    agent.Catalog.list()
      .then((res) => setProductList(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <ProductList products={productList} />
    </>
  );
}
