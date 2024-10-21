import React, { useEffect, useState } from "react";
import Wrapper from "../components/Wrapper";
import Header from "../components/Home/Header/Header";
import ProductCard from "../components/ProductCard";
import arrow from "../assets/arrow.svg";
import Banner from "../components/Home/Body/Banner";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Home = () => {
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
    <Wrapper>
      <Header />
      <div className=" text-main-blue bg-[#f6f6f6] px-4 py-8">
        <div>
          <div>
            <span className="text-[14px]">What's New?</span>
            <br />
            <span className="text-[20px] font-bold">
              Take a Look at Some of Our Pets
            </span>
          </div>

          <div className="grid grid-cols-2">
            {pets.map((pet) => (
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
          <button className="btn-secondary w-full mt-2 flex items-center justify-center">
            View More <img src={arrow} />
          </button>
          <Banner />
          <div className="mt-8">
            <span className="text-[20px] font-bold">Our Lovely Customers</span>
            <Swiper>
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;
