"use client"
import React, {useEffect} from "react";
import Image from "next/image";
import image1 from "/public/homepage.jpg";
import image2 from "/public/logo.png";
import imageg from "/public/girl.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Homepage = () => {
    useEffect(() => {
        AOS.init({
             duration: 800,
             once: false,
           })
     }, [])
  return (
    <>
      <div className="h-[736px]">
        <nav className="h-[100px] flex flex-row gap-5 space-between justify-end p-10 text-md transparent -mb-[40px]  " data-aos="fade-up">
          <div className="justify-end text-gray-300 -mt-[24px]">
            <Image src={image2} width={80} alt="Picture of the author" />
          </div>
          <div className="grow"></div>
          {/* flex  */}
          <div className="flex flex-row text-gray-200 gap-10 mr-10 ">
            <div data-aos="fade-up" className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">HOME</div>
            <div data-aos="fade-up">TOUR PACKAGES</div>
            <div data-aos="fade-up" >CONTACT US</div>
            <div>FEEDBACK</div>
          </div>
          <div>
            <button className="px-4 py-2 -mt-2 border-2 border-gray-200 transparent text-gray-200">SIGN UP</button>
          </div>
        </nav>

        <div className="h-[200px]  mt-[400px] flex  text-white justify-end transparent">
          <div className="flex flex-col gap-2">
            <h1 className="pr-[50px] text-4xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent" data-aos="fade-left">WHERE SPACE BECOMES</h1>
            <br />
            <h1 className="pr-[50px] text-4xl bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent" data-aos="fade-left">YOUR ADVENTURE</h1>
            <div>
              <button className="px-4  ml-2 mt-2 py-2 border-2 border-gray-200 text-bold" data-aos="fade-left">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* girl in the picture */}
      <div className="relative">
        <div>
          <Image
            src={imageg}
            className="h-[600px] object-fit"
            alt="Picture of the author"
          />
          <div className="absolute top-[130px] w-[490px] left-[80px] text-2xl text-gray-200 leading-[43px] " data-aos="fade-right">
            Our company stands out for crafting immersive and thematic travel
            experiences centered around space exploration. From moon bases to
            interstellar observatories, every itinerary is carefully designed to
            offer customers a journey beyond Earth.
            <div>
              <button className="px-4 text-xl mt-4  ml-0 mt-2 py-2 border-2 border-gray-200 text-bold" data-aos="fade-right">
                About Us
              </button>
            </div>
          </div>

          {/* fdsjbskjd  */}
        <div className="imggirl1 h-[650px] ">
          <div className=" w-auto flex flex-col  h-[200px] ">
            <div className="h-[130px]  text-center p-5 ">
            

              <h1 className="text-5xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent" data-aos="fade-down ">Celestial Explorer Package</h1>
            </div>

            <div className="h-auto  justify-center gap-10 flex flex-row px-20 p-10">
              <div className="w-1/3 border-2 border-gray-200 h-auto transparent flex flex-col gap-2 text-center pt-2 backdrop-blur px-5 pb-4" data-aos="zoom-in">
              <h1 className="mb-5 text-3xl font-bold text-gray-900 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">MOON BASE</h1>
                <h1 className="font-bold text-gray-900 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">DURATION</h1>
                <p className="text-gray-300">6 DAYS</p>
                <h1  className="pt-5 font-bold text-gray-900 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">DESTINATION</h1>
                <p>Moon Base</p>
                <p>Alpha Mars Colonies</p>
                <p>Saturn's Rings Observation Station</p>
                <p className="text-center px-3">Private moonlit cruise with panoramic views of Earth. </p>

                <p className="text-center px-3">Guided tour of Moon Base Alpha with an astronaut-led excursion</p>


              </div>
              <div className=" w-1/3 border-2 border-gray-200 h-auto transparent flex flex-col gap-2 text-center pt-2 backdrop-blur px-5 pb-4" data-aos="zoom-in">
              <h1 className="mb-5 text-3xl font-bold text-gray-900 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">VENUS</h1>
                <h1 className="font-bold text-gray-900 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">DURATION</h1>
                <p >6 DAYS</p>
                <h1  className="pt-5 font-bold text-gray-900 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">DESTINATION</h1>
                <p>Venus Floating Cities</p>
                <p>Jupiter's Moon Europa Research Station</p>
                <p>Interstellar Observatory on Alpha Centauri</p>
                <p className="text-center px-3">Private moonlit cruise with panoramic views of Earth. </p>

                <p className="text-center px-3">Floating city exploration and cloud-surfing on Venus.</p>


              </div><div className="w-1/3 border-2 border-gray-200 h-auto transparent flex flex-col gap-2 text-center pt-2 backdrop-blur px-5 pb-4" data-aos="zoom-in">
              <h1 className="mb-5 text-3xl font-bold text-gray-900 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">SPACE ODESSEY</h1>
                <h1 className="font-bold text-gray-900 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">DURATION</h1>
                <p >6 DAYS</p>
                <h1  className="pt-5 font-bold text-gray-900 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">DESTINATION</h1>
                <p>Romantic Moonlit Cruise around Earth </p>
                <p>Luxury Accommodation on Ganymede, Jupiter's Moon</p>
                <p>Intimate Dinner on the Surface of Titan, Saturn's Moon </p>
                
                <p className="text-center px-3">Private moonlit cruise with panoramic views of Earth. </p>


              </div>
            </div>
          </div>
          </div>
        </div>
      </div>

      <div>
        
      </div>

      <section class="vid dark:bg-gray-900">
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Send Us Your Feedback Form</h2>
      <p class="mb-8 lg:mb-16  text-center  dark:text-gray-400 sm:text-xl font-medium text-2xl text-white">Let us know your Experience about your space odessey with us</p>
      <form action="#" class="space-y-8">
          <div>
              <label for="email" class="block mb-2 text-2xl font-bold text-white ">Your email</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Email" required/>
          </div>
          <div>
              <label for="subject" class="block mb-2 text-2xl font-bold text-gray-900 dark:text-gray-300 text-2xl font-bold ">Subject</label>
              <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-white text-2xl font-bold ">Your message</label>
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 border-2 border-gray-200 ">Send message</button>
      </form>
  </div>
</section>
    </>
  );
};

export default Homepage;
