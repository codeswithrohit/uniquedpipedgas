
import React, { useState } from 'react'
import { Popover } from "@headlessui/react"
import { HomeIcon, CogIcon, CreditCardIcon, InformationCircleIcon, MailIcon, ShoppingCartIcon,XIcon,MenuIcon } from "@heroicons/react/outline";
import { LoginIcon, PencilAltIcon } from "@heroicons/react/solid"


const StoreNavigation8 = () => {

 

  // Small device state
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // const [activeTab, setActiveTab] = useState("tab1")

  return (
    <div className="relative w-full bg-white">

      {/* :STORE NAVIGATION (SMALL DEVICE) */}
      <div className="md:hidden">

        {/* ::Overlay Background */}
        <div className={`z-30 fixed inset-0 w-full h-screen bg-gray-800 bg-opacity-75 ${isMenuOpen ? "visible" : "invisible"}`} />

        {/* ::Mobile Menu */}
        <div className={`z-50 fixed top-0 left-0 md:inset-0 md:relative w-full h-full max-h-screen max-w-xs overflow-y-scroll md:overflow-auto bg-gray-50 transition-all duration-300 ease-in-out transform ${isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}>
          <div className="flex flex-col">
            {/* :::Close menu button */}
            <span className="pt-3 pb-5 pr-3 flex justify-end">
              <button className="text-gray-500 hover:text-gray-800" onClick={() => setIsMenuOpen(false)}>
                <XIcon className="w-7 h-7" />
              </button>
            </span>
            {/* :::Your content here! */}
            <div className="py-5 px-4 w-full h-80"> {/* delete class "h-80" */}
              {/* Replace with your content */}
              <div className="border-4 border-dashed border-gray-200 rounded-lg inline-flex justify-center items-center w-full h-full text-lg text-gray-200 font-extrabold">Your Mega Menu comes here</div>
              {/* /End replace */}
            </div>
            {/* :::Sign In / Sign Up / Cart */}
            <div className="py-5 px-4 flex flex-col space-y-2 border-t-2">
              <a href="#link" className="py-1 px-4 rounded-md text-sm text-gray-700 font-semibold tracking-wide hover:bg-yellow-600 hover:text-white">
                Sign In
              </a>
              <a href="#link" className="py-1 px-4 rounded-md text-sm text-gray-700 font-semibold tracking-wide hover:bg-yellow-600 hover:text-white">
                Create a account
              </a>
              <a href="#link" className="py-1 px-4 rounded-md text-sm text-gray-700 font-semibold tracking-wide hover:bg-yellow-600 hover:text-white">
                My Cart
              </a>
            </div>
            {/* :::Language & Currency */}
            <div className="py-5 px-4 flex flex-col space-y-4 border-t-2">
              {/* ::::currency */}
              <div className="flex flex-col">
                <label htmlFor="currency" className="mb-2 text-sm text-gray-700 font-semibold">Select your currency</label>
                <select name="currency" id="currency" className="form-select bg-gray-100 rounded-md border-transparent text-sm font-medium text-gray-800 outline-none cursor-pointer focus:ring-1 focus:ring-yellow-600 focus:border-yellow-600">
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="CAD">CAD</option>
                </select>
              </div>
              {/* ::::language */}
              <div className="flex flex-col">
                <label htmlFor="language" className="mb-2 text-sm text-gray-700 font-semibold">Select your language</label>
                <select name="language" id="language" className="form-select bg-gray-100 rounded-md border-transparent text-sm font-medium text-gray-800 outline-none cursor-pointer focus:ring-1 focus:ring-yellow-600 focus:border-yellow-600">
                  <option value="English">English</option>
                  <option value="Français">Français</option>
                  <option value="Español">Español</option>
                </select>
              </div>
            </div>
          </div>
        </div>

      </div>



      {/* :STORE NAVIGATION */}
      <header className="relative">

        {/* ::Top Header */}
        <div className="relative py-3 px-4">
          <div className="flex justify-between items-center">
            
            {/* :::Site logo & Burger icon & Search */}
            <div className="mr-10 flex items-center space-x-5">
              {/* ::::burger button (small device) */}
              <button className="flex-shrink-0 md:hidden text-gray-500 hover:text-yellow-600" aria-label="open navigation menu" onClick={() => setIsMenuOpen(true)}>
                <MenuIcon className="w-8 h-8" />
              </button>
              {/* ::::logo  */}
              <a href="#link" className="flex-shrink-0 w-48 h-20   text-yellow-600">
              <img
      src='unique.png'
      alt="logo"
      className=" w-48 h-20  " />
              </a>
             
            </div>


            <div className="flex items-center md:space-x-4">
  {/* Home */}
  <a href="/" className="border-5-2 border-gray-200 py-1.5 px-3 lg:px-6 hidden md:inline-flex items-center rounded-md bg-yellow-600 text-sm text-white font-bold whitespace-nowrap hover:bg-yellow-500">
    <HomeIcon className="mr-2 w-4 h-4" />
    Home
  </a>
  
  {/* Services */}
  <a href="/services" className="py-1.5 px-3 lg:px-6 hidden md:inline-flex items-center rounded-md bg-yellow-600 text-sm text-white font-bold whitespace-nowrap hover:bg-yellow-500">
    <CogIcon className="mr-2 w-4 h-4" />
    Services
  </a>
  
  {/* Payment */}
  <a href="payment" className="py-1.5 px-3 lg:px-6 hidden md:inline-flex items-center rounded-md bg-yellow-600 text-sm text-white font-bold whitespace-nowrap hover:bg-yellow-500">
    <CreditCardIcon className="mr-2 w-4 h-4" />
    Payment
  </a>
  
  {/* About Us */}
  <a href="/aboutus" className="py-1.5 px-3 lg:px-6 hidden md:inline-flex items-center rounded-md bg-yellow-600 text-sm text-white font-bold whitespace-nowrap hover:bg-yellow-500">
    <InformationCircleIcon className="mr-2 w-4 h-4" />
    About Us
  </a>
  
  {/* Contact Us */}
  <a href="/contactus" className="py-1.5 px-3 lg:px-6 hidden md:inline-flex items-center rounded-md bg-yellow-600 text-sm text-white font-bold whitespace-nowrap hover:bg-yellow-500">
    <MailIcon className="mr-2 w-4 h-4" />
    Contact Us
  </a>
  

</div>

          </div>
        </div>

      

      </header>

    </div>
  )
}

export default StoreNavigation8
