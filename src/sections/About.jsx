import React from "react";
import useLeetCodeStats from "../components/useLeetCodeStats.jsx";
// import LeetcodePieChart from "../components/leetcodePieChart.jsx";

const About = () => {
  
  const stats = useLeetCodeStats('raiiankitsr');
  console.log("LeetCode stats:", stats);

  return(
    <section className="c-space my-20" id="about">
    <p className="head-text mb-[25px]">About me</p>

    <div className="grid xl:grid-cols-3 xl:grid-rows-2 md:grid-cols-2 grid-cols-1 gap-3 h-full bg-transparent">
      {/* First row: 1 : 2 */}
      <div className="col-span-1 row-span-1 ">
        <div className="grid-container bg-transparent">
          <img
            src="/assets/pro.jpg"
            alt="grid-1"
            className="w-200 sm:h-[200px] h-52 object-contain brightness-75 opacity-80 rounded-full" />
          <div>
            <p className="grid-headtext">
              Hi, I'm <span className="text-blue-300">Ankit </span>
            </p>
            <p className="grid-subtext">
              I'm passionate about crafting seamless digital experiences by 
              combining design and technology. As a <span className="text-blue-300">Full Stack Developer
              </span>, I believe in building intuitive solutions that balance both functionality and aesthetic appeal. 
              Although I'm at the beginning of my professional journey, I'm driven to contribute innovative ideas and deliver 
              <span className="text-blue-300">high-impact features</span> that can transform products and drive 
              <span className="text-blue-300">business success</span>.
            </p>

          </div>
        </div>
      </div>

      <div className="col-span-2 row-span-1">
        <div className="grid-container">
          {/* Technologies Section */}
          <div className="flex flex-col items-center gap-10">
            <h2 className="sm:text-2xl text-xl font-semibold text-green-200">
              Technologies & Frameworks I work with
            </h2>
            <div className="grid grid-cols-6 gap-10">
              <img
                src="/other-logos/html.svg"
                alt="Html"
                className="w-12 h-12 sm:w-14 sm:h-14 opacity-60 hover:opacity-100 transition-opacity duration-300" />

              <img
                src="/other-logos/css.svg"
                alt="Css"
                className="w-12 h-12 sm:w-14 sm:h-14 opacity-60 hover:opacity-100 transition-opacity duration-300" />

              <img
                src="/other-logos/js.svg"
                alt="Js"
                className="w-12 h-12 sm:w-14 sm:h-14 opacity-60 hover:opacity-100 transition-opacity duration-300" />

              <img
                src="/other-logos/react.svg"
                alt="ReactJs"
                className="w-12 h-12 sm:w-14 sm:h-14 opacity-60 hover:opacity-100 transition-opacity duration-300" />

              <img
                src="/other-logos/tailwind.svg"
                alt="tailwind"
                className="w-12 h-12 sm:w-16 sm:h-16 opacity-75 hover:opacity-100 transition-opacity duration-300" />

              <img
                src="/other-logos/node.svg"
                alt="NodeJs"
                className="w-12 h-12 sm:w-16 sm:h-16 opacity-65 hover:opacity-100 transition-opacity duration-300" />

              <img
                src="/other-logos/express.svg"
                alt="ExpressJs"
                className="w-12 h-12 sm:w-20 sm:h-14 opacity-55 hover:opacity-100 transition-opacity duration-300" />

              <img
                src="/other-logos/mongodb.svg"
                alt="MongoDb"
                className="w-12 h-12 sm:w-16 sm:h-14 opacity-65 hover:opacity-100 transition-opacity duration-300" />

              <img
                src="/other-logos/postgresql.svg"
                alt="PostgreSql"
                className="w-12 h-12 sm:w-14 sm:h-14 opacity-60 hover:opacity-100 transition-opacity duration-300" />

              <img
                src="/other-logos/git.svg"
                alt="Git"
                className="w-12 h-12 sm:w-14 sm:h-14 opacity-65 hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          {/* Tools Section */}
          <div className="flex flex-col items-center gap-10 mt-9">
            <h2 className="sm:text-2xl text-xl font-semibold text-green-200">
              Tools I use
            </h2>
            <div className="grid grid-cols-4 gap-16">
              <img
                src="/other-logos/vscode.svg"
                alt="VScode"
                className="w-8 h-8 sm:w-16 sm:h-14 opacity-65 hover:opacity-100 transition-opacity duration-300" />

              <img
                src="/other-logos/postman.svg"
                alt="Postman"
                className="w-8 h-8 sm:w-14 sm:h-14 opacity-60 hover:opacity-100 transition-opacity duration-300" />

              <img
                src="/other-logos/vercel.svg"
                alt="Git"
                className="w-8 h-8 sm:w-14 sm:h-14 opacity-50 hover:opacity-100 transition-opacity duration-300" />

              <img
                src="/other-logos/cloudinary.svg"
                alt="Postman"
                className="w-8 h-8 sm:w-14 sm:h-14 opacity-60 hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </div>

      <div className=" col-span-2 row-span-1 grid-container flex flex-col items-center justify-center">
        {/* Title & Subtitle */}
        <div className="text-center mb-24">
          <p className="sm:text-2xl text-xl font-semibold sm:mt-0 mt-10 text-blue-200">
            Apart from Development, I Love to grind on Competitive Programming!!!
          </p>
        </div>
       <div>
       {/* <div>
            {stats ? (
              <div>
            <LeetcodePieChart
            
              easy={stats.easySolved} 
              medium={stats.mediumSolved} 
              hard={stats.hardSolved} 
            />
             <h2 className="sm:text-2xl text-xl font-semibold sm:mt-0 mt-10 text-blue-200">
                   Leetcode Stats
          </h2>

            </div>
            ) : (
              <p className="text-gray-400 text-center">Loading LeetCode stats...</p>
            )}
        </div>   */}
         
         
         
         
         </div>
        </div>
    

        <div className="text-center grid gap-9 ">
          <img
            src="/other-logos/connect.svg"
            alt="Connect"
            className="w-10 h-10 sm:w-16 sm:h-16 place-self-center opacity-55 hover:opacity-100 transition-opacity duration-300" />
          <p className="sm:text-2xl text-xl font-semibold text-blue-200">
            Connect With Me
          </p>
          <p className="sm:text-lg text-[16px] text-gray-300 mt-2">
            Feel free to DM or reach out to me from the below platforms
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-12 mt-4">
            <a
              href="https://www.linkedin.com/in/ankit-rai-454130223/"
              target="_blank"
              rel=" noreferrer"
            >
              <img
                src="/other-logos/linkedin.svg"
                alt="LinkedIn"
                className="w-9 h-9 opacity-70 hover:opacity-100 transition-opacity duration-300" />
            </a>

            <a
              href="https://x.com/raiankit09"
              target="_blank"
              rel=" noreferrer"
            >
              <img
                src="/other-logos/twitter.svg"
                alt="Twitter"
                className="w-8 h-9 opacity-70 hover:opacity-100 transition-opacity duration-300 " />
            </a>

            <a
              href="https://github.com/raiiankit"
              target="_blank"
              rel=" noreferrer"
            >
              <img
                src="/other-logos/github.svg"
                alt="GitHub"
                className="w-8 h-9 opacity-70 hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>
        </div>
      </div>
  </section>
  )

};

export default About;