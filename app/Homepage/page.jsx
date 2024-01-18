import React from "react";
import Image from "next/image";
import image1 from "/public/homepage.jpg";
import image2 from "/public/logo.png";
import imageg from "/public/girl.png";
const Homepage = () => {
  return (
    <>
      <div className="h-[736px]">
        <nav className="h-[100px] flex flex-row gap-5 space-between justify-end p-10 text-md transparent -mb-[40px] ">
          <div className="justify-end text-gray-300 -mt-[24px]">
            <Image src={image2} width={80} alt="Picture of the author" />
          </div>
          <div className="grow"></div>
          {/* flex  */}
          <div className="flex flex-row text-gray-200 gap-10 mr-10 ">
            <div>HOME</div>
            <div>TOUR PACKAGES</div>
            <div>CONTACT US</div>
            <div>FEEDBACK</div>
          </div>
          <div>
            <button className="px-4 py-2 -mt-2 border-2 border-gray-200 transparent text-gray-200">SIGN UP</button>
          </div>
        </nav>

        <div className="h-[200px]  mt-[400px] flex  text-white justify-end transparent">
          <div className="flex flex-col gap-2">
            <h1 className="pr-[50px] text-4xl">WHERE SPACE BECOMES</h1>
            <br />
            <h1 className="pr-[50px] text-4xl">YOUR ADVENTURE</h1>
            <div>
              <button className="px-4  ml-2 mt-2 py-2 border-2 border-gray-200 text-bold">
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
          <div className="absolute top-[130px] w-[490px] left-[80px] text-2xl text-gray-200 leading-[43px] ">
            Our company stands out for crafting immersive and thematic travel
            experiences centered around space exploration. From moon bases to
            interstellar observatories, every itinerary is carefully designed to
            offer customers a journey beyond Earth.
            <div>
              <button className="px-4 text-xl mt-4  ml-0 mt-2 py-2 border-2 border-gray-200 text-bold">
                About Us
              </button>
            </div>
          </div>

          {/* fdsjbskjd  */}
        <div className="imggirl1 h-[650px] ">
          <div className=" w-auto flex flex-col  h-[200px]">
            <div className="h-[130px]  text-center p-5">
              <h1 className="text-5xl ">Celestial Explorer Package</h1>
            </div>

            <div className="h-auto  justify-center gap-10 flex flex-row px-20 p-10">
              <div className="w-1/3 border-2 border-gray-200 h-auto transparent flex flex-col gap-2 text-center pt-2 backdrop-blur">
              <h1 className="mb-5 text-3xl font-bold text-gray-900">MOON BASE</h1>
                <h1 className="font-bold text-gray-900">DURATION</h1>
                <p >6 DAYS</p>
                <h1  className="pt-5 font-bold text-gray-900">DESTINATION</h1>
                <p>Moon Base</p>
                <p>Alpha Mars Colonies</p>
                <p>Saturn's Rings Observation Station</p>

                <p className="text-center px-3">Guided tour of Moon Base Alpha with an astronaut-led excursion</p>


              </div>
              <div className="w-1/3 border-2 border-gray-200 h-auto transparent flex flex-col gap-2 text-center pt-2 backdrop-blur">
              <h1 className="mb-5 text-3xl font-bold text-gray-900">VENUS</h1>
                <h1 className="font-bold text-gray-900">DURATION</h1>
                <p >6 DAYS</p>
                <h1  className="pt-5 font-bold text-gray-900">DESTINATION</h1>
                <p>Venus Floating Cities</p>
                <p>Jupiter's Moon Europa Research Station</p>
                <p>Interstellar Observatory on Alpha Centauri</p>

                <p className="text-center px-3">Floating city exploration and cloud-surfing on Venus.</p>


              </div><div className="w-1/3 border-2 border-gray-200 h-auto transparent flex flex-col gap-2 text-center pt-2 backdrop-blur">
              <h1 className="mb-5 text-3xl font-bold text-gray-900">SPACE ODESSEY</h1>
                <h1 className="font-bold text-gray-900">DURATION</h1>
                <p >6 DAYS</p>
                <h1  className="pt-5 font-bold text-gray-900">DESTINATION</h1>
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
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Feedback Form</h2>
      <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Let us know your Experience about your space odessey with us</p>
      <form action="#" class="space-y-8">
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Email" required/>
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 border-2 border-gray-200">Send message</button>
      </form>
  </div>
</section>
    </>
  );
};

export default Homepage;
