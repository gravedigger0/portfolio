import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative h-[90vh] my-auto ">
            <div className="p-16 m-16 mt-0 ml-2 lg:pt-0 sm:p-4 sm:m-0">
              <div className="flex m-auto flex-row flex-nowrap self-center p-16 pt-52 lg:flex-wrap lg:p-0 lg:m-0">
                
                {/* Hero text */}
                <div className="relative lg:order-2">
                  <div className="w-[70%] lg:w-full smmin:bg-blueGray-900 smmin:rounded-3xl smmin:bg-opacity-20 p-2">
                    <h2 className="text-3xl text-white font-bold py-3 sm:text-xl">
                      Full Stack Web Developer
                    </h2>
                    <Image src="/name.svg" alt="name" width={550} height={400} loading="eager" className="bg-slate-700 bg-opacity-10" />
                    <p className="py-3 lg:pb-7 text-white">
                      Building various complex web applications with Next.js,
                      React.js Tailwind, Django, Django Restframework
                    </p>

                    {/* Contact me button */}
                    <Link href="/contact">
                      <div className="w-full">
                      <button className="mt-5 bg-gradient-to-r from-gradient_from to-gradient_to border-mainbg text-mainbg font-semibold  py-3 px-5 rounded-lg lg:m-auto lg:items-center flex">
                        Contact Me
                      </button>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Hero image */}
                <div className="relative -top-4 min-w-[370px] lg:m-auto 2xlmin:-top-[8rem] smmin:hidden">
                  {/* rounded image */}
                  <Image src="/guyOnLaptop.svg" alt="A guy on laptop" height={500} width={500} className="smmin:hidden" />
                </div>
              </div>
            </div>
          </section>
    )
}