import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
const Section3 = () => {
  const newsData = [
    {
      title: 'New Road Safety Campaign Launched',
      date: 'November 15, 2023',
      content: 'BRTA has launched a new road safety campaign to raise awareness and promote safe driving habits.',
    },
    {
      title: 'Upcoming License Renewal Deadline',
      date: 'December 1, 2023',
      content: "Don't forget to renew your driving license before the upcoming deadline. Stay legal on the road!",
    },
    {
      title: 'Vehicle Registration Process Simplified',
      date: 'November 25, 2023',
      content: "We've streamlined the vehicle registration process for your convenience. Check it out now!",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 800, 
      easing: 'ease-in-out', 
      delay: 200, 
    });
  }, []);
  return (
<div className='my-5'>
<div className="py-16 font-mono relative">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-8">News and Updates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
          {newsData.map((news, index) => (
            <div
              key={index}
              className="relative bg-yellow-50 p-6 rounded-md shadow-md"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 384 512"
                className="absolute -top-3 left-0 w-8 h-8 "
                fill='rgb(54, 48, 98)'
              >
                <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">{news.title}</h3>
              <p className="text-gray-500 mb-2">{news.date}</p>
              <p className="text-gray-700">{news.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
</div>
  );
};

export default Section3;
