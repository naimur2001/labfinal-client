import React from 'react'
import "swiper/css";
import "swiper/css/pagination";
import "/public/Slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
const Section1 = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 3) + "</span>";
    },
  };
  const sliderData = [
   
    {
      id: 2,
      title: 'Get Your Driving License',
      subtitle: 'Follow the Instructions Below',
      image: 'https://img.freepik.com/free-vector/hand-drawn-driving-license-template_23-2150020441.jpg?size=626&ext=jpg&ga=GA1.1.1537242609.1693992274&semt=sph',
      shortInstruction: 'Follow the steps carefully to obtain your driving license.',
      fee: 'BDT 500',
    },
    {
      id: 3,
      title: 'Vehicle Registration',
      subtitle: 'Register Your Vehicle with BRTA',
      image: 'https://img.freepik.com/free-vector/taxi-service-online-service-platform-yellow-taxi-car-automobile-cab-with-driver-inside-idea-public-city-transportation-online-forum-isolated-flat-illustration_613284-549.jpg?size=626&ext=jpg&ga=GA1.1.1537242609.1693992274&semt=ais',
      shortInstruction: 'Complete the vehicle registration process at the nearest BRTA office.',
      fee: 'BDT 1000',
    },
    {
      id: 4,
      title: 'License Renewal',
      subtitle: 'Renew Your Driving License on Time',
      image: 'https://img.freepik.com/premium-vector/license-document-page-achievement-award-vector-stock-illustration_123447-5679.jpg?size=626&ext=jpg&ga=GA1.1.1537242609.1693992274&semt=ais',
      shortInstruction: 'Ensure to renew your driving license before the expiration date.',
      fee: 'BDT 300',
    },
    {
      id: 5,
      title: 'Vehicle Inspection',
      subtitle: 'Ensure Your Vehicle Meets Safety Standards',
      image: 'https://img.freepik.com/free-vector/car-service-isometric-compositions-with-workshop-staff-performing-diagnostics-maintenance-wheel-balancing-isolated-vector-illustration_1284-79697.jpg?size=626&ext=jpg&ga=GA1.1.1537242609.1693992274&semt=ais',
      shortInstruction: 'Schedule a vehicle inspection to ensure safety compliance.',
      fee: 'BDT 200',
    },
    {
      id: 6,
      title: 'Fee Structure',
      subtitle: 'Fees for Different Types of Vehicles',
      image: 'https://img.freepik.com/free-vector/sales-growth-abstract-concept-illustration_335657-4454.jpg?size=626&ext=jpg&ga=GA1.1.1537242609.1693992274&semt=ais',
      shortInstruction: 'Check the fee structure for various vehicle types.',
      fee: 'Varies by vehicle type',
    },
  ];
  
  



  return (
    <div className='my-5'>
    <Swiper
     breakpoints={{
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      620: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    }}
    freeMode={true}     
      spaceBetween={20}      // Adjust spacing between slides
      className='mySwiper rounded-lg'
    >
      {sliderData.map((slide) => (
        <SwiperSlide key={slide.id} className="bg-purple-100 lg:w-0 w-full sm:w-96 h-96 p-4 rounded-md shadow-lg mx-5">
          <img src={slide.image} alt={slide.title} className="mb-4 rounded-md w-full h-48 object-cover" />
          <h2 className="text-xl font-bold mb-2">{slide.title}</h2>
          <p className="text-gray-500 mb-4">{slide.subtitle}</p>
          {slide.shortInstruction && (
            <div>
              <h3 className="font-semibold mb-2">Instructions:</h3>
              <p className="text-gray-700">{slide.shortInstruction}</p>
            </div>
          )}
          {slide.fee && (
            <div>
              <h3 className="font-semibold mb-2">Fee:</h3>
              <p className="text-gray-700">{slide.fee}</p>
            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  
  )
}

export default Section1

