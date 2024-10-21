import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    const url = "https://monitor-backend-rust.vercel.app/api/customers";

    const fetchCustomers = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        // console.log(data);
        setCustomers(data);
      } catch (err) {
        console.log("error fetching customers", err);
      }
    };

    fetchCustomers();
  }, []);
  return (
    <div className="mt-8 md:hidden">
      <span className="text-[20px] md:text-[24px] font-bold">
        Our Lovely Customers
      </span>
      <Swiper slidesPerView="1.45" freeMode={true} className="mt-4">
        {customers.map((customer) => (
          <SwiperSlide key={customer.name} className="mt-4">
            <img src={customer.image} alt="customer" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Customers;
