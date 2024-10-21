import React, { useEffect, useState } from "react";
import ProductCard from "@/components/PetCard";
import FilterSection from "./FilterSection";

const Filter = () => {
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
    <div className="flex md:mt-8 my-4">
      <div className="hidden md:block w-[30%]">
        <div>
          <span className="text-[24px] md:font-bold">Filters</span>
        </div>
        <FilterSection />
      </div>
      <div className="md:w-[70%]">
        <span className="text-[24px] md:font-bold">Small Dog</span>
        <span className="ml-4 md:text-sm">{dogsNum} puppies</span>
        <div className="grid grid-cols-2 md:grid-cols-3">
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
    </div>
  );
};

export default Filter;
