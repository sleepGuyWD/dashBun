import React from "react"

export default function Hero() {
  return (
    <div  id="heroSec" className="h-full bg-base-200 flex justify-center items-center">
      <div className="  text-center p-5 m-4 flex items-center w-2/3 h-4/5 justify-center rounded-md shadow-2xl ">
        <div className="w-full h-full flex flex-col ">
          <section id="columnTitles" className="flex mb-2">
            <section className="w-1/2 flex items-center justify-center">
              <span className=" text-2xl ">Accomplished</span>
            </section>
            <section className="w-1/2 flex items-center justify-center">
              <span className=" text-2xl ">Goals</span>
            </section>
          </section>
          <section className="flex w-full h-full rounded-md">
            <section className="w-1/2 h-full shadow-inner">

            </section>
            <section className="w-1/2 h-full shadow-inner ml-2">

            </section>
          </section>
        </div>
      </div>
    </div>
  )
}
