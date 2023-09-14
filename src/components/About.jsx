import React from 'react';
import image3 from "../assets/image3.webp";

const About = () => {
  return (
    <div id="About">
      <div className="container mx-auto py-14 px-7 sm:px-0 flex items-center">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-yellow-900 uppercase text-xl font-semibold">ABOUT OUR FIRM</p>
            <p className="text-2xl md:text-4xl lg:text-6xl tracking-wide text-blue-900 font-semibold">We're Your Trusted Consulting Firm</p>
            <div className="border-2 border-red-600 w-10 my-6"></div>
            <div>
              <p className="opacity-80 font-light text-lg">
                Spark Performance International is a consulting firm that offers business performance consulting solutions. The main objective is to improve performance and increase business profit.
                <br /><br />
                While the impact of business consulting is well known, it has been found that a vast portion of the capabilities in businesses are severely underutilized. If businesses or individuals want greater success, then the answer resides within the abilities to improve their performances.
                <br /><br />
                Business challenges sometimes throw many hurdles on the way to success, making it very difficult to keep the business on a profit track.
                <br /><br />
                Spark Performance International, therefore, helps by offering performance strategies and techniques via their professional team of business consultants.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="max-w-full">
              <img
                className="max-w-full h-auto"
                src={image3}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
