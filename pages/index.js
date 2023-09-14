import Navbar from '@/components/Navbar';
import React, { useEffect, useState } from 'react';

const Index = () => {
  const images = [
    'https://images.pexels.com/photos/3634730/pexels-photo-3634730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.unsplash.com/photo-1489596162121-4a8e544d6de0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1412&q=80'
  ];

  const titles = [
    'Efficient LPG Gas Installation',
    'Switch to Piped Gas',
  ];

  const subtitles = [
    'Seamless Solutions for Safe and Reliable Cooking Gas.',
    'Transform Your Kitchen with Clean and Continuous Gas Supply.',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <><div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 flex justify-center items-center">
        <img
          src={images[currentIndex]}
          alt=""
          className="w-full h-full object-cover transition-opacity duration-1000 opacity-100"
          style={{
            filter: "brightness(70%)",
            zIndex: -1,
          }} />
      </div>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
        <section className="px-4 py-4 md:px-8">
          <h1 className="text-4xl font-extrabold mb-6 sm:text-5xl sm:mb-8 md:text-6xl">
            {titles[currentIndex]}
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-lg mx-auto">
            {subtitles[currentIndex]}
          </p>
          <a
            href="javascript:void(0)"
            className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
          >
            Know More
          </a>
        </section>


      </div>


    </div><section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">


          <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-3">
            <div>
              <img className="relative z-10 object-cover w-full rounded-md h-96" src="https://images.unsplash.com/photo-1664027842161-02973a244a76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TE9UJTIwSW5zdGFsbGF0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />

              <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                <a href="#" className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                  LOT Installation
                </a>

                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                  "LOT systems are designed to meet the needs of clients requiring a substantial volume of LPG, with the capacity to handle up to 250 kilograms per hour. These systems operate by drawing liquid LPG from specialized LOT cylinders through a dedicated LPG manifold system. Once extracted, the liquid LPG is then directed into a high-performance LPG vaporizer, where it is efficiently transformed into a usable gaseous state. This process ensures a reliable and continuous supply of LPG for various industrial and commercial applications, making LOT systems an ideal choice for high-demand situations."
                </p>


              </div>
            </div>

            <div>
              <img className="relative z-10 object-cover w-full rounded-md h-96" src="https://images.unsplash.com/photo-1610000805105-329dfdfd10b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBpcGVkJTIwZ2FzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />

              <div class="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                <a href="#" className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                  Reticulated Piped Gas
                </a>

                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                  "Reticulated piped gas, often referred to as natural gas or piped natural gas (PNG), is a safe and convenient energy source delivered directly to homes, businesses, and industries through an extensive network of underground pipelines. This versatile energy solution provides a continuous and reliable supply of clean-burning gas for a wide range of applications, including cooking, heating, hot water systems, and more. Reticulated piped gas offers numerous benefits, such as energy efficiency, reduced environmental impact, and the convenience of never needing to order or refill gas cylinders.
                  "
                </p>

              </div>
            </div>

            <div>
              <img className="relative z-10 object-cover w-full rounded-md h-96" src="https://images.unsplash.com/photo-1489596162121-4a8e544d6de0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FzJTIwJTIwaW5zdGFsbGF0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />

              <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                <a href="#" class="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                  LPG Tank (Bulk) Installation
                </a>

                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                  "LPG Tank (Bulk) Installation: Our professional and experienced team specializes in the safe and efficient installation of bulk LPG tanks. Whether you need a new tank installation or the replacement of an existing one, we ensure that your LPG storage solution is set up to the highest industry standards. Our comprehensive services encompass site assessment, tank selection, secure installation, and compliance with all relevant safety regulations. Trust us for a seamless and dependable LPG tank installation that meets your specific needs and provides a continuous supply of propane for your business or residential requirements."
                </p>


              </div>
            </div>
          </div>
        </div>
      </section><section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-8 mx-auto">
          <h2 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">We Provide Energy</h2>

          <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="w-full max-w-xs text-center">
              <img className="object-cover object-center  mx-auto rounded-lg" src="https://themes.webdevia.com/petroleum-gas/wp-content/uploads/2016/01/icon11.jpg" alt="avatar" />

              <div className="mt-2">
                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Installation By Expertize</h3>
                <span className="mt-1  text-gray-600 dark:text-gray-300">Our installation team comprises experienced professionals who are experts in their field</span>
              </div>
            </div>

            <div className="w-full max-w-xs text-center">
              <img className="object-cover object-center  mx-auto rounded-lg" src="https://themes.webdevia.com/petroleum-gas/wp-content/uploads/2016/01/icon81.jpg" alt="avatar" />

              <div className="mt-2">
                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Maximum Power</h3>
                <span className="mt-1  text-gray-600 dark:text-gray-300">Get Unlimited Energy of passages of Lerem ipsum available</span>
              </div>
            </div>

            <div className="w-full max-w-xs text-center">
              <img className="object-cover object-center  mx-auto rounded-lg" src="https://themes.webdevia.com/petroleum-gas/wp-content/uploads/2016/01/icon71.jpg" alt="avatar" />

              <div className="mt-2">
                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Oil Resources</h3>
                <span className="mt-1  text-gray-600 dark:text-gray-300">There is many variantions of passages of Lerem ipsum available</span>
              </div>
            </div>

            <div className="w-full max-w-xs text-center">
              <img className="object-cover object-center  mx-auto rounded-lg" src="https://themes.webdevia.com/petroleum-gas/wp-content/uploads/2016/01/icon61.jpg" alt="avatar" />

              <div className="mt-2">
                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Continues Development</h3>
                <span className="mt-1  text-gray-600 dark:text-gray-300">There is many variantions of passages of Lerem ipsum available</span>
              </div>
            </div>
            <div className="w-full max-w-xs text-center">
              <img className="object-cover object-center  mx-auto rounded-lg" src="https://themes.webdevia.com/petroleum-gas/wp-content/uploads/2016/01/icon51.jpg" alt="avatar" />

              <div className="mt-2">
                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Chimical Analysis</h3>
                <span className="mt-1  text-gray-600 dark:text-gray-300">There is many variantions of passages of Lerem ipsum available</span>
              </div>
            </div>

            <div className="w-full max-w-xs text-center">
              <img className="object-cover object-center  mx-auto rounded-lg" src="https://themes.webdevia.com/petroleum-gas/wp-content/uploads/2016/01/icon41.jpg" alt="avatar" />

              <div className="mt-2">
                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">We Fight Polution</h3>
                <span className="mt-1  text-gray-600 dark:text-gray-300">There is many variantions of passages of Lerem ipsum available</span>
              </div>
            </div>

            <div className="w-full max-w-xs text-center">
              <img className="object-cover object-center  mx-auto rounded-lg" src="https://themes.webdevia.com/petroleum-gas/wp-content/uploads/2016/01/icon31.jpg" alt="avatar" />

              <div className="mt-2">
                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">We Think About The Consumer</h3>
                <span className="mt-1  text-gray-600 dark:text-gray-300">There is many variantions of passages of Lerem ipsum available</span>
              </div>
            </div>

            <div className="w-full max-w-xs text-center">
              <img className="object-cover object-center  mx-auto rounded-lg" src="https://themes.webdevia.com/petroleum-gas/wp-content/uploads/2016/01/icon9.jpg" alt="avatar" />

              <div className="mt-2">
                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">We Care About Envirement</h3>
                <span className="mt-1  text-gray-600 dark:text-gray-300">There is many variantions of passages of Lerem ipsum available</span>
              </div>
            </div>
          </div>
        </div>
      </section></>
  );
}

export default Index;
