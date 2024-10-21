import React, { useEffect, useState } from "react";
import { Wrapper } from "@/components/Index";
import Banner from "@/components/Categories/Banner";
import ProductCard from "@/components/PetCard";

const Categories = () => {
  const [dogs, setDogs] = useState([]);
  const dogsNum = dogs.length;

  useEffect(() => {
    const url = "https://monitor-backend-rust.vercel.app/api/pets";

    const fetchDogs = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        // console.log(data);
        setDogs(data);
      } catch (err) {
        console.log("error fetching dogs", err);
      }
    };

    fetchDogs();
  }, []);

  return (
    <Wrapper>
      <div className=" text-main-blue bg-[#f6f6f6] px-4 py-8">
        <Banner />
        <div className="my-4">
          <span className="text-[24px]">Small Dog</span>
          <span className="ml-4">{dogsNum} puppies</span>
        </div>
        <div className="grid grid-cols-2">
          {dogs?.map((dog) => (
            <ProductCard
              key={dog.id}
              image={dog.image}
              breed={dog.breed}
              gender={dog.gender}
              age={dog.age}
              price={dog.price}
            />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Categories;
