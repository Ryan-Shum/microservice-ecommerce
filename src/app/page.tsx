'use client';
import Link from "next/link";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import Product from "./components/Product";

type ProductType = {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  imageId: number;
};


export default function Home() {
    const [products, setProducts] = useState<ProductType[]>([]);
    useEffect(() => {
        axios.get("http://localhost:8080/products").then((response) => {
            setProducts(response.data);
        });
    }, []);

    return (
      <div className="container">
        <h1 className="page-title">Products</h1>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              {/* <img src={`/path/to/image/${product.imageId}`} alt={product.name} /> */}
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className="price">Price: ${product.price}</p>
              <p className="stock">Available: {product.stock}</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    );
  }