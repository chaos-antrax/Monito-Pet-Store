import React, { useEffect, useState } from "react";
import ProductCard from "@/components/PetCard";
import arrow from "../../../assets/arrow.svg";

const PetsContainer = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const url = "https://monitor-backend-rust.vercel.app/api/pets";

    const fetchPets = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        // console.log(data);
        setPets(data);
      } catch (err) {
        console.log("error fetching pets", err);
      }
    };

    fetchPets();
  }, []);
  return (
    <div>
      <div>
        <span className="text-[14px]">What's New?</span>
        <br />
        <div className="md:flex md:h-full md:items-center md:justify-between">
          <span className="text-[20px] md:text-[24px] font-bold">
            Take a Look at Some of Our Pets
          </span>
          <div className="hidden md:block">
            <button className=" btn-secondary max-w-[200px] mt-2 flex items-center justify-center">
              View More <img src={arrow} />
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 md:mt-4">
        {pets?.map((pet) => (
          <ProductCard
            key={pet.id}
            image={pet.image}
            breed={pet.breed}
            gender={pet.gender}
            age={pet.age}
            price={pet.price}
          />
        ))}
      </div>
      <button className="md:hidden btn-secondary w-full mt-2 flex items-center justify-center">
        View More <img src={arrow} />
      </button>
    </div>
  );
};

export default PetsContainer;
