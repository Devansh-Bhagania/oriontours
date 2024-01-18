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
             duration: 1600,
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
            <div data-aos="fade-up" className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:text-gray-500 "><a href="#">HOME</a></div>
            <div className="hover:text-gray-500" data-aos="fade-up"><a href="#tour">TOUR PACKAGES</a></div>
            <div className="hover:text-gray-500" data-aos="fade-up" ><a href="#feedback">CONTACT US</a></div>
            <div className="hover:text-gray-500"><a href="#feedback">FEEDBACK</a></div>
          </div>
          <div>
            <button className="px-4 py-2 -mt-2 border-2 border-gray-200 transparent text-gray-200" ><a href="#footer">SIGN UP</a></button>
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
            

              <h1 className="text-5xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent" data-aos="fade-down " id="tour">Celestial Explorer Package</h1>
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
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white" id="feedback">Send Us Your Feedback Form</h2>
      <p class="mb-8 lg:mb-16  text-center  dark:text-gray-400 sm:text-xl font-medium text-2xl text-white">Let us know your Experience about your space odessey with us</p>
      <form action="mailto:devanshbhagania19@gmail.com"  class="space-y-8">
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


<div className="h-auto bg-gradient-to-r from-gray-800 to-blue-900 p-5">
<h1 className="text-center text-3xl pt-5" data-aos="zoom-in">THE FUTURE OF SPACE TOURISM HAS ARRIVED</h1>
<p className="text-center text-3xl" data-aos="zoom-in">GALACTIC ADVENTURES AWAIT!</p>
</div>


<footer class="bg-white dark:bg-gray-900">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
              <a href="/" class="flex items-center">
                  <Image src={image2} width={100} alt="FlowBite Logo" />
                  <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Orion Space Tours</span>
              </a>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="/" class="hover:underline">Orion Space Tours</a>
                      </li>
                      <li>
                          <a href="#tours" class="hover:underline">Tour Packages</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Instagram</a>
                      </li>
                      <li>
                          <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Twitter</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="#" class="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Orion™</a>. All Rights Reserved.
          </span>
          <div class="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                  <span class="sr-only">Facebook page</span>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                        <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                    </svg>
                  <span class="sr-only">Discord community</span>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                    <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                </svg>
                  <span class="sr-only">Twitter page</span>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                  </svg>
                  <span class="sr-only">GitHub account</span>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd"/>
                </svg>
                  <span class="sr-only">Dribbble account</span>
              </a>
          </div>
      </div>
    </div>
</footer>

    </>
  );
};

export default Homepage;
