import React from "react";
import { Navigate } from "react-router-dom";
import '../styles/AboutUs.css';

   
export default function Component() {
    return (
      <div className="flex flex-col min-h-screen">
        <main className="grid items-center justify-center w-full flex-1 min-h-[600px] py-6">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 md:gap-10">
            <div className="space-y-3">
              <h1 className="text-8xl font-bold tracking-tighter sm:text-4xl md:text-5xl" style={{color:"#354e41"}}>
                About Us
              </h1>
              <p className="mx-auto max-w-3xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed " style={{color:"black"}}>
                At Annamitra, we are on a mission to combat hunger and food insecurity in our communities. Founded with a deep-rooted commitment to making a meaningful difference in the lives of others, Annamitra strives to be the bridge between surplus food resources and those in need.
              </p>
            </div>
          </div>
        </main>
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 md:px-6 lg:gap-10">
            <div className="space-y-3 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl" style={{color:"#354e41"}}>Meet the Team</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400" style={{color:"black"}}>
                Our team is made up of passionate individuals who are dedicated to our mission.
              </p>
            </div>
            <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <div className="flex flex-col gap-2">
                <img 
                  alt="User"
                  className="mx-auto rounded-full overflow-hidden object-cover object-center border-10 border-gray-100 w-24 h-24 dark:border-gray-850"
                  src="/assets/images/Aashita.jpeg"
                />
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-semibold">Aashita Narayanpur</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">UI/UX Designer</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <img 
                  alt="User"
                  className="mx-auto rounded-full overflow-hidden object-cover object-center border-2 border-gray-100 w-24 h-24 dark:border-gray-850"
                  src="/assets/images/Krish.jpeg"
                />
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-semibold">Krish Agarwal</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Web Developer</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <img 
                  alt="User"
                  className="mx-auto rounded-full overflow-hidden object-cover object-center border-2 border-gray-100 w-24 h-24 dark:border-gray-850"
                  src="/assets/images/Aniket.jpeg"
                />
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-semibold">Aniket Arya</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Content Creator</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="border-t">
          <div className="container grid items-center justify-center gap-4 px-4 py-12 md:px-6 md:py-24">
            <div className="space-y-3 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl" style={{color:"#354e41"}}>Our Vision</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"style={{color:"black"}}>
              Our vision is simple yet profound: to create a world where no one goes to bed hungry. We envision a future where access to nutritious meals is a fundamental human right, where every individual has the opportunity to thrive and reach their full potential without the burden of hunger weighing them down.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="container grid items-center justify-center gap-4 px-4 py-12 md:px-6 md:py-24">
            <div className="space-y-3 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl" style={{color:"#354e41"}}>Our Mission</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"style={{color:"black"}}>
              Our mission drives everything we do at Annamitra. We are dedicated to connecting surplus food resources with individuals, families, and communities facing food insecurity. Through our innovative platform, we facilitate the seamless donation of surplus food from individuals, businesses, and organizations to local food banks, shelters, and community centers. Together, we work tirelessly to ensure that nutritious meals reach those who need them the most.
              </p>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 md:px-6 lg:gap-10">
            <div className="space-y-3 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl" style={{color:"#354e41"}}>Our Values</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400" style={{color:"black"}}>
              At Annamitra, our values guide our actions and decisions every step of the way. We believe in:
              <br />
              <ul>
                <li>Compassion: We approach our work with empathy and understanding, recognizing the dignity and worth of every individual.</li>
                <li>Collaboration: We foster partnerships and collaborations with individuals, businesses, and organizations to maximize our impact and reach.</li>
                <li>Sustainability: We are committed to promoting environmentally sustainable practices in our efforts to combat food insecurity.</li>
                <li>Accountability: We hold ourselves accountable for the trust placed in us by our donors, recipients, and community stakeholders.</li>
              </ul>
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="container grid items-center justify-center gap-4 px-4 py-12 md:px-6 md:py-24">
            <div className="space-y-3 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl" style={{color:"#354e41"}}>Join Us</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400" style={{color:"black"}}>
                Join us in our mission to make a tangible difference in the fight against hunger. Whether you're a donor looking to contribute surplus food or a recipient in need of assistance, Annamitra welcomes you with open arms. Together, we can build a brighter, more nourished future for all.
              </p>
            </div>
          </div>
        </section>
      </div>
    )
  }
  
  

