import React, { useEffect, useState } from "react";
import arrow from "../../../assets/arrow.svg";
import ItemCard from "@/components/ItemCard";

const Products = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const url = "https://monitor-backend-rust.vercel.app/api/products";

    const fetchProducts = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        // console.log(data);
        setProduct(data);
      } catch (err) {
        console.log("error fetching products", err);
      }
    };

    fetchProducts();
  }, []);
  return (
    <div className="hidden md:block mt-8">
      <div>
        <span className="text-[14px]">
          Hard to choose right products for your pets?
        </span>
        <br />
        <div className="md:flex md:h-full md:items-center md:justify-between">
          <span className="text-[20px] md:text-[24px] font-bold">
            Our Products
          </span>
          <div className="hidden md:block">
            <button className=" btn-secondary max-w-[200px] mt-2 flex items-center justify-center">
              View More <img src={arrow} />
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 md:mt-4">
        {product?.map((item) => (
          <ItemCard
            key={item.id}
            name={item.name}
            image={item.image}
            product={item.product}
            size={item.size}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
