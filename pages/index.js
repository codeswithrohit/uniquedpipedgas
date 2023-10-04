import Indexbottom from '@/components/Indexbottom';
import React, { useState, useEffect } from 'react';


const Hero8 = () => {
  
  const images = [
    'unique gas.png',
    'slider.png'
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
    <div className='min-h-screen bg-white'>
    <div className="relative  w-full h-full flex justify-end bg-gradient-to-t from-black via-transparent to-black overflow-hidden">
    {/* :HERO IMAGE */}
    <img
      src={images[currentIndex]}
      alt=""
      className="absolute w-full h-216 object-cover object-left sm:object-center opacity-70" />
    {/* :HERO MAIN CONTAINER */}
    <div className="relative py-2 xl:py-40 w-full md:w-2/3 lg:w-1/2 h-full flex flex-col justify-center">
      {/* ::Hero title & text */}
      <div className="mx-5 md:mx-0  p-8 rounded-xl md:rounded-r-none bg-gray-800 bg-opacity-50 text-white shadow-2xl">
          <h1 className="text-3xl sm:text-5xl text-yellow-500 font-josefin font-extrabold">{titles[currentIndex]} <br/></h1>
          <h1 className="text-2xl sm:text-3xl font-josefin font-bold"> {subtitles[currentIndex]}<br/></h1>
        </div>
      {/* ::Hero button */}
      <button className="relative m-5 w-full md:w-2/3 lg:w-2/5 inline-flex items-center text-2xl font-firacode text-white overflow-hidden transition-all duration-300 transform hover:translate-x-4">
          <span className="relative -top-0.5 mr-2">Explore</span>
          <img src="arrow.png" alt="" className="absolute left-16 w-20" />
        </button>
      {/* ::Social media */}
      <div className="absolute top-4 sm:top-auto bottom-auto sm:bottom-20 md:bottom-0 -right-16 md:right-0 h-36 inline-flex md:flex-col justify-around items-center text-yellow-400 transform -translate-x-1/2">
        {/* Twitter */}
        <a href="#link" className="mx-3 transform hover:scale-110">
          <svg className="w-7 h-7" fill="currentColor" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
            />
          </svg>
        </a>
        {/* Linkedin */}
        <a href="#link" className="mx-3 transform hover:scale-110">
          <svg className="w-7 h-7" fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
            />
          </svg>
        </a>
        {/* Google + */}
        <a href="#link" className="mx-3 transform hover:scale-110">
          <svg
            className="w-7 h-7"
            fill="currentColor"
            enableBackground="new 0 0 24 24"
            height="512"
            viewBox="0 0 24 24"
            width="512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m21.823 9h-2.187v2.177h-2.177v2.187h2.177v2.177h2.187v-2.177h2.177v-2.187h-2.177z"
            />
            <path
              d="m7.5 19.5c4.328 0 7.203-3.038 7.203-7.326 0-.491-.051-.87-.122-1.248h-7.08v2.578h4.257c-.174 1.095-1.289 3.233-4.257 3.233-2.557 0-4.645-2.118-4.645-4.737s2.087-4.738 4.645-4.738c1.463 0 2.435.624 2.988 1.156l2.036-1.954c-1.311-1.227-2.999-1.964-5.025-1.964-4.144 0-7.5 3.356-7.5 7.5s3.356 7.5 7.5 7.5z"
            />
          </svg>
        </a>
      </div>
    </div>
   <Indexbottom/>
  </div>
  <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">


          <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-3">
            <div>
              <img className="relative z-10 object-cover w-full rounded-md h-96" src="lot.jpg" alt="" />

              <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                <a href="#" className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                  LOT System
                </a>

                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                  "LOT systems are designed to meet the needs of clients requiring a substantial volume of LPG, with the capacity to handle up to 250 kilograms per hour. These systems operate by drawing liquid LPG from specialized LOT cylinders through a dedicated LPG manifold system. Once extracted, the liquid LPG is then directed into a high-performance LPG vaporizer, where it is efficiently transformed into a usable gaseous state. This process ensures a reliable and continuous supply of LPG for various industrial and commercial applications, making LOT systems an ideal choice for high-demand situations."
                </p>


              </div>
            </div>

            <div>
              <img className="relative z-10 object-cover w-full rounded-md h-96" src="https://4.imimg.com/data4/SA/HD/MY-7162172/lpg-gas-manifold-500x500.jpg" alt="" />

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
              <img className="relative z-10 object-cover w-full rounded-md h-96" src="https://www.simpleimageresizer.com/_uploads/photos/73c3a2da/supply_1_512x512.jpg" alt="" />

              <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                <a href="#" class="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                  Supply of LPG - 14.2,19, etc
                </a>

                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                  "LPG Tank (Bulk) Installation: Our professional and experienced team specializes in the safe and efficient installation of bulk LPG tanks. Whether you need a new tank installation or the replacement of an existing one, we ensure that your LPG storage solution is set up to the highest industry standards. Our comprehensive services encompass site assessment, tank selection, secure installation, and compliance with all relevant safety regulations. Trust us for a seamless and dependable LPG tank installation that meets your specific needs and provides a continuous supply of propane for your business or residential requirements."
                </p>


              </div>
            </div>
            <div>
              <img className="relative z-10 object-cover w-full rounded-md h-96" src="https://images.unsplash.com/photo-1664027842161-02973a244a76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TE9UJTIwSW5zdGFsbGF0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />

              <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                <a href="#" className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                  Conversion other fuels to LPG/Natural Gas
                </a>

                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                "At Uniqued Piped Gas, we are your trusted partner in energy transformation. Our mission is to make your life more convenient, efficient, and environmentally friendly by converting various fuel sources to cleaner and sustainable options like LPG (liquefied petroleum gas) and natural gas. With our expertise in fuel conversion, we bring you cost-effective and eco-conscious solutions that not only save you money but also contribute to a greener future. Discover the benefits of cleaner energy with Uniqued Piped Gas today."
                </p>


              </div>
            </div>

            <div>
              <img className="relative z-10 object-cover w-full rounded-md h-96" src="https://images.unsplash.com/photo-1610000805105-329dfdfd10b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBpcGVkJTIwZ2FzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />

              <div class="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                <a href="#" className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                  Pipelines - LPG,Natural Gas, Commercial, Industrial
                </a>

                <p className="mt-1 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                  "Uniqued Piped Gas is a leading provider of pipeline solutions for a diverse range of industries. Specializing in LPG and natural gas pipelines, our company offers top-tier services tailored to the needs of commercial and industrial sectors. With unmatched expertise, Uniqued Piped Gas ensures the safe and efficient transportation of gas resources through cutting-edge pipeline technology. We are committed to delivering innovative solutions that guarantee reliability, cost-effectiveness, and sustainability, making us the preferred choice for businesses seeking superior gas pipeline solutions."
                </p>

              </div>
            </div>

            <div>
              <img className="relative z-10 object-cover w-96 rounded-md h-96" src="burner.jpg" alt="" />

              <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                <a href="#" class="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                  Burners
                </a>

                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                  "Uniqued Piped Gas Burners is a leading provider of innovative and reliable gas burner solutions. Our company specializes in delivering cutting-edge technology for residential, commercial, and industrial applications, offering safe and efficient combustion solutions. With a commitment to quality, sustainability, and customer satisfaction, we provide custom-designed burners that optimize energy efficiency and reduce environmental impact. Uniqued Piped Gas Burners is your trusted partner for delivering precision and performance in gas combustion, ensuring a clean, efficient, and sustainable future for heating and process applications."
                </p>


              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
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
      </section>
  </div>
  )
}

export default Hero8
