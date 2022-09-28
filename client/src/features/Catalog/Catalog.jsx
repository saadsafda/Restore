import { useEffect, useState } from "react";
import ProductList from "./ProductList";

export default function Catalog() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/Products")
      .then((response) => response.json())
      .then((res) => setProductList(res));
  }, []);

  return (
    <>
      <ProductList products={productList} />
    </>
  );
}
