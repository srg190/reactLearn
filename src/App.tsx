// import React, { useEffect, useState, useMemo } from "react";
// import axios from "axios";

// function ProductList() {
//   // State for storing the product list
//   const [products, setProducts] = useState([]);
//   // State for tracking any relevant dependencies for memoization
//   const [dependency, setDependency] = useState(0);

//   // Define a memoized function for fetching the product list
//   const fetchProductList = useMemo(() => {
//     console.log("test");
//     return async () => {
//       try {
//         console.log("test useMemo");

//         const response = await axios.get(
//           "https://jsonplaceholder.typicode.com/posts"
//         ); // Replace with your API endpoint
//         setProducts(response.data);
//       } catch (error) {
//         console.error("Error fetching product list:", error);
//       }
//     };
//   }, [dependency]);

//   var fetch = () => {
//     console.log();
//   };
//   useEffect(() => {
//     fetchProductList();
//     console.log("test useEffect");
//     fetch();
//   }, []);

//   return (
//     <div>
//       <h1>Product List</h1>
//       <ul>
//         {products.map((product: any) => (
//           <li key={product.id}>{product.title}</li>
//         ))}
//       </ul>
//       <button onClick={() => setDependency(dependency + 1)}>
//         Click to Refresh Product List
//       </button>
//     </div>
//   );
// }

// export default ProductList;

import { useMemo, useState } from "react";

let count = 0;
function someExpensiveFunction(n: number) {
  console.log("Hello ");
  count++;
  return n * n;
}
export default function myFunction() {
  const [cnt, setCnt] = useState(5);
  const result = useMemo(
    () => (cnt: number) => {
      console.log("hello here ");
      return someExpensiveFunction(cnt);
    },
    [cnt]
  );
  let res = 0;
  let t = 100;
  while (t--) {
    res = result(cnt);
  }
  console.log(count);
  return (
    <>
      <div>{res}</div>
      <button onClick={() => setCnt(cnt + 1)}>+</button>
      <button onClick={() => setCnt(cnt - 1)}>-</button>
    </>
  );
}
